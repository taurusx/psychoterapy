import React from 'react'
import { graphql } from 'gatsby'

import GoogleMap from '../components/contact/googleMap'
import Form from '../components/form'
import Layout from '../components/layout'
import Section from '../components/section'
import SEO from '../components/seo'

const CONTENT_WIDTH = '75%'

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle} fullWidth>
      <SEO
        title="Kontakt"
        keywords={[
          `kontakt`,
          `Rzeszów`,
          `Warszawa`,
          `psychoterapia`,
          `poradnia`,
        ]}
      />
      <Section maxWidth={CONTENT_WIDTH}>
        <h1>Kontakt</h1>
        <Form />
      </Section>
      <GoogleMap />
    </Layout>
  )
}

export default ContactPage

export const contactPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
