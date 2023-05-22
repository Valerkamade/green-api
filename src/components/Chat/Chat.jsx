import React, { useEffect, useRef } from 'react';
import Message from '../Message/Message';
import Form from '../Form/Form';
import { formSendMessage } from '../../utils/data-list';
import Input from '../Input/Input';
import Main from '../Main/Main';
import { ChatItem, ChatList } from './styles';

export default function Chat({
  messages,
  value,
  handleChange,
  onSendMessage,
  chatId,
}) {
  const { nameForm, inputs } = formSendMessage;
  const chatRef = useRef(0);
  useEffect(() => {
    chatId && chatRef.current.scrollTo({ top: 40000, left: 0 });
  }, [chatId]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSendMessage(chatId, value.message);
  };

  return (
    <Main>
      <ChatList ref={chatRef}>
        {messages.map((message) => (
          <Message key={message.idMessage} message={message} />
        ))}
      </ChatList>

      <Form isOpen={true} name={nameForm} buttonText='' onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <Input
            key={input.nameInput}
            value={value[`${input.nameInput}`]}
            input={input}
            handleChange={handleChange}
          />
        ))}
      </Form>
    </Main>
  );
}
