import React from 'react'
import styled from 'styled-components'
import { navigateTo } from 'gatsby-link' // eslint-disable-line
import Recaptcha from 'react-google-recaptcha'

import { rhythm } from '../utils/typography'
import FormAcceptance from './formAcceptance'

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  form.form-valid input[type='submit'] {
    background: #0a0;
    border-color: transparent;

    &:hover {
      background: #090;
    }
  }
`

const FormField = styled.div`
  width: 100%;
  margin-top: ${rhythm(0.5)};

  input[type='text'],
  input[type='email'],
  input[type='tel'],
  textarea {
    display: block;
    width: 100%;
    line-height: 1.5;
    padding: ${rhythm(0.4)} ${rhythm(0.6)};
    border-radius: 0.3rem;
    border: 1px solid #ccc;
    border-left: 4px solid #ccc;

    &:hover {
      border-color: #333;
    }

    &:required:not(:focus) {
      border-left-color: #0741ad;
    }

    &:required:valid,
    &:not(:required):focus:valid {
      border-left-color: #0a0;
    }

    &:focus:invalid {
      border-left-color: #f33;
    }
  }

  label,
  input[type='submit'] {
    text-transform: uppercase;
  }

  input::placeholder,
  input::-webkit-input-placeholder {
    color: #444;
    font-size: 80%;
  }

  &.optional {
    label {
      display: inline-block;
      position: relative;
    }

    label:after {
      content: ' (opcjonalnie)';
      position: absolute;
      left: calc(100% + 1rem);
      top: 50%;
      transform: translateY(-50%);
      font-style: italic;
      font-size: 80%;
    }
  }
`

const SubmitButton = styled.input`
  padding: ${rhythm(0.3)} ${rhythm(0.6)};
  color: white;
  border: 2px solid transparent;
  border-radius: 0.3rem;
  transition: background 0.2s linear;

  &:hover {
    cursor: pointer;
    border-color: #0741ad55;
  }
`

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFormValid: false,
      recaptchaResponse: null,
      name: '',
      email: '',
      phone: '',
      message: '',
      acceptance: false,
    }
    this.formRef = React.createRef()
    this.recaptchaRef = React.createRef()
    this.validateAllInputs = this.validateAllInputs.bind(this)
    this.onRecaptchaChange = this.onRecaptchaChange.bind(this)
    this.onChangeHandle = this.onChangeHandle.bind(this)
    this.onSubmitHandle = this.onSubmitHandle.bind(this)
  }

  onRecaptchaChange = value => {
    this.setState({ recaptchaResponse: value })
  }

  onChangeHandle = e => {
    if (e.target.name === 'acceptance-marketing') {
      this.setState({ acceptance: e.target.checked })
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  onSubmitHandle = e => {
    e.preventDefault()

    const { acceptance, recaptchaResponse } = this.state
    if (!recaptchaResponse) {
      return
    }

    const form = e.target
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        'g-recaptcha-response': recaptchaResponse,
        'acceptance-marketing': acceptance,
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => console.error(error.message))
  }

  validateAllInputs() {
    this.setState(
      this.formRef.current.checkValidity()
        ? { isFormValid: true }
        : { isFormValid: false }
    )
  }

  render() {
    const isSmallMobile =
      typeof window !== 'undefined' && window.innerWidth <= 370
    const {
      acceptance,
      email,
      isFormValid,
      message,
      name,
      phone,
      recaptchaResponse,
    } = this.state
    return (
      <FormLayout role="form">
        <h3>Napisz do mnie</h3>
        <p>
          Jeśli chcesz się umówić na wizytę lub chcesz, żebym skontaktowała się
          z Tobą, proszę o przesłanie wiadomości poprzez poniższy formularz.
        </p>
        <form
          name="contact-form"
          method="post"
          action="/dziekujemy/"
          ref={this.formRef}
          className={isFormValid && recaptchaResponse ? 'form-valid' : ''}
          autoComplete="off"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
          onChange={this.validateAllInputs}
          onSubmit={this.onSubmitHandle}
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <FormField>
            <label htmlFor="name">
              Twoje imię
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                placeholder="(podaj imię)"
                required
                onChange={this.onChangeHandle}
              />
            </label>
          </FormField>
          <FormField>
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="(wymagane, żebyśmy mogli udzielić odpowiedzi)"
                required
                onChange={this.onChangeHandle}
              />
            </label>
          </FormField>
          <FormField className="optional">
            <label htmlFor="phone">
              Telefon
              <input
                type="tel"
                name="phone"
                id="phone"
                value={phone}
                placeholder="+48 | "
                pattern="[0-9() +-]{9,21}"
                title="Sprawdź, czy poprawnie wpisano numer. Dopuszczalne są cyfry od 0 do 9, myślniki, spacje, nr kierunkowy. "
                onChange={this.onChangeHandle}
              />
            </label>
          </FormField>
          <FormField>
            <label htmlFor="message">
              Jak możemy Ci pomóc?
              <textarea
                id="message"
                name="message"
                rows="5"
                value={message}
                placeholder="Twoja wiadomość"
                required
                onChange={this.onChangeHandle}
              />
            </label>
          </FormField>
          <FormAcceptance checked={acceptance} onChange={this.onChangeHandle} />
          <Recaptcha
            ref={this.recaptchaRef}
            sitekey={RECAPTCHA_KEY}
            size={isSmallMobile ? 'compact' : 'normal'}
            onChange={this.onRecaptchaChange}
          />
          <FormField>
            <SubmitButton type="submit" value="Wyślij" />
          </FormField>
        </form>
      </FormLayout>
    )
  }
}

export default Form
