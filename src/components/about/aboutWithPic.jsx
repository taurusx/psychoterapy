import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { options } from '../../transform/contentful-rich-text-options'
import TextWithPic from '../textWithPic'

const AboutWithPic = ({ about, summaryOnly }) => {
  const {
    description,
    descriptionFirst,
    descriptionSummary,
    fullName,
    image,
    imageDescription: { imageDescription },
    position,
  } = about

  const name = `${fullName}${position ? `\n${position}` : ''}`

  const textFirst = documentToReactComponents(descriptionFirst.json, options)
  const textRest =
    (Boolean(description && description.json) &&
      documentToReactComponents(description.json, options)) ||
    null

  const textSummary =
    (Boolean(descriptionSummary && descriptionSummary.json) &&
      documentToReactComponents(descriptionSummary.json, options)) ||
    null

  if (summaryOnly)
    return (
      <TextWithPic
        text={textSummary}
        textAlign="left"
        image={image}
        imageCaption={imageDescription}
        imagePreserveHeight
        summaryOnly={summaryOnly}
      />
    )

  return (
    <>
      <TextWithPic
        title={name}
        text={textFirst}
        textAlign="left"
        image={image}
        imageCaption={imageDescription}
        imagePreserveHeight
      />
      <TextWithPic text={textRest} textAlign="left" />
    </>
  )
}

export default AboutWithPic
