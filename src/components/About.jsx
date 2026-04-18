import { Fragment } from 'react'
import './About.css'

const ABOUT_HIGHLIGHTS_ES = [
  'Programación',
  'análisis de datos',
  'desarrollo de software full stack',
  'aplicaciones web y móviles',
  'diseño de APIs',
  'bases de datos',
  'análisis, procesamiento y visualización de datos',
  'SQL, Excel y Power BI',
  'n8n',
  'Make',
  'Data Analyst Jr.',
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
            'Técnico Universitario en Programación egresado de la Universidad Tecnológica Nacional (UTN), con formación en desarrollo de software y bases de datos.',
            'Cuento con experiencia en desarrollo full stack, participando en la construcción de aplicaciones web y móviles, diseño de APIs y manejo de bases de datos, lo que me permite trabajar la información de forma estructurada y eficiente.',
            'Actualmente enfocado en el análisis, procesamiento y automatización de datos para la toma de decisiones, utilizando herramientas como SQL, Excel y Power BI, e incorporando integraciones y workflows con herramientas como n8n y Make.',
            'Busco mi primera oportunidad profesional como Data Analyst Jr., donde pueda aportar valor a través del análisis de datos y la automatización de procesos, y continuar desarrollándome en el área.'
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
