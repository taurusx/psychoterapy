import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Header, { HEADER_HEIGHT_PAGE_TOP } from './header'
import HeroSlider from './heroSlider'
import useIntersect from '../hooks/useIntersect'

const HeroLayout = styled.div`
  position: relative;
  height: 100vh;

  &::after {
    z-index: -1;
    content: '';
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
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

const HeroHeader = ({ siteTitle, location }) => {
  async function loadPolyfills() {
    if (
      typeof window !== 'undefined' &&
      typeof window.IntersectionObserver === 'undefined'
    ) {
      await import('intersection-observer')
    }
  }

  useEffect(() => {
    loadPolyfills()
  }, [])

  const [heroRef, heroEntry] = useIntersect({
    rootMargin: `${HEADER_HEIGHT_PAGE_TOP} 0px 0px 0px`,
    threshold: 1,
  })

  const [pageTop, setPageTop] = useState(true)

  useEffect(() => {
    if (heroEntry.constructor === IntersectionObserverEntry) {
      setPageTop(heroEntry.isIntersecting)
    } else {
      setPageTop(true)
    }
    return () => {
      setPageTop(true)
    }
  }, [heroEntry])

  const [headerColor, setHeaderColor] = useState('transparent')
  const heroHeaderStyles = {
    headerColor: `${headerColor}`,
    fontColor: 'white',
  }

  useEffect(() => {
    setHeaderColor(pageTop ? 'transparent' : 'rgba(0, 0, 0, 0.85)')
  }, [pageTop])

  return (
    <HeroLayout ref={heroRef}>
      <HeroSlider />
      <Header
        siteTitle={siteTitle}
        location={location}
        headerStyles={heroHeaderStyles}
        isPageTop={pageTop}
        noPlaceholder
      />
    </HeroLayout>
  )
}

export default HeroHeader
