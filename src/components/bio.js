import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'
import { authors } from '../../content/assets/authors/authors.json'

function Bio({ author }) {
  let postAuthor
  authors.forEach(authorBio => {
    if (authorBio.name === author) postAuthor = authorBio
  })
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const authorName =
          postAuthor.name === 'info' ? 'Psychoterapia Rzeszów' : postAuthor.name
        const authorSocial = postAuthor.social
        const avatarString = `avatar${postAuthor.avatar_string}`
        const authorAvatar = data[avatarString]
          ? data[avatarString].childImageSharp.fixed
          : data.avatar.childImageSharp.fixed
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={authorAvatar}
              alt={authorName}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              Autorem artykułu jest <strong>{authorName}</strong>
              {postAuthor.descr_bio}.{` `}
              {authorSocial.twitter && (
                <a href={`https://twitter.com/${authorSocial.twitter}`}>
                  Odwiedź profil na Twitterze
                </a>
              )}
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatarWojnar: file(absolutePath: { regex: "/avatar.+wojnar./" }) {
      childImageSharp {
        fixed(width: 50, height: 50, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    avatar: file(absolutePath: { regex: "/logo-psychoterapia-blue.webp/" }) {
      childImageSharp {
        fixed(width: 50, height: 50, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Bio
