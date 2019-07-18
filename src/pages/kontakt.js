import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Details from '../components/contact/details'
import GoogleMap from '../components/contact/googleMap'
import Form from '../components/form'
import Layout from '../components/layout'
import Section from '../components/section'
import SEO from '../components/seo'

const CONTENT_WIDTH = '75%'

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  grid-gap: 4rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`

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
        <GridWrapper>
          <Details />
          <Form />
        </GridWrapper>
      </Section>
      <GoogleMap id="google-map" />
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
