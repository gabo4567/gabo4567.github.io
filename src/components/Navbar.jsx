import React, { useEffect, useState } from 'react';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

function Navbar({ theme, onThemeChange, language = 'es', onLanguageChange }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const labels =
    language === 'en'
      ? {
          about: 'About',
          projects: 'Projects',
          technologies: 'Stack',
          education: 'Education',
          certificates: 'Certificates',
          downloadCv: 'Download CV',
          language: 'Switch language',
          openMenu: 'Open menu',
          closeMenu: 'Close menu'
        }
      : {
          about: 'Sobre mí',
          projects: 'Proyectos',
          technologies: 'Stack',
          education: 'Formación',
          certificates: 'Certificados',
          downloadCv: 'Descargar CV',
          language: 'Cambiar idioma',
          openMenu: 'Abrir menú',
          closeMenu: 'Cerrar menú'
        };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV Developer.pdf';
    link.download = 'Juan_Gabriel_Pared_Developer_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsMobileMenuOpen(false);
  };

  const handleLanguageToggle = () => {
    if (!onLanguageChange) return;
    onLanguageChange(language === 'es' ? 'en' : 'es');
  };

  const languageFlag = language === 'es' ? '🇦🇷' : '🇺🇸';

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={scrollToTop}>{'</> JGP'}</div>
        
        <ul className="navbar-links">
          <li>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
              {labels.about}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>
              {labels.projects}
            </a>
          </li>
          <li>
            <a href="#technologies" onClick={(e) => scrollToSection(e, 'technologies')}>
              {labels.technologies}
            </a>
          </li>
          <li>
            <a href="#education" onClick={(e) => scrollToSection(e, 'education')}>
              {labels.education}
            </a>
          </li>
          <li>
            <a href="#certificates" onClick={(e) => scrollToSection(e, 'certificates')}>
              {labels.certificates}
            </a>
          </li>
        </ul>

        <div className="navbar-actions">
          <button className="navbar-cv-btn" onClick={handleDownloadCV} aria-label={labels.downloadCv}>
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

          {theme && onThemeChange && (
            <ThemeToggle theme={theme} onThemeChange={onThemeChange} language={language} className="navbar-theme-toggle" />
          )}

          <button className="navbar-lang-btn" onClick={handleLanguageToggle} aria-label={labels.language}>
            <span aria-hidden="true">{languageFlag}</span>
          </button>
        </div>

        <button
          className={`navbar-menu-toggle ${isMobileMenuOpen ? 'is-open' : ''}`}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? labels.closeMenu : labels.openMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu-panel"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div id="mobile-menu-panel" className={`navbar-mobile-overlay ${isMobileMenuOpen ? 'is-open' : ''}`}>
        <ul className="navbar-mobile-links">
          <li>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
              {labels.about}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>
              {labels.projects}
            </a>
          </li>
          <li>
            <a href="#technologies" onClick={(e) => scrollToSection(e, 'technologies')}>
              {labels.technologies}
            </a>
          </li>
          <li>
            <a href="#education" onClick={(e) => scrollToSection(e, 'education')}>
              {labels.education}
            </a>
          </li>
          <li>
            <a href="#certificates" onClick={(e) => scrollToSection(e, 'certificates')}>
              {labels.certificates}
            </a>
          </li>
        </ul>

        <div className="navbar-mobile-actions">
          <button className="navbar-cv-btn navbar-mobile-cv" onClick={handleDownloadCV} aria-label={labels.downloadCv}>
            {labels.downloadCv}
          </button>

          {theme && onThemeChange && (
            <ThemeToggle
              theme={theme}
              onThemeChange={onThemeChange}
              language={language}
              className="navbar-theme-toggle navbar-mobile-theme-toggle"
            />
          )}

          <button className="navbar-lang-btn navbar-mobile-lang-btn" onClick={handleLanguageToggle} aria-label={labels.language}>
            <span aria-hidden="true">{languageFlag}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
