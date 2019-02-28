import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Menu from "./menu"
import logoWhite from "../../content/assets/logo/logo-psychoterapia-white.webp"
import logoBlue from "../../content/assets/logo/logo-psychoterapia-blue.webp"

const mobileTreshold = "480px"
const headerColor = "transparent"
const headerColorHover = "white"
const fontColor = "#555"
const fontColorHover = "#0741AD"

const HeaderWrapper = styled.header`
  position: relative;
  z-index: 10;
  width: 100%;
  background: ${props => props.headerColor || headerColor};
  box-shadow: ${headerColor === "transparent" ? "none" : "0px 3px 3px 0px rgba(0, 0, 0, 0.4)"};
  margin: 0 auto;
  padding: 0.6rem 1rem;
  max-height: 88px;
  flex-shrink: 0;
  overflow: hidden;
  color: ${props => props.fontColor || fontColor};
  transition: background 0.6s ease-in-out, color 0.6s ease-in-out, box-shadow 0.6s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: ${props => props.fontColorHover || fontColorHover};
    background: ${props => props.headerColorHover || headerColorHover};
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.4);

    div.logo {
      background: url(${logoBlue}) no-repeat;
      background-size: contain;
    }
  }
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 280px;
  margin-right: 2rem;
`

const LogoImage = styled.div`
  height: 48px;
  width: 48px;
  margin-right: 0.8rem;
  flex: 0 0 auto;
  background: url(${logoWhite}) no-repeat;
  background-size: contain;
  transition: background 0.6s ease-in-out;

  @media (max-width: ${props => props.mobileTreshold || mobileTreshold}) {
    height: 32px;
    width: 32px;
  }
`

const LogoTitle = styled.h1`
  margin: 0;
  flex: 0 1 auto;
  font-size: 1.5rem;
  
  @media (max-width: ${props => props.mobileTreshold || mobileTreshold}) {
    font-size: 1.2rem;
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

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <StyledLink to="/">
      <LogoWrapper>
        <LogoImage className="logo"/>
        <LogoTitle>
          {siteTitle}
        </LogoTitle>
      </LogoWrapper>
    </StyledLink>
    <Menu />
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
