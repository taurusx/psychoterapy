import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const darkestColor = '#0741AD'
const darkColor = '#1146BD'
const lightColor = '#EEEEFF'
const lightestColor = 'white'
const grayColor = '#555'

const darkTheme = {
  fontColor: lightColor,
  fontColorHover: lightestColor,
  backgroundColor: darkestColor,
  backgroundColorHover: darkColor,
  borderColor: 'transparent',
  borderColorHover: 'transparent',
  boxShadowColor: '#00000033',
}

const lightTheme = {
  fontColor: darkColor,
  fontColorHover: darkestColor,
  backgroundColor: lightestColor,
  backgroundColorHover: lightColor,
  borderColor: darkColor,
  borderColorHover: darkestColor,
  boxShadowColor: 'transparent',
}

const grayTheme = {
  fontColor: grayColor,
  fontColorHover: darkestColor,
  backgroundColor: lightestColor,
  backgroundColorHover: lightColor,
  borderColor: grayColor,
  borderColorHover: darkestColor,
  boxShadowColor: 'transparent',
}

const whiteTheme = {
  fontColor: lightestColor,
  fontColorHover: darkestColor,
  backgroundColor: 'transparent',
  backgroundColorHover: lightestColor,
  borderColor: lightestColor,
  borderColorHover: 'transparent',
  boxShadowColor: 'transparent',
}

const moveArrow = keyframes`
  0%   { right: 1.5em; opacity: 0; }
  20%  { opacity: 1; }
  85%  { right: 0.7em; }
  100% { right: 0.7em; }
`

const StyledButton = styled.button`
  position: relative;
  color: ${props => props.currentTheme.fontColor};
  background: ${props => props.currentTheme.backgroundColor};
  border: 2px solid ${props => props.currentTheme.borderColor};
  border-radius: 0.4em;
  text-transform: ${props => (props.lowercase ? 'none' : 'uppercase')};
  font-weight: bold;
  display: ${props => props.block ? 'block' : 'initial'};
  margin: ${props => props.block ? '0.5em auto' : '0.5em'};
  padding: 0.8em 1.5em;
  min-width: 12em;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  transition: all 0.2s ease-in;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.currentTheme.backgroundColorHover};
    border-color: ${props => props.currentTheme.borderColorHover};
    color: ${props => props.currentTheme.fontColorHover};
    box-shadow: 0 1px 20px 0 ${props => props.currentTheme.boxShadowColor};
  }

  ${props => props.fullWidth && css`
    width: 100%;
    max-width: 100%;
    border-radius: 0;
    margin-right: 0;
    margin-left: 0;
  `}

  ${props => props.alignLeft && css`
    display: block;
    margin-right: auto;
  `}

  ${props => props.alignRight && css`
    display: block;
    margin-left: auto;
  `}

  ${props => props.transparent && css`
    background-color: transparent;
  `}
  
  ${props => props.arrow && css`
    &:hover {
      padding-right: 5em;
    }

    &::after {
      display: none;
      content: "→";
      position: absolute;
      font-size: 1.5em;
      width: 1em;
      right: 1.5em;
      top: 50%;
      transform: translateY(-55%);
      color: ${props => props.currentTheme.fontColor};
      opacity: 0;
    }

    &:hover::after {
      display: block;
      opacity: 1;
      right: 0.7em;
      color: ${props => props.currentTheme.fontColorHover};
      animation: ${moveArrow} 1.2s infinite;
    }
  `}
`

const Button = props => {
  let currentTheme
  if (props.lightTheme) {
    currentTheme = lightTheme
  } else if (props.grayTheme) {
    currentTheme = grayTheme
  } else if (props.whiteTheme) {
    currentTheme = whiteTheme
  } else {
    currentTheme = darkTheme
  }
  return (
    <StyledButton currentTheme={currentTheme} {...props} />
  )
}

export default Button