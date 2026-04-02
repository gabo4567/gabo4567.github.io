import React from 'react'
import './Technologies.css'

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

const ICON_ALIASES = {
  'react-native': 'react',
  'htmlcss': 'html'
}

const ICONS = {
  java: { type: 'img', src: `${DEVICON_BASE}/java/java-original.svg` },
  python: { type: 'img', src: `${DEVICON_BASE}/python/python-original.svg` },
  django: { type: 'img', src: `${DEVICON_BASE}/django/django-plain.svg` },
  fastapi: { type: 'img', src: `${DEVICON_BASE}/fastapi/fastapi-original.svg` },
  node: { type: 'img', src: `${DEVICON_BASE}/nodejs/nodejs-original.svg` },
  express: { type: 'img', src: `${DEVICON_BASE}/express/express-original.svg` },
  postgres: { type: 'img', src: `${DEVICON_BASE}/postgresql/postgresql-original.svg` },
  mongo: { type: 'img', src: `${DEVICON_BASE}/mongodb/mongodb-original.svg` },
  firebase: { type: 'img', src: `${DEVICON_BASE}/firebase/firebase-plain.svg` },
  socketio: { type: 'img', src: `${DEVICON_BASE}/socketio/socketio-original.svg` },
  html: { type: 'img', src: `${DEVICON_BASE}/html5/html5-original.svg` },
  css: { type: 'img', src: `${DEVICON_BASE}/css3/css3-original.svg` },
  javascript: { type: 'img', src: `${DEVICON_BASE}/javascript/javascript-original.svg` },
  react: { type: 'img', src: `${DEVICON_BASE}/react/react-original.svg` },
  kotlin: { type: 'img', src: `${DEVICON_BASE}/kotlin/kotlin-original.svg` },
  'android-studio': { type: 'img', src: `${DEVICON_BASE}/androidstudio/androidstudio-original.svg` },
  docker: { type: 'img', src: `${DEVICON_BASE}/docker/docker-original.svg` },
  git: { type: 'img', src: `${DEVICON_BASE}/git/git-original.svg` },
  github: { type: 'img', src: `${DEVICON_BASE}/github/github-original.svg` },
  cicd: { type: 'img', src: `${DEVICON_BASE}/githubactions/githubactions-original.svg` },
  mvvm: {
    type: 'svg',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="5" width="16" height="5" rx="2" />
        <rect x="6" y="12" width="14" height="5" rx="2" />
        <path d="M9 19h9" />
      </svg>
    )
  },
  viewbinding: {
    type: 'svg',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1" />
        <path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1" />
      </svg>
    )
  },
  retrofit: {
    type: 'svg',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-3-6.7" />
        <path d="M21 3v6h-6" />
      </svg>
    )
  },
  coroutines: {
    type: 'svg',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 1l4 4-4 4" />
        <path d="M21 5H11a4 4 0 0 0 0 8h2" />
        <path d="M7 23l-4-4 4-4" />
        <path d="M3 19h10a4 4 0 0 0 0-8h-2" />
      </svg>
    )
  },
  sharedpreferences: {
    type: 'svg',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21v-7" />
        <path d="M4 10V3" />
        <path d="M12 21v-9" />
        <path d="M12 8V3" />
        <path d="M20 21v-5" />
        <path d="M20 12V3" />
        <path d="M2 14h4" />
        <path d="M10 12h4" />
        <path d="M18 16h4" />
      </svg>
    )
  },
  recyclerview: {
    type: 'svg',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="7" height="7" rx="2" />
        <rect x="13" y="4" width="7" height="7" rx="2" />
        <rect x="4" y="13" width="7" height="7" rx="2" />
        <rect x="13" y="13" width="7" height="7" rx="2" />
      </svg>
    )
  },
  sql: {
    type: 'svg',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    )
  },
  excel: {
    type: 'svg',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="16" y2="17" />
      </svg>
    )
  },
  powerbi: {
    type: 'svg',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="3" y1="20" x2="21" y2="20" />
      </svg>
    )
  },
  mysql: { type: 'img', src: `${DEVICON_BASE}/mysql/mysql-original.svg` }
}

function TechIcon({ id, label }) {
  const key = ICON_ALIASES[id] || id
  const icon = ICONS[key]

  if (!icon) {
    return <span className="tech-icon-fallback">{label[0]}</span>
  }

  if (icon.type === 'img') {
    return <img className="tech-icon-img" src={icon.src} alt="" loading="lazy" />
  }

  return <span className="tech-icon-svg">{icon.svg}</span>
}

const TECH_GROUPS = [
  {
    id: 'data',
    titleEs: 'Análisis de Datos',
    titleEn: 'Data Analysis',
    items: [
      { id: 'sql', label: 'SQL' },
      { id: 'excel', label: 'Excel' },
      { id: 'powerbi', label: 'Power BI' }
    ]
  },
  {
    id: 'databases',
    titleEs: 'Bases de Datos',
    titleEn: 'Databases',
    items: [
      { id: 'postgres', label: 'PostgreSQL' },
      { id: 'mysql', label: 'MySQL / SQL Server' },
      { id: 'mongo', label: 'MongoDB' },
      { id: 'firebase', label: 'Firebase' }
    ]
  },
  {
    id: 'programming',
    titleEs: 'Programación',
    titleEn: 'Programming',
    items: [
      { id: 'javascript', label: 'JavaScript' },
      { id: 'python', label: 'Python' },
      { id: 'node', label: 'Node.js (APIs REST)' }
    ]
  },
  {
    id: 'software',
    titleEs: 'Desarrollo de Software',
    titleEn: 'Software Development',
    items: [
      { id: 'react', label: 'React' },
      { id: 'react-native', label: 'React Native' },
      { id: 'htmlcss', label: 'HTML, CSS' }
    ]
  },
  {
    id: 'tools',
    titleEs: 'Herramientas',
    titleEn: 'Tools',
    items: [
      { id: 'git', label: 'Git & GitHub' },
      { id: 'docker', label: 'Docker' },
      { id: 'cicd', label: 'CI/CD (GitHub Actions)' }
    ]
  }
]

function Technologies({ language = 'es' }) {
  const title = language === 'en' ? 'Tech Stack' : 'Stack técnico'

  return (
    <section id="technologies">
      <h2>{title}</h2>
      <div className="tech-stack">
        {TECH_GROUPS.map((group) => (
          <div key={group.id} className={`tech-group tech-group-${group.id}`}>
            <h3 className="tech-group-title">
              {language === 'en' ? group.titleEn : group.titleEs}
            </h3>
            <div className="tech-grid">
              {group.items.map((item, index) => (
                <div
                  key={item.id}
                  className="tech-chip"
                  style={{ '--float-delay': `${index * 120}ms` }}
                >
                  <div className="tech-icon" aria-hidden="true">
                    <TechIcon id={item.id} label={item.label} />
                  </div>
                  <span className="tech-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Technologies
