import { useCallback, useEffect, useMemo, useState } from 'react'

export default function FeaturedProjectModal({ project, language = 'es', onClose }) {
  const [index, setIndex] = useState(0)

  const labels = useMemo(() => {
    return language === 'en'
      ? {
          close: 'Close',
          prev: 'Previous',
          next: 'Next',
          demo: 'Demo',
          repo: 'Repository',
          mainFeatures: 'Main features',
          technologies: 'Technologies',
          finished: 'Completed',
          progress: 'In progress'
        }
      : {
          close: 'Cerrar',
          prev: 'Anterior',
          next: 'Siguiente',
          demo: 'Demo',
          repo: 'Repositorio',
          mainFeatures: 'Funcionalidades principales',
          technologies: 'Tecnologías',
          finished: 'Finalizado',
          progress: 'En desarrollo'
        }
  }, [language])

  const images = project.images || []
  const statusLabel = project.status === 'in_progress' ? labels.progress : labels.finished

  const prev = useCallback(() => {
    if (images.length === 0) return
    setIndex((i) => (i - 1 + images.length) % images.length)
  }, [images.length])

  const next = useCallback(() => {
    if (images.length === 0) return
    setIndex((i) => (i + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [next, onClose, prev])

  const description = project.fullDescription?.[language] || []
  const technologies = project.technologies?.[language] || []

  return (
    <div className="project-modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <div className="project-modal-topbar">
          <div className="project-modal-topbar-text">
            <div className="project-modal-title">{project.title}</div>
            <div className="project-modal-subtitle">
              <span className="project-status project-status-modal">{statusLabel}</span>
            </div>
          </div>

          <button type="button" className="project-modal-close" onClick={onClose} aria-label={labels.close}>
            ✕
          </button>
        </div>

        <div className="project-modal-content">
          <div className="project-modal-grid">
            <div className="project-modal-left">
              <div className="project-modal-gallery">
                <div className="project-modal-media">
                  {images.length > 1 ? (
                    <button type="button" className="project-modal-nav prev" onClick={prev} aria-label={labels.prev}>
                      ‹
                    </button>
                  ) : (
                    <div className="project-modal-nav-spacer" aria-hidden="true" />
                  )}

                  <div className="project-modal-hero">
                    {images[index] && (
                      <img
                        src={images[index]}
                        alt={`${project.modalAlt?.[language] || project.title} ${index + 1}`}
                      />
                    )}
                  </div>

                  {images.length > 1 ? (
                    <button type="button" className="project-modal-nav next" onClick={next} aria-label={labels.next}>
                      ›
                    </button>
                  ) : (
                    <div className="project-modal-nav-spacer" aria-hidden="true" />
                  )}
                </div>

                {images.length > 1 && (
                  <div className="project-modal-dots" role="tablist" aria-label={language === 'en' ? 'Screenshots' : 'Capturas'}>
                    {images.map((src, i) => (
                      <button
                        key={src}
                        type="button"
                        className={['project-modal-dotbtn', i === index ? 'active' : ''].filter(Boolean).join(' ')}
                        onClick={() => setIndex(i)}
                        aria-label={`${i + 1}`}
                        aria-selected={i === index}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="project-modal-cta">
                {project.demoUrl ? (
                  <a className="project-btn project-btn-primary" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    {labels.demo}
                  </a>
                ) : null}
                {project.repoUrl ? (
                  <a className="project-btn" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    {labels.repo}
                  </a>
                ) : null}
              </div>

              {technologies.length ? (
                <>
                  <div className="project-modal-tags-title">{labels.technologies}</div>
                  <div className="project-modal-tags" aria-label={labels.technologies}>
                    {technologies.map((t) => (
                      <span key={t} className="project-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              ) : null}
            </div>

            <div className="project-modal-right">
              <div className="project-modal-right-title">{labels.mainFeatures}</div>
              <div className="project-modal-text">
                {Array.isArray(description) && description.length > 1 ? (
                  <ul className="project-modal-bullets">
                    {description.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                ) : Array.isArray(description) ? (
                  description.map((p) => <p key={p}>{p}</p>)
                ) : (
                  description && <p>{description}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
