import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Nie znaleziono strony" />
        <h1>Nie znaleziono strony</h1>
        <p>Niestety strona o podanym adresie nie istnieje.</p>
        <p>
          Zapraszamy na <Link to="/">STRONĘ GŁÓWNĄ</Link>
        </p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
