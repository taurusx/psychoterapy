import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { startsWith } from '../utils/utils'

import Link from './link'
import ToggleButton from './toggle'

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

const StyledListItem = styled.li`
  position: relative;
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 0;
  text-align: right;
  text-transform: uppercase;

  @media (max-width: ${props => props.theme.menuTreshold}) {
    margin: 0.5rem 1rem;
  }

  &::before {
    content: '';
    height: 1px;
    background-color: ${props => props.theme.fontColorHover};
    width: 0%;
    position: absolute;
    bottom: -5px;
    left: 0;
    transition: 0.2s width ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }

  &::after {
    display: block;
    content: attr(data-text);
    text-transform: uppercase;
    font-weight: bold;
    height: 0;
    margin-top: -8px;
    overflow: hidden;
    visibility: hidden;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  box-shadow: none;
  color: ${props => props.theme.fontColor};

  &:hover,
  &.active {
    font-weight: bold;
    color: ${props => props.theme.fontColorHover};
  }

  &.link-hidden {
    display: none;
  }
`

const ListLink = props => {
  const { location, to, children, ...restProps } = props
  const linkClass = !location
    ? ''
    : to === location.pathname && to === '/'
    ? 'link-hidden'
    : // Simulate Reach Router Link's (https://reach.tech/router)
    // retrieving getProps({isPartiallyCurrent})
    to !== '/' && startsWith(location.pathname, to)
    ? 'active'
    : ''

  return (
    <StyledLink
      to={to}
      activeClassName={'active'}
      className={linkClass}
      {...restProps}
    >
      <StyledListItem data-text={props.dataText} {...restProps}>
        {children}
      </StyledListItem>
    </StyledLink>
  )
}

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

    return (
      <NavMenu
        className={menuClassName}
        tabIndex={1}
        ref={this.navMenu}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
      >
        <ul>
          <ListLink to="/" dataText="Główna" location={location}>
            Główna
          </ListLink>
          <ListLink to="/oferta/" dataText="Oferta" location={location}>
            Oferta
          </ListLink>
          <ListLink to="/o-mnie/" dataText="O mnie" location={location}>
            O&nbsp;mnie
          </ListLink>
          <ListLink to="/artykuly/" dataText="Artykuły" location={location}>
            Artykuły
          </ListLink>
          <ListLink to="/cennik/" dataText="Cennik" location={location}>
            Cennik
          </ListLink>
          <ListLink to="/kontakt/" dataText="Kontakt" location={location}>
            Kontakt
          </ListLink>
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
