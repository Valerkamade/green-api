import React from 'react';
import './Profile.css';
import Avatar from '../Avatar/Avatar';
// import avatar from '../../images/logo.svg';

export default function Profile({url}) {
  return (
    <button className='profile'>
      <p className='profile__name'>Name</p>
      <Avatar url={url} />
    </button>
  );
}
