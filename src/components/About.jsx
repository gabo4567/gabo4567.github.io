import { Fragment } from 'react'
import './About.css'

const ABOUT_HIGHLIGHTS_ES = [
  'Técnico Universitario en Programación',
  'Universidad Tecnológica Nacional (UTN)',
  'desarrollo de software',
  'arquitectura de aplicaciones',
  'desarrollo full stack',
  'aplicaciones web y móviles',
  'diseño de APIs',
  'lógica de backend',
  'bases de datos',
  'frontend, backend y persistencia de datos',
  'aplicaciones escalables',
  'integración de sistemas',
  'automatización de procesos',
  'React',
  'Node.js',
  'SQL',
  'Firebase',
  'n8n',
  'Make',
  'Full Stack Developer Jr.',
  'primera oportunidad profesional'
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
            'University Technician in Programming from UTN, focused on data analysis.',
            'I have experience in full stack software development, building web and mobile applications, designing APIs, and managing databases, which allows me to understand and handle data in a structured and efficient way.',
            'Focused on the analysis, processing, and visualization of data for decision-making, using tools like SQL, Excel, and Power BI.',
            "I'm looking for my first professional opportunity as a Jr. Data Analyst, where I can add value through data analysis and continue growing in the field."
          ]
        }
      : {
          title: 'Sobre mí',
          items: [
            'Técnico Universitario en Programación egresado de la Universidad Tecnológica Nacional (UTN), con formación en desarrollo de software, bases de datos y arquitectura de aplicaciones.',
            'Cuento con experiencia en desarrollo full stack, participando en la construcción de aplicaciones web y móviles, diseño de APIs, lógica de backend y manejo de bases de datos, lo que me permite desarrollar soluciones completas de principio a fin, asegurando coherencia entre frontend, backend y persistencia de datos.',
            'Actualmente enfocado en el desarrollo de aplicaciones escalables, la integración de sistemas y la automatización de procesos dentro de entornos web, utilizando tecnologías como React, Node.js, SQL y Firebase, además de herramientas de workflow como n8n y Make.',
            'Busco mi primera oportunidad profesional como Full Stack Developer Jr., donde pueda aportar valor en el desarrollo de productos completos, la optimización de sistemas y la construcción de soluciones eficientes y mantenibles.'
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
