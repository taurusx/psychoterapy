import React from 'react'
import styled from 'styled-components'

import { rhythm } from './../utils/typography'

const StyledSection = styled.section`
  position: relative;
  max-width: 100%;
  min-height: ${props => props.minHeight || '200px'};
  margin-left: auto;
  margin-right: auto;
  padding: ${props =>
    props.maxWidth
      ? `${rhythm(1.5)} calc(50% - ${props.maxWidth} / 2) ${rhythm(1.5)}`
      : `${rhythm(1.5)} ${rhythm(5 / 4)} ${rhythm(1.5)}`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.backgroundColor || 'transparent'};

  @media (max-width: 480px) {
    padding: ${rhythm(0.5)} ${rhythm(3 / 4)} ${rhythm(0.5)};
    min-height: 300px;
  }

  @media (max-width: 380px) {
    padding: ${rhythm(0.5)} ${rhythm(0.5)} ${rhythm(0.5)};
  }
`

const Background = styled.div`
  position: absolute;
  z-index: -2;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 100%;
  overflow: hidden;

  .gatsby-image-wrapper {
    height: 100%;
  }
`

const BackgroundOverlay = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: ${props => props.overlay || 'transparent'};
  opacity: 0.6;
`

const SectionTitle = styled.h2`
  margin: ${rhythm(1)} ${rhythm(0)} ${rhythm(0.75)};
`

const Section = ({
  title,
  maxWidth,
  minHeight,
  backgroundColor,
  backgroundImg,
  overlay,
  children,
}) => (
  <StyledSection
    maxWidth={maxWidth}
    minHeight={minHeight}
    backgroundColor={backgroundColor}
  >
    {backgroundImg ? <Background>{backgroundImg}</Background> : ''}
    {overlay ? <BackgroundOverlay overlay={overlay} /> : ''}
    {title ? <SectionTitle>{title}</SectionTitle> : ''}
    {children}
  </StyledSection>
)

export default Section
