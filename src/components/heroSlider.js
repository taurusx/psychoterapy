import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import HeroContent from './heroContent'

import '../utils/slick/slick.css'
import '../utils/slick/slick-theme.css'

const ARROW_SIZE = '2.5rem'
const DOTS_SIZE = '1.5rem'

const StyledSlider = styled(Slider)`
  height: 100%;

  .slick-arrow {
    z-index: 5;
    width: ${ARROW_SIZE};
    height: ${ARROW_SIZE};

    &::before {
      font-size: ${ARROW_SIZE};
    }

    &.slick-prev {
      left: 2rem;
    }

    &.slick-next {
      right: 2rem;
    }

    @media (max-width: 480px) {
      &,
      &::before {
        display: none;
        height: 0;
        width: 0;
      }
    }

    @media (max-width: 960px) {
      top: initial;
      bottom: 1rem;
    }
  }

  .slick-dots {
    z-index: 5;
    bottom: 0;
    padding-bottom: 1rem;

    li {
      width: ${DOTS_SIZE};
      height: ${DOTS_SIZE};
      margin: 0 0.5rem;

      button {
        width: ${DOTS_SIZE};
        height: ${DOTS_SIZE};
        padding: 0;

        &::before {
          font-size: ${DOTS_SIZE};
          line-height: ${DOTS_SIZE};
          width: ${DOTS_SIZE};
          height: ${DOTS_SIZE};
          color: white;
        }
      }

      &.slick-active button::before {
        color: white;
      }
    }
  }

  @media (max-width: 480px) {
    & > .slick-arrow,
    .slick-arrow::before {
    }

    .slick-dots {
      bottom: 0rem;
    }
  }
`

const SliderText = styled.div`
  color: white;
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 4rem 7rem;

  @media (max-width: 720px) {
    padding: 4rem 4rem;
  }

  @media (max-width: 480px) {
    padding: 4rem 1rem;
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
    draggable: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <StaticQuery
      query={HERO_SLIDER_IMAGES_QUERY} // eslint-disable-line
      render={data => {
        const images = data.headerImages.edges
        return (
          <StyledSlider {...settings}>
            {images.map((image, index) => (
              <div key={`slide-${image.node.childImageSharp.id}`}>
                <Img
                  key={image.node.childImageSharp.id}
                  fluid={image.node.childImageSharp.fluid}
                />
                <SliderText>
                  <HeroContent index={index} />
                </SliderText>
              </div>
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
      filter: { relativePath: { regex: "/hero-header/" } }
      sort: { fields: [name], order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            id
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
