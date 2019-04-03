import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'
import Link from './link'

const colorAccent = '#0741AD'

const CardTextWrapper = styled.div`
  flex: 50%;
  margin: ${rhythm(1)};
  overflow: hidden;
`

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: ${rhythm(1 / 4)};

  a {
    box-shadow: none;
    color: ${colorAccent};
  }
`

const DateAuthor = styled.small`
  display: block;
  margin-bottom: ${rhythm(1 / 4)};
  opacity: 0.8;
`

const Subtitle = styled.p`
  margin: 0;
  max-height: 84px;
  line-height: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media (max-width: 480px) {
    line-height: 25px;
    max-height: 100px;
    font-size: 90%;
    -webkit-line-clamp: 4;
  }
`

const CardText = ({ node }) => (
  <StaticQuery
    query={cardTextQuery}
    render={data => {
      const siteTitle = data.site.siteMetadata.title
      const date = new Date(node.date)
      const dayMonthFormatted = date.toLocaleDateString('pl-PL', {
        day: '2-digit',
        month: 'long',
      })
      const yearFormatted = date.toLocaleDateString('pl-PL', {
        year: 'numeric',
      })

      return (
        <CardTextWrapper>
          <Title>
            <Link to={`/${node.postType}/${node.slug}`}>{node.title}</Link>
          </Title>
          <DateAuthor>
            {`${dayMonthFormatted}, ${yearFormatted}`}
            {` | `}
            {node.author === 'info' ? siteTitle : node.author}
          </DateAuthor>
          <Subtitle>{node.subtitle}</Subtitle>
        </CardTextWrapper>
      )
    }}
  />
)

CardText.propTypes = {
  node: PropTypes.object.isRequired,
}

export default CardText

export const cardTextQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
