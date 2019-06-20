import React from 'react'
import styled from 'styled-components'

import { rhythm, scale } from '../utils/typography'

const StyledHeading = styled.h2`
  ${{ ...scale(1.2) }}
  font-family: 'Montserrat', sans-serif;
  margin-top: ${rhythm(0)};
  margin-bottom: ${rhythm(1)};

  @media (max-width: 720px) {
    ${{ ...scale(0.8) }}
  }
`

const StyledSubHeading = styled.h3`
  ${{ ...scale(1.0) }}
  margin-top: ${rhythm(0)};
  margin-bottom: ${rhythm(1)};
  line-height: 1.1;

  @media (max-width: 720px) {
    ${{ ...scale(0.8) }}
  }
`

const Heading = ({ children }) => <StyledHeading>{children}</StyledHeading>

const SubHeading = ({ children }) => (
  <StyledSubHeading>{children}</StyledSubHeading>
)

const slides = [
  {
    heading: `"Najważniejszy w każdym działaniu jest początek" - Platon`,
    subheading: 'Szukasz wsparcia?',
    button: {
      to: '/o-mnie/',
      text: 'Poznaj poradnię eMocJa',
    },
  },
  {
    heading: `Chcesz rozpocząć terapię indywidualną?`,
    button: {
      to: '/w-czym-pomagam/',
      text: 'Dowiedz się w czym pomagam',
    },
  },
  {
    heading: `Twoje nastoletnie dziecko potrzebuje wsparcia?`,
    button: {
      to: '/terapie/',
      text: 'Poznaj szczegóły',
    },
  },
  {
    heading: `Potrzebujesz konsultacji w sprawie dziecka? `,
    button: {
      to: '/kontakt/',
      text: 'Zarezerwuj wizytę',
    },
  },
  {
    heading: `"Wszystko rozpoczyna się od myśli. Myśli prowadzą do uczuć, uczucia prowadzą do działań,
    działania prowadzą do rezultatów"`,
    subheading: '- J. Beck',
  },
  {
    heading: 'Nawet najdłuższa podróż zaczyna się od pierwszego kroku',
  },
]

const slidesContent = slides.map(slide => {
  let content = {}
  content.heading = slide.heading ? <Heading>{slide.heading}</Heading> : ''
  content.subheading = slide.subheading ? (
    <SubHeading>{slide.subheading}</SubHeading>
  ) : (
    ''
  )
  if (slide.button) {
    content.button = { ...slide.button }
  }
  return content
})

export { slidesContent }
