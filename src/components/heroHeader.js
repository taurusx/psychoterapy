import React from "react"
import styled from "styled-components"

import Header from "./header"
import HeroSlider from "./heroSlider"

const HeroLayout = styled.div`
  position: relative;
  height: 100vh;
  
  &::after {
    z-index: -1;
    content: "";
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.2);
  }

  .gatsby-image-wrapper {
    z-index: -2;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    user-select: none;
  }

  img {
    object-fit: cover;
  }
`

const ChildrenWrapper = styled.div`
  color: ${props => props.fontColor};
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 1rem;
`

const customHeaderStyles = {
  headerColor: "transparent",
  fontColor: "white",
}

const HeroHeader = ({ siteTitle, location, fontColor = "white", children }) => (
  <HeroLayout>
    <HeroSlider />
    <Header siteTitle={siteTitle} location={location}
      headerStyles={{ ...customHeaderStyles }}
      noPlaceholder
    />
    <ChildrenWrapper fontColor={fontColor}>
      {children}
    </ChildrenWrapper>
  </HeroLayout>
)

export default HeroHeader