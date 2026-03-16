import { useCallback, useEffect, useMemo, useState } from 'react'

export default function FeaturedProjectModal({ project, language = 'es', onClose }) {
  const [index, setIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState(null)

  const labels = useMemo(() => {
    return language === 'en'
      ? {
          close: 'Close',
          prev: 'Previous',
          next: 'Next',
          demo: 'Demo',
          repo: 'Repository',
          swipe: 'Swipe',
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
          swipe: 'Desliza',
          mainFeatures: 'Funcionalidades principales',
          technologies: 'Tecnologías',
          finished: 'Finalizado',
          progress: 'En desarrollo'
        }
  }, [language])

  const images = project.images || []
  const statusLabel = project.status === 'in_progress' ? labels.progress : labels.finished
  const isFirstImage = index <= 0
  const isLastImage = images.length === 0 ? true : index >= images.length - 1

  const prev = useCallback(() => {
    if (images.length === 0) return
    setIndex((i) => Math.max(0, i - 1))
  }, [images.length])

  const next = useCallback(() => {
    if (images.length === 0) return
    setIndex((i) => Math.min(images.length - 1, i + 1))
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

  const handleTouchStart = (e) => {
    if (!images.length) return
    setTouchStartX(e.touches?.[0]?.clientX ?? null)
  }

  const handleTouchEnd = (e) => {
    if (touchStartX == null || !images.length) return
    const endX = e.changedTouches?.[0]?.clientX
    if (typeof endX !== 'number') return

    const delta = endX - touchStartX
    const threshold = 36

    if (Math.abs(delta) < threshold) return

    if (delta < 0) {
      next()
    } else {
      prev()
    }

    setTouchStartX(null)
  }

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
                    <button
                      type="button"
                      className="project-modal-nav prev"
                      onClick={prev}
                      aria-label={labels.prev}
                      disabled={isFirstImage}
                    >
                      ‹
                    </button>
                  ) : (
                    <div className="project-modal-nav-spacer" aria-hidden="true" />
                  )}

                  <div className="project-modal-hero" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                    {images[index] && (
                      <img
                        src={images[index]}
                        alt={`${project.modalAlt?.[language] || project.title} ${index + 1}`}
                      />
                    )}
                  </div>

                  {images.length > 1 ? (
                    <button
                      type="button"
                      className="project-modal-nav next"
                      onClick={next}
                      aria-label={labels.next}
                      disabled={isLastImage}
                    >
                      ›
                    </button>
                  ) : (
                    <div className="project-modal-nav-spacer" aria-hidden="true" />
                  )}
                </div>

                {images.length > 1 && (
                  <div className="project-modal-swipe-hint" aria-hidden="true">
                    <span className="project-modal-swipe-line"></span>
                    <span className="project-modal-swipe-text">{labels.swipe}</span>
                  </div>
                )}

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
                  <a className="project-btn project-modal-repo-btn" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
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
