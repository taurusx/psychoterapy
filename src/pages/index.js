import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/section'
import DisordersListing from '../components/disorders/disordersListing'
import ArticlesListing from '../components/articles/articlesListing'
import ButtonLink from '../components/buttonLink'
import { MottoImage } from '../components/siteImages'
import AboutWithPic from '../components/about/aboutWithPic'
import TestimonialsSlider from '../components/testimonials/testimonialsSlider'

const CONTENT_WIDTH = '80%'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allContentfulArticlePost.edges
  const disorders = data.allContentfulDisorder.edges
  const aboutDetails = data.contentfulAbout

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Strona Główna"
        keywords={[
          `psychoterapia`,
          `Warszawa`,
          `psychoterapeuta poznawczo-behawioralny`,
          `psycholog`,
          `Warszawa Ursus`,
        ]}
      />
      {/* Disorders */}
      <Section id="section-1" title="W czym pomagam?" maxWidth={CONTENT_WIDTH}>
        <DisordersListing overview quantity="6" disorders={disorders} />
        <ButtonLink to="/w-czym-pomagam/" lightTheme arrow alignRight>
          Poznaj pełną listę i szczegóły
        </ButtonLink>
      </Section>
      {/* Motto */}
      <Section
        id="section-2"
        minHeight="400px"
        backgroundImg={<MottoImage />}
        overlay="#11111166"
      >
        <h4
          css={`
            align-self: center;
            text-align: center;
            font-size: 160%;
            color: #fff;
            max-width: 800px;

            @media (max-width: 480px) {
              font-size: 120%;
            }
          `}
        >
          „To ciekawy paradoks, że dopiero kiedy akceptuję siebie takiego, jakim
          jestem, mogę się zmienić.”<small> -&nbsp;Carl Rogers</small>
        </h4>
      </Section>
      {/* About */}
      <Section id="section-3" title="O mnie" maxWidth={CONTENT_WIDTH}>
        <AboutWithPic about={aboutDetails} summaryOnly />
        <ButtonLink to="/o-mnie/" lightTheme transparent arrow alignRight>
          Poznaj mnie
        </ButtonLink>
      </Section>
      {/* Testimonials */}
      <Section id="section-4" backgroundColor="#555">
        <TestimonialsSlider />
      </Section>
      {/* Articles */}
      <Section id="section-5" title="Ostatnie wpisy" maxWidth={CONTENT_WIDTH}>
        <ArticlesListing posts={posts} />
        <ButtonLink to="/artykuly/" lightTheme arrow alignRight>
          Zobacz wszystkie
        </ButtonLink>
      </Section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulArticlePost(
      filter: { node_locale: { eq: "pl-PL" } }
      sort: { fields: [date], order: DESC }
      limit: 3
    ) {
      ...AllContentfulArticlePosts
    }
    allContentfulDisorder(
      filter: { node_locale: { eq: "pl-PL" } }
      sort: { fields: [order], order: ASC }
      limit: 6
    ) {
      ...AllContentfulDisorders
    }
    contentfulAbout(
      node_locale: { eq: "pl-PL" }
      slug: { eq: "agnieszka-wojnar-jadczyszyn" }
    ) {
      ...QueryContentfulAbout
    }
  }
`
