import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line
import styled from 'styled-components'

import { rhythm } from '../../utils/typography'
import { formatDate } from '../../utils/utils'
import Link from '../link'

import { articlePropTypes } from './articlePropTypes'

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

const ArticleCardText = ({ article }) => {
  const formattedDate = formatDate(article.date)

  return (
    <CardTextWrapper>
      <Title>
        <Link to={`/${article.postType}/${article.slug}`}>{article.title}</Link>
      </Title>
      <DateAuthor>
        {formattedDate}
        {!article.author && 'Poradnia Emocja'}
        {article.author &&
          article.author.length > 0 &&
          article.author.map(
            author =>
              ` |
            ${author.firstName ? ` ${author.firstName}` : ''}
              ${author.lastName ? ` ${author.lastName}` : ''}`
          )}
      </DateAuthor>
      <Subtitle>{article.lead.lead}</Subtitle>
    </CardTextWrapper>
  )
}

ArticleCardText.propTypes = {
  article: PropTypes.shape(articlePropTypes.node).isRequired,
}

export default ArticleCardText
