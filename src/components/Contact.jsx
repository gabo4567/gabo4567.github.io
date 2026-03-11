function Contact({ language = 'es' }) {
  const content =
    language === 'en'
      ? {
          title: 'Contact',
          email: 'Email',
          github: 'GitHub',
          linkedin: 'LinkedIn',
          linkedinProfile: 'LinkedIn profile'
        }
      : {
          title: 'Contacto',
          email: 'Email',
          github: 'GitHub',
          linkedin: 'LinkedIn',
          linkedinProfile: 'Perfil de LinkedIn'
        }

  return (
    <section id="contact">
      <h2>{content.title}</h2>
      <p>📧 {content.email}: gabrielparedok@gmail.com</p>
      <p>
        🐙 {content.github}:{' '}
        <a href="https://github.com/gabo4567" target="_blank" rel="noopener noreferrer">
          github.com/gabo4567
        </a>
      </p>
      <p>
        🔗 {content.linkedin}:{' '}
        <a href="https://www.linkedin.com/in/juan-g-pared" target="_blank" rel="noopener noreferrer">
          {content.linkedinProfile}
        </a>
      </p>
    </section>
  )
}

export default Contact
