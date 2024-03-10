import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './CSS/Contactenos.css'

//Pagina por la cual los interesados pueden enviar un mensaje a la compania via email
export const Contactenos = () => {
  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          'service_26iq1ug', 
          'template_rt9x5mg', 
          form.current, {
          publicKey: 'BWtl8VbjbNP5LzqIh',
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

    <div className='contactenos'>
      <img className='contactenos-banner' alt="" />
      <div className="iniciocategory-indexSort">
        <p>
          <span>Bienvenido a la pagina de </span>
          CONTACTENOS
        </p>
      </div>
    
    <form ref={form} onSubmit={sendEmail}>
        <label>Nombre</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Mensaje</label>
        <textarea name="message" />
        <input className='button-contact' type="submit" value="Send" />
      </form>

    </div>
  );
};

export default Contactenos