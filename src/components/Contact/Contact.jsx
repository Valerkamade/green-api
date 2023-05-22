import React, { useContext, useEffect } from 'react';
import Avatar from '../Avatar/Avatar';
import { ContactItem, ContactName } from './styles';
// import * as app from '../../utils/api';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';


export default function Contact({
  url,
  name,
  message,
  chatId,
  type,
  onOpenChat,
}) {
  // const authUser = useContext(CurrentUserContext);

  // useEffect(() => {
  //   auth.historyMessage(authUser, chatId).then().catch();
  // }, []);
  

  function handleClick() {
    onOpenChat(chatId);
    // console.log(chatId);
    console.log();
  }

  return (
    <ContactItem onClick={handleClick}>
      <Avatar url={url ?? ''} />
      <div className='contact__wrapper'>
        <div className='contact__info'>
          <ContactName>{name}</ContactName>
          <span className='contact__time-message'></span>
        </div>
        <div className='contact__message-wrapper'>
          <p className='contact__message'>{message ?? ''}</p>
          <span className='contact__icon'></span>
        </div>
      </div>
    </ContactItem>
  );
}
