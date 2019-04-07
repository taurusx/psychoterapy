import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/section'
import Listing from '../components/listing'
import ButtonLink from './../components/buttonLink'
import { MottoImage, AgnieszkaImage } from './../components/siteImages'

const CONTENT_WIDTH = '80%'

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
        {/* Offer */}
        <Section
          id="section-1"
          title="W czym pomagamy?"
          maxWidth={CONTENT_WIDTH}
        >
          <ButtonLink to="/o-mnie/" lightTheme arrow alignRight>
            Poznaj pełną ofertę
          </ButtonLink>
        </Section>
        {/* Motto */}
        <Section
          id="section-2"
          minHeight="400px"
          backgroundImg={<MottoImage />}
          overlay="#111"
        >
          <h4
            css={{
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: '200%',
              color: '#fff',
              maxWidth: '800px',
            }}
          >
            Nawet najdłuższa podróż zaczyna się od pierwszego kroku
          </h4>
        </Section>
        {/* About */}
        <Section
          id="section-3"
          title="O mnie"
          backgroundColor="#fafafa"
          maxWidth={CONTENT_WIDTH}
        >
          <div
            css={{
              display: 'flex',
              justifyContent: 'center',
              margin: '1rem 0',
              flexFlow: 'wrap',
            }}
          >
            <p css={{ marginRight: '2rem', flex: '1 1 auto' }}>
              Poradnia jest prowadzona przez Agnieszkę Wojnar-Jadczyszyn.
            </p>
            <AgnieszkaImage
              css={{
                width: '300px',
                height: '100%',
                borderRadius: '1rem',
                boxShadow: '0 1px 4px 0 #00000033',
              }}
            />
          </div>
          <ButtonLink to="/o-mnie/" lightTheme transparent arrow alignRight>
            Poznaj mnie
          </ButtonLink>
        </Section>
        {/* Articles */}
        <Section id="section-4" title="Ostatnie wpisy" maxWidth={CONTENT_WIDTH}>
          <Listing posts={posts} />
          <ButtonLink to="/artykuly/" lightTheme arrow alignRight>
            Zobacz wszystkie
          </ButtonLink>
        </Section>
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
    allContentfulArticlePost(
      filter: { node_locale: { eq: "pl-PL" } }
      sort: { fields: [date], order: DESC }
      limit: 3
    ) {
      ...AllContentfulArticlePosts
    }
  }
`
