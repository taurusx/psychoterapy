import React from 'react'
import PropTypes from 'prop-types'
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
      if (!this.state.isOpen) this.setState({ isOpen: true })
    }, 250)
  }

  onBlur() {
    if (this.state.isOpen) this.setState({ isOpen: false })
    clearTimeout(this.timeoutId)
  }

  toggleClickHandler() {
    this.setState({ isOpen: !this.state.isOpen })
    this.navMenu.current.focus()
  }

  render() {
    let menuClassName = 'menu'
    if (this.state.isOpen) {
      menuClassName += ' menu-active'
    }

    let { location } = this.props

    let menuLinks = [
      { to: '/', linkTitle: 'Główna' },
      { to: '/w-czym-pomagam/', linkTitle: 'W\u00A0czym\u00A0pomagam' },
      { to: '/oferta/', linkTitle: 'Oferta' },
      { to: '/o-mnie/', linkTitle: 'O\u00A0mnie' },
      { to: '/artykuly/', linkTitle: 'Artykuły' },
      { to: '/cennik/', linkTitle: 'Cennik' },
      { to: '/kontakt/', linkTitle: 'Kontakt' },
    ]

    return (
      <NavMenu
        className={menuClassName}
        tabIndex={1}
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
          isOpen={this.state.isOpen}
          pageTop={this.props.pageTop}
        />
      </NavMenu>
    )
  }
}

Menu.propTypes = {
  location: PropTypes.object,
}

Menu.defaultProps = {
  location: {},
}

export default Menu
