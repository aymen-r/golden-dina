/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMap,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='mt-4 ftco-footer ftco-section'>
      <div className='container'>
        <div className='row mb-5'>
          <div className='col-md'>
            <div className='ftco-footer-widget mb-4'>
              <h2 className='ftco-heading-2'>ZAHOOR ALTAIBA</h2>
              <p>ZAHOOR ALTAIBA project management services</p>
              <p>مؤسسة زهور الطيبة لخدمات إدارة المشاريع</p>
              <ul className='ftco-footer-social list-unstyled mt-2'>
                <li className='ftco-animate'>
                  <a
                    href='#'
                    className='d-flex align-items-center justify-content-center'
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li className='ftco-animate'>
                  <a
                    href='#'
                    className='d-flex align-items-center justify-content-center'
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li className='ftco-animate'>
                  <a
                    href='#'
                    className='d-flex align-items-center justify-content-center'
                  >
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md'>
            <div className='ftco-footer-widget mb-4 ml-md-4'>
              <h2 className='ftco-heading-2'>Community</h2>
              <ul className='list-unstyled'>
                <li>
                  <a href='#'>
                    <span className='fa fa-chevron-right mr-2' />
                    Search Properties
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='fa fa-chevron-right mr-2' />
                    For Agents
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='fa fa-chevron-right mr-2' />
                    Reviews
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='fa fa-chevron-right mr-2' />
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md'>
            <div className='ftco-footer-widget mb-4 ml-md-4'>
              <h2 className='ftco-heading-2'>About Us</h2>
              <ul className='list-unstyled'>
                <li>
                  <a href='#'>
                    <span className='fa fa-chevron-right mr-2' />
                    Our Story
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='fa fa-chevron-right mr-2' />
                    Meet the team
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='fa fa-chevron-right mr-2' />
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md'>
            <div className='ftco-footer-widget mb-4'>
              <h2 className='ftco-heading-2'>Company</h2>
              <ul className='list-unstyled'>
                <li>
                  <a href='#'>
                    <span className='fa fa-chevron-right mr-2' />
                    About Us
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='fa fa-chevron-right mr-2' />
                    Press
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='fa fa-chevron-right mr-2' />
                    Contact
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='fa fa-chevron-right mr-2' />
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md'>
            <div className='ftco-footer-widget mb-4'>
              <h2 className='ftco-heading-2'>Have a Questions?</h2>
              <div className='block-23 mb-3'>
                <ul>
                  <li>
                    <FaMap className='icon' />
                    <span className='text'>
                      Office No. 119 Zahrawi Building Abu Hail Dubai UAE P.O Box
                      42128
                    </span>
                  </li>
                  <li>
                    <a href='#'>
                      <FaPhoneAlt className='icon fa fa-phone' />
                      <span className='text'>+971 0569301622</span>
                    </a>
                  </li>
                  <li>
                    <Link to={'/contact'}>
                      <FaEnvelope className='icon fa fa-envelope ' />
                      <span className='text'>contact@zahooraltaiba.com</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
