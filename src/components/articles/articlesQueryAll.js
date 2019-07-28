import { graphql } from 'gatsby'

export const allArticlesQuery = graphql`
  fragment AllContentfulArticlePosts on ContentfulArticlePostConnection {
    edges {
      node {
        title
        lead {
          lead
        }
        date
        author {
          avatar {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          description {
            description
          }
          email
          firstName
          lastName
        }
        mainImage {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid
          }
        }
        slug
        postType
      }
    }
  }
`
