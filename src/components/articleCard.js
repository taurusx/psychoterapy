import React from "react"
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const colorAccent = "#0741AD"

const Card = styled.div`
  position: relative;
  z-index: 1;
  min-width: 300px;
  max-width: 450px;
  height: 500px;
  display: flex;
  flex-direction: column;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 1px 4px 0 #00000033;
  transition: all 0.2s ease-in;
  border-radius: 0.5rem;

  .gatsby-image-wrapper img {
    transition: transform 0.2s ease-in !important;
  }

  &:hover {
    box-shadow: 0 1px 30px 0 #00000033;

    img {
      transform: scale(1.1);
    }
  }

  @media (max-width: 480px) {
    border-radius: 0;
  }
`

const CardImage = styled.div`
  position: relative;
  flex: 220px 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  .gatsby-image-wrapper {
    height: 100%;
  }

  img {
      margin: 0;
      object-fit: cover;
      height: 100%;
      min-width: 100%;
    }
`

const CardImageDate = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
  background: ${colorAccent};
  width: 3rem;
  height: 3rem;
  padding: 0.4rem 0;
  border-radius: 100%;
  color: white;
  font-weight: 700;
  text-align: center;

  .day {
    font-size: 1rem;
    line-height: 1.3;
  }

  .month {
    font-size: 0.7rem;
    line-height: 1;
    text-transform: uppercase;
  }
`

const CardImageType = styled.div`
  position: absolute;
  background: ${colorAccent};
  color: white;
  left: 0;
  bottom: 0;
  padding: 0.4em 0.9em;
`

const CardText = styled.div`
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

const CardButton = styled(Link)`
  box-shadow: none;
  border: 2px solid transparent;
  background: ${colorAccent};
  text-transform: uppercase;
  padding: 0.8rem;
  transition: all 0.2s ease-in;
  text-align: center;
  color: white;

  &:hover {
    background: ${colorAccent};
    color: white;
    font-weight: 700;
    letter-spacing: 1px;
  }

  @media (max-width: 480px) {
    background: white;
    color: ${colorAccent};
  }
`

const ArticleCard = ({ article: node }) => (
  <StaticQuery
    query={articleCardQuery}
    render={data => {
      const siteTitle = data.site.siteMetadata.title
      const date = new Date(node.date);
      const month = date.toLocaleString('pl-PL', { month: 'short' });
      return (
        <Card>
          <CardImage postType={node.postType}>
            <Img fluid={node.image.fluid} />
            <CardImageType>
              {node.postType === 'artykuly' ? 'ARTYKUŁ' : 'NEWS'}
            </CardImageType>
            <CardImageDate>
              <div className="day">{date.getDate()}</div>
              <div className="month">{month}</div>
            </CardImageDate>
          </CardImage>  
          <CardText>
            <h3>
              <Link style={{ boxShadow: `none` }}
                to={`/${node.postType}/${node.slug}`}>
                {node.title}
              </Link>
            </h3>
            <small>{node.date}{` | `}
              {node.author === 'info' ? siteTitle : node.author}</small>
            <p>{node.subtitle}</p>
          </CardText>
          <CardButton to={`/${node.postType}/${node.slug}`}>
                Czytaj więcej
          </CardButton>
        </Card>
      )
    }}
  />
)

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
}

export default ArticleCard

export const articleCardQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`