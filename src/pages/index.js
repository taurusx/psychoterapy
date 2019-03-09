import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Listing from "../components/listing"
import ButtonLink from './../components/buttonLink';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulArticlePost.edges

    return (
      <Layout location={this.props.location} title={siteTitle} fullWidth>
        <SEO
          title="Strona Główna"
          keywords={[`psychoterapia`, `Rzeszów`, `depresja`, `poradnia`]}
        />
        <div>
          <h2>Ostatnie wpisy</h2>
          <Listing posts={posts} />
          <ButtonLink to="/artykuly/" lightTheme arrow alignRight>Zobacz wszystkie</ButtonLink>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulArticlePost (
      filter: { node_locale: { eq: "pl-PL" } }
      sort: { fields: [date], order: DESC }
      limit: 3
    ) {
      ...AllContentfulArticlePosts
    }
  }
`
