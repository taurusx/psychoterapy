import React from 'react'
import styled from 'styled-components'

const ToggleWrapper = styled.div`
  display: none;
  position: absolute;
  top: 0.8rem;
  right: calc(100% + 1rem);
  min-height: 36px;
  min-width: 36px;
  cursor: pointer;
  transition: all ${props => props.theme.menuTransitions};

  &.page-top {
    top: 1.3rem;
  }

  &:hover span {
    background: ${props => props.theme.fontColorHover};
  }

  span {
    display: block;
    width: 90%;
    height: 4px;
    margin: 6px auto 6px;
    position: relative;

    background: ${props => props.theme.fontColor};
    border-radius: 3px;

    z-index: 1;

    transition: all ${props => props.theme.menuTransitions}, opacity 0.4s ease;
  }

  span:first-child {
    transform-origin: 90% 50%;
  }

  span:nth-last-child(1) {
    transform-origin: 90% 50%;
  }

  &.toggle--active span {
    opacity: 1;
    transform: rotate(-45deg);
    background: ${props => props.theme.fontColorHover};
    width: 100%;

    &:nth-child(2) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }

    &:last-child {
      transform: rotate(45deg);
      padding-right: 4px;
    }
  }

  @media (max-width: ${props => props.theme.menuTreshold}) {
    display: block;

    &.toggle--active {
      right: 1rem;
    }
  }
`

const ToggleButton = ({ isOpen, pageTop, onClick }) => {
  return (
    <ToggleWrapper
      className={`toggle ${isOpen ? 'toggle--active' : ''} ${
        pageTop ? 'page-top' : ''
      }`}
      onClick={onClick}
    >
      <span />
      <span />
      <span />
    </ToggleWrapper>
  )
}

export default ToggleButton
