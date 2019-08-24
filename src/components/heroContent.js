import React from 'react'
import styled from 'styled-components'

import ButtonLink from './buttonLink'
import { slidesContent } from './heroContentText'

const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  overflow: hidden;
`

const SliderButton = styled.div`
  position: relative;
  z-index: 5;
`

const HeroContent = ({ index }) => {
  if (typeof index !== 'number' || index < 0) return null
  if (index >= slidesContent.length) return null

  const slide = slidesContent[index]
  const { heading, subheading, button } = slide
  const to = typeof button === 'object' ? button.to : '/o-mnie/'
  const text = typeof button === 'object' ? button.text : 'Poznaj mnie'

  return (
    <HeroContentWrapper>
      {heading}
      {subheading}
      <SliderButton>
        <ButtonLink
          to={to}
          whiteTheme
          overrideStyles={{ borderWidth: '3px', fontSize: '120%' }}
        >
          {text}
        </ButtonLink>
      </SliderButton>
    </HeroContentWrapper>
  )
}

export default HeroContent
