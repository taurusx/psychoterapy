import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line
import styled, { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../styles/global-styles'
import { themes } from '../styles/themes'

import Header from './header'
import HeroHeader from './heroHeader'
import Footer from './footer'

const MainFull = styled.main`
  flex: 1 0 auto;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  margin: 0;
  padding: 0;
`

const Layout = props => {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`

  const header =
    location.pathname === rootPath ? (
      <HeroHeader siteTitle={title} location={location} fontColor="white" />
    ) : (
      <Header siteTitle={title} location={location} />
    )

  return (
    <ThemeProvider theme={themes.light}>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <GlobalStyles />
        {header}
        <MainFull>{children}</MainFull>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  location: PropTypes.shape({
    href: PropTypes.string,
    origin: PropTypes.string,
    pathname: PropTypes.string,
    state: PropTypes.object,
  }),
}

Layout.defaultProps = {
  title: ``,
  location: {},
}

export default Layout
