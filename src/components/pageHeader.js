import React from 'react'
import styled from 'styled-components'

import Section from '../components/section'

const PageTitle = styled.div`
  max-width: ${props => props.maxWidth || '80%'};
  text-align: center;
  align-self: center;

  h1 {
    margin: 2rem 1rem;
    text-shadow: 2px 2px 4px white;
  }

  @media (min-width: 720px) {
    h1 {
      font-size: 3rem;
    }
  }
`

const StyledHeader = styled.header`
  margin-bottom: 3.5rem;
`

const PageHeader = ({ children, backgroundImg, maxWidth }) => (
  <StyledHeader>
    <Section
      backgroundImg={backgroundImg}
      backgroundColor={'linear-gradient(transparent, white)'}
      minHeight="300px"
    >
      <PageTitle maxWidth={maxWidth}>{children}</PageTitle>
    </Section>
  </StyledHeader>
)

export default PageHeader
