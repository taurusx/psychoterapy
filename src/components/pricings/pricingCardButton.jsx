import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line
import styled from 'styled-components'

import Link from '../link'

const colorAccent = '#0741AD'

const StyledCardButton = styled(Link)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-shadow: none;
  border: 2px solid transparent;
  background: ${colorAccent};
  text-transform: uppercase;
  padding: 0.8rem;
  transition: all 0.2s ease-in;
  text-align: center;
  color: white;

  &:hover {
    background: ${colorAccent};
    color: white;
    font-weight: 700;
    letter-spacing: 1px;
  }

  @media (max-width: 480px) {
    background: white;
    color: ${colorAccent};
  }
`

export const ArticleCardButton = ({ to, children }) => (
  <StyledCardButton to={to}>{children}</StyledCardButton>
)

ArticleCardButton.propTypes = {
  to: PropTypes.string.isRequired,
}

export default ArticleCardButton
