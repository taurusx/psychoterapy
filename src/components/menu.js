import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types' // eslint-disable-line
import styled, { withTheme } from 'styled-components'

import ToggleButton from './toggle'
import MenuLink from './menuLink'
import ButtonLink from './buttonLink'
import { startsWith } from '../utils/utils'

const NavMenu = styled.nav`
  position: relative;
  color: ${props => props.theme.fontColor};
  transition: transform ${props => props.theme.menuTransitions},
    box-shadow ${props => props.theme.menuTransitions};
  outline: none;

  &:hover {
    color: ${props => props.theme.fontColorHeaderHover};
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
  }

  a {
    color: inherit;
  }

  @media (max-width: ${props => props.theme.menuTreshold}) {
    position: fixed;
    height: 100vh;
    background: ${props => props.theme.sideBackgroundColor};
    top: 0;
    right: 0;
    padding: 5rem 1rem 1rem;
    transform: translate3d(100%, 0, 0);
    box-shadow: none;
    min-width: 200px;
    font-size: 1.2rem;
    text-align: center;

    ul {
      flex-direction: column;
    }

    &.menu-active {
      transform: none;
      box-shadow: -3px 0 3px 1px rgba(0, 0, 0, 0.4);
      color: ${props => props.theme.fontColorHeaderHover};
    }
  }
`

const Menu = props => {
  const [isOpen, setIsOpen] = useState(false)
  const [readyToClose, setReadyToClose] = useState(false)
  const navMenu = React.createRef()

  const onFocus = () => {
    if (!isOpen) setIsOpen(true)
  }

  const onBlur = () => {
    if (isOpen) setIsOpen(false)
    setReadyToClose(false)
  }

  const toggleClickHandler = () => {
    if (isOpen && readyToClose) {
      setIsOpen(false)
      setReadyToClose(false)
      return
    }

    if (!isOpen) setIsOpen(true)
  }

  useEffect(() => {
    let timeoutId

    if (isOpen) {
      timeoutId = setTimeout(() => {
        setReadyToClose(true)
      }, 250)
    }

    return () => clearTimeout(timeoutId)
  }, [isOpen])

  const { setMenuActive, headerHovered } = props

  const menuClassName = isOpen ? 'menu-active' : ''
  setMenuActive(isOpen)

  const { location, pageTop, theme } = props

  const menuLinks = [
    { to: '/', linkTitle: 'Strona Główna' },
    { to: '/w-czym-pomagam/', linkTitle: 'W\u00A0czym\u00A0pomagam' },
    { to: '/terapia/', linkTitle: 'Terapia' },
    { to: '/o-mnie/', linkTitle: 'O\u00A0mnie' },
    { to: '/artykuly/', linkTitle: 'Artykuły' },
    { to: '/cennik/', linkTitle: 'Cennik' },
    { to: '/kontakt/', linkTitle: 'Kontakt' },
  ]

  const isOnMainPage = location.pathname === '/'

  return (
    <NavMenu
      className={menuClassName}
      tabIndex={0}
      ref={navMenu}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      <ul>
        {menuLinks.map((menuLink, index) => {
          const isButtonToCurrent = startsWith(location.pathname, menuLink.to)

          return index === menuLinks.length - 1 ? (
            <ButtonLink
              key={menuLink.linkTitle}
              to={menuLink.to}
              whiteTheme={isOnMainPage && (!headerHovered && !isOpen)}
              grayTheme={
                (!isOnMainPage && !isButtonToCurrent) ||
                (isOnMainPage && (headerHovered || isOpen))
              }
              lightTheme={isButtonToCurrent}
              overrideStyles={{
                verticalPadding: '0.15rem',
                horizontalPadding: '1.0rem',
                fontSize: '100%',
                minWidth: 'unset',
                borderWidth: '0.1rem',
              }}
              style={{
                margin: '0',
                transition: `color 0s, border 0s, background ${theme.menuTransitions}`,
              }}
            >
              {menuLink.linkTitle}
            </ButtonLink>
          ) : (
            <MenuLink
              key={menuLink.linkTitle}
              to={menuLink.to}
              dataText={menuLink.linkTitle}
              location={location}
            >
              {menuLink.linkTitle}
            </MenuLink>
          )
        })}
      </ul>
      <ToggleButton
        onClick={toggleClickHandler}
        isOpen={isOpen}
        pageTop={pageTop}
      />
    </NavMenu>
  )
}

Menu.propTypes = {
  location: PropTypes.shape({
    href: PropTypes.string,
    origin: PropTypes.string,
    pathname: PropTypes.string,
    state: PropTypes.object,
  }).isRequired,
  pageTop: PropTypes.bool.isRequired,
}

export default withTheme(Menu)
