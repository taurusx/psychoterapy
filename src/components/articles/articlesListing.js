import React from 'react'
import { PropTypes } from 'prop-types' // eslint-disable-line
import styled from 'styled-components'

import ArticleCard from './articleCard'
import { articlePropTypes } from './articlePropTypes'

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 3rem;
  justify-items: center;
  align-content: center;
  width: 100%;
  padding: 2rem 0;

  @media (max-width: 480px) {
    padding: 0 0 1rem;
    grid-gap: 1rem;
    grid-template-columns: 1fr;
  }
`

const ArticlesListing = ({ posts }) => (
  <GridLayout>
    {posts.map(post => {
      return <ArticleCard key={post.node.slug} article={post.node} />
    })}
  </GridLayout>
)

export default ArticlesListing

ArticlesListing.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(articlePropTypes)).isRequired,
}
