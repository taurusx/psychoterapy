import React from 'react'
import { graphql } from 'gatsby'

import DisordersListing from '../components/disorders/listing'
import Layout from '../components/layout'
import PageHeader from '../components/pageHeader'
import Section from '../components/section'
import SEO from '../components/seo'
import { RescueBuoyImage } from '../components/siteImages'

const CONTENT_WIDTH = '75%'

const DisordersIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle} fullWidth>
      <SEO
        title="Artykuły"
        keywords={[`psychoterapia`, `nerwica`, `depresja`, `poradnia`]}
      />
      <PageHeader backgroundImg={<RescueBuoyImage />} maxWidth={CONTENT_WIDTH}>
        <h1>W czym pomagam</h1>
      </PageHeader>
      <Section maxWidth={CONTENT_WIDTH}>
        <DisordersListing />
      </Section>
    </Layout>
  )
}

export default DisordersIndex

export const articlesPageQuery = graphql`
  query DisordersQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
