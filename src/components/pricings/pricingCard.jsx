import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line
import styled from 'styled-components'

import { rhythm } from '../../utils/typography'
import Card from '../card'
import { iconsMap } from '../icons'
import Link from '../link'
import PricingCardButton from './pricingCardButton'
import { pricingPropTypes } from './pricingPropTypes'

const CardWrapper = styled(Card)`
  position: relative;
  min-height: 400px;
  max-width: 400px;
  overflow: hidden;
  padding: ${rhythm(1.5)};
  padding-bottom: ${rhythm(2.5)};
  margin: auto;

  @media (max-width: 480px) {
    min-height: 350px;
    padding: ${rhythm(0.7)};
    padding-bottom: ${rhythm(1.5)};
  }
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
  margin-bottom: ${rhythm(1)};

  @media (max-width: 480px) {
    margin-top: 0;
  }

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
`

const CardTextWrapper = styled.div`
  min-height: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    min-height: 100px;
    margin: ${rhythm(1)} ${rhythm(0.5)} ${rhythm(0.8)};
  }
`

const Title = styled.h2`
  margin: 0;
  margin-bottom: 1rem;
  text-align: center;
`

const PriceWrapper = styled.p`
  text-align: center;
  span {
    font-size: 1.25rem;
    font-weight: bold;
  }
`

const PricingCard = ({ pricing }) => {
  const { icon, price, slug, time, title } = pricing
  const Icon = iconsMap[icon || 'contact']

  return (
    <Link to={`/cennik/${slug}`} style={{ boxShadow: 'none', width: '100%' }}>
      <CardWrapper>
        <CardTextWrapper>
          <Title>{title}</Title>
        </CardTextWrapper>
        <CardImageWrapper>
          {Icon && <Icon height="56px" width="56px" />}
        </CardImageWrapper>
        <PriceWrapper>
          <span>{price} zł</span>
          <small> (sesja {time} min)</small>
        </PriceWrapper>
        <PricingCardButton to={`/cennik/${slug}`}>
          Poznaj szczegóły
        </PricingCardButton>
      </CardWrapper>
    </Link>
  )
}

PricingCard.propTypes = {
  pricing: PropTypes.shape(pricingPropTypes.node).isRequired,
}

export default PricingCard
