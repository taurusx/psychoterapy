import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  position: relative;
  z-index: 1;
  min-width: 290px;
  max-width: 450px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 1px 4px 0 #00000033;
  transition: all 0.2s ease-in;
  border-radius: 0.5rem;

  .gatsby-image-wrapper img {
    transition: transform 0.2s ease-in !important;
  }

  &:hover {
    box-shadow: 0 1px 30px 0 #00000033;

    img {
      transform: scale(1.1);
    }
  }

  @media (max-width: 480px) {
    border-radius: 0;
  }
`

const Card = ({ children }) => (
  <CardWrapper>
    {children}
  </CardWrapper>
)

export default Card