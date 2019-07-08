import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DisordersListing from '../components/disorders/listing'
import Section from '../components/section'

const DisordersIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle} fullWidth>
      <SEO
        title="Artykuły"
        keywords={[`psychoterapia`, `nerwica`, `depresja`, `poradnia`]}
      />
      <Section maxWidth="80%">
        <h1>W czym pomagam?</h1>
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
