import React from 'react'
import { graphql } from 'gatsby'

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
    <Layout location={location} title={siteTitle} fullWidth>
      <SEO
        title="Cennik"
        keywords={[`cennik usług`, `wizyta`, `psychoterapia`, `poradnia`]}
      />
      <PageHeader backgroundImg={<JournalImage />} maxWidth={CONTENT_WIDTH}>
        <h1>Cennik</h1>
      </PageHeader>
      <Section maxWidth={CONTENT_WIDTH}>
        <PricingsListing pricings={pricings} />
      </Section>
    </Layout>
  )
}

export default PricingPage

export const pricingPageQuery = graphql`
  query {
    allContentfulPricing(filter: { node_locale: { eq: "pl-PL" } }) {
      edges {
        node {
          icon
          description {
            json
          }
          order
          price
          time
          title
          type
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
