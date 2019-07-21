import { Link } from 'gatsby'
import PropTypes from 'prop-types' // eslint-disable-line
import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Menu from './menu'
import Logo from './logo'

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
  height: 64px;
  flex-shrink: 0;
  overflow: hidden;
  color: ${props => props.theme.fontColor};
  transition: all ${props => props.theme.menuTransitions};
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.page-top {
    height: 80px;
    flex: 0 0 80px;
  }

  &:hover {
    color: ${props => props.theme.fontColorHeaderHover};
    background: ${props => props.theme.headerColorHover};
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.4);

    .menu a :not(:hover) {
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
  height: 64px;
  flex: 0 0 64px;
  transition: all ${props => props.theme.menuTransitions};

  &.page-top {
    height: 80px;
    flex: 0 0 80px;
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

const Header = ({ siteTitle, location, headerStyles, noPlaceholder }) => {
  const headerThemes = { ...headerTheme, ...headerStyles }

  const [windowY, setWindowY] = useState(0)
  useEffect(() => {
    function handleScroll() {
      setWindowY(Math.round(window.scrollY))
    }
    if (window !== 'undefined') window.addEventListener('scroll', handleScroll)
    return () => {
      if (window !== 'undefined')
        window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const isAtPageTop = windowY < 50
  const classPageTop = isAtPageTop ? 'page-top' : ''
  const [classHeaderHovered, setClassHeaderHovered] = useState('')
  const [classMenuActive, setClassMenuActive] = useState('')

  return (
    <ThemeProvider theme={headerThemes}>
      <>
        {noPlaceholder ? '' : <HeaderPlaceholder className={classPageTop} />}
        <HeaderWrapper
          className={classPageTop}
          onMouseOver={() => setClassHeaderHovered('headerHovered')}
          onFocus={() => setClassHeaderHovered('headerHovered')}
          onMouseLeave={() => setClassHeaderHovered('')}
        >
          <StyledLink to="/">
            <Logo
              siteTitle={siteTitle}
              className={[
                classPageTop,
                classHeaderHovered,
                classMenuActive,
              ].join(' ')}
            />
          </StyledLink>
          <Menu
            location={location}
            pageTop={isAtPageTop}
            setClassMenuActive={setClassMenuActive}
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
