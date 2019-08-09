import React from 'react'
import { PropTypes } from 'prop-types' // eslint-disable-line
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'

const SINGLE_COLUMN_BREAKPOINT = '960px'
const NARROW_COLUMN_WIDTH = '300px'

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
          grid-template-columns: ${NARROW_COLUMN_WIDTH} 1fr;
          grid-template-areas:
            'title title'
            'pic text';
        `
      case 'right':
        return css`
          grid-template-columns: 1fr ${NARROW_COLUMN_WIDTH};
          grid-template-areas:
            'title title'
            'text pic';
        `
      default:
        return css`
          grid-template-columns: 1fr 1fr;
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

  @media (max-width: ${SINGLE_COLUMN_BREAKPOINT}) {
    grid-template-columns: 1fr;
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

    ${({ hasTitle, summaryOnly }) =>
      !hasTitle &&
      !summaryOnly &&
      css`
        grid-template-areas: 'text';
      `}
  }
`

/* Title */
const StyledTitle = styled.h2`
  text-align: ${({ titleAlign }) => titleAlign || 'center'};
  word-break: break-word;
  grid-area: title;

  @media (max-width: ${SINGLE_COLUMN_BREAKPOINT}) {
    text-align: left;
  }
`

/* Text (description) */
const StyledText = styled.div`
  text-align: ${({ imagePosition, textAlign }) => {
    if (textAlign) return textAlign
    return imagePosition === 'none' ? 'center' : imagePosition
  }};
  grid-area: text;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${SINGLE_COLUMN_BREAKPOINT}) {
    text-align: left;
  }
`

/* Image */
const StyledImage = styled.figure`
  min-width: ${NARROW_COLUMN_WIDTH};
  max-width: 600px;
  min-height: 200px;
  max-height: 600px;
  margin-bottom: 0;
  padding: 0.3rem;
  overflow: hidden;
  border-radius: 1rem;
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-area: pic;

  .gatsby-image-wrapper {
    max-height: 100%;
    max-width: ${NARROW_COLUMN_WIDTH};
    width: 100% !important;
    height: 100%;
    border-radius: 1rem;
    box-shadow: 0 1px 4px 0 #00000033;
    background-color: #eee;

    & img {
      border-radius: 1rem;
    }
  }

  figcaption {
    margin: 0.5rem 0;
    padding-left: 1rem;
    padding-right: 1rem;
    max-width: ${NARROW_COLUMN_WIDTH};
    color: #555;
    text-align: center;
  }

  @media (max-width: ${SINGLE_COLUMN_BREAKPOINT}) {
    margin-bottom: 1rem;
    min-width: 80vw;

    .gatsby-image-wrapper {
      max-width: 600px;
    }

    figcaption {
      max-width: 100%;
    }
  }

  ${({ summaryOnly }) =>
    summaryOnly &&
    css`
      .gatsby-image-wrapper {
        max-height: 360px;
        max-width: 360px;
      }
    `}
`

const TextWithPic = ({
  image,
  imageCaption,
  imagePreserveHeight,
  picLeft,
  summaryOnly,
  text,
  textAlign,
  title,
  titleAlign,
}) => {
  const hasTitle = Boolean(title)
  const hasImage = Boolean(image)
  let imagePosition
  if (hasImage && picLeft) {
    imagePosition = 'left'
  } else if (hasImage) {
    imagePosition = 'right'
  } else {
    imagePosition = 'none'
  }
  const displayImage = imagePreserveHeight ? (
    <Img fixed={image && image.fixed} alt={image && image.description} />
  ) : (
    <Img fluid={image && image.fluid} alt={image && image.description} />
  )

  return (
    <Grid
      imagePosition={imagePosition}
      hasTitle={hasTitle}
      summaryOnly={summaryOnly}
    >
      {hasTitle && <StyledTitle titleAlign={titleAlign}>{title}</StyledTitle>}
      {hasImage && (
        <StyledImage summaryOnly={summaryOnly}>
          {displayImage}
          {imageCaption && <figcaption>{imageCaption}</figcaption>}
        </StyledImage>
      )}
      <StyledText imagePosition={imagePosition} textAlign={textAlign}>
        {text}
      </StyledText>
    </Grid>
  )
}

export default TextWithPic

TextWithPic.defaultProps = {
  image: null,
  imageCaption: '',
  imagePreserveHeight: false,
  picLeft: false,
  summaryOnly: false,
  textAlign: undefined,
  title: '',
  titleAlign: undefined,
}

TextWithPic.propTypes = {
  image: PropTypes.shape({
    image: PropTypes.oneOf([
      { fluid: PropTypes.object },
      { fixed: PropTypes.object },
    ]),
  }),
  imageCaption: PropTypes.string,
  imagePreserveHeight: PropTypes.bool,
  picLeft: PropTypes.bool,
  summaryOnly: PropTypes.bool,
  text: PropTypes.arrayOf(PropTypes.object).isRequired, // result of documentToReactComponents
  textAlign: PropTypes.oneOf(['left', 'center', 'right', undefined]),
  title: PropTypes.string,
  titleAlign: PropTypes.oneOf(['left', 'center', 'right', undefined]),
}
