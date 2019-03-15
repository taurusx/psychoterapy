import React, { useEffect, useState } from "react"
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

const HeroHeader = ({ siteTitle, location, fontColor = "white", children }) => {
  async function loadPolyfills() {
    if (typeof window !== 'undefined' && typeof window.IntersectionObserver === 'undefined') {
      await import('intersection-observer')
    }
  }

  useEffect(() => {
    loadPolyfills()
  }, [])

  const [headerColor, setHeaderColor] = useState('transparent')
  let heroHeaderStyles = {
    headerColor: `${headerColor}`,
    fontColor: "white",
  }

  return (
    <InView threshold={0.97} rootMargin={"50px 0px 0px 0px"}>
      {({ inView: heroInView, ref: heroRef }) => {
        heroInView ? setHeaderColor("transparent") : setHeaderColor("rgba(0, 0, 0, 0.8)")

        return (
          <HeroLayout ref={heroRef}>
            <HeroSlider />
            <Header siteTitle={siteTitle} location={location}
              headerStyles={heroHeaderStyles}
              isHeroInView={heroInView}
              noPlaceholder
            />
          </HeroLayout>  
        )
      }}
    </InView>
)}

export default HeroHeader