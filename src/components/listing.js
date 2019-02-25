import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import { rhythm } from "../utils/typography"

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
                  <div key={node.slug}>
                    <h3
                      style={{
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <Link style={{ boxShadow: `none` }}
                        to={`${node.postType}/${node.slug}`}>
                        {title}
                      </Link>
                    </h3>
                    <small>{node.date}{` | `}
                      {node.author === 'info' ? siteTitle : node.author}</small>
                    <p>{node.subtitle}</p>
                  </div>
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
