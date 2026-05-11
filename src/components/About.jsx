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

const ABOUT_HIGHLIGHTS_EN = [
  'University Technician in Programming',
  'National Technological University (UTN)',
  'software development',
  'application architecture',
  'full stack development',
  'web and mobile applications',
  'API design',
  'backend logic',
  'databases',
  'frontend, backend, and data persistence',
  'scalable applications',
  'systems integration',
  'process automation',
  'React',
  'Node.js',
  'SQL',
  'Firebase',
  'n8n',
  'Make',
  'Jr. Full Stack Developer',
  'first professional opportunity'
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
          highlights: ABOUT_HIGHLIGHTS_EN,
          items: [
            'University Technician in Programming graduated from the National Technological University (UTN), with training in software development, databases, and application architecture.',
            'I have experience in full stack development, contributing to the construction of web and mobile applications, API design, backend logic, and database management. This allows me to build complete solutions from end to end, ensuring consistency between frontend, backend, and data persistence.',
            'I am currently focused on building scalable applications, systems integration, and process automation in web environments, using technologies such as React, Node.js, SQL, and Firebase, as well as workflow tools like n8n and Make.',
            "I'm looking for my first professional opportunity as a Jr. Full Stack Developer, where I can add value in the development of complete products, system optimization, and the construction of efficient, maintainable solutions."
          ]
        }
      : {
          title: 'Sobre mí',
          highlights: ABOUT_HIGHLIGHTS_ES,
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
              {highlightText(item, content.highlights)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
