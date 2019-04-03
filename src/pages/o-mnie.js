import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="O mnie"
        keywords={[
          `Agnieszka Wojnar-Jadczyszyn`,
          `psychoterapeuta`,
          `psycholog`,
          `poradnia`,
        ]}
      />
      <h1>O mnie</h1>
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
