import React from 'react';
import styled from 'styled-components';

const MessageCloud = styled.li`
  display: flex;
  padding: 0;
  margin: 0;
  padding: 5px;
  & p {
    padding: 0;
  }
`;

export default function Message({ message }) {
  const { textMessage, timestamp } = message;
  const convertTime = () => {
    const date = new Date(timestamp * 1000);
    const hours = '0' + date.getHours();
    const minutes = '0' + date.getMinutes();
    return `${hours.slice(-2)}:${minutes.slice(-2)}`;
  };
  // const date = new Date(timestamp * 1000);
  return (
    <MessageCloud>
      <p>{textMessage}</p>
      <span>{convertTime()}</span>
    </MessageCloud>
  );
}
