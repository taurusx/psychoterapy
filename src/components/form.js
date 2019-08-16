import React, { useState } from 'react'
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

    label::after {
      content: ' (opcjonalnie)';
      position: absolute;
      right: 0;
      top: 0.5em;
      font-style: italic;
      font-size: 70%;
    }
  }
`

const SubmitButton = styled.input`
  padding: ${rhythm(0.3)} ${rhythm(0.6)};
  color: white;
  border: 2px solid transparent;
  border-radius: 0.3rem;
  background-color: #ccc;
  transition: background 0.2s linear;

  &:hover {
    cursor: pointer;
    border-color: #0741ad55;
  }
`

const Form = () => {
  const formRef = React.createRef()
  const recaptchaRef = React.createRef()

  const [isFormValid, setIsFormValid] = useState(false)
  const [recaptchaResponse, setRecaptchaResponse] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [acceptance, setAcceptance] = useState(false)

  const onRecaptchaChange = value => {
    setRecaptchaResponse(value)
  }

  const onChangeHandle = e => {
    if (e.target.name === 'acceptance-marketing') {
      setAcceptance(e.target.checked)
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  }

  const onSubmitHandle = e => {
    e.preventDefault()

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
        ...formData,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => console.error(error.message))
  }

  const validateAllInputs = () => {
    setIsFormValid(formRef.current.checkValidity())
  }

  const isSmallMobile =
    typeof window !== 'undefined' && window.innerWidth <= 370
  const { email, message, name, phone } = formData

  return (
    <FormLayout role="form">
      <h3>Napisz do mnie</h3>
      <p>
        Jeśli chcesz się umówić na wizytę lub chcesz, żebym skontaktowała się z
        Tobą, proszę o przesłanie wiadomości poprzez poniższy formularz.
      </p>
      <form
        name="contact-form"
        method="post"
        action="/dziekujemy/"
        ref={formRef}
        className={isFormValid && recaptchaResponse ? 'form-valid' : ''}
        autoComplete="off"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        onChange={validateAllInputs}
        onSubmit={onSubmitHandle}
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
              onChange={onChangeHandle}
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
              onChange={onChangeHandle}
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
              onChange={onChangeHandle}
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
              onChange={onChangeHandle}
            />
          </label>
        </FormField>
        <FormAcceptance checked={acceptance} onChange={onChangeHandle} />
        <Recaptcha
          ref={recaptchaRef}
          sitekey={RECAPTCHA_KEY}
          size={isSmallMobile ? 'compact' : 'normal'}
          onChange={onRecaptchaChange}
        />
        <FormField>
          <SubmitButton type="submit" value="Wyślij" />
        </FormField>
      </form>
    </FormLayout>
  )
}

export default Form
