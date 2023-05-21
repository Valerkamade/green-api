import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
// import { Form } from '../styled';

const FormMessage = styled.form`
  position: relative;
  z-index: 5;
  bottom: 0;
  right: 0;
`

export default function FormComponent({ children, name, onSubmit, isOpen, buttonText }) {
  // const [isValidForm, setIsValidForm] = useState(false);
  const formRef = useRef(0);

  // useEffect(() => {
  //   Array.from(formRef.current)
  //     .filter((item) => {
  //       return item.localName !== 'button';
  //     })
  //     .forEach((item) => {
  //       item.classList.toggle('form__input_type_error', item.validationMessage);
  //       item.nextSibling.textContent = item.validationMessage;
  //     });

  //   function validation() {
  //     if (children === undefined) {
  //       return true;
  //     }
  //     return formRef.current.checkValidity();
  //   }
  //   isOpen && setIsValidForm(validation());
  // }, [children, isOpen]);

  return (
    <FormMessage
      className={`form form_type_${name}`}
      name={name}
      // noValidate
      onSubmit={onSubmit}
      ref={formRef}
    >
      {children}
      <button
        className='form__button-save button form__button-save_type_auth'
        type='submit'
        // disabled={!isValidForm}
      >
        {buttonText}
      </button>
    </FormMessage>
  );
}
