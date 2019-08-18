import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Details from '../components/contact/details'
import GoogleMap from '../components/contact/googleMap'
import Form from '../components/form'
import Layout from '../components/layout'
import PageHeader from '../components/pageHeader'
import Section from '../components/section'
import SEO from '../components/seo'
import { LaptopImage } from '../components/siteImages'

const CONTENT_WIDTH = '75%'

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  grid-gap: 4rem;

  & > * > h3:first-child {
    margin-top: 1rem;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Kontakt"
        keywords={[
          `kontakt`,
          `gabinet emocja`,
          `Warszawa`,
          `psychoterapia`,
          `Warszawa Ursus`,
        ]}
      />
      <PageHeader backgroundImg={<LaptopImage />} maxWidth={CONTENT_WIDTH}>
        <h1>Kontakt</h1>
      </PageHeader>
      <Section maxWidth={CONTENT_WIDTH}>
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
