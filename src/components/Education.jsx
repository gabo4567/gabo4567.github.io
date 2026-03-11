import { Fragment } from 'react'
import './Education.css'

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
      <span key={index} className="education-highlight">
        {part}
      </span>
    )
  })
}

const EDUCATION_HIGHLIGHTS_ES = [
  'Codo a Codo 4.0',
  'lógica de programación',
  'algoritmos',
  'resolución de problemas',
  'Universidad Tecnológica Nacional',
  'Facultad Regional Resistencia',
  'Programación Orientada a Objetos',
  'consultas SQL avanzadas',
  'procedimientos almacenados',
  'bases de datos',
  'Java',
  'MySQL',
  'SQL Server',
  'APIs REST',
  '.NET',
  'C#',
  'patrones de diseño',
  'arquitectura en capas',
  'transacciones',
  'persistencia de datos',
  'Entity Framework',
  'buenas prácticas de código',
  'Análisis y procesamiento de datos',
  'Full Stack',
  'Junior Achievement Argentina',
  'Yo Puedo Programar',
  'HTML',
  'CSS',
  'Promedio académico',
  '9/10',
  '8,7/10',
  'Técnico Universitario en Programación',
  'IT'
]

const EDUCATION_HIGHLIGHTS_EN = [
  'Codo a Codo 4.0',
  'programming logic',
  'algorithms',
  'problem solving',
  'National Technological University',
  'Resistencia Regional Faculty',
  'Object-Oriented Programming',
  'advanced SQL queries',
  'stored procedures',
  'databases',
  'Java',
  'MySQL',
  'SQL Server',
  'REST APIs',
  '.NET',
  'C#',
  'design patterns',
  'layered architecture',
  'transactions',
  'data persistence',
  'Entity Framework',
  'code best practices',
  'Data analysis and processing',
  'Full Stack',
  'Junior Achievement Argentina',
  'Yo Puedo Programar',
  'HTML',
  'CSS',
  'Academic average',
  '9/10',
  '8.7/10',
  'University Technician in Programming',
  'IT'
]

export default function Education({ language = 'es' }) {
  const content =
    language === 'en'
      ? {
          title: 'Academic Background',
          highlights: EDUCATION_HIGHLIGHTS_EN,
          items: [
            {
              period: 'Mar 2023 – Jul 2023',
              title: 'Professional start in Programming',
              paragraphs: [
                'Intensive training in Full Stack development through Codo a Codo 4.0, an official program with 208 hours of practical workload.',
                'In parallel, I completed Junior Achievement Argentina — Yo Puedo Programar, an introductory web development course where I built a project using HTML and CSS.',
                'These experiences marked my first professional approach to software development, consolidating solid foundations in programming logic, algorithms, and problem solving.'
              ]
            },
            {
              period: 'Dec 2023 – Feb 2024',
              title: 'University preparation',
              paragraphs: [
                'Intensive preparation for admission, strengthening computational logic, algorithms, and programming fundamentals.'
              ]
            },
            {
              period: '2024',
              title: 'First year | University Technician in Programming',
              paragraphs: [
                'Foundational training in Object-Oriented Programming and database management at the National Technological University – Resistencia Regional Faculty.'
              ],
              subtitle: 'Main competencies',
              bullets: [
                'Desktop application development with Java',
                'Object-Oriented Programming',
                'Database modeling and design',
                'Advanced SQL queries and stored procedures'
              ],
              techLine: 'Technologies: MySQL • SQL Server',
              note: 'Academic average: 9/10'
            },
            {
              period: '2025',
              title: 'Second year | Advanced technical training',
              paragraphs: [
                'Specialization in backend development and software architecture, applying professional practices and modern tooling.'
              ],
              subtitle: 'Main competencies',
              bullets: [
                'REST APIs development with .NET and C#',
                'Advanced Object-Oriented Programming',
                'Design patterns and layered architecture',
                'Transactions handling and data persistence',
                'Entity Framework and code best practices'
              ],
              note: 'Academic average: 8.7/10'
            },
            {
              period: '2025',
              title: 'Graduation',
              paragraphs: [
                'Graduated as a University Technician in Programming, with a strong foundation in robust, maintainable, and scalable software development.',
                'I am currently looking for my first professional opportunity in IT, aiming to join development teams, add value from day one, and continue my professional growth.'
              ]
            }
          ]
        }
      : {
          title: 'Formación Académica',
          highlights: EDUCATION_HIGHLIGHTS_ES,
          items: [
            {
              period: 'Mar 2023 – Jul 2023',
              title: 'Inicio en Programación Profesional',
              paragraphs: [
                'Formación intensiva en desarrollo Full Stack mediante Codo a Codo 4.0, programa oficial con 208 horas de carga práctica.',
                'En paralelo, completé Junior Achievement Argentina — Yo Puedo Programar, capacitación en desarrollo web inicial donde construí un proyecto aplicando HTML y CSS.',
                'Estas experiencias marcaron mi primer acercamiento profesional al desarrollo de software, consolidando bases sólidas en lógica, algoritmos y resolución de problemas.'
              ]
            },
            {
              period: 'Dic 2023 – Feb 2024',
              title: 'Preparación Universitaria',
              paragraphs: [
                'Preparación intensiva para el ingreso a la carrera, fortaleciendo lógica computacional, algoritmos y fundamentos de programación.'
              ]
            },
            {
              period: '2024',
              title: 'Primer Año | Tecnicatura Universitaria en Programación',
              paragraphs: [
                'Formación fundamental en programación orientada a objetos y gestión de bases de datos en la Universidad Tecnológica Nacional – Facultad Regional Resistencia.'
              ],
              subtitle: 'Competencias principales',
              bullets: [
                'Desarrollo de aplicaciones de escritorio con Java',
                'Programación Orientada a Objetos',
                'Modelado y diseño de bases de datos',
                'Consultas SQL avanzadas y procedimientos almacenados'
              ],
              techLine: 'Tecnologías: MySQL • SQL Server',
              note: 'Promedio académico: 9/10'
            },
            {
              period: '2025',
              title: 'Segundo Año | Formación Técnica Avanzada',
              paragraphs: [
                'Especialización en desarrollo backend y arquitectura de software, aplicando prácticas profesionales y herramientas modernas.'
              ],
              subtitle: 'Competencias principales',
              bullets: [
                'Desarrollo de APIs REST con .NET y C#',
                'Programación Orientada a Objetos avanzada',
                'Patrones de diseño y arquitectura en capas',
                'Manejo de transacciones y persistencia de datos',
                'Entity Framework y buenas prácticas de código',
                'Análisis y procesamiento de datos'
              ],
              note: 'Promedio académico: 8,7/10'
            },
            {
              period: '2025',
              title: 'Egreso Académico',
              paragraphs: [
                'Egresado como Técnico Universitario en Programación, con formación sólida en desarrollo de software robusto, mantenible y escalable.',
                'Me encuentro en búsqueda de mi primera oportunidad profesional en IT, con el objetivo de integrarme a equipos de desarrollo, aportar valor desde el primer día y continuar mi crecimiento profesional.'
              ]
            }
          ]
        }

  return (
    <section id="education">
      <h2>{content.title}</h2>
      <div className="education-card">
        <div className="education-timeline">
          {[...content.items].reverse().map((item) => (
            <div key={`${item.period}-${item.title}`} className="education-item">
              <div className="education-marker" aria-hidden="true" />
              <div className="education-body">
                <div className="education-heading">
                  <div className="education-period">
                    {highlightText(item.period, content.highlights)}
                  </div>
                  <div className="education-title">
                    {highlightText(item.title, content.highlights)}
                  </div>
                </div>

                {item.paragraphs?.map((p) => (
                  <p key={p} className="education-text">
                    {highlightText(p, content.highlights)}
                  </p>
                ))}

                {item.subtitle && (
                  <div className="education-subtitle">
                    {highlightText(item.subtitle, content.highlights)}
                  </div>
                )}

                {item.bullets?.length ? (
                  <ul className="education-list">
                    {item.bullets.map((b) => (
                      <li key={b} className="education-li">
                        {highlightText(b, content.highlights)}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {item.techLine && (
                  <div className="education-techline">
                    {highlightText(item.techLine, content.highlights)}
                  </div>
                )}

                {item.note && (
                  <div className="education-note">
                    {highlightText(item.note, content.highlights)}
                  </div>
                )}

                {item.extra && (
                  <div className="education-extra">
                    {highlightText(item.extra, content.highlights)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
