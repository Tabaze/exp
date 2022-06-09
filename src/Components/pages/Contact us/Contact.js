import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className='contact'>
    <div className='container' onLoad={()=>{
      document.getElementById('nav').classList.remove('active')
  }}>
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
            <span>First Name</span>
          </div>
          <div className='inputebox w50'>
            <input type={'text'} required ></input>
            <span>last Name</span>
          </div>
          <div className='inputebox w50'>
            <input type={'email'} required ></input>
            <span>Email Adress</span>
          </div>
          <div className='inputebox w50'>
            <input type={'text'} required ></input>
            <span>Mobile Number</span>
          </div>
          <div className='inputebox w100'>
            <textarea required></textarea>
            <span>Write your message here ....</span>
          </div>
          <div className='inputebox w100'>
            <input type={'submit'} value='send'></input>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Contact;
