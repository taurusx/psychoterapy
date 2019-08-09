import React from 'react'
import { graphql } from 'gatsby'

import ButtonLink from '../components/buttonLink'
import Layout from '../components/layout'
import PageHeader from '../components/pageHeader'
import Section from '../components/section'
import SEO from '../components/seo'
import { JarPlantImage } from '../components/siteImages'
import TherapiesListing from '../components/therapies/therapiesListing'

const CONTENT_WIDTH = '75%'

const TherapiesPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const therapies = data.allContentfulTherapy.edges
    .map(therapy => therapy.node)
    .sort(({ order: orderA }, { order: orderB }) => orderA - orderB)

  return (
    <Layout location={location} title={siteTitle} fullWidth>
      <SEO
        title="Terapie"
        description="Konsultacje oraz psychoterapia indywidualna, dziecka, par, małżeństw."
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
      <Section maxWidth={CONTENT_WIDTH}>
        <h3>Poznaj terapie, którymi się zajmuję.</h3>
        {therapies && <TherapiesListing therapies={therapies} />}
      </Section>
      <Section maxWidth={CONTENT_WIDTH} backgroundColor="#eee">
        <h2>Skontaktuj się ze mną i zapisz się na wizytę</h2>
        <ButtonLink to="/kontakt" lightTheme transparent arrow alignRight>
          Umów wizytę
        </ButtonLink>
      </Section>
    </Layout>
  )
}

export default TherapiesPage

export const therapiesPageQuery = graphql`
  query {
    allContentfulTherapy(filter: { node_locale: { eq: "pl-PL" } }) {
      edges {
        node {
          description {
            json
          }
          image {
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid
            }
          }
          order
          title
          type
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
