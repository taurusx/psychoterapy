import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'

import { rhythm } from '../utils/typography'

const FormField = styled.div`
  width: 100%;
  margin: ${rhythm(0.5)} 0 ${rhythm(1.5)};

  p {
    margin: ${rhythm(1.5)} 0 ${rhythm(0.5)};
    font-size: 80%;
    text-transform: uppercase;
    text-align: justify;
  }

  label {
    cursor: pointer;
    position: relative;
    padding-left: 2.2rem;

    &:hover {
      text-decoration: underline;

      .checkmark {
        background: #ccc;
      }
    }
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.5rem;
    width: 1.6rem;
    background-color: #eee;
    border-radius: 0.2rem;
    border-left: 3px solid #0741ad;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
    left: 6px;
    top: 3px;
    width: 9px;
    height: 14px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(40deg);
  }

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    bottom: 0;
    left: 0.5rem;

    &:checked {
      & ~ .checkmark {
        border-left-color: #0a0;
        background: #0a0;

        &::after {
          display: block;
        }
      }
    }
  }
`

const FormAcceptance = ({ checked, onChange }) => (
  <StaticQuery
    query={formAcceptanceQuery} // eslint-disable-line
    render={data => (
      <FormField>
        <p>
          ZGODNIE Z USTAWĄ Z DNIA 29 SIERPNIA 1997 R. O OCHRONIE DANYCH
          OSOBOWYCH (TEKST JEDN. DZ. U. Z 2002 R. NR 101, POZ. 926 ZE ZM.) ORAZ
          USTAWĄ Z DNIA 18 LIPCA 2002 R. O ŚWIADCZENIU USŁUG DROGĄ ELEKTRONICZNĄ
          (DZ. U Z 2002 R. NR 144, POZ. 1204 ZE ZM.) WYRAŻAM ZGODĘ NA
          OTRZYMYWANIE DROGĄ ELEKTRONICZNĄ OFERTY POCHODZĄCEJ OD FIRMY{` `}
          {data.site.siteMetadata.title}.
        </p>
        <label htmlFor="acceptance-marketing">
          <input
            type="checkbox"
            id="acceptance-marketing"
            name="acceptance-marketing"
            checked={checked}
            required
            onChange={onChange}
          />
          <span className="checkmark" />
          Wyrażam zgodę
        </label>
      </FormField>
    )}
  />
)

export default FormAcceptance

export const formAcceptanceQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
