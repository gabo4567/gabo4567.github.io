import React from 'react'
import DownloadCVButton from './DownloadCVButton'
import presentacionImg from '../assets/presentacion.jpg'
import './Header.css'

function Header({ language = 'es' }) {
  const content =
    language === 'en'
      ? {
          alt: "Juan Gabriel Pared's profile photo",
          h1: 'Juan Gabriel Pared',
          subtitle: 'University Technician in Programming · Front-End Developer',
          location: 'Corrientes, Argentina',
          description:
            'I develop modern, attractive, and user-centered web interfaces using technologies such as React. I specialize in creating functional, intuitive, and visually professional applications for real-world projects.'
        }
      : {
          alt: 'Foto de presentación de Juan Gabriel Pared',
          h1: 'Juan Gabriel Pared',
          subtitle: 'Técnico Universitario en Programación · Front-End Developer',
          location: 'Corrientes, Argentina',
          description:
            'Desarrollo interfaces web modernas enfocadas en la experiencia de usuario mediante tecnologías como React. Me especializo en construir aplicaciones funcionales, intuitivas y con estándares de diseño profesional, aplicadas a proyectos reales.'
        }

  return (
    <header className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">{content.h1}</h1>
          <p className="hero-subtitle">{content.subtitle}</p>
          <div className="hero-location">
            <span className="hero-pin" aria-hidden="true">
              📍
            </span>
            <span>{content.location}</span>
          </div>
          <div className="hero-links">
            <a
              href="mailto:gabrielparedok@gmail.com"
              aria-label={language === 'en' ? 'Email' : 'Correo'}
              className="hero-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/juan-g-pared"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hero-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://github.com/gabo4567"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hero-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
          <p className="hero-description">{content.description}</p>
          <div className="hero-actions">
            <DownloadCVButton language={language} />
          </div>
        </div>

        <div className="hero-photo">
          <img src={presentacionImg} alt={content.alt} className="hero-photo-img" />
        </div>
      </div>
    </header>
  )
}

export default Header
