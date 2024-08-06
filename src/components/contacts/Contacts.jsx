import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import React from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {

  const form = useRef()

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_kpzxgqz', 'template_kk9ipl8', form.current, 'uKELRhBOpArKOozDJ')
  //   e.target.reset()
    
  // }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xubn9yg', 'template_zx4h2q6', form.current, {
        publicKey: '9XWHp97X_-JjOC0AC',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      
  };


  return (
    <section id='contacts'>

      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h6>vasanthakumarvk1000@gmail.com</h6>
            <a href="mailto:thakshiladb2000@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>

         <input type="text" name="to_name" placeholder="Your Full Name" required />  {/* client side validation */}
         <input type="email" name='from_name' placeholder='Your Email' required /> 
         <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
         <button type="submit" className='btn btn-primary' value='Send'>Send Message</button>
        </form>
      </div>    
    </section>
  )
}

export default Contacts