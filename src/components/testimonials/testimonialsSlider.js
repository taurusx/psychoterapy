import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

import { testimonials } from './testimonialsContent'
import Link from '../link'

import '../../utils/slick/slick.css'
import '../../utils/slick/slick-theme.css'

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
  position: relative;
  z-index: 5;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 4rem 7rem;

  .content {
    font-size: 120%;
  }

  .content p::before,
  .content p::after {
    content: '\u00A0"\u00A0';
  }

  @media (max-width: 720px) {
    padding: 4rem 4rem;
  }

  @media (max-width: 480px) {
    padding: 4rem 1rem;
  }
`

const TestimonialData = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;

  @media (max-width: 720px) {
    flex-direction: column;

    div {
      padding-bottom: 0.5rem;
    }
  }
`

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
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
    <StyledSlider {...settings}>
      {testimonials.map(testimonial => {
        const content = <testimonial.contentHtml />
        let stars = ''
        for (let i = 0; i < testimonial.stars; i += 1) {
          stars += '★'
        }
        return (
          <div
            key={`testimonial-${testimonial.dateLocalePl}-${testimonial.author}`}
          >
            <SliderText>
              <div className="content">{content}</div>

              <TestimonialData>
                <div>Ocena: {stars}</div>
                <div>-&nbsp;{testimonial.author}</div>
                <div>
                  Źródło:{' '}
                  <Link to={testimonial.src}>{testimonial.srcName}</Link>
                </div>
              </TestimonialData>
            </SliderText>
          </div>
        )
      })}
    </StyledSlider>
  )
}

export default TestimonialsSlider
