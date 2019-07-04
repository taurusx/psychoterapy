import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Card from '../card'
import { rhythm } from '../../utils/typography'

const CardWrapper = styled(Card)`
  min-height: 200px;
  max-width: 280px;
  overflow: visible;

  &::after {
    content: '⯆';
    font-size: 2rem;
    position: absolute;
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
    color: ${props => props.theme.accentDark};
    opacity: 0;
    transition: ${({ theme: { transition } }) =>
      `${transition.duration} ${transition.function}`};
  }

  &:hover {
    cursor: ${props => (props.overview ? '' : 'pointer')};

    &::after {
      opacity: ${props => (props.overview ? '0' : '1')};
    }
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
    height: 50px;
    min-width: 50px;
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

const DisorderCard = ({
  disorder: { icon: Icon, title },
  overview,
  hiddenOverview,
}) => (
  <CardWrapper hidden={hiddenOverview} overview={overview}>
    <CardImageWrapper overview={overview}>{Icon && <Icon />}</CardImageWrapper>
    <CardTextWrapper>
      <Title>{title}</Title>
    </CardTextWrapper>
  </CardWrapper>
)

DisorderCard.propTypes = {
  disorder: PropTypes.shape({
    contentHtml: PropTypes.element,
    icon: PropTypes.element,
    title: PropTypes.string.isRequired,
  }).isRequired,
  hiddenOverview: PropTypes.bool.isRequired,
  overview: PropTypes.bool.isRequired,
}

export default DisorderCard
