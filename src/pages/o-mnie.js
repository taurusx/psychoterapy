import React from 'react'
import { graphql } from 'gatsby'

import AboutWithPic from '../components/about/aboutWithPic'
import ButtonLink from '../components/buttonLink'
import DiplomasSlider from '../components/diplomasSlider'
import Layout from '../components/layout'
import PageHeader from '../components/pageHeader'
import Section from '../components/section'
import SEO from '../components/seo'
import { DeskPaperImage } from '../components/siteImages'

const CONTENT_WIDTH = '75%'

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const aboutDetails = data.contentfulAbout
  const { diplomas } = aboutDetails

  return (
    <Layout location={location} title={siteTitle} fullWidth>
      <SEO
        title="O mnie"
        keywords={[
          `Agnieszka Wojnar-Jadczyszyn`,
          `psychoterapeuta poznawczo-behawioralny`,
          `psychoterapeuta`,
          `psycholog`,
        ]}
      />
      <PageHeader backgroundImg={<DeskPaperImage />} maxWidth={CONTENT_WIDTH}>
        <h1>O mnie</h1>
      </PageHeader>
      <Section maxWidth={CONTENT_WIDTH}>
        <AboutWithPic about={aboutDetails} />
      </Section>
      {/* Diplomas */}
      <Section
        backgroundColor="#555"
        color="white"
        titleAlign="center"
        title="Dyplomy i certyfikaty"
      >
        <DiplomasSlider diplomas={diplomas} />
      </Section>
      <Section maxWidth={CONTENT_WIDTH} backgroundColor="#eee">
        <h2>Zapoznaj się z moją ofertą terapeutyczną</h2>
        <ButtonLink to="/terapia/" lightTheme transparent arrow alignRight>
          Prowadzone terapie
        </ButtonLink>
      </Section>
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
    contentfulAbout(
      node_locale: { eq: "pl-PL" }
      slug: { eq: "agnieszka-wojnar-jadczyszyn" }
    ) {
      ...QueryContentfulAbout
    }
  }
`
