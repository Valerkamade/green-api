import React from 'react';
import styled from 'styled-components';

export default function Input({ value, handleChange, input }) {
  const { type, nameInput, placeholder, minLength, maxLength } = input;

  const InputStyle = styled.input`
    width: 100%;
    border-radius: 10px;
    padding: 9px 12px;
    margin: 5px 8px;
    border: none;
  `

  return (
    // <label className='form__label'>
      <InputStyle
        className={`form__input form__input_type_auth`}
        type={type}
        name={nameInput}
        placeholder={placeholder}
        minLength={minLength ?? ''}
        maxLength={maxLength ?? ''}
        required
        value={value ?? ''}
        onChange={handleChange}
        autoComplete='on'
      />
      // {/* <span className={`form__error ${nameInput}-error`} /> */}
    // </label>
  );
}
