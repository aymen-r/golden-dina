import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [stick, setStick] = useState(false);

  // stick navbar part
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setStick(true);
    } else {
      setStick(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ${
        stick && 'scrolled awake'
      }`}
      id='ftco-navbar'
    >
      <div className='container'>
        <Link
          className='navbar-brand d-flex align-items-center justify-content-center'
          to={'/'}
        >
          <img
            style={{ display: 'block', height: '60px' }}
            src='/images/cap-removebg-preview.png'
            alt=''
          />
          ZAHOOR ALTAIBA
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#ftco-nav'
          aria-controls='ftco-nav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='oi oi-menu' /> Menu
        </button>
        <div
          className={`collapse navbar-collapse ${open && 'show'}`}
          id='ftco-nav'
        >
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item '>
              <NavLink
                to={'/'}
                className='nav-link'
                style={({ isActive }) => ({
                  color: isActive ? '#24a148' : undefined,
                })}
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to={'/about'}
                className='nav-link'
                style={({ isActive }) => ({
                  color: isActive ? '#24a148' : undefined,
                })}
              >
                About
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink
                to={'/contact'}
                className='nav-link'
                style={({ isActive }) => ({
                  color: isActive ? '#24a148' : undefined,
                })}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
