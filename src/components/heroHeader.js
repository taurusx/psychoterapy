import React, { useEffect } from "react"
import styled from "styled-components"
import { InView } from "react-intersection-observer"

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
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 1rem;
`

const HeroHeader = ({ siteTitle, location, fontColor = "white", children }) => {
  async function loadPolyfills() {
    if (typeof window !== 'undefined' && typeof window.IntersectionObserver === 'undefined') {
      await import('intersection-observer')
    }
  }

  useEffect(() => {
    loadPolyfills()
  })

  return (
    <InView threshold={0.97} rootMargin={"50px 0px 0px 0px"}>
      {({ inView: heroInView, ref: heroRef }) => {
        let heroHeaderStyles = {
          headerColor: `${heroInView ? "transparent" : "rgba(0, 0, 0, 0.8)" }`,
          fontColor: "white",
        }

        return (
          <HeroLayout ref={heroRef}>
            <HeroSlider />
            <Header siteTitle={siteTitle} location={location}
              headerStyles={heroHeaderStyles}
              isHeroInView={heroInView}
              noPlaceholder
            />
            <ChildrenWrapper fontColor={fontColor}>
              {children}
            </ChildrenWrapper>
          </HeroLayout>  
        )
      }}
    </InView>
)}

export default HeroHeader