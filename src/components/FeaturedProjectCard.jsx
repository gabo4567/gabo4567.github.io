export default function FeaturedProjectCard({ project, language = 'es', onMore }) {
  const labels =
    language === 'en'
      ? {
          repo: 'Repository',
          more: 'View more',
          finished: 'Completed',
          progress: 'In progress'
        }
      : {
          repo: 'Repositorio',
          more: 'Ver más',
          finished: 'Finalizado',
          progress: 'En desarrollo'
        }

  const statusLabel = project.status === 'in_progress' ? labels.progress : labels.finished
  const description = project.shortDescription?.[language] || ''
  const tags = project.technologies?.[language] || []
  const startDate = project.startDate?.[language]

  return (
    <article className="project-card">
      <div className="project-card-image">
        <img
          src={project.images?.[0]}
          alt={project.previewAlt?.[language] || project.title}
          loading="lazy"
        />
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <span className="project-status">
          {statusLabel}
        </span>
        <p className="project-card-desc">{description}</p>

        <div className="project-tags" aria-label={language === 'en' ? 'Technologies' : 'Tecnologías'}>
          {tags.map((t) => (
            <span key={t} className="project-tag">
              {t}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <a
            className="project-btn project-btn-icon"
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={labels.repo}
            title={labels.repo}
            data-tooltip={labels.repo}
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
              aria-hidden="true"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>

      <button type="button" className="project-btn project-more" onClick={() => onMore(project.id)}>
        {labels.more}
      </button>

      {startDate && <span className="project-start">{startDate}</span>}
    </article>
  )
}
