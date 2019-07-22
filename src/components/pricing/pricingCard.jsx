import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line
import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { options } from '../../transform/contentful-rich-text-options'
import { rhythm } from '../../utils/typography'
import Card from '../card'
import { iconsMap } from '../icons'
import PricingCardButton from './pricingCardButton'
import { pricingPropTypes } from './pricingPropTypes'

const CardWrapper = styled(Card)`
  position: relative;
  min-height: 500px;
  max-width: 480px;
  overflow: hidden;
  padding: ${rhythm(1.5)};
  padding-bottom: ${rhythm(2.5)};

  @media (max-width: 480px) {
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
  min-height: 150px;
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

const PriceWrapper = styled.p`
  text-align: center;
  span {
    font-size: 1.25rem;
    font-weight: bold;
  }
`

const ContentfulPricingText = styled.div`
  .contentful-image-container {
    display: flex;
    justify-content: center;
  }

  .contentful-post-link-container {
    max-width: 90%;
    margin: 1rem auto 2rem;
    background: #fff;
    border-radius: 0.5rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    box-shadow: 3px 3px 10px 2px #888;
    position: relative;

    &::after {
      content: 'PRZECZYTAJ';
      position: absolute;
      font-family: sans-serif;
      font-style: bold;
      left: 1rem;
      top: 1rem;
      padding: 0.3rem;
      font-size: 0.7rem;
      text-align: center;
      border-radius: 0.3rem;
      background: #ffffffdd;
    }

    &:hover {
      box-shadow: 3px 3px 10px 0px #888;
    }

    .text-container {
      text-align: center;
      font-size: 90%;
      padding: 0.5rem 1rem;
    }

    .image-container {
      align-self: stretch;
      flex: 200px 1 0;
    }

    img {
      max-width: 200px;
      margin-bottom: 0;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    h4 {
      letter-spacing: 0px;
      margin-top: 0;
      margin-bottom: 0.5rem;
    }

    p {
      margin: 0;
      max-height: 60px;
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    @media (max-width: 650px) {
      flex-direction: column;
      max-width: 400px;

      .image-container {
        max-height: 200px;
        margin-bottom: 0.5rem;
        border-bottom: 1px solid #eee;
        flex-basis: 200px;
        overflow: hidden;
      }
      img {
        max-width: none;
        height: 200px;
      }
    }
  }
`

const PricingCard = ({ pricing }) => {
  const { description, icon, price, time, title } = pricing
  const Icon = iconsMap[icon || 'contact']

  return (
    <CardWrapper>
      <CardTextWrapper>
        <Title>{title}</Title>
      </CardTextWrapper>
      <PriceWrapper>
        <span>{price} zł</span>
        <small> (sesja {time} min)</small>
      </PriceWrapper>
      <CardImageWrapper>
        {Icon && <Icon height="56px" width="56px" />}
      </CardImageWrapper>
      {/* Description */}
      <ContentfulPricingText>
        {documentToReactComponents(description.json, options)}
      </ContentfulPricingText>
      <PricingCardButton to="/kontakt">Umów się na wizytę</PricingCardButton>
    </CardWrapper>
  )
}

PricingCard.propTypes = {
  pricing: PropTypes.shape(pricingPropTypes.node).isRequired,
}

export default PricingCard
