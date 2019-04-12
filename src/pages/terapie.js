import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ServicesPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Terapie"
        keywords={[
          `terapia małżeństw`,
          `psychoterapia`,
          `nerwica`,
          `depresja`,
          `poradnia`,
        ]}
      />
      <h1>Terapie</h1>
    </Layout>
  )
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
