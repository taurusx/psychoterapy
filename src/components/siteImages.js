import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const withImageData = WrappedComponent => props => (
  <StaticQuery
    query={query} // eslint-disable-line no-use-before-define
    render={data => <WrappedComponent {...props} imageData={data} />}
  />
)

export const MottoImage = withImageData(props => (
  <Img
    fluid={props.imageData.mottoImage.childImageSharp.fluid}
    alt=""
    {...props}
  />
))

export const AgnieszkaImage = withImageData(props => (
  <Img
    fluid={props.imageData.agnieszkaImage.childImageSharp.fluid}
    alt="Agnieszka Wojnar-Jadczyszyn"
    {...props}
  />
))

export const LibraryImage = withImageData(props => (
  <Img
    fluid={props.imageData.libraryImage.childImageSharp.fluid}
    alt="Books on shelves in a library"
    {...props}
  />
))

export const query = graphql`
  query SiteImagesQuery {
    mottoImage: file(
      relativePath: { regex: "/dziewczyna-w-kapeluszu-usmiechnieta.jpg/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    agnieszkaImage: file(relativePath: { regex: "/A.Wojnar-Jadczyszyn.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 500) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    libraryImage: file(
      relativePath: { regex: "/biblioteka-ksiazki-edukacja.jpg/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
