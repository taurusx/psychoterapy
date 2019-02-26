import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import { rhythm, scale } from "../utils/typography"

const ContentfulPostText = styled.div`
  .contentful-image-container {
    display: flex;
    justify-content: center;
  }

  .contentful-post-link-container {
    max-width: 90%;
    margin: 1rem auto 2rem;
    background: #fff;
    border-radius: 0.5rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    box-shadow: 3px 3px 10px 2px #888;
    position: relative;

    &::after {
      content: "PRZECZYTAJ";
      position: absolute;
      font-family: sans-serif;
      font-style: bold;
      left: 1rem;
      top: 1rem;
      padding: 0.3rem;
      font-size: 0.7rem;
      text-align: center;
      border-radius: 0.3rem;
      background: #ffffffdd;
    }

    &:hover {
      box-shadow: 3px 3px 10px 0px #888;
    }

    .text-container {
      text-align: center;
      font-size: 90%;
      padding: 0.5rem 1rem;
    }

    .image-container {
      align-self: stretch;
      flex: 200px 1 0;
    }

    img {
      max-width: 200px;
      margin-bottom: 0;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    h4 {
      letter-spacing: 0px;
      margin-top: 0;
      margin-bottom: 0.5rem;
    }

    p {
      margin: 0;
      max-height: 60px;
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;  
    }

    @media (max-width: 650px) {
      flex-direction: column;
      max-width: 400px;

      .image-container {
        max-height: 200px;
        margin-bottom: 0.5rem;
        border-bottom: 1px solid #eee;
        flex-basis: 200px;
        overflow: hidden;
      }
      img {
        max-width: none;
        height: 200px;
      }
    }
  }
`

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
        <ContentfulPostText dangerouslySetInnerHTML={{
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
