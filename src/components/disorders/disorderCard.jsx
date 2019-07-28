import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line
import styled, { css } from 'styled-components'

import { rhythm } from '../../utils/typography'
import Card from '../card'
import { iconsMap } from '../icons'
import Link from '../link'
import { disorderPropTypes } from './disorderPropTypes'

const CardWrapper = styled(Card)`
  min-height: 200px;
  max-width: 280px;
  height: 100%;
  overflow: visible;

  &:hover {
    cursor: pointer;
    box-shadow: 2px 3px 6px 0 ${p => p.theme.accentDarkest}55;
  }

  ${props =>
    props.hidden &&
    css`
      @media (max-width: 780px) {
        display: none;
      }
    `}
`

const CardImageWrapper = styled.div`
  position: relative;
  flex: 120px 0 0;
  align-self: center;
  width: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: #555;
  transition: ${({ theme: { transition } }) =>
    `${transition.duration} ${transition.function}`};
  margin-top: ${rhythm(0.5)};

  svg {
    margin: 0 auto;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 96px;
    width: 96px;
    border: solid 2px #ddd;
    border-radius: 50%;
  }

  ${CardWrapper}:hover & {
    color: ${props => props.theme.accentDark};
  }

  ${props =>
    props.overview &&
    css`
      color: ${props.theme.accentDark};
    `}
`

const CardTextWrapper = styled.div`
  flex: 20%;
  margin: ${rhythm(1)} ${rhythm(0.8)};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    margin: ${rhythm(1)} ${rhythm(0.5)} ${rhythm(0.8)};
  }
`

const Title = styled.h3`
  margin: 0;
  text-align: center;
`

const DisorderCard = ({ disorder, overview, hiddenOverview }) => {
  const { icon, slug, title } = disorder
  const Icon = iconsMap[icon || 'contact']

  return (
    <Link to={`/opis-zaburzen/${slug}`} style={{ boxShadow: 'none' }}>
      <CardWrapper hidden={hiddenOverview} overview={overview}>
        <CardImageWrapper overview={overview}>
          {Icon && <Icon height="56px" width="56px" />}
        </CardImageWrapper>
        <CardTextWrapper>
          <Title>{title}</Title>
        </CardTextWrapper>
      </CardWrapper>
    </Link>
  )
}

DisorderCard.propTypes = {
  disorder: PropTypes.shape(disorderPropTypes.node).isRequired,
  hiddenOverview: PropTypes.bool.isRequired,
  overview: PropTypes.bool.isRequired,
}

export default DisorderCard
