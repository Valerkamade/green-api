import React from 'react';
import './Main.css';
import styled from 'styled-components';
// import List from '../List/List';
// import Form from '../Form/Form';
// import Input from '../Input/Input';
// import { formSerche } from '../../utils/data-list';

const MainTeg = styled.main`
  position: relative;
  z-index: 1;
  flex-grow: 1;
  overflow: hidden;
  /* height: 15000px; */
  /* list-style: none; */
  padding: 0;
  margin: 0;
`;

export default function Main({ children, value, handleChange }) {
  // const { nameForm, inputs } = formSerche;

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   // onSendMessage(chatId, value.message);
  // };
  return (
    <MainTeg className='main'>
      {children}
    </MainTeg>
  );
}
