import React from 'react'
import styled from 'styled-components'

import logoWhite from '../../content/assets/logo/logo-psychoterapia-white.webp'
import logoBlue from '../../content/assets/logo/logo-psychoterapia-blue.webp'

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 280px;
  margin-right: 2rem;
`

const LogoImage = styled.div`
  height: 40px;
  width: 40px;
  margin-right: 0.8rem;
  flex: 0 0 auto;
  background: url(${logoWhite}) no-repeat;
  background-size: contain;
  transition: all ${props => props.theme.menuTransitions};

  ${LogoWrapper}.page-top & {
    height: 48px;
    width: 48px;
  }

  .headerHovered & {
    background: url(${logoBlue}) no-repeat;
    background-size: contain;
  }

  @media (max-width: ${props => props.theme.mobileTreshold}) {
    height: 32px;
    width: 32px;
  }
`

const LogoTitle = styled.h1`
  margin: 0;
  flex: 0 1 auto;
  font-size: 1.3rem;
  transition: all ${props => props.theme.menuTransitions};

  ${LogoWrapper}.page-top & {
    font-size: 1.5rem;
  }

  .headerHovered &:not(:hover) {
    color: ${props => props.theme.fontColorHeaderHover};
  }

  @media (max-width: ${props => props.theme.mobileTreshold}) {
    font-size: 1.2rem;
  }
`

const Logo = ({ className, siteTitle }) => {
  return (
    <LogoWrapper className={className}>
      <LogoImage />
      <LogoTitle>{siteTitle}</LogoTitle>
    </LogoWrapper>
  )
}

export default Logo
