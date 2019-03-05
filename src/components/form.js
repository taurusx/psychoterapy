import React from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import FormAcceptance from "./formAcceptance"

const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  form.form-valid input[type=submit] {
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

  input[type=text], 
  input[type=email], 
  input[type=tel], 
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
      border-left-color: #0741AD;
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
  input[type=submit] {
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
      content: " (opcjonalnie)";
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
    border-color: #0741AD55;
  }
`

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormValid: false,
    }
    this.formRef = React.createRef();
    this.validateAllInputs = this.validateAllInputs.bind(this);
  }

  validateAllInputs() {
    this.formRef.current.checkValidity() ?
      this.setState({ isFormValid: true }) :
      this.setState({ isFormValid: false }) 
  }

  render() {
    return (
      <FormLayout role="form">
        <h3>Napisz do nas</h3>
        <p>Jeśli chcesz się umówić na wizytę lub chcesz, żebyśmy skontaktowali się z Tobą, prosimy o przesłanie wiadomości poprzez poniższy formularz.</p>
        <form
          method="post" name="contact-form"
          ref={this.formRef}
          className={this.state.isFormValid && "form-valid"}
          autoComplete="off"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onChange={this.validateAllInputs}
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <FormField>
            <label htmlFor="name">Twoje imię</label>
            <input
              type="text" name="name" id="name"
              placeholder="(podaj imię)"
              required
            />
          </FormField>
          <FormField>
            <label htmlFor="email">Email</label>
            <input
              type="email" name="email" id="email"
              placeholder="(wymagane, żebyśmy mogli udzielić odpowiedzi)"
              required
            />
          </FormField>
          <FormField className="optional">
            <label htmlFor="phone">Telefon</label>
            <input
              type="tel" name="phone" id="phone"
              placeholder="+48 | "
              pattern="[0-9() +-]{9,21}"
              title="Sprawdź, czy poprawnie wpisano numer. Dopuszczalne są cyfry od 0 do 9, myślniki, spacje, nr kierunkowy. "
            />
          </FormField>
          <FormField>
            <label htmlFor="message">Jak możemy Ci pomóc?</label>
            <textarea id="message" name="message"
              rows="5" placeholder="Twoja wiadomość" required>
            </textarea>
          </FormField>
          <FormAcceptance/>
          <FormField>
            <SubmitButton type="submit" value="Wyślij" />
          </FormField>
      </form>
      </FormLayout>
    );
  }
}

export default Form;