import React from 'react';
import './Icon.css';
import { ReactComponent as Group } from '../../assets/group-icon.svg';
import { ReactComponent as Exit } from '../../assets/exit-icon.svg';
import { ReactComponent as Menu } from '../../assets/menu-icon.svg';
import { ReactComponent as Status } from '../../assets/status-icon.svg';
import { ReactComponent as Search } from '../../assets/serch-icon.svg';
import { ReactComponent as Chat } from '../../assets/new-chat-icon.svg';
import { ReactComponent as Send} from '../../assets/send-icon.svg'

import styled from 'styled-components';

const BlueButton = styled.button`
  color: var(--color-icon-menu);
  cursor: pointer;
`;

export default function Icon({ setIsLogin, button }) {
  const { buttonName, name } = button;

  function handleSignOut() {
    localStorage.removeItem('idInstance');
    localStorage.removeItem('apiTokenInstance');
    localStorage.removeItem('urlAvatar');
    localStorage.removeItem('user');
    setIsLogin(false);
  }
  function handleNewChat() {
    console.log('chat');
  }

  function handleOpenMenu() {
    console.log('open');
  }
  function handleNewGroup() {
    console.log('newGroup');
  }
  function handleStatus() {
    console.log('newGroup');
  }
  function handleSearch() {
    console.log('Search');
  }
  function handleSendMessage() {
    console.log('send');
  }


  return (
    <li className='navigation__item'>
      <BlueButton
        className='navigation__button'
        aria-label={buttonName}
        type='button'
      >
        {(() => {
          switch (name) {
            case 'exit':
              return <Exit onClick={handleSignOut} />;
            case 'menu':
              return <Menu onClick={handleOpenMenu} />;
            case 'newGroup':
              return <Group onClick={handleNewGroup} />;
            case 'status':
              return <Status onClick={handleStatus} />;
            case 'search':
              return <Search onClick={handleSearch} />;
            case 'newChat':
              return <Chat onClick={handleNewChat} />;
              case 'send':
              return <Send onClick={handleSendMessage} />;
            default:
              return null;
          }
        })()}
      </BlueButton>
    </li>
  );
}
