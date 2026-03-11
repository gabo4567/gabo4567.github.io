import { Fragment } from 'react'
import './About.css'

const ABOUT_HIGHLIGHTS_ES = [
  'Programación',
  'Full Stack',
  'aplicaciones web y móviles',
  'React, React Native, .NET y Firebase',
  'diseño de interfaces',
  'desarrollo de APIs',
  'modelado de bases de datos',
  'lógica de negocio',
  'rendimiento',
  'escalabilidad',
  'experiencia de usuario',
  'buenas prácticas',
  'código mantenible',
  'primera oportunidad en IT',
  'equipo profesional',
  'valor desde el primer día',
  'desarrollador'
]

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function highlightText(text, phrases) {
  if (!phrases?.length) return text

  const ordered = [...phrases].sort((a, b) => b.length - a.length)
  const pattern = ordered.map(escapeRegExp).join('|')
  const regex = new RegExp(`(${pattern})`, 'g')

  const parts = text.split(regex)
  return parts.map((part, index) => {
    const isMatch = ordered.includes(part)
    if (!isMatch) return <Fragment key={index}>{part}</Fragment>
    return (
      <span key={index} className="about-highlight">
        {part}
      </span>
    )
  })
}

function About({ language = 'es' }) {
  const content =
    language === 'en'
      ? {
          title: 'About',
          items: [
            'University Technician in Programming from UTN (Resistencia), focused on Full Stack development.',
            'Experience building web and mobile applications using React, React Native, .NET, and Firebase, contributing to UI design, API development, database modeling, and business logic.',
            'I build systems focused on performance, scalability, and user experience, applying best practices and maintainable code.',
            'I’m looking for my first opportunity in IT to join a professional team, add value from day one, and keep growing as a developer.'
          ]
        }
      : {
          title: 'Sobre mí',
          items: [
            'Técnico Universitario en Programación egresado de la Universidad Tecnológica Nacional (Facultad Regional Resistencia), orientado al desarrollo Full Stack.',
            'Experiencia construyendo aplicaciones web y móviles utilizando React, React Native, .NET y Firebase, participando en el diseño de interfaces, desarrollo de APIs, modelado de bases de datos y lógica de negocio.',
            'Desarrollo sistemas enfocados en rendimiento, escalabilidad y experiencia de usuario, aplicando buenas prácticas y código mantenible.',
            'Busco mi primera oportunidad en IT para integrarme a un equipo profesional, aportar valor desde el primer día y continuar creciendo como desarrollador.'
          ]
        }

  return (
    <section id="about">
      <h2>{content.title}</h2>
      <div className="about-card">
        <ul className="about-list">
          {content.items.map((item, index) => (
            <li key={index} className="about-item">
              {language === 'es'
                ? highlightText(item, ABOUT_HIGHLIGHTS_ES)
                : item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
