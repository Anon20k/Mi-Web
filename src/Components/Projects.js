// src/Components/Projects.js
import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projectList = [
    {
      title: 'Mi Web',
      image: 'https://i.ibb.co/Km00L9R/Captura-de-pantalla-2024-11-06-200212.png', // Reemplaza con la URL o importación de la imagen
      github: 'https://github.com/tuusuario/proyecto1',
      liveDemo: 'https://tuweb.com/proyecto1'
    },
    {
      title: 'Administrador Agricola (CultivaSmart)',
      image: 'https://i.ibb.co/DwG9SNF/Captura-de-pantalla-2024-11-06-195823.png', // Reemplaza con la URL o importación de la imagen
      github: 'https://github.com/Anon20k/CultivaSmart',
      liveDemo: 'https://tuweb.com/proyecto2'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>
      <div className="underline"></div>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-button">
                <FaGithub />
              </a>
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="icon-button">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;