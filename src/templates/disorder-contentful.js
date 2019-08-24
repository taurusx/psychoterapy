import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Section from '../components/section'
import SEO from '../components/seo'
import { options } from '../transform/contentful-rich-text-options'
import { rhythm } from '../utils/typography'
import ButtonLink from '../components/buttonLink'

const ContentfulDisorderText = styled.div`
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

const DisorderContentfulTemplate = ({ data, location, pageContext }) => {
  const disorder = data.contentfulDisorder
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  // simulate media-queries for 960px breakpoint
  const [maxWidth, setMaxWidth] = useState(
    typeof window !== 'undefined' &&
      window.innerWidth &&
      window.innerWidth > 960
      ? '720px'
      : '70%'
  )

  const handleResize = () => {
    setMaxWidth(
      typeof window !== 'undefined' &&
        window.innerWidth &&
        window.innerWidth > 960
        ? '720px'
        : '70%'
    )
  }

  if (typeof window !== 'undefined') window.onresize = handleResize

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={disorder.title}
        description={`${siteTitle} - Opis zaburzeń - ${disorder.title}`}
      />
      <Section maxWidth={maxWidth}>
        {/* Title */}
        <h1>{disorder.title}</h1>
        {/* Content */}
        <ContentfulDisorderText>
          {documentToReactComponents(disorder.description.json, options)}
        </ContentfulDisorderText>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        {/* Next and Previous */}
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            alignItems: 'center',
            listStyle: `none`,
            padding: 0,
            marginLeft: 0,
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
            {/* Back button */}
            <ButtonLink
              to="/w-czym-pomagam/"
              grayTheme
              overrideStyles={{ fontSize: '80%', borderWidth: '1px' }}
            >
              Powrót do listy
            </ButtonLink>
          </li>
          <li>
            {next && (
              <Link to={next.slugFull} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </Section>
    </Layout>
  )
}

export default DisorderContentfulTemplate

export const disorderPageQuery = graphql`
  query ContentfulDisorderBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulDisorder(slug: { eq: $slug }) {
      description {
        json
      }
      icon
      order
      slug
      title
    }
  }
`
