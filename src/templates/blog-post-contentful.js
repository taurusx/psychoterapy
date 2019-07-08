import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { options } from '../transform/contentful-rich-text-options'
import { rhythm, scale } from '../utils/typography'

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
      content: 'PRZECZYTAJ';
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

const ArticlePostContentfulTemplate = ({ data, location, pageContext }) => {
  const post = data.contentfulArticlePost
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.title} description={post.lead.lead} />
      {/* Main image */}
      <Img fluid={post.mainImage.fluid} />
      {/* Title */}
      <h1>{post.title}</h1>
      {/* Date and Author */}
      <p
        style={{
          ...scale(-1 / 5),
          display: `block`,
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        {post.date}
        {!post.author && 'Poradnia Emocja'}
        {post.author &&
          post.author.length > 0 &&
          post.author.map(
            author =>
              ` |
            ${author.firstName ? ` ${author.firstName}` : ''}
              ${author.lastName ? ` ${author.lastName}` : ''}`
          )}
      </p>
      {/* Lead */}
      <p
        style={{
          fontWeight: 'bold',
          fontStyle: 'italic',
        }}
      >
        {post.lead.lead}
      </p>
      {/* Content */}
      <ContentfulPostText>
        {documentToReactComponents(post.content.json, options)}
      </ContentfulPostText>
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      {/* Bio */}
      <Bio author={post.author} />
      {/* Next and Previous */}
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

export default ArticlePostContentfulTemplate

export const pageQuery = graphql`
  query ContentfulArticlePostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulArticlePost(slug: { eq: $slug }) {
      title
      lead {
        lead
      }
      date(formatString: "DD MMMM, YYYY", locale: "pl-PL")
      author {
        avatar {
          fixed(width: 50, height: 50, cropFocus: CENTER) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
        description {
          description
        }
        email
        firstName
        lastName
      }
      mainImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      content {
        json
      }
    }
    allContentfulArticlePost {
      edges {
        node {
          childContentfulArticlePostContentRichTextNode {
            json
          }
        }
      }
    }
  }
`
