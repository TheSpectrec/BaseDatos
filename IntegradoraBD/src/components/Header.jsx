import React from 'react';
import LogoutButton from './LogoutButton';

const Header = () => (
  <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: '#F4F4F4' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src='/LOGOTIPO.png' alt="CVF Logo" height="50" />
      <h2 style={{ marginLeft: '10px', color: 'black'}}>CVF</h2>
    </div>
    <LogoutButton />
  </header>
);

export default Header;