import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Form from "../components/form"

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <h1>Kontakt</h1>
      <Form></Form>
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