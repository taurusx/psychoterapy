import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <h1>Kontakt</h1>
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