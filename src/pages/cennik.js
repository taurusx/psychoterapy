import React from 'react'
import { graphql } from 'gatsby'

import ButtonLink from '../components/buttonLink'
import Layout from '../components/layout'
import PageHeader from '../components/pageHeader'
import PricingsListing from '../components/pricings/pricingsListing'
import Section from '../components/section'
import SEO from '../components/seo'
import { JournalImage } from '../components/siteImages'

const CONTENT_WIDTH = '75%'

const PricingPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const pricings = data.allContentfulPricing.edges
    .map(edge => edge.node)
    .sort(({ order: orderA }, { order: orderB }) => orderA - orderB)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Cennik"
        keywords={[
          `cennik usług`,
          `konsultacja`,
          `psychoterapia`,
          `poradnia`,
          'psycholog',
          'Warszawa Ursus',
        ]}
      />
      <PageHeader backgroundImg={<JournalImage />} maxWidth={CONTENT_WIDTH}>
        <h1>Cennik</h1>
      </PageHeader>
      <Section maxWidth={CONTENT_WIDTH}>
        <PricingsListing pricings={pricings} />
      </Section>
      <Section maxWidth={CONTENT_WIDTH} backgroundColor="#eee">
        <h2>Skontaktuj się ze mną i zapisz się na wizytę</h2>
        <ButtonLink to="/kontakt/" lightTheme transparent arrow alignRight>
          Umów wizytę
        </ButtonLink>
      </Section>
    </Layout>
  )
}

export default PricingPage

export const pricingPageQuery = graphql`
  query PricingsQuery {
    allContentfulPricing(
      filter: { node_locale: { eq: "pl-PL" } }
      sort: { fields: [order], order: ASC }
    ) {
      ...AllContentfulPricings
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
