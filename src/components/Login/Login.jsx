import React from 'react';
import { formLogin } from '../../utils/data-list';
import Input from '../Input/Input';
import Form from '../Form/Form';

export default function Login({ isLoading, onLogin, value, handleChange }) {
  const { nameForm, title, buttonTextLoading, buttonTextDefault, inputs } =
    formLogin;

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin();
  }

  return (
    <div className='auth'>
      <h1 className='auth__title'>{title}</h1>
      <Form
        isOpen={true}
        name={nameForm}
        buttonText={isLoading ? buttonTextLoading : buttonTextDefault ?? ''}
        onSubmit={handleSubmit}
      >
        {inputs.map((input) => (
          <Input
            key={input.nameInput}
            value={value[`${input.nameInput}`]}
            input={input}
            handleChange={handleChange}
          />
        ))}
      </Form>
    </div>
  );
}
