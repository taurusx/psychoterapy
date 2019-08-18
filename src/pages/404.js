import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Section from '../components/section'
import SEO from '../components/seo'

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Nie znaleziono strony" />
      <Section maxWidth="70%">
        <h1>Nie znaleziono strony</h1>
        <p>Niestety strona o podanym adresie nie istnieje.</p>
        <p>
          Zapraszamy na <Link to="/">STRONĘ GŁÓWNĄ</Link>
        </p>
      </Section>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
