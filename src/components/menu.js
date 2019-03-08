import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { startsWith } from "../utils/utils"

import Link from "./link"

const NavMenu = styled.nav`
  position: relative;
  color: ${props => props.headerStyles.fontColor};
  transition: transform ${props => props.headerStyles.menuTransitions},
    box-shadow ${props => props.headerStyles.menuTransitions};
  outline: none;

  &:hover {
    color: ${props => props.headerStyles.fontColorHeaderHover};
  }

  ul {
    list-style: none;
    display: flex;
    margin: 0;
  }

  a {
    color: inherit;
  }

  div.toggle {
    right: calc(100% + 1rem);
    transition: right ${props => props.headerStyles.menuTransitions};
  }

  @media (max-width: ${props => props.headerStyles.menuTreshold}) {
    position: fixed;
    height: 100vh;
    background: ${props => props.headerStyles.sideBackgroundColor};
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
      box-shadow: -3px 0 3px 1px rgba(0,0,0,0.4);
      color: ${props => props.headerStyles.fontColorHeaderHover};

      div.toggle {
        right: 1rem;
      }
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

  @media (max-width: ${props => props.headerStyles.menuTreshold}) {
    margin: 0.5rem 1rem;
  }
  
  &::before {
    content: "";
    height: 1px;
    background-color: ${props => props.headerStyles.fontColorHover};
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
  color: ${props => props.headerStyles.fontColor};

  &:hover,
  &.active {
    font-weight: bold;
    color: ${props => props.headerStyles.fontColorHover};
  }

  &.link-hidden {
    display: none;
  }
`

const ListLink = props => {
  const { location, to, headerStyles, ...restProps } = props
  const linkClass = !location ? "" :
    (to === location.pathname) && (to === "/") ? "link-hidden" :
    // Simulate Reach Router Link's (https://reach.tech/router) 
    // retrieving getProps({isPartiallyCurrent})
    (to !== "/") && startsWith(location.pathname, to) ? "active" : ""
  
  return (
    <StyledLink to={to}
      activeClassName={"active"}
      className={linkClass}
      headerStyles={headerStyles}
      {...restProps}>
      <StyledListItem data-text={props.dataText} headerStyles={headerStyles}
        {...restProps}>
        {props.children}
      </StyledListItem>
    </StyledLink>
  )
}

const ToggleButton = styled.div`
  display: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  min-height: 36px;
  min-width: 36px;
  cursor: pointer;

  &:hover span {
    background: ${props => props.headerStyles.fontColorHover};
  }

  span {
    display: block;
    width: 90%;
    height: 4px;
    margin: 6px auto 6px;
    position: relative;
    
    background: ${props => props.headerStyles.fontColor};
    border-radius: 3px;
    
    z-index: 1;
    
    transition: transform ${props => props.headerStyles.menuTransitions},
                background ${props => props.headerStyles.menuTransitions},
                opacity 0.4s ease,
                width ${props => props.headerStyles.menuTransitions};
  }

  span:first-child {
    transform-origin: 90% 50%;
  }

  span:nth-last-child(1) {
    transform-origin: 90% 50%;
  }

  &.toggle-active span {
    opacity: 1;
    transform: rotate(-45deg);
    background: ${props => props.headerStyles.fontColorHover};
    width: 100%;

    &:nth-child(2) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }

    &:last-child {
      transform: rotate(45deg);
      padding-right: 4px;
    }
  }

  @media (max-width: ${props => props.headerStyles.menuTreshold}) {
    display: block;
  }
`

class Menu extends React.Component {
  timeoutId;

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.navMenu = React.createRef();
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.toggleClickHandler = this.toggleClickHandler.bind(this);
  }

  onFocus() {
    this.timeoutId = setTimeout(() => {
      if (!this.state.isOpen)
        this.setState({ isOpen: true })
    }, 250);
  }

  onBlur() {
    if (this.state.isOpen)
      this.setState({ isOpen: false });
    clearTimeout(this.timeoutId);
  }

  toggleClickHandler() {
    this.setState({ isOpen: !this.state.isOpen });
    this.navMenu.current.focus();
  }

  render() {
    let menuClassName = 'menu';
    if (this.state.isOpen) {
      menuClassName += ' menu-active';
    }
    let toggleClassName = 'toggle';
    if (this.state.isOpen) {
      toggleClassName += ' toggle-active';
    }

    let { location, headerStyles } = this.props

    return (
      <NavMenu
        className={menuClassName}
        tabIndex={1}
        ref={this.navMenu}
        onBlur={this.onBlur} 
        onFocus={this.onFocus} 
        headerStyles={headerStyles}
      >
        <ul>
          <ListLink to="/"
            dataText="Główna"
            headerStyles={headerStyles}
            location={location}>Główna</ListLink>
          <ListLink to="/oferta/"
            dataText="Oferta"
            headerStyles={headerStyles}
            location={location}>Oferta</ListLink>
          <ListLink to="/o-nas/"
            dataText="O nas"
            headerStyles={headerStyles}
            location={location}>O&nbsp;nas</ListLink>
          <ListLink to="/artykuly/"
            dataText="Artykuły"
            headerStyles={headerStyles}
            location={location}>Artykuły</ListLink>
          <ListLink to="/cennik/"
            dataText="Cennik"
            headerStyles={headerStyles}
            location={location}>Cennik</ListLink>
          <ListLink to="/kontakt/"
            dataText="Kontakt"
            headerStyles={headerStyles}
            location={location}>Kontakt</ListLink>
        </ul>
        <ToggleButton
          className={toggleClassName}
          onClick={this.toggleClickHandler}
          headerStyles={headerStyles}
        >
          <span></span>
          <span></span>
          <span></span>
        </ToggleButton>
      </NavMenu>
    )
  }
}

Menu.propTypes = {
  location: PropTypes.object,
  headerStyles: PropTypes.shape({
    menuTreshold: PropTypes.string,
    fontColor: PropTypes.string,
    fontColorHeaderHover: PropTypes.string,
    fontColorHover: PropTypes.string,
    sideBackgroundColor: PropTypes.string,
    menuTransitions: PropTypes.string,
  }),
}

Menu.defaultProps = {
  location: {},
}

export default Menu