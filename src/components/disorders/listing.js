import React from 'react'
import styled from 'styled-components'

import { disorders } from './content'
import DisorderCard from './disorderCard'

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

const DisordersListing = ({ overview, quantity }) => {
  let disordersList
  if (quantity && typeof parseInt(quantity, 10) === 'number') {
    disordersList = disorders.types.slice(0, parseInt(quantity, 10))
  } else {
    disordersList = disorders.types
  }

  return (
    <GridLayout>
      {disordersList.map((disorder, index) => {
        return (
          <DisorderCard
            key={disorder.title}
            disorder={disorder}
            overview={overview}
            hiddenOverview={(overview && index >= 3) || false}
          />
        )
      })}
    </GridLayout>
  )
}

export default DisordersListing
