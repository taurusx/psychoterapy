import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/section'
import DisordersListing from '../components/disorders/listing'
import ArticlesListing from '../components/articles/listing'
import ButtonLink from './../components/buttonLink'
import { MottoImage } from './../components/siteImages'
import AboutWithPic from '../components/aboutWithPic'
import TestimonialsSlider from '../components/testimonials/testimonialsSlider'

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
          keywords={[
            `psychoterapia`,
            `Warszawa`,
            `Rzeszów`,
            `psycholog`,
            `poradnia`,
          ]}
        />
        {/* Disorders */}
        <Section
          id="section-1"
          title="W czym pomagam?"
          maxWidth={CONTENT_WIDTH}
        >
          <DisordersListing overview quantity="6" />
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
            css={{
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: '160%',
              color: '#fff',
              maxWidth: '800px',
            }}
          >
            „To ciekawy paradoks, że dopiero kiedy akceptuję siebie takiego,
            jakim jestem, mogę się zmienić.”<small> -&nbsp;Carl Rogers</small>
          </h4>
        </Section>
        {/* About */}
        <Section id="section-3" title="O mnie" maxWidth={CONTENT_WIDTH}>
          <AboutWithPic>
            <p>
              Nazywam się <strong>Agnieszka Wojnar-Jadczyszyn</strong> i jestem
              psychologiem i psychoterapeutą poznawczo-behawioralnym.
            </p>
            <p>
              Prowadzę terapię osób dorosłych i młodzieży oraz konsultacje dla
              rodziców pomagając rozwijać kompetencje wychowawcze. W swojej
              pracy wykorzystuję metody terapii poznawczo-behawioralnej, terapii
              schematu oraz akceptacji i zaangażowania. Swoją pracę poddaje
              regularnej superwizji. Traktuję pracę terapeutyczną jako drogę do
              poprawy jakości życia. Stosuję przede wszystkim życzliwe i pełne
              szacunku podejście wobec każdej osoby, pomagając pacjentowi w
              procesie zmiany.
            </p>
          </AboutWithPic>
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
