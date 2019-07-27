import React from 'react'
import { PropTypes } from 'prop-types' // eslint-disable-line
import styled from 'styled-components'

import PricingCard from './pricingCard'
import { pricingPropTypes } from './pricingPropTypes'

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(320px, 1fr));
  grid-gap: 3rem;
  justify-items: center;
  align-content: center;
  width: 100%;
  padding: 2rem 0;

  @media (max-width: 960px) {
    grid-gap: 1rem;
    grid-template-columns: 1fr;
  }
`

const PricingsListing = ({ pricings }) => (
  <GridLayout>
    {pricings.map(pricing => {
      return <PricingCard key={pricing.title} pricing={pricing} />
    })}
  </GridLayout>
)

PricingsListing.propTypes = {
  pricings: PropTypes.arrayOf(PropTypes.shape(pricingPropTypes)).isRequired,
}

export default PricingsListing
