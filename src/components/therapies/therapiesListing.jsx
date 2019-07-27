import React from 'react'
import { PropTypes } from 'prop-types' // eslint-disable-line
import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { options } from '../../transform/contentful-rich-text-options'
import TextWithPic from '../textWithPic'
import { therapyPropTypes } from './therapyPropTypes'

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem;
  justify-items: center;
  align-content: center;
  width: 100%;
  padding: 2rem 0;

  & > * {
    margin-bottom: 0;
  }

  @media (max-width: 960px) {
    grid-gap: 1.5rem;
  }
`

const TherapiesListing = ({ therapies }) => (
  <GridLayout>
    {therapies.map((therapy, index) => {
      const { description, image, title } = therapy
      /* Description */
      const text = documentToReactComponents(description.json, options)
      return (
        <TextWithPic
          key={title}
          image={image}
          text={text}
          title={title}
          picLeft={index % 2 === 0 ? undefined : true}
        />
      )
    })}
  </GridLayout>
)

TherapiesListing.propTypes = {
  therapies: PropTypes.arrayOf(PropTypes.shape(therapyPropTypes.node))
    .isRequired,
}

export default TherapiesListing
