import React from 'react';
import './Navbar.css';

function Navbar() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'Juan_Gabriel_Pared_Developer_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={scrollToTop}>JGP</div>
        
        <ul className="navbar-links">
          <li>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#technologies" onClick={(e) => scrollToSection(e, 'technologies')}>
              Tecnologías
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
              Contacto
            </a>
          </li>
        </ul>

        <button className="navbar-cv-btn" onClick={handleDownloadCV} aria-label="Descargar CV">
          CV 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
