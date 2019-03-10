import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import Header from "../components/header"
import HeroHeader from "../components/heroHeader"
import HeroText from "./heroText";

const Main = styled.main`
  flex: 1 0 auto;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(32)};
  padding: ${rhythm(1.5)} ${rhythm(5 / 4)} ${rhythm(1 / 4)};
`

const MainFull = styled(Main)`
  max-width: initial;
  margin: 0;
  padding: 0;
`

class Layout extends React.Component {
  render() {
    const { location, title, children, fullWidth } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    let fontColor

    if (location.pathname === rootPath) {
      fontColor = "white" 
      header = (
        <HeroHeader siteTitle={title} location={location} fontColor={fontColor}>
          <HeroText />
        </HeroHeader>
      )
    } else {
      header = <Header siteTitle={title} location={location} />
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
              {header}
              {fullWidth ? (
                <MainFull>
                  {children}
                </MainFull>
                ) : (
                <Main>
                  {children}
                </Main>
              )}
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