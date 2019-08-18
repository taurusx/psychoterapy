import { graphql } from 'gatsby'

export const allPricingsQuery = graphql`
  fragment AllContentfulPricings on ContentfulPricingConnection {
    edges {
      node {
        description {
          json
        }
        icon
        order
        price
        slug
        time
        title
      }
    }
  }
`
