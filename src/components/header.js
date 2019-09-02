import { Link } from 'gatsby'
import PropTypes from 'prop-types' // eslint-disable-line
import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Menu from './menu'
import Logo from './logo'
import useIntersect from '../hooks/useIntersect'

export const HEADER_HEIGHT_PAGE_TOP = '80px'
export const HEADER_HEIGHT = '64px'

const headerTheme = {
  mobileTreshold: '480px',
  menuTreshold: '60rem',
  headerColor: 'white',
  headerColorHover: 'white',
  fontColor: '#555',
  fontColorHeaderHover: '#555',
  fontColorHover: '#0741AD',
  sideBackgroundColor: 'white',
  menuTransitions: '0.5s cubic-bezier(0.7,0.2,0.1,1.0)',
}

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  background: ${props => props.theme.headerColor};
  box-shadow: ${props =>
    props.theme.headerColor === 'transparent'
      ? 'none'
      : '0px 3px 3px 0px rgba(0, 0, 0, 0.4)'};
  margin: 0 auto;
  padding: 0.6rem 1rem;
  height: ${HEADER_HEIGHT_PAGE_TOP};
  flex-shrink: 0;
  overflow: hidden;
  color: ${props => props.theme.fontColor};
  transition: all ${props => props.theme.menuTransitions};
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.page-scrolled {
    height: ${HEADER_HEIGHT};
    flex: 0 0 ${HEADER_HEIGHT};
  }

  &:hover {
    color: ${props => props.theme.fontColorHeaderHover};
    background: ${props => props.theme.headerColorHover};
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.4);

    nav a :not(:hover) {
      color: ${props => props.theme.fontColorHeaderHover};
    }

    .toggle:not(:hover) {
      span {
        background: ${props => props.theme.fontColorHeaderHover};
      }
    }
  }
`

const HeaderPlaceholder = styled.div`
  position: relative;
  width: 100%;
  height: ${HEADER_HEIGHT_PAGE_TOP};
  flex: 0 0 ${HEADER_HEIGHT_PAGE_TOP};
  transition: all ${props => props.theme.menuTransitions};

  &.page-scrolled {
    height: ${HEADER_HEIGHT};
    flex: 0 0 ${HEADER_HEIGHT};
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  box-shadow: none;
  color: ${props => props.theme.fontColor};

  &:hover {
    font-weight: bold;
    color: ${props => props.theme.fontColorHover};
  }
`

const Header = ({
  siteTitle,
  location,
  headerStyles,
  isPageTop,
  noPlaceholder,
}) => {
  const headerThemes = { ...headerTheme, ...headerStyles }

  const [headerRef, headerEntry] = useIntersect({
    rootMargin: `0px 0px ${HEADER_HEIGHT_PAGE_TOP} 0px`,
  })

  const [pageTop, setPageTop] = useState(true)

  useEffect(() => {
    if (typeof isPageTop !== 'undefined') {
      setPageTop(isPageTop)
    } else if (headerEntry.constructor === IntersectionObserverEntry) {
      setPageTop(headerEntry.isIntersecting)
    } else {
      setPageTop(true)
    }

    return () => {
      setPageTop(true)
    }
  }, [isPageTop, headerEntry])

  const [headerHovered, setHeaderHovered] = useState(false)
  const [menuActive, setMenuActive] = useState(false)
  const classPageScrolled = pageTop ? '' : 'page-scrolled'
  const classHeaderHovered = headerHovered ? 'headerHovered' : ''
  const classMenuActive = menuActive ? 'menu-active' : ''

  return (
    <ThemeProvider theme={headerThemes}>
      <>
        {noPlaceholder ? (
          ''
        ) : (
          <HeaderPlaceholder ref={headerRef} className={classPageScrolled} />
        )}
        <HeaderWrapper
          className={classPageScrolled}
          onMouseEnter={() => setHeaderHovered(true)}
          onMouseOver={() => setHeaderHovered(true)}
          onFocus={() => setHeaderHovered(true)}
          onMouseLeave={() => setHeaderHovered(false)}
        >
          <StyledLink to="/">
            <Logo
              siteTitle={siteTitle}
              className={[
                classPageScrolled,
                classHeaderHovered,
                classMenuActive,
              ].join(' ')}
            />
          </StyledLink>
          <Menu
            location={location}
            pageTop={pageTop}
            setMenuActive={setMenuActive}
            headerHovered={headerHovered}
          />
        </HeaderWrapper>
      </>
    </ThemeProvider>
  )
}

Header.propTypes = {
  location: PropTypes.shape({
    href: PropTypes.string,
    origin: PropTypes.string,
    pathname: PropTypes.string,
    state: PropTypes.object,
  }).isRequired,
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
