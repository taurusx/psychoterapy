import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

class ThanksPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Dziękujemy" />
        <h1>Dziękujemy</h1>
        <p>Formularz został przyjęty.</p>
        <p>
          Powrót do <Link to="/kontakt/">STRONY KONTAKTOWEJ</Link>
        </p>
      </Layout>
    )
  }
}

export default ThanksPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
