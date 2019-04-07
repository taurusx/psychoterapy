import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Listing from '../components/listing'
import Section from '../components/section'

class ArticlesIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulArticlePost.edges

    return (
      <Layout location={this.props.location} title={siteTitle} fullWidth>
        <SEO
          title="Artykuły"
          keywords={[`psychoterapia`, `nerwica`, `depresja`, `poradnia`]}
        />
        <Section maxWidth="80%">
          <Listing posts={posts} />
        </Section>
      </Layout>
    )
  }
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
