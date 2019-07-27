import React from 'react'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'

const SINGLE_COLUMN_MAX_WIDTH = '960px'

/* Grid */
const Grid = styled.div`
  display: grid;
  grid-auto-flow: dense;
  grid-gap: 1.5rem 3rem;
  width: 100%;
  margin-bottom: 2rem;

  ${({ imagePosition }) => {
    switch (imagePosition) {
      case 'left':
        return css`
          grid-template-areas:
            'title title'
            'pic text';
        `
      case 'right':
        return css`
          grid-template-areas:
            'title title'
            'text pic';
        `
      default:
        return css`
          grid-template-areas:
            'title title'
            'text text';
        `
    }
  }};

  & > * {
    width: 100%;
  }

  h2 {
    margin-top: 0;
  }

  @media (max-width: ${SINGLE_COLUMN_MAX_WIDTH}) {
    ${p =>
      p.imagePosition !== 'none'
        ? css`
            grid-template-areas:
              'title'
              'pic'
              'text';
          `
        : css`
            grid-template-areas:
              'title'
              'text';
          `}
  }
`

/* Title */
const StyledTitle = styled.h3`
  text-align: center;
  word-break: break-word;
  grid-area: title;

  @media (max-width: ${SINGLE_COLUMN_MAX_WIDTH}) {
    text-align: left;
  }
`

/* Text (description) */
const StyledText = styled.div`
  text-align: ${({ imagePosition }) =>
    imagePosition === 'none' ? 'center' : imagePosition};
  grid-area: text;

  & > *:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${SINGLE_COLUMN_MAX_WIDTH}) {
    text-align: left;
  }
`

/* Image */
const StyledImage = styled.figure`
  min-width: 280px;
  max-width: 600px;
  max-height: 600px;
  margin-bottom: 0;
  overflow: hidden;
  border-radius: 1rem;
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  grid-area: pic;

  .gatsby-image-wrapper {
    max-height: 100%;
    max-width: 100%;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    box-shadow: 0 1px 4px 0 #00000033;
  }

  figcaption {
    color: #555;
    text-align: center;
  }

  @media (max-width: ${SINGLE_COLUMN_MAX_WIDTH}) {
    margin-bottom: 1rem;
  }
`

const TextWithPic = ({ image, text, title, picLeft }) => {
  const hasImage = Boolean(image)
  let imagePosition
  if (hasImage && picLeft) {
    imagePosition = 'left'
  } else if (hasImage) {
    imagePosition = 'right'
  } else {
    imagePosition = 'none'
  }

  return (
    <Grid imagePosition={imagePosition}>
      <StyledTitle>{title}</StyledTitle>
      {Boolean(image) && (
        <StyledImage>
          <Img fluid={image.fluid} />
        </StyledImage>
      )}
      <StyledText imagePosition={imagePosition}>{text}</StyledText>
    </Grid>
  )
}

export default TextWithPic
