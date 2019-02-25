import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <StaticQuery
        query={layoutQuery}
        render={data => {
          const owner = data.site.siteMetadata.owner
          const author = data.site.siteMetadata.author
          const authorSite = data.site.siteMetadata.authorSite
          return (
            <div
              style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(32),
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                padding: `${rhythm(1.5)} ${rhythm(5 / 4)} ${rhythm(1 / 4)}`,
              }}
            >
              <header>{header}</header>
              <main style={{
                flex: 'auto 1 0',
              }}>{children}</main>
              <footer style={{
                fontSize: '80%',
                textAlign: 'center',
              }}>
                {owner}&nbsp;©&nbsp;{new Date().getFullYear()}, 
                Created&nbsp;by&nbsp;
                <a href={authorSite}>{author}</a>
              </footer>
            </div>
          )
        }}
      />
    )
  }
}

export default Layout

export const layoutQuery = graphql`
  query {
    site {
      siteMetadata {
        owner
        author
        authorSite
      }
    }
  }
`