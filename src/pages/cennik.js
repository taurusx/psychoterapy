import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const PricingPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
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