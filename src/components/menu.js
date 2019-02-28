import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const menuTreshold = "60rem"
const fontColor = "#555"
const fontColorHover = "#0741AD"
const backgroundColor = "white"

const NavMenu = styled.nav`
  position: relative;
  color: ${props => props.fontColor || fontColor};
  transition: transform 0.5s cubic-bezier(0.7,0.2,0.1,1.0),
    box-shadow 0.5s cubic-bezier(0.7,0.2,0.1,1.0);
  outline: none;

  ul {
    list-style: none;
    display: flex;
    margin: 0;
  }

  div.toggle {
    right: calc(100% + 1rem);
    transition: right 0.5s cubic-bezier(0.7,0.2,0.1,1.0);
  }

  @media (max-width: ${props => props.menuTreshold || menuTreshold}) {
    position: fixed;
    height: 100vh;
    background: ${props => props.backgroundColor || backgroundColor};
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

  @media (max-width: ${props => props.menuTreshold || menuTreshold}) {
    margin: 0.5rem 1rem;
  }
  
  &::before {
    content: "";
    height: 1px;
    background-color: ${props => props.fontColorHover || fontColorHover};
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
  color: ${props => props.fontColor || fontColor};

  &:hover {
    font-weight: bold;
    color: ${props => props.fontColorHover || fontColorHover};
  }
`

const ListLink = props => (
  <StyledLink to={props.to}>
    <StyledListItem data-text={props.dataText}>{props.children}</StyledListItem>
  </StyledLink>
)

const ToggleButton = styled.div`
  display: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  min-height: 36px;
  min-width: 36px;
  cursor: pointer;

  &:hover span {
    background: ${props => props.fontColorHover || fontColorHover};
  }

  span {
    display: block;
    width: 90%;
    height: 4px;
    margin: 6px auto 6px;
    position: relative;
    
    background: ${props => props.fontColor || fontColor};
    border-radius: 3px;
    
    z-index: 1;
    
    transition: transform 0.5s cubic-bezier(0.7,0.2,0.1,1.0),
                background 0.5s cubic-bezier(0.7,0.2,0.1,1.0),
                opacity 0.4s ease,
                width 0.5s cubic-bezier(0.7,0.2,0.1,1.0);
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
    background: ${props => props.fontColorHover || fontColorHover};
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

  @media (max-width: ${props => props.menuTreshold || menuTreshold}) {
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

    return (
      <NavMenu
        className={menuClassName}
        tabIndex={1}
        ref={this.navMenu}
        onBlur={this.onBlur} 
        onFocus={this.onFocus} 
      >
        <ul>
          <ListLink to="/" dataText="Główna">Główna</ListLink>
          <ListLink to="/oferta/" dataText="Oferta">Oferta</ListLink>
          <ListLink to="/o-nas/" dataText="O nas">O&nbsp;nas</ListLink>
          <ListLink to="/artykuly/" dataText="Artykuły">Artykuły</ListLink>
          <ListLink to="/cennik/" dataText="Cennik">Cennik</ListLink>
          <ListLink to="/kontakt/" dataText="Kontakt">Kontakt</ListLink>
        </ul>
        <ToggleButton
          className={toggleClassName}
          onClick={this.toggleClickHandler}
        >
          <span></span>
          <span></span>
          <span></span>
        </ToggleButton>
      </NavMenu>
    )
  }
}

export default Menu