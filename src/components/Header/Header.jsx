import React, { useContext } from 'react';
import './Header.css';
import Profile from '../Profile/Profile';
import Navigation from '../Navigation/Navigation';
import Icon from '../Icon/Icon';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Header({
  url,
  loggedIn,
  email,
  setIsLogin,
  currentIdChat,
  buttonList,
}) {
  const authUser = useContext(CurrentUserContext);

  return (
    <header className={`header page__container`}>
      {currentIdChat ? <Profile url='' /> : <Profile url={authUser.avatar} />}

      <Navigation>
        {buttonList.map((button) => (
          <Icon key={button.name} button={button} setIsLogin={setIsLogin} />
        ))}
      </Navigation>
    </header>
  );
}
