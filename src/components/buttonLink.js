import React from 'react'
import styled, { css } from 'styled-components'

import Button from './button'
import Link from './link'

const StyledLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;

  ${props =>
    props.alignLeft &&
    css`
      display: block;
      margin-left: 0;
      margin-right: auto;
      align-self: flex-start;
    `}

  ${props =>
    props.alignRight &&
    css`
      display: block;
      margin-left: auto;
      margin-right: 0;
      align-self: flex-end;
    `}
`

const ButtonLink = ({
  children,
  to,
  activeClassName,
  alignLeft,
  alignRight,
  ...restProps
}) => (
  <StyledLink
    to={to}
    activeClassName={activeClassName}
    alignLeft={alignLeft}
    alignRight={alignRight}
    {...restProps}
  >
    <Button {...restProps}>{children}</Button>
  </StyledLink>
)

export default ButtonLink
