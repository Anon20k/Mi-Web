// src/Components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>Mi Portafolio</h1>
      </div>
      <nav className="header-nav">
        <a href="#about">Sobre Mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;