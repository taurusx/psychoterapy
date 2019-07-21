import React, { useState } from 'react'
import PropTypes from 'prop-types' // eslint-disable-line
import styled from 'styled-components'

import ToggleButton from './toggle'
import MenuLink from './menuLink'

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
    transform: translateX(100%);
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
  let timeoutId

  const [isOpen, setIsOpen] = useState(false)
  const navMenu = React.createRef()

  const onFocus = () => {
    timeoutId = setTimeout(() => {
      if (!isOpen) setIsOpen(true)
    }, 250)
  }

  const onBlur = () => {
    if (isOpen) setIsOpen(false)
    clearTimeout(timeoutId)
  }

  const toggleClickHandler = () => {
    setIsOpen(!isOpen)
    navMenu.current.focus()
  }

  const { setClassMenuActive } = props

  const menuClassName = `menu${isOpen ? ' menu-active' : ''}`
  const classMenuActive = `${isOpen ? ' menu-active' : ''}`
  setClassMenuActive(classMenuActive)

  const { location, pageTop } = props

  const menuLinks = [
    { to: '/', linkTitle: 'Główna' },
    { to: '/w-czym-pomagam/', linkTitle: 'W\u00A0czym\u00A0pomagam' },
    { to: '/terapie/', linkTitle: 'Terapie' },
    { to: '/o-mnie/', linkTitle: 'O\u00A0mnie' },
    { to: '/artykuly/', linkTitle: 'Artykuły' },
    { to: '/cennik/', linkTitle: 'Cennik' },
    { to: '/kontakt/', linkTitle: 'Kontakt' },
  ]

  return (
    <NavMenu
      className={menuClassName}
      tabIndex={0}
      ref={navMenu}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      <ul>
        {menuLinks.map(menuLink => (
          <MenuLink
            key={menuLink.linkTitle}
            to={menuLink.to}
            dataText={menuLink.linkTitle}
            location={location}
          >
            {menuLink.linkTitle}
          </MenuLink>
        ))}
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

export default Menu
