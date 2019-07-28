import { graphql } from 'gatsby'

export const allDisordersQuery = graphql`
  fragment AllContentfulDisorders on ContentfulDisorderConnection {
    edges {
      node {
        description {
          json
        }
        icon
        order
        slug
        title
      }
    }
  }
`
