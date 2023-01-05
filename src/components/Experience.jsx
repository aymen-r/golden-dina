import React from 'react';

const Experience = () => {
  return (
    <section className='ftco-section ftco-no-pb ftco-no-pt mt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 order-md-last d-flex align-items-stretch '>
            {/* <div
              className="img w-100 img-2 mr-md-2"
              style={{ backgroundImage: "url(images/about.jpg)" }}
            /> */}
            <div
              className='img w-100 img-2 ml-md-2'
              style={{ backgroundImage: 'url(images/about-3.jpg)' }}
            />
          </div>
          <div className='col-md-6 wrap-about py-md-5 ftco-animate'>
            <div className='heading-section pr-md-5'>
              <div className='row justify-content-center'>
                <div className='col-md-12 heading-section text-center ftco-animate mb-5'>
                  <span className='subheading'>A DIGITAL EXPERIENCE</span>
                </div>
              </div>
              <h2 className='mb-4 text-center'>MANAGE YOUR PROPERTY 24/7</h2>
              <p>
                ZAHOOR ALTAIBA for Management Services allows home owners and
                tenants to fully manage their property from their phone. From
                raising service requests to digital access cards, it has been
                designed using the latest technology to make your life with
                ZAHOOR ALTAIBA as easy as possible.
              </p>
              <p>
                Our properties each have their own unique design aesthetic,
                providing an aspirational lifestyle within a thriving community,
                supported by Emaar’s community management team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
