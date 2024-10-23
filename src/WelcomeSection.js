import React, { useEffect, useState } from 'react';
import './WelcomeSection.css';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCommentDots, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const words = [
  "Desarrollo Web (Front-End)", "HTML5", "CSS3", "JavaScript (ES6+)", "React", "Bootstrap",
  "React-Bootstrap", "jQuery", "AJAX", "JSON", "API's de HTML5", "OpenLayers", "Canvas",
  "FontAwesome (Íconos)", "Responsive Web Design", "PHP", "MySQL", "Java (JEE)", "SEO",
  "WordPress", "Google Ads", "UX/UI", "Git", "LocalStorage"
];

const WelcomeSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const $container = $('#animated-words');

    const generateWord = () => {
      const wordText = words[Math.floor(Math.random() * words.length)];
      const $word = $('<div class="word"></div>').text(wordText);
      
      const xPos = Math.random() * $container.width();
      const yPos = Math.random() * $container.height();
      
      $word.css({
        top: yPos,
        left: xPos,
        fontSize: `${Math.random() * 1.5 + 1}rem`
      });
      
      $container.append($word);

      $word.animate({
        opacity: 0,
        top: `${yPos - 50}px`
      }, 4000, function() {
        $(this).remove();
      });
    };

    const intervalId = setInterval(generateWord, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="welcome-section">
      <div className="welcome-content">
        <h2>¡Hola! Soy Paula Martínez de Arenaza</h2>
        <p>Especialista en Estrategias Digitales y Desarrollo de Soluciones Web.</p>
        <button onClick={handleOpenModal} className="btn-contact">Contáctame</button>
      </div>
      <div id="animated-words" className="animated-words"></div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src="foto.png" alt="Paula Martínez de Arenaza" className="modal-image" />
            <h3>Opciones de Contacto</h3>
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
            <button className="close-modal" onClick={handleCloseModal}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default WelcomeSection;
