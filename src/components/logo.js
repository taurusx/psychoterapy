import React from 'react'
import styled from 'styled-components'

import logoWhite from '../../content/assets/logo/logo-psychoterapia-white.webp'

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
  transition: all ${props => props.headerStyles.menuTransitions};

  ${LogoWrapper}.page-top & {
    height: 48px;
    width: 48px;
  }

  @media (max-width: ${props => props.headerStyles.mobileTreshold}) {
    height: 32px;
    width: 32px;
  }
`

const LogoTitle = styled.h1`
  margin: 0;
  flex: 0 1 auto;
  font-size: 1.3rem;
  transition: all ${props => props.headerStyles.menuTransitions};

  ${LogoWrapper}.page-top & {
    font-size: 1.5rem;
  }
  
  @media (max-width: ${props => props.headerStyles.mobileTreshold}) {
    font-size: 1.2rem;
  }
`

const Logo = ({ className, siteTitle, headerStyles }) => {
  return (
  <LogoWrapper className={className}>
    <LogoImage className="Logo__img" headerStyles={headerStyles} />
    <LogoTitle headerStyles={headerStyles} >
      {siteTitle}
    </LogoTitle>
  </LogoWrapper>
)}

export default Logo