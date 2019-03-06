import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"
import Header from "../components/header"
import HeroHeader from "../components/heroHeader"

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
          {/* TODO: replace HeroText below with correct one, 
            add mobile media */}
          <h1 style={{
            ...scale(1.8),
            marginTop: rhythm(0),
            marginBottom: rhythm(-2),
          }}>
            <span style={{ float: 'left', fontSize: '80%',
              marginTop: rhythm(0), }}>NAWET</span>
            <span style={{ float: 'left', textShadow: '3px 5px 5px #0741ad',
              marginTop: rhythm(-0.5),}}>NAJDŁUŻSZA</span>
            <span style={{ float: 'right', fontSize: '80%',
              marginTop: rhythm(-0.5), }}>PODRÓŻ</span></h1>
          <h1 style={{ textAlign: 'center', width: '76%', alignSelf: 'center'}}><span>ZACZYNA SIĘ OD PIERWSZEGO KROKU</span></h1>
          <button style={{
            ...scale(1.0),
            alignSelf: 'center',
            width: `auto`,
            background: 'transparent',
            color: `${fontColor}`,
            border: `6px solid ${fontColor}`,
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 'bold',
            padding: `${rhythm(0.5)} ${rhythm(1.5)}`,
            borderRadius: rhythm(0.5),
          }}><Link to="/kontakt/" style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: `${fontColor}`,
            
          }}>WIZYTA</Link></button>
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