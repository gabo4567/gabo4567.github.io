import React from 'react'
import './Technologies.css'

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

const ICON_ALIASES = {
  'react-native': 'react'
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
  }
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
    id: 'backend',
    titleEs: 'Backend y BD',
    titleEn: 'Backend & DB',
    items: [
      { id: 'java', label: 'Java' },
      { id: 'python', label: 'Python' },
      { id: 'django', label: 'Django' },
      { id: 'fastapi', label: 'FastAPI' },
      { id: 'node', label: 'Node.js' },
      { id: 'express', label: 'Express' },
      { id: 'postgres', label: 'PostgreSQL' },
      { id: 'mongo', label: 'MongoDB' },
      { id: 'firebase', label: 'Firebase' },
      { id: 'socketio', label: 'Socket.IO' }
    ]
  },
  {
    id: 'frontend',
    titleEs: 'Frontend',
    titleEn: 'Frontend',
    items: [
      { id: 'html', label: 'HTML' },
      { id: 'css', label: 'CSS' },
      { id: 'javascript', label: 'JavaScript' },
      { id: 'react', label: 'React' }
    ]
  },
  {
    id: 'mobile',
    titleEs: 'Mobile',
    titleEn: 'Mobile',
    items: [
      { id: 'react-native', label: 'React Native' },
      { id: 'kotlin', label: 'Kotlin' },
      { id: 'android-studio', label: 'Android Studio' },
      { id: 'mvvm', label: 'MVVM' },
      { id: 'viewbinding', label: 'ViewBinding' },
      { id: 'retrofit', label: 'Retrofit' },
      { id: 'coroutines', label: 'Coroutines' },
      { id: 'sharedpreferences', label: 'Shared Preferences' },
      { id: 'recyclerview', label: 'Recycler View' }
    ]
  },
  {
    id: 'tools',
    titleEs: 'Herramientas',
    titleEn: 'Tools',
    items: [
      { id: 'docker', label: 'Docker' },
      { id: 'cicd', label: 'CI/CD (GitHub Actions)' },
      { id: 'git', label: 'Git' },
      { id: 'github', label: 'GitHub' }
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
