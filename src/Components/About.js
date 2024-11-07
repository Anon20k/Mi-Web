// src/Components/About.js
import React from 'react';
import './About.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importamos los iconos
import profilePhoto from '../Resources/1718257713337.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>Sobre Mí</h2>
      <div className="underline"></div>
      <div className="about-container">
        <img src={profilePhoto} alt="Desarrollador" className="about-photo" />
        <div className="about-text">
          <h3>Soy Juan Leon</h3>
          <h3>Full Stack Developer</h3>
          <p>
            Soy un apasionado por la programación, la música y los libros. La disciplina, dedicación y compromiso son tres factores que me definen. Me gusta dar siempre lo mejor de mí en todo, por más simple o compleja que pueda ser la tarea. A continuación, verás los proyectos que he realizado hasta el momento. ¡Que lo disfrutes!
          </p>
        </div>
      </div>
      <div className="social-icons">
        <a href="https://github.com/Anon20k" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/juan-leon-6a485417b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:leon124jt@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <div className="cv-button">
        <a href="https://drive.google.com/link-tu-cv" target="_blank" rel="noopener noreferrer">
          Ver CV
        </a>
      </div>
    </section>
  );
};

export default About;