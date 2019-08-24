import React from 'react'
import styled from 'styled-components'
import { startsWith } from '../utils/utils'

import Link from './link'

const StyledListItem = styled.li`
  position: relative;
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 0;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;

  @media (max-width: ${props => props.theme.menuTreshold}) {
    margin: 0.5rem 1rem;
  }

  &::before {
    content: '';
    height: 1px;
    background-color: ${props => props.theme.fontColorHover};
    width: 0%;
    position: absolute;
    bottom: -5px;
    left: 0;
    transition: 0.2s width ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }

  &::after {
    display: block;
    content: attr(data-text);
    text-transform: uppercase;
    font-weight: bold;
    height: 0;
    margin-top: -8px;
    overflow: hidden;
    visibility: hidden;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  box-shadow: none;
  color: ${props => props.theme.fontColor};

  &:hover,
  &.active {
    font-weight: bold;
    color: ${props => props.theme.fontColorHover};
  }

  &.link-hidden {
    display: none;
  }
`

const MenuLink = props => {
  const { location, to, children, dataText, ...restProps } = props
  const linkClass =
    `${
      location && to === location.pathname && to === '/' ? 'link-hidden' : ''
    }` ||
    `${
      // Simulate Reach React Router Link's (https://reach.tech/router)
      // retrieving getProps({isPartiallyCurrent})
      location && to !== '/' && startsWith(location.pathname, to)
        ? 'active'
        : ''
    }`

  return (
    <StyledLink
      to={to}
      activeClassName="active"
      className={linkClass}
      {...restProps}
    >
      <StyledListItem data-text={dataText} {...restProps}>
        {children}
      </StyledListItem>
    </StyledLink>
  )
}

export default MenuLink
