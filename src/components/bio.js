import React from 'react'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio({ author }) {
  if (!author) return null

  return (
    <>
      {author.map(
        ({
          avatar,
          description: { description } = '',
          firstName,
          lastName,
          social,
        }) => {
          const authorName = `${firstName || ''} ${lastName || ''}`

          return (
            <div
              key={authorName}
              style={{
                display: `flex`,
                marginBottom: rhythm(2.5),
              }}
            >
              <Image
                fixed={avatar.fixed}
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
                {description && ` - ${description} `}
                {social && social.twitter && (
                  <a href={`https://twitter.com/${social.twitter}`}>
                    Odwiedź profil na Twitterze
                  </a>
                )}
              </p>
            </div>
          )
        }
      )}
    </>
  )
}

export default Bio
