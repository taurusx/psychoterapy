import React from 'react'
import styled from 'styled-components'

import { rhythm, scale } from "../utils/typography"
import ButtonLink from './buttonLink';

const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Heading = styled.h2`
  ${{ ...scale(1.8) }}
  font-family: 'Montserrat', sans-serif;
  margin-top: ${rhythm(0)};
  margin-bottom: ${rhythm(0)};
`

const SubHeading = styled.h2`
  ${{...scale(1.0)}}
  font-family: 'Montserrat', sans-serif;
  margin-top: ${rhythm(0)};
  line-height: 1.1;
`

// TODO: replace HeroText below with correct one, add mobile media
const HeroText = () => {
  return (
    <HeroTextWrapper>
      <Heading>
        <span style={{ float: 'left', fontSize: '80%',
          marginTop: rhythm(0), }}>NAWET</span>
        <span style={{ float: 'left', textShadow: '3px 5px 5px #0741ad',
          marginTop: rhythm(-0.5),}}>NAJDŁUŻSZA</span>
        <span style={{ float: 'right', fontSize: '80%',
          marginTop: rhythm(-0.5),}}>PODRÓŻ</span>
      </Heading>
      <SubHeading style={{ textAlign: 'center', width: '76%', alignSelf: 'center' }}>
        <span>ZACZYNA SIĘ OD PIERWSZEGO KROKU</span>
      </SubHeading>
      <ButtonLink to="/kontakt/" whiteTheme changeSize>
        UMÓW SIĘ NA WIZYTĘ
      </ButtonLink>
    </HeroTextWrapper>
  )
}

export default HeroText