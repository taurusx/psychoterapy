import React from 'react'
import styled from 'styled-components'

import EmocjaLogoSimple from './logos/EmocjaLogoSimple'

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 200px;
  margin-left: -1rem;
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
    margin-left: 0rem;
  }
`

const LogoImage = styled.div`
  height: 40px;
  width: 180px;
  margin-right: 0.8rem;
  flex: 0 0 auto;
  background-size: contain;
  transition: all ${props => props.theme.menuTransitions};

  ${LogoWrapper}.page-top & {
    height: 48px;
    width: 200px;
  }

  @media (max-width: ${props => props.theme.mobileTreshold}) {
    height: 32px;
    width: 160px;

    ${LogoWrapper}.page-top & {
      height: 40px;
      width: 180px;
    }
  }
`

const Logo = ({ className }) => {
  return (
    <LogoWrapper className={className}>
      <LogoImage>
        <EmocjaLogoSimple width="100%" height="100%" />
      </LogoImage>
    </LogoWrapper>
  )
}

export default Logo
