import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ArticlesListing from '../components/articles/articlesListing'
import Section from '../components/section'

const ArticlesIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allContentfulArticlePost.edges

  return (
    <Layout location={location} title={siteTitle} fullWidth>
      <SEO
        title="Artykuły"
        keywords={[`psychoterapia`, `nerwica`, `depresja`, `poradnia`]}
      />
      <Section maxWidth="80%">
        <ArticlesListing posts={posts} />
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
