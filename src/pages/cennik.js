import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PricingPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Cennik"
        keywords={[`cennik usług`, `wizyta`, `psychoterapia`, `poradnia`]}
      />
      <h1>Cennik</h1>
    </Layout>
  )
}

export default PricingPage

export const pricingPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`