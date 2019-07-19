import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PageHeader from '../components/pageHeader'
import Section from '../components/section'
import SEO from '../components/seo'
import { JarPlantImage } from '../components/siteImages'

const CONTENT_WIDTH = '75%'

const ServicesPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle} fullWidth>
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
      <PageHeader backgroundImg={<JarPlantImage />} maxWidth={CONTENT_WIDTH}>
        <h1>Terapie</h1>
      </PageHeader>
      <Section maxWidth={CONTENT_WIDTH}></Section>
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
