import { graphql } from 'gatsby'

export const allDisordersQuery = graphql`
  fragment QueryContentfulAbout on ContentfulAbout {
    description {
      json
    }
    descriptionFirst {
      json
    }
    descriptionSummary {
      json
    }
    diplomas {
      description
      fixed(quality: 80, height: 250) {
        ...GatsbyContentfulFixed
      }
      fluid(maxHeight: 1024, maxWidth: 1024, quality: 80) {
        ...GatsbyContentfulFluid
      }
      id
    }
    fullName
    image {
      description
      fluid(maxWidth: 600, maxHeight: 600, quality: 95) {
        ...GatsbyContentfulFluid
      }
      fixed(resizingBehavior: PAD, toFormat: WEBP, quality: 95, height: 800) {
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
