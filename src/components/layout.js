import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './../styles/global-styles'
import { themes } from './../styles/themes'
import { rhythm } from '../utils/typography'
import Header from '../components/header'
import HeroHeader from '../components/heroHeader'
import Footer from './footer'

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

const Layout = props => {
  const { location, title, children, fullWidth } = props
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  let fontColor

  if (location.pathname === rootPath) {
    fontColor = 'white'
    header = (
      <HeroHeader siteTitle={title} location={location} fontColor={fontColor} />
    )
  } else {
    header = <Header siteTitle={title} location={location} />
  }

  return (
    <ThemeProvider theme={themes.light}>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <GlobalStyles />
        {header}
        {fullWidth ? <MainFull>{children}</MainFull> : <Main>{children}</Main>}
        <Footer />
      </div>
    </ThemeProvider>
  )
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
