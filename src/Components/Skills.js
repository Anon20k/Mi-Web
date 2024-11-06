// src/Components/Skills.js
import React from 'react';
import './Skills.css';
import { FaReact, FaGithub, FaHtml5, FaJs, FaCss3Alt, FaUnity, FaPython, FaFigma } from 'react-icons/fa';
import { SiCplusplus, SiCsharp, SiUnrealengine, SiFlutter, SiDart, SiExpo } from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="underline"></div>
      <p>Mis lenguajes, frameworks, tecnologías y herramientas:</p>

      <div className="skills-category">
        <h3>Lenguajes</h3>
        <div className="skills-icons">
          <SiCplusplus className="icon" title="C++" />
          <SiCsharp className="icon" title="C#" />
          <FaPython className="icon" title="Python" />
          <FaHtml5 className="icon" title="HTML5" />
          <FaJs className="icon" title="JavaScript" />
          <FaCss3Alt className="icon" title="CSS3" />
        </div>
      </div>

      <div className="skills-category">
        <h3>Frameworks y Librerías</h3>
        <div className="skills-icons">
          <FaReact className="icon" title="React" />
          <SiFlutter className="icon" title="Flutter" />
          <SiDart className="icon" title="Dart" />
          <SiExpo className="icon" title="Expo" />
        </div>
      </div>

      <div className="skills-category">
        <h3>Tecnologías y Herramientas</h3>
        <div className="skills-icons">
          <FaUnity className="icon" title="Unity" />
          <SiUnrealengine className="icon" title="Unreal Engine" />
          <FaGithub className="icon" title="GitHub" />
          <FaFigma className="icon" title="Figma" />
        </div>
      </div>
    </section>
  );
};

export default Skills;