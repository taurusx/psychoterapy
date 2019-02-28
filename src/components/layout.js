import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Header from "../components/header"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let headerColor, fontColor

    if (location.pathname === rootPath) {
      // TODO: add to Header props and pass deeper, add hover colors
      headerColor = "transparent" 
      fontColor = "white" 
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
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}>
              <Header siteTitle={title} />
              <main style={{
                flex: '1 0 auto',
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(32),
                padding: `${rhythm(1.5)} ${rhythm(5 / 4)} ${rhythm(1 / 4)}`,
              }}>{children}</main>
              <footer style={{
                flex: '0 1 auto',
                fontSize: '80%',
                textAlign: 'center',
              }}>
                {owner}&nbsp;©&nbsp;{new Date().getFullYear()}, 
                Created&nbsp;by&nbsp;
                <a href={authorSite}
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                    fontWeight: 'bold',
                  }}>{author}</a>
              </footer>
            </div>
          )
        }}
      />
    )
  }
}

Layout.propTypes = {
  title: PropTypes.string,
  location: PropTypes.object,
}

Layout.defaultProps = {
  title: ``,
  location: {},
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