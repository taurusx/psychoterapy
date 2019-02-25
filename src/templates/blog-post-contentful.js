import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import { rhythm, scale } from "../utils/typography"

class ArticlePostContentfulTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulArticlePost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.title}
          description={post.subtitle}
        />
        <Img fluid={post.image.fluid} />
        <h1>{post.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.date}{` | `}
          {post.author === 'info' ? siteTitle : post.author}
        </p>
        <p style={{
          fontWeight: 'bold',
          fontStyle: 'italic',
        }}>{post.subtitle}</p>
        <div dangerouslySetInnerHTML={{
          __html: post.content.childContentfulRichText.html
        }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio author={post.author} />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slugFull} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slugFull} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default ArticlePostContentfulTemplate

export const pageQuery = graphql`
  query ContentfulArticlePostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulArticlePost( 
      slug: { eq: $slug }
    ) {
      title
      subtitle
      date (formatString: "DD MMMM, YYYY", locale: "pl-PL" )
      author
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`
