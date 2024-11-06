// src/Components/Contact.js
import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <div className="underline"></div>
      <p>Puedes encontrarme en las siguientes plataformas o enviarme un correo directamente:</p>

      <div className="contact-icons">
        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaGithub className="icon" title="GitHub" />
        </a>
        <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaLinkedin className="icon" title="LinkedIn" />
        </a>
        <a href="mailto:tuemail@gmail.com" className="icon-link">
          <FaEnvelope className="icon" title="Correo Electrónico" />
        </a>
      </div>
      
      <p className="contact-footer">¡Gracias por visitar mi portafolio!</p>
    </section>
  );
};

export default Contact;