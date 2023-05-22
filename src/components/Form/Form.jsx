import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from '../ui/button/button';
// import { Form } from '../styled';

const FormMessage = styled.form`
  position: relative;
  z-index: 5;
  bottom: 0;
  right: 0;
`;

export default function Form({
  children,
  name,
  onSubmit,
  buttonText,
}) {
  const formRef = useRef(0);

  return (
    <FormMessage
      className={`form form_type_${name}`}
      name={name}
      onSubmit={onSubmit}
      ref={formRef}
    >
      {children}
      <Button
        // className='form__button-save button form__button-save_type_auth'
        type='submit'
        buttonText={buttonText}
      />
    </FormMessage>
  );
}
