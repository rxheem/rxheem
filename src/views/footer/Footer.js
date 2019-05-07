import React from 'react';
import { Nav } from 'react-bootstrap';

import FooterNavItem from './FooterNavItem.js';
import './Footer.css';

const Footer = props => {
  return (
    <footer className='footer mt-auto py-3'>
      <Nav className='justify-content-center'>
        <FooterNavItem title='Portfolio' to='/portfolio/' />
        <FooterNavItem title='Contact' to='/contact/' />
      </Nav>
    </footer>
  );
};

export default Footer;
