import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import Img from 'gatsby-image'

import '../utils/slick/slick.css'
import '../utils/slick/slick-theme.css'

const ARROW_SIZE = '2.5rem'
const DOTS_SIZE = '1.5rem'

const StyledSlider = styled(Slider)`
  height: 100%;

  .slick-list {
    margin-bottom: 5rem;

    @media (max-width: 480px) {
      margin-bottom: 4rem;
    }
  }

  .slick-arrow {
    z-index: 5;
    width: ${ARROW_SIZE};
    height: ${ARROW_SIZE};
    top: unset;
    bottom: 10px;

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
  }

  .slick-dots {
    z-index: 5;
    bottom: 0;

    @media (max-width: 480px) {
      padding-bottom: 1rem;
    }

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

const DiplomaImageContainer = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;

  .gatsby-image-wrapper {
    width: 100% !important; /* override width of Gatsby's fixed image */
    border-radius: 1rem;
    box-shadow: 2px 2px 3px black, 4px 4px 5px white;

    &:hover {
      cursor: pointer;
      box-shadow: 2px 2px 3px black, 6px 6px 5px white;
    }
  }
`

const DiplomasSlider = ({ diplomas }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const sliderContent =
    diplomas &&
    diplomas.map(diploma => {
      return (
        // use additional div wrapper for slick-slider to set slider items
        <div key={diploma.id}>
          <DiplomaImageContainer>
            <Img fixed={diploma.fixed} alt={diploma.description || ''} />
          </DiplomaImageContainer>
        </div>
      )
    })

  return <StyledSlider {...settings}>{sliderContent}</StyledSlider>
}

export default DiplomasSlider
