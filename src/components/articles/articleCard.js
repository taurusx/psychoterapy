import React from 'react'
import PropTypes from 'prop-types'

import Card from '../card'
import ArticleCardImage from './articleCardImage'
import ArticleCardText from './articleCardText'
import ArticleCardButton from './articleCardButton'

const ArticleCard = ({ article: node }) => (
  <Card>
    <ArticleCardImage postType={node.postType} node={node} />
    <ArticleCardText node={node} />
    <ArticleCardButton to={`/${node.postType}/${node.slug}`}>
      Czytaj więcej
    </ArticleCardButton>
  </Card>
)

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
}

export default ArticleCard
