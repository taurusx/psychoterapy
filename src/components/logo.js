import React from 'react'
import styled from 'styled-components'

import EmocjaLogoButterfly from './logos/EmocjaLogoButterfly'

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 280px;
  margin-left: 2rem;
  margin-right: 2rem;
  color: ${props => props.theme.grayColor};
  flex: 0 0 auto;
  transition: color 0.1s linear;

  &.headerHovered:not(:hover) {
    color: ${props => props.theme.fontColorHeaderHover};
  }

  &.headerHovered:hover {
    color: ${props => props.theme.accentDarkest};
  }

  @media (max-width: ${props => props.theme.mobileTreshold}) {
    margin-left: 0.5rem;
  }
`

const LogoImage = styled.div`
  height: 40px;
  width: 40px;
  margin-right: 0.8rem;
  flex: 0 0 auto;
  background-size: contain;
  transition: all ${props => props.theme.menuTransitions};

  ${LogoWrapper}.page-top & {
    height: 48px;
    width: 48px;
  }

  @media (max-width: ${props => props.theme.mobileTreshold}) {
    height: 32px;
    width: 32px;

    ${LogoWrapper}.page-top & {
      height: 40px;
      width: 40px;
    }
  }
`

const LogoTitle = styled.h1`
  margin: 0;
  flex: 0 1 auto;
  font-size: 1.1rem;
  font-weight: 700;
  transition: all ${props => props.theme.menuTransitions};

  ${LogoWrapper}.page-top & {
    font-size: 1.6rem;
  }

  @media (max-width: ${props => props.theme.mobileTreshold}) {
    ${LogoWrapper}.page-top & {
      font-size: 1.3rem;
    }
  }
`

const Logo = ({ className, siteTitle }) => {
  return (
    <LogoWrapper className={className}>
      <LogoImage>
        <EmocjaLogoButterfly width="100%" height="100%" />
      </LogoImage>
      <LogoTitle>{siteTitle}</LogoTitle>
    </LogoWrapper>
  )
}

export default Logo
