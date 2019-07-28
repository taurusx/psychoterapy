import React from 'react'
import { PropTypes } from 'prop-types' // eslint-disable-line
import styled from 'styled-components'

import DisorderCard from './disorderCard'
import { disorderPropTypes } from './disorderPropTypes'

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 3rem;
  justify-items: center;
  align-content: center;
  width: 100%;
  padding: 2rem 0;

  @media (max-width: 480px) {
    grid-gap: 1rem;
    grid-template-columns: 1fr;
  }
`

const DisordersListing = ({ disorders, overview = false, quantity }) => {
  let disordersList
  if (quantity && typeof parseInt(quantity, 10) === 'number') {
    disordersList = disorders.slice(0, parseInt(quantity, 10))
  } else {
    disordersList = disorders
  }

  return (
    <GridLayout>
      {disordersList.map((disorder, index) => {
        return (
          <DisorderCard
            key={disorder.node.title}
            disorder={disorder.node}
            overview={overview}
            hiddenOverview={(overview && index >= 3) || false}
          />
        )
      })}
    </GridLayout>
  )
}

export default DisordersListing

DisordersListing.propTypes = {
  disorders: PropTypes.arrayOf(PropTypes.shape(disorderPropTypes.node))
    .isRequired,
}
