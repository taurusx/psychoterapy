import React from 'react'
import styled, { css } from 'styled-components'

import emocjaLogo from '../../../content/assets/logo/emocja-logo-blue.png'
import Mail from '../icons/Mail'
import Phone from '../icons/Phone'
import Pin from '../icons/Pin'

const ImageContainer = styled.div`
  min-width: 250px;
  max-width: 450px;
  margin: 3rem 0;

  @media (max-width: 480px) {
    margin: 2rem 0;
  }
`

const IconContainer = styled.div`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.5rem;
  margin-right: 1rem;
  vertical-align: middle;
  line-height: 0rem;
  color: ${p => p.theme.accentDark};
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  min-height: 4rem;
  max-width: 350px;
  flex-wrap: wrap;

  & strong {
    color: ${p => p.theme.accentDark};
  }

  &:hover {
    & > div:first-child,
    & strong {
      color: ${p => p.theme.accentDarkest};
    }
  }
`

const ItemsContainer = styled.div`
  background: #fff;
  overflow: hidden;
  box-shadow: 0 1px 4px 0 #00000033;
  transition: all 0.2s ease-in;
  border-radius: 0.5rem;
  padding: 2rem 1.5rem 2rem 1rem;
  width: fit-content;
  max-width: 100%;

  @media (max-width: 480px) {
    padding: 1.5rem 1rem 1.5rem 0.5rem;
  }
`

const linkingItemCss = css`
  background: none;
  border: none;
  margin-left: 0.5rem;
  padding: 0;
  text-align: center;
  flex-grow: 1;

  & a,
  span {
    box-shadow: none;

    &:hover {
      font-weight: bold;
    }
  }
`

const linkingButtonCss = css`
  ${linkingItemCss}
  cursor: pointer;
`

const scrollToMap = e => {
  if (
    e.type === 'click' ||
    (e.type === 'keydown' && (e.key === ' ' || e.key === 'Enter'))
  ) {
    const map = document.getElementById('google-map')
    const offset = map && map.offsetTop
    if (!offset) return
    window.scrollTo({ top: offset - 70, behavior: 'smooth' })
  }
}

const Details = () => (
  <div>
    <h3>Poradnia &quot;eMOCja&quot;</h3>
    <ImageContainer>
      <img
        src={emocjaLogo}
        alt="Gabinet eMOCja - logo"
        css={`
          width: 100%;
          margin: 0;
        `}
      />
    </ImageContainer>
    <h3>Gabinet terapii poznawczo-behawioralnej i terapii schematu</h3>
    <ItemsContainer>
      <ContactItem>
        <IconContainer>
          <Pin width="100%" height="1.5rem" />
        </IconContainer>
        <strong>Adres:</strong>
        <button
          css={linkingButtonCss}
          type="button"
          onClick={scrollToMap}
          onKeyDown={scrollToMap}
        >
          <span>ul. Drzymały 18/24, Warszawa</span>
        </button>
      </ContactItem>
      <ContactItem>
        <IconContainer>
          <Phone width="100%" height="1.5rem" />
        </IconContainer>
        <strong>Tel:</strong>
        <div css={linkingItemCss}>
          <a href="tel:+48665400815">+48 665-400-815</a>
        </div>
      </ContactItem>
      <ContactItem>
        <IconContainer>
          <Mail width="100%" height="1.5rem" />
        </IconContainer>
        <strong>Email:</strong>
        <div css={linkingItemCss}>
          <a href="mailto:poradnia.emocja@gmail.com">
            poradnia.emocja@gmail.com
          </a>
        </div>
      </ContactItem>
    </ItemsContainer>
  </div>
)

export default Details
