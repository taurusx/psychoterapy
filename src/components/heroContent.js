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
  if (typeof index !== 'number' || index < 0) return
  if (index >= slidesContent.length) return

  const slide = slidesContent[index]
  const { heading, subheading, button } = slide
  let to = '/o-mnie/'
  let text = 'Poznaj mnie'
  if (typeof button === 'object') {
    to = button.to
    text = button.text
  }

  return (
    <HeroContentWrapper>
      {heading}
      {subheading}
      <SliderButton>
        <ButtonLink to={to} whiteTheme changeSize>
          {text}
        </ButtonLink>
      </SliderButton>
    </HeroContentWrapper>
  )
}

export default HeroContent
