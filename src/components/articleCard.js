import React from "react"
import PropTypes from 'prop-types'

import Card from './card'
import CardImage from './cardImage'
import CardText from './cardText'
import CardButton from './cardButton'

const ArticleCard = ({ article: node }) => (
  <Card>
    <CardImage postType={node.postType} node={node}/>
    <CardText node={node}/>
    <CardButton to={`/${node.postType}/${node.slug}`}>
      Czytaj więcej
    </CardButton>
  </Card>
)

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
}

export default ArticleCard