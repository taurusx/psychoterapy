import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/section'
import ButtonLink from './../components/buttonLink'
import { LibraryImage } from './../components/siteImages'
import AboutWithPic from '../components/aboutWithPic'

const CONTENT_WIDTH = '75%'

const PageTitle = styled.div`
  max-width: ${CONTENT_WIDTH};
  text-align: center;
  align-self: center;

  h1 {
    margin: 2rem 1rem;
    text-shadow: 2px 2px 4px white;
  }

  @media (min-width: 720px) {
    h1 {
      font-size: 3rem;
    }
  }
`

const StyledHeader = styled.header`
  margin-bottom: 3.5rem;
`

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle} fullWidth>
      <SEO
        title="O mnie"
        keywords={[
          `Agnieszka Wojnar-Jadczyszyn`,
          `psychoterapeuta`,
          `psycholog`,
          `poradnia`,
        ]}
      />
      <StyledHeader>
        <Section
          backgroundImg={<LibraryImage />}
          backgroundColor={'linear-gradient(transparent, white)'}
          minHeight="300px"
        >
          <PageTitle>
            <h1>O mnie</h1>
          </PageTitle>
        </Section>
      </StyledHeader>
      <Section maxWidth={CONTENT_WIDTH}>
        <AboutWithPic>
          <h2>Edukacja</h2>
          <p>
            Jestem psychologiem i psychoterapeutą poznawczo-behawioralnym.
            Ukończyłam Wydział Psychologii Uniwersytetu Marii Curie-Skłodowskiej
            w Lublinie, specjalność: psychologia kliniczna i neuropsychologia
            oraz 4-letnie szkolenie w zakresie terapii poznawczo-behawioralnej w
            Szkole Psychoterapii Centrum CBT w Warszawie rekomendowanej przez
            Polskie Towarzystwo Terapii Poznawczej i Behawioralnej (PTTPB).
            Pogłębiając swoją wiedzę uczestniczę również w szkoleniach z Terapii
            Schematu oraz Terapii Akceptacji i Zaangażowania (ACT), które
            integrują różne podejścia terapeutyczne. 
          </p>
        </AboutWithPic>
        <h2>Doświadczenie</h2>
        <p>
          Doświadczenie zdobyłam w Poradniach Zdrowia Psychicznego dla
          Dorosłych, na Oddziale Dziennym Zaburzeń Nerwicowych w Warszawie, w
          Klinice Psychiatrii Akademii Medycznej w Lublinie, pracując również z
          dziećmi i młodzieżą w Domu Dziecka i Szkole Podstawowej. Obecnie
          współpracuję z Poradnią Zdrowia Psychicznego dla Dorosłych przy
          Szpitalu Nowowiejskim w Warszawie.
        </p>
        <h2>Jak pracuję?</h2>
        <p>
          Prowadzę terapię osób dorosłych i młodzieży oraz konsultacje dla
          rodziców pomagając rozwijać kompetencje wychowawcze. W swojej pracy
          wykorzystuję metody terapii poznawczo-behawioralnej, terapii schematu
          oraz akceptacji i zaangażowania. Swoją pracę poddaje regularnej
          superwizji. Traktuję pracę terapeutyczną jako drogę do poprawy jakości
          życia. Stosuję przede wszystkim życzliwe i pełne szacunku podejście
          wobec każdej osoby, pomagając pacjentowi w procesie zmiany.
        </p>
        <ButtonLink to="/oferta/" lightTheme transparent arrow alignRight>
          Moje terapie
        </ButtonLink>
      </Section>
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
