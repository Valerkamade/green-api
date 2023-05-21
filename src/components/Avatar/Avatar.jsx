import React from 'react';
import Logo from '../../assets/logo.svg'

export default function Avatar({ url }) {
  return <img src={url ? url : Logo} alt='name' className='profile__avatar' />;
}
