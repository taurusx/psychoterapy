import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image"
 
import './../utils/slick/slick.css'
import './../utils/slick/slick-theme.css'

const StyledSlider = styled(Slider)`
  height: 100%;

  .slick-arrow {
    z-index: 5;

    &::before {
      font-size: 2.0rem;
    }
  }

  .slick-prev {
    left: 2rem;
  }
  
  .slick-next {
    right: calc(2rem + 12px);
  }

  .slick-dots {
    bottom: 1rem;

    li {
      padding: 1rem;

      button::before{
        color: white;
        font-size: 1.5rem;
      }

      &.slick-active button::before {
        color: white;
      }
    }
  }

  @media(max-width: 480px) {
    .slick-prev {
      left: 1rem;
    }
    
    .slick-next {
      right: calc(1rem + 12px);
    }

    .slick-dots {
      bottom: 0rem;
    }
  }
`

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 500,
    pauseOnHover: false,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  
  return (
    <StaticQuery
      query={HERO_SLIDER_IMAGES_QUERY}
      render={data => {
        const images = data.headerImages.edges
        return (
          <StyledSlider {...settings}>
            {images.map(image => (
              <Img fluid={image.node.childImageSharp.fluid}/>
            ))}
          </StyledSlider>
        )
      }}
    />
  )
}

export default HeroSlider

const HERO_SLIDER_IMAGES_QUERY = graphql`
  query {
    headerImages: allFile(
        filter: { relativePath: { regex: "/hero-header/" }}
        sort: { fields: [name], order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`