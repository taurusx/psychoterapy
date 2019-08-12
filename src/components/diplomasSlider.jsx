import React, { useState } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import Img from 'gatsby-image'

import '../utils/slick/slick.css'
import '../utils/slick/slick-theme.css'

import Modal from './modal'

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

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #11111122;
    }
  }
  & .gatsby-image-wrapper:hover {
    cursor: zoom-in;
  }

  & .gatsby-image-wrapper:hover,
  &.active .gatsby-image-wrapper,
  &:focus .gatsby-image-wrapper,
  &:active .gatsby-image-wrapper {
    box-shadow: 2px 2px 3px black, 6px 6px 5px white;

    &::after {
      background-color: transparent;
    }
  }
`

const DiplomasSlider = ({ diplomas }) => {
  const [activeId, setActiveId] = useState(null)
  const [showModal, setShowModal] = useState(false)

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

  const onFocus = id => {
    if (activeId !== id) setActiveId(id)
  }

  const onBlur = () => {
    if (!showModal) setActiveId(null)
  }

  const handleDiplomaClick = (e, id) => {
    if (id && e.target.classList.contains('gatsby-image-wrapper')) {
      setActiveId(id)
      setShowModal(true)
    }
  }

  const handleDiplomaKeyDown = (e, id) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      setActiveId(id)
      setShowModal(true)
    }
  }

  const handleDiplomaClose = activeId => {
    Array.from(document.getElementsByClassName('slick-slide'))
      .filter(el => !el.classList.contains('slick-cloned'))
      .find(el => el.innerHTML.includes(`diploma-${activeId}`))
      // solution below depend on the structure of slick-slides:
      .firstChild.firstChild.firstChild.focus()

    setShowModal(false)
    setActiveId(null)
  }

  const sliderContent =
    diplomas &&
    diplomas.map(diploma => {
      return (
        // use additional div wrapper for slick-slider to set slider items
        <div key={`diploma-${diploma.id}`}>
          <DiplomaImageContainer
            id={`diploma-${diploma.id}`}
            className={activeId === diploma.id ? 'active' : ''}
            tabIndex="0"
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={e => handleDiplomaKeyDown(e, diploma.id)}
            onClick={e => handleDiplomaClick(e, diploma.id)}
          >
            <Img fixed={diploma.fixed} alt={diploma.description || ''} />
          </DiplomaImageContainer>
        </div>
      )
    })

  const currentDiploma = diplomas.find(diploma => diploma.id === activeId)
  // width to height ratio for currently active diploma, or 1.0 if unknown
  const imgWidth =
    (currentDiploma && currentDiploma.fixed && currentDiploma.fixed.width) || 1
  const imgHeight =
    (currentDiploma && currentDiploma.fixed && currentDiploma.fixed.height) || 1

  return (
    <>
      <StyledSlider {...settings}>{sliderContent}</StyledSlider>
      <Modal
        showModal={showModal}
        handleClose={() => handleDiplomaClose(activeId)}
        imgWidth={imgWidth}
        imgHeight={imgHeight}
      >
        {currentDiploma && (
          <Img
            fluid={currentDiploma.fluid}
            alt={currentDiploma.description || ''}
          />
        )}
      </Modal>
    </>
  )
}

export default DiplomasSlider
