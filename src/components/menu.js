import React from 'react'
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

class Menu extends React.Component {
  timeoutId

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
    this.navMenu = React.createRef()
    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.toggleClickHandler = this.toggleClickHandler.bind(this)
  }

  onFocus() {
    this.timeoutId = setTimeout(() => {
      const { isOpen } = this.state
      if (!isOpen) this.setState({ isOpen: true })
    }, 250)
  }

  onBlur() {
    const { isOpen } = this.state
    if (isOpen) this.setState({ isOpen: false })
    clearTimeout(this.timeoutId)
  }

  toggleClickHandler() {
    const { isOpen } = this.state
    this.setState({ isOpen: !isOpen })
    this.navMenu.current.focus()
  }

  render() {
    const { isOpen } = this.state
    const menuClassName = `menu${isOpen ? ' menu-active' : ''}`

    const { location, pageTop } = this.props

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
        ref={this.navMenu}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
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
          onClick={this.toggleClickHandler}
          isOpen={isOpen}
          pageTop={pageTop}
        />
      </NavMenu>
    )
  }
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
