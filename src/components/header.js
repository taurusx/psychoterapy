import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Menu from "./menu"
import Logo from "./logo"
import logoBlue from "../../content/assets/logo/logo-psychoterapia-blue.webp"

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  background: ${props => props.headerStyles.headerColor};
  box-shadow: ${props => props.headerStyles.headerColor === "transparent" ? "none" : "0px 3px 3px 0px rgba(0, 0, 0, 0.4)"};
  margin: 0 auto;
  padding: 0.6rem 1rem;
  height: 64px;
  flex-shrink: 0;
  overflow: hidden;
  color: ${props => props.headerStyles.fontColor};
  transition: background 0.6s ease-in-out, color 0.6s ease-in-out, box-shadow 0.6s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: ${props => props.headerStyles.fontColorHeaderHover};
    background: ${props => props.headerStyles.headerColorHover};
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.4);

    div.Logo__img {
      background: url(${logoBlue}) no-repeat;
      background-size: contain;
    }

    .Logo__img + h1 :not(:hover), 
    .menu a :not(:hover) {
      color: ${props => props.headerStyles.fontColorHeaderHover};
    }

    .toggle:not(:hover) {
      span {
        background: ${props => props.headerStyles.fontColorHeaderHover};
      }
    }
  }
`

const HeaderPlaceholder = styled.div`
  position: relative;
  width: 100%;
  height: 64px;
  flex: 0 0 64px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  box-shadow: none;
  color: ${props => props.headerStyles.fontColor};

  &:hover {
    font-weight: bold;
    color: ${props => props.headerStyles.fontColorHover};
  }
`

const Header = ({ siteTitle, location, headerStyles, noPlaceholder }) => {
  headerStyles = { ...Header.defaultProps.headerStyles, ...headerStyles }

  return (<>
    {noPlaceholder ? "" : <HeaderPlaceholder/>}
    <HeaderWrapper headerStyles={headerStyles} >
      <StyledLink to="/" headerStyles={headerStyles} >
        <Logo siteTitle={siteTitle} headerStyles={headerStyles} />
      </StyledLink>
      <Menu location={location} headerStyles={headerStyles} />
    </HeaderWrapper>
  </>)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  headerStyles: PropTypes.shape({
    mobileTreshold: PropTypes.string,
    menuTreshold: PropTypes.string,
    headerColor: PropTypes.string,
    headerColorHover: PropTypes.string,
    fontColor: PropTypes.string,
    fontColorHeaderHover: PropTypes.string,
    fontColorHover: PropTypes.string,
    sideBackgroundColor: PropTypes.string,
    menuTransitions: PropTypes.string,
  }),
}

Header.defaultProps = {
  siteTitle: ``,
  headerStyles: {
    mobileTreshold: "480px",
    menuTreshold: "60rem",
    headerColor: "white",
    headerColorHover: "white",
    fontColor: "#555",
    fontColorHeaderHover: "#555",
    fontColorHover: "#0741AD",
    sideBackgroundColor: "white",
    menuTransitions: "0.5s cubic-bezier(0.7,0.2,0.1,1.0)",
  },
}

export default Header
