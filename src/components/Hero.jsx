import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section
      className='hero-wrap position-relative'
      // style={{ backgroundImage: 'url("images/bg_1.jpg")' }}
      // data-stellar-background-ratio="0.5"
    >
      <div className='video-wrapper'>
        <video autoPlay muted loop id='myVideo'>
          <source src='/hero-landscape-updated1-small.mp4' type='video/mp4' />
        </video>
      </div>
      <div className='overlay' />
      <div className='container badg'>
        <div className='row no-gutters slider-text align-items-center justify-content-end'>
          <div className='col-lg-7 col-md-6 ftco-animate d-flex align-items-end justify-content-end'>
            <div className='text text-right'>
              <h1 className='mb-4'>
                مؤسسة زهور الطيبة
                <br />
                لخدمات إدارة المشاريع
              </h1>
              <h1 style={{ fontSize: '35px' }} className='mb-4'>
                ZAHOOR ALTAIBA
                <br />
                PROJECT MANAGEMENT SERVICES EST.
              </h1>

              <p>
                <Link to={'/contact'} className='btn btn-primary py-3 px-4'>
                  Get in touch
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
