import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const Post = styled.div`
  display: flex;
`

const PostImage = styled.div`
  flex: 25%;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const PostText = styled.div`
  flex: 50%;
`

class Listing extends React.Component {
  render() {
    const { posts } = this.props

    return (
      <StaticQuery
        query={listingQuery}
        render={data => {
          const siteTitle = data.site.siteMetadata.title
          return (
            <div>
              {posts.map(({ node }) => {
                const title = node.title || node.slug
                return (
                  <Post key={node.slug} style={{
                    marginBottom: rhythm(5 / 4),
                  }}>
                    <PostImage>
                      <Img fluid={node.image.fluid} />
                    </PostImage>  
                    <PostText>
                      <h3
                        style={{
                          marginTop: rhythm(2),
                          marginBottom: rhythm(1 / 4),
                        }}
                      >
                        <Link style={{ boxShadow: `none` }}
                          to={`/${node.postType}/${node.slug}`}>
                          {title}
                        </Link>
                      </h3>
                      <small>{node.date}{` | `}
                        {node.author === 'info' ? siteTitle : node.author}</small>
                      <p>{node.subtitle}</p>
                    </PostText>
                  </Post>
                )
              })}
            </div>
          )
        }}
      />
    )
  }
}

export default Listing

export const listingQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export const allArticlesQuery = graphql`
  fragment AllContentfulArticlePosts on ContentfulArticlePostConnection {
    edges {
      node {
        title
        subtitle
        date (formatString: "DD MMMM, YYYY", locale: "pl-PL" )
        author
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slug
        postType
      }
    }
  }
`