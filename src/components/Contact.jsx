import React, { useState } from 'react';
import { FaMap, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = React.useState('');

  const [errMsg, setErrMsg] = useState('');
  const handleContactForm = (e) => {
    e.preventDefault();

    if (name && email && subject && message) {
      emailjs.send(
        'service_z1oo2un',
        'template_we8jqd9',
        {
          to_name: 'AZIZ',
          subject: subject,
          from_name: name,
          message: message,
          from_email: email,
        },
        'WB6hf_NAoWGa-viCy'
      );

      setName('');
      setEmail('');
      setMessage('');
      setSubject('');
      showSuccess({ message: 'message sent' });
    } else {
      showError({ message: 'Enter all the fields' });
    }
  };

  const showError = ({ message }) => {
    setErrMsg(message);
    setTimeout(() => {
      setErrMsg('');
    }, 3000);
  };

  const showSuccess = ({ message }) => {
    setSuccess(message);
    setTimeout(() => {
      setSuccess('');
    }, 3000);
  };
  return (
    <section className='ftco-section contact-section'>
      <div className='container'>
        <div className='row block-9 justify-content-center mb-5'>
          <div className='col-md-8 mb-md-5'>
            <h2 className='text-center'>
              If you got any questions <br />
              please do not hesitate to send us a message
            </h2>
            <form
              onSubmit={handleContactForm}
              className='bg-light p-5 contact-form'
            >
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Your Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Your Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Subject'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <textarea
                  name=''
                  id=''
                  cols={30}
                  rows={7}
                  className='form-control'
                  placeholder='Message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className='form-group'>
                {errMsg && (
                  <div className='alert alert-danger' role='alert'>
                    {errMsg}
                  </div>
                )}
                {success && (
                  <div className='alert alert-success' role='alert'>
                    {success}
                  </div>
                )}
              </div>
              <div className='form-group'>
                <input
                  type='submit'
                  className='btn btn-primary py-3 px-5'
                  value={'SEND'}
                />
              </div>
            </form>
          </div>
        </div>
        <div className='row d-flex mb-5 contact-info justify-content-center'>
          <div className='col-md-8'>
            <div className='row mb-5'>
              <div className='col-md-4 text-center py-4'>
                <div className='icon'>
                  <FaMap style={{ fontSize: '30px' }} className='mb-1' />
                </div>
                <p>
                  <span>Address:</span> Office No. 119 Zahrawi Building Abu Hail
                  Dubai UAE
                </p>
              </div>
              <div className='col-md-4 text-center border-height py-4'>
                <div className='icon'>
                  <FaPhoneAlt style={{ fontSize: '30px' }} className='mb-1' />
                </div>
                <p>
                  <span>Phone:</span>{' '}
                  <a href='tel://+9710569301622'>+971 0569301622</a>
                </p>
              </div>
              <div className='col-md-4 text-center py-4'>
                <div className='icon'>
                  <FaPaperPlane style={{ fontSize: '30px' }} className='mb-1' />
                </div>
                <p>
                  <span>Email:</span>{' '}
                  <a href='mailto:contact@zahooraltaiba.com'>
                    contact@zahooraltaiba.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            {/* <div id="map" className="bg-white" /> */}
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.6509725003!2d54.94729319111449!3d25.07575944992711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2stn!4v1670014461704!5m2!1sen!2stn'
              width={'100%'}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='125'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
