import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'

const FooterWrapper = styled.footer`
  flex: 0 1 auto;
  font-size: 80%;
  text-align: center;
`

const AuthorLink = styled.a`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
  font-weight: bold;
`

const Footer = () => (
  <StaticQuery
    query={footerQuery} // eslint-disable-line
    render={data => {
      const { author, authorSite, owner } = data.site.siteMetadata

      return (
        <FooterWrapper>
          {owner}&nbsp;©&nbsp;{new Date().getFullYear()}, Created&nbsp;by&nbsp;
          <AuthorLink href={authorSite}>{author}</AuthorLink>
        </FooterWrapper>
      )
    }}
  />
)

export default Footer

export const footerQuery = graphql`
  query {
    site {
      siteMetadata {
        owner
        author
        authorSite
      }
    }
  }
`
