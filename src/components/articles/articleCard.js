import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line

import Card from '../card'

import ArticleCardImage from './articleCardImage'
import ArticleCardText from './articleCardText'
import ArticleCardButton from './articleCardButton'
import { articlePropTypes } from './articlePropTypes'

const ArticleCard = ({ article }) => (
  <Card>
    <ArticleCardImage article={article} />
    <ArticleCardText article={article} />
    <ArticleCardButton to={`/${article.postType}/${article.slug}`}>
      Czytaj więcej
    </ArticleCardButton>
  </Card>
)

ArticleCard.propTypes = {
  article: PropTypes.shape(articlePropTypes.node).isRequired,
}

export default ArticleCard
