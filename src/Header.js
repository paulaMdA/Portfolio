import React, { useState, useEffect } from 'react';
import './Header.css';
import { Navbar, Nav } from 'react-bootstrap';

const Header = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [logo, setLogo] = useState('');

  // Detectar si es móvil o escritorio y ajustar el logo según el modo oscuro o claro
  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth <= 768;
      setLogo(isDarkMode 
        ? (mobileView ? '/logoOscuroCorto.png' : '/logoOscuroLargo.png')
        : (mobileView ? '/logoCorto.png' : '/logoLargo.png')
      );
      setIsMobile(mobileView);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Ejecutar para ajustar el logo en el primer renderizado

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDarkMode]);

  // Cambio de logo al hacer clic o pasar el mouse
  const handleLogoChange = () => {
    setLogo((prevLogo) =>
      isDarkMode 
        ? (prevLogo === '/logoOscuroLargo.png' ? '/logoOscuroCorto.png' : '/logoOscuroLargo.png')
        : (prevLogo === '/logoLargo.png' ? '/logoCorto.png' : '/logoLargo.png')
    );
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Navbar expand="lg" fixed="top" bg={isDarkMode ? "dark" : "light"} className={`header ${isDarkMode ? "dark-mode-header" : ""}`}>
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="Logo"
            className="logo-img"
            onClick={handleLogoChange}
            onMouseEnter={!isMobile ? handleLogoChange : null}
            onMouseLeave={!isMobile ? handleLogoChange : null}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
        
        <Navbar.Collapse id="basic-navbar-nav" className={`${isMenuOpen ? 'show' : ''}`}>
          <Nav className="ml-auto">
            {/* Aplicar estilos en línea para los enlaces en modo oscuro */}
            <Nav.Link href="#about" style={{ color: isDarkMode ? '#f4f4f4' : '#333' }}>
              Sobre mí
            </Nav.Link>
            <Nav.Link href="#skills" style={{ color: isDarkMode ? '#f4f4f4' : '#333' }}>
              Habilidades
            </Nav.Link>
            <Nav.Link href="https://github.com/paulaMdA" target="_blank" style={{ color: isDarkMode ? '#f4f4f4' : '#333' }}>
              Proyectos
            </Nav.Link>
            <Nav.Link href="#contact" style={{ color: isDarkMode ? '#f4f4f4' : '#333' }}>
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Botón de cambio de tema */}
      <div className="theme-toggle" onClick={toggleTheme}>
        <div className={`toggle-button ${isDarkMode ? 'dark' : 'light'}`}>
          <div className="toggle-circle"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
