import React from 'react'
import styled from 'styled-components'

import { AgnieszkaImage } from './siteImages'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 2rem;
  margin-bottom: 2rem;

  h2 {
    margin-top: 0;
  }

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`

const ProfileImage = styled.figure`
  width: 250px;
  margin-bottom: 0;
  justify-self: end;

  .gatsby-image-wrapper {
    max-width: 250px;
    height: 100%;
    border-radius: 1rem;
    box-shadow: 0 1px 4px 0 #00000033;
  }

  figcaption {
    color: #555;
    text-align: center;
  }

  @media (max-width: 1080px) {
    justify-self: center;
  }
`

const AboutWithPic = ({ children }) => (
  <Grid>
    <div>{children}</div>
    <ProfileImage>
      <AgnieszkaImage />
      <figcaption>
        Agnieszka Wojnar-Jadczyszyn, psycholog i psychoterapeuta
      </figcaption>
    </ProfileImage>
  </Grid>
)

export default AboutWithPic
