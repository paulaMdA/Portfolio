
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './Header'; 
import WelcomeSection from './WelcomeSection'; 
import Skills from './Skills'; 
import Timeline from './Timeline'; 
import CalendlyWidget from './CalendlyWidget'; 
import Counters from './Counters';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Cambiar el tema y guardar en el localStorage
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      setIsDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className="App">
      
      <section id="header">
        <Header />
      </section>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      

      {/* Sección de bienvenida */}
      <section className="welcome-section">
      <WelcomeSection />
      </section>

      {/* Sección Sobre mí */}
      
      <section id="about" className="about-section">
        <div className="about-content">
          <h2>Sobre mí</h2>
          <p>
          <strong>Especialista en Marketing Digital y Desarrollo Web</strong> con una sólida formación en <strong>Publicidad y Relaciones Públicas</strong>. 
          <br></br><br></br>Combinando competencias técnicas y creativas, ofrezco <strong>soluciones digitales que integran el desarrollo de aplicaciones web con estrategias de marketing</strong> orientadas a resultados. 
          <br></br><br></br>Busco contribuir a un entorno dinámico y seguir creciendo profesionalmente en el ámbito digital.
          </p>
        </div>
        <div className="about-image">
          <img src="/foto.png" alt="Paula Martínez" />
        </div>
      </section>

      {/* Sección de Habilidades */}
      <section id="skills">
        <Skills />  {/* Aquí usas el nuevo componente */}
      </section>

      <section id="timeline-section">
        <Timeline />
      </section>

      <section id="counters">
        <Counters />
      </section>

      {/* Sección de Contacto */}
      <section id="contact" className="contact-section">
        <h2>Contacto</h2>
        <p>Si estás interesado en saber más sobre mi perfil o tienes alguna oportunidad profesional que pueda encajar con mis habilidades, no dudes en ponerte en contacto.</p>
        <div className="contact-links">
          <a href="mailto:pmartinezdearenaza@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>
          <a href="https://wa.me/34633421864" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faCommentDots} /> WhatsApp
          </a>
          <a href="tel:+34633421864">
            <FontAwesomeIcon icon={faPhone} /> Llamada
          </a>
          <a href="https://www.linkedin.com/in/paula-martinez-de-arenaza" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>


        </div>
      </section>

      
      {/* Insertar Calendly Widget */}
      <section id="calendly">
        <CalendlyWidget />
      </section>
    

      <footer className="portfolio-footer">
        <p>
          Diseñada, desarrollada e implementada por <strong>Paula Martínez de Arenaza</strong> en 2024. Desarrollada con: React, Bootstrap, JavaScript (ES6+), Node.js, jQuery.
        </p>
        <a href="#top" className="back-to-top">
          &#8679; Volver arriba
        </a>
      </footer>





    </div>
  );
}

export default App;
