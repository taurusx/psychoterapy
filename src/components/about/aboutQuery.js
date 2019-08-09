import { graphql } from 'gatsby'

export const allDisordersQuery = graphql`
  fragment QueryContentfulAbout on ContentfulAbout {
    degree
    description {
      json
    }
    descriptionFirst {
      json
    }
    descriptionSummary {
      json
    }
    fullName
    image {
      description
      fluid(maxWidth: 600, maxHeight: 600, quality: 100) {
        ...GatsbyContentfulFluid
      }
      fixed(resizingBehavior: PAD, toFormat: WEBP, quality: 100, height: 800) {
        aspectRatio
        height
        src
        srcSet
        srcSetWebp
        srcWebp
        width
        base64
      }
    }
    imageDescription {
      imageDescription
    }
    positon
    slug
  }
`
