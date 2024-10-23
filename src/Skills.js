import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faSearch, faPalette } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

const Skills = () => {
  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (id) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section id="skills" className="skills-section">
      <h2>Habilidades</h2>
      <div className="skills-grid">
        {/* Desarrollo Web (Front-End) */}
        <div className="skill-card">
          <FontAwesomeIcon icon={faCode} className="skill-icon" />
          <h3>Front-End</h3>
          <p>Creación de interfaces web atractivas y responsivas.</p>
          <button className="skill-toggle" onClick={() => toggleDetails(1)}>
            {showDetails[1] ? 'Ver menos' : 'Leer más'}
          </button>
          <ul className={`skills-list ${showDetails[1] ? 'show' : ''}`}>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>jQuery</li>
            <li>AJAX</li>
            <li>JSON</li>
            <li>API's de HTML5</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>

        {/* Desarrollo Web (Back-End) */}
        <div className="skill-card">
          <FontAwesomeIcon icon={faServer} className="skill-icon" />
          <h3>Back-End</h3>
          <p>Soluciones robustas y escalables en el servidor.</p>
          <button className="skill-toggle" onClick={() => toggleDetails(2)}>
            {showDetails[2] ? 'Ver menos' : 'Leer más'}
          </button>
          <ul className={`skills-list ${showDetails[2] ? 'show' : ''}`}>
            <li>PHP</li>
            <li>MySQL</li>
            <li>Java (JEE)</li>
            <li>SOAP</li>
            <li>SQL</li>
            <li>MySQL Workbench</li>
          </ul>
        </div>

        {/* SEO y Marketing Digital */}
        <div className="skill-card">
          <FontAwesomeIcon icon={faSearch} className="skill-icon" />
          <h3>SEO y Marketing Digital</h3>
          <p>Optimización en motores de búsqueda y campañas digitales.</p>
          <button className="skill-toggle" onClick={() => toggleDetails(3)}>
            {showDetails[3] ? 'Ver menos' : 'Leer más'}
          </button>
          <ul className={`skills-list ${showDetails[3] ? 'show' : ''}`}>
            <li>SEO On-Page</li>
            <li>SEO Off-Page</li>
            <li>Google Ads</li>
            <li>SEMrush</li>
            <li>Facebook Ads</li>
            <li>Instagram Ads</li>
            <li>LinkedIn Ads</li>
            <li>Google Analytics 4</li>
            <li>Tag Manager</li>
          </ul>
        </div>

        {/* Diseño y Maquetación */}
        <div className="skill-card">
          <FontAwesomeIcon icon={faPalette} className="skill-icon" />
          <h3>Diseño y Maquetación</h3>
          <p>Creación de interfaces centradas en la experiencia de usuario.</p>
          <button className="skill-toggle" onClick={() => toggleDetails(4)}>
            {showDetails[4] ? 'Ver menos' : 'Leer más'}
          </button>
          <ul className={`skills-list ${showDetails[4] ? 'show' : ''}`}>
            <li>UX/UI</li>
            <li>Adobe Illustrator</li>
            <li>Figma</li>
            <li>Canva</li>
            <li>CorelDRAW</li>
            <li>Adobe InDesign</li>
            <li>Adobe Premiere</li>
            <li>Final Cut Pro</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
