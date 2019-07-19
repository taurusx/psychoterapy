import React from 'react'
import styled, { css } from 'styled-components'

import { rhythm } from '../utils/typography'
import Section from './section'

const PageTitle = styled.div`
  max-width: 100%;
  text-align: center;
  align-self: center;
  ${props =>
    props.maxWidth
      ? css`
          padding-left: calc(50% - ${props.maxWidth} / 2);
          padding-right: calc(50% - ${props.maxWidth} / 2);
        `
      : css`
          padding-left: rhythm(5/4);
          padding-right: rhythm(5/4);
        `};

  h1 {
    text-shadow: 2px 2px 4px white;
  }

  @media (min-width: 720px) {
    h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 480px) {
    padding-left: ${rhythm(3 / 4)};
    padding-right: ${rhythm(3 / 4)};
  }

  @media (max-width: 380px) {
    padding-left: ${rhythm(0.5)};
    padding-right: ${rhythm(0.5)};
  }
`

const StyledHeader = styled.header`
  margin-bottom: 1.5rem;
`

const PageHeader = ({ children, backgroundImg, maxWidth }) => (
  <StyledHeader>
    <Section
      backgroundImg={backgroundImg}
      backgroundColor="linear-gradient(transparent, white)"
      minHeight="300px"
    >
      <PageTitle maxWidth={maxWidth}>{children}</PageTitle>
    </Section>
  </StyledHeader>
)

export default PageHeader
