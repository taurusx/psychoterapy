import React from 'react'
import { graphql } from 'gatsby'

import ButtonLink from '../components/buttonLink'
import ArticlesListing from '../components/articles/articlesListing'
import Layout from '../components/layout'
import PageHeader from '../components/pageHeader'
import Section from '../components/section'
import SEO from '../components/seo'
import { TypewriterImage } from '../components/siteImages'

const CONTENT_WIDTH = '80%'

const ArticlesIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allContentfulArticlePost.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Artykuły"
        description="Wiedza z zakresu psychologii i psychoterapii - z czego wynikają różne trudności, jak to wpływa na nasze życie i co możemy robić, by sobie pomóc."
        keywords={[
          `psychologia`,
          `wiedza`,
          `terapia`,
          `schematy`,
          `pomoc`,
          `nerwica`,
          `depresja`,
          `poradnia`,
        ]}
      />
      <PageHeader backgroundImg={<TypewriterImage />} maxWidth={CONTENT_WIDTH}>
        <h1>Artykuły</h1>
      </PageHeader>
      <Section maxWidth={CONTENT_WIDTH}>
        <ArticlesListing posts={posts} />
      </Section>
      <Section maxWidth={CONTENT_WIDTH} backgroundColor="#eee">
        <h2>Przeczytaj więcej o Agnieszce Wojnar-Jadczyszyn</h2>
        <ButtonLink to="/o-mnie/" lightTheme transparent arrow alignRight>
          O mnie
        </ButtonLink>
      </Section>
    </Layout>
  )
}

export default ArticlesIndex

export const articlesPageQuery = graphql`
  query ArticlesQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulArticlePost(
      filter: { node_locale: { eq: "pl-PL" } }
      sort: { fields: [date], order: DESC }
    ) {
      ...AllContentfulArticlePosts
    }
  }
`
