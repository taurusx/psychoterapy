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
  height: 48px;
  width: 48px;
  margin-right: 0.8rem;
  flex: 0 0 auto;
  background: url(${logoWhite}) no-repeat;
  background-size: contain;
  transition: background 0.6s ease-in-out;

  @media (max-width: ${props => props.mobileTreshold}) {
    height: 32px;
    width: 32px;
  }
`

const LogoTitle = styled.h1`
  margin: 0;
  flex: 0 1 auto;
  font-size: 1.5rem;
  
  @media (max-width: ${props => props.mobileTreshold}) {
    font-size: 1.2rem;
  }
`

const Logo = ({ siteTitle, headerStyles }) => {
  const { mobileTreshold } = headerStyles
  return (
  <LogoWrapper>
    <LogoImage className="Logo__img" mobileTreshold={mobileTreshold} />
    <LogoTitle mobileTreshold={mobileTreshold} >
      {siteTitle}
    </LogoTitle>
  </LogoWrapper>
)}

export default Logo