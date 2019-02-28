import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const ServicesPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <h1>Oferta</h1>
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