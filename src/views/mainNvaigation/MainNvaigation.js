import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'react-router-dom/Link';

// Icons
import GitHubIcon from './icons/github_icon.png';
import LinkedInIcon from './icons/linkedin_icon.png';

// Stylesheet
import './MainNavigation.css';

const MainNvaigation = props => {
  return (
    <div>
      <Navbar id='main-nav' bg='light' variant='light' expand='lg'>
        <Navbar.Brand className='d-sm-block animated slideInLeft'>
          Raheem McDonald
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='home-navbar-nav' />

        <Navbar.Collapse id='navbar-nav'>
          <Nav>
            <a
              className='nav-link'
              target='_black'
              href='https://github.com/rxheem'
            >
              <img className='nav-icon' src={GitHubIcon} alt='Github Icon' />
            </a>
            <a
              className='nav-link'
              target='_blank'
              href='https://www.linkedin.com/in/rxheem'
            >
              <img
                className='nav-icon'
                src={LinkedInIcon}
                alt='LinkedIn Icon'
              />
            </a>
            <Link className='nav-link'>Portfolio</Link>
            <Link className='nav-link'>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MainNvaigation;
