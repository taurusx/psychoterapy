import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Section from '../components/section'
import SEO from '../components/seo'

const ThanksPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Section maxWidth="70%">
        <SEO title="Dziękujemy" />
        <h1>Dziękujemy</h1>
        <p>Formularz został przyjęty.</p>
        <p>
          Powrót do <Link to="/kontakt/">STRONY KONTAKTOWEJ</Link>
        </p>
      </Section>
    </Layout>
  )
}

export default ThanksPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
