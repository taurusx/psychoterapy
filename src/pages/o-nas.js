import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <h1>O nas</h1>
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`