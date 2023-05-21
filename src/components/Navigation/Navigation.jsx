import React from 'react';
import './Navigation.css';
import styled from 'styled-components';

const NavigationList = styled.ul`
  flex-direction: row;
  padding: 0;
  margin: 0;
  list-style: none;
  align-items: center;
`;

export default function Navigation({ children }) {
  return (
    <nav className='navigation'>
      <NavigationList>{children}</NavigationList>
    </nav>
  );
}
