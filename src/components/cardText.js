import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'

const colorAccent = "#0741AD"

const CardTextWrapper = styled.div`
  flex: 50%;
  margin: ${rhythm(1)};
  overflow: hidden;

  h3 {    
    margin-top: 0;
    margin-bottom: ${rhythm(1 / 4)};
  }

  a {
    color: ${colorAccent};
  }

  p {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
  }
`

const CardText = ({ node }) => (
  <StaticQuery
    query={cardTextQuery}
    render={data => {
      const siteTitle = data.site.siteMetadata.title
      const date = new Date(node.date);
      const dayMonthFormatted = date.toLocaleDateString('pl-PL',
        { day: '2-digit', month: 'long' })
      const yearFormatted = date.toLocaleDateString('pl-PL',
        { year: 'numeric' })
    
      return (
        <CardTextWrapper>
          <h3>
            <Link style={{ boxShadow: `none` }}
              to={`/${node.postType}/${node.slug}`}>
              {node.title}
            </Link>
          </h3>
          <small>{`${dayMonthFormatted}, ${yearFormatted}`}{` | `}
            {node.author === 'info' ? siteTitle : node.author}</small>
          <p>{node.subtitle}</p>
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