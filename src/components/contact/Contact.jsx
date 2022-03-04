import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ivn7jf8', 'template_xmal9ez', form.current, 'xxxqEwDnfp8KmL3Sd')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Mensagem enviada com sucesso!');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Entre em Contato</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ramunizbh@yahoo.com.br</h5>
            <a href="mailto:ramunizbh@yahoo.com.br" target='_blank'>Enviar Mensagem</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>ramunizbh</h5>
            <a href="https://m.me/ramunizbh" target='_blank'>Enviar Mensagem</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=+5511949064582" target='_blank'>Enviar Mensagem</a>
          </article>
        </div>
        {/* Fim da Opção de Contato*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Seu nome completo' required/>
          <input type="email" name='email' placeholder='Seu e-mail' required/>
          <textarea name="message" rows="7" placeholder='Sua mensagem' required></textarea>
          <button type='submit' class='btn btn-primary'>Enviar Mensagem</button>
        </form>
      </div>

    </section>
  )
}

export default Contact