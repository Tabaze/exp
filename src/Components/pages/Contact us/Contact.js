import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className='contact' onLoad={()=>{
      document.getElementById('nav').classList.remove('active')
      document.getElementById('footer').classList.remove('active')
    }}>
    <div className='container'>
      <div className='contactinfo'>
        <div>
          <h2>Contact Us</h2>
          <ul className='info'>
          </ul>
        </div>
      </div>
      <div className='contactform'>
        <h2>Send a Message</h2>
        <div className='formbox'>
          <div className='inputebox w50'>
            <input type={'text'} required ></input>
            <span className='span'>First Name</span>
          </div>
          <div className='inputebox w50'>
            <input type={'text'} required ></input>
            <span className='span'>last Name</span>
          </div>
          <div className='inputebox w50'>
            <input type={'email'} required ></input>
            <span className='span'>Email Adress</span>
            
          </div>
          <div className='inputebox w50'>
            <input type={'text'} required ></input>
            <span className='span'>Mobile Number</span>
          </div>
          <div className='inputebox w100'>
            <textarea required></textarea>
            <span className='span'>Write your message here ....</span>
          </div>
          <div className='inputebox w100'>
            <input type={'submit'} value='send'></input>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Contact;
