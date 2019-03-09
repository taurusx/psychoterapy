import React from 'react'
import styled from 'styled-components'

import Button from './button'
import Link from './link'

const StyledLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
`

const ButtonLink = ({ children, to, activeClassName, ...restProps }) => (
  <StyledLink to={to} activeClassName={activeClassName} {...restProps}>
    <Button {...restProps}>
      {children}
    </Button>
  </StyledLink>
)

export default ButtonLink