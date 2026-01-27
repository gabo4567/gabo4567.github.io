import React, { useState } from 'react'
import ProfilePhotoLightbox from './ProfilePhotoLightbox'
import presentacionImg from '../assets/presentacion.jpg'

function Header() {
  const [showLightbox, setShowLightbox] = useState(false)

  return (
    <header>
      <div className="profile-photo" onClick={() => setShowLightbox(true)}>
        <img src={presentacionImg} alt="Foto de presentación de Juan Gabriel Pared" />
      </div>
      {showLightbox && (
        <ProfilePhotoLightbox 
          image={presentacionImg}
          onClose={() => setShowLightbox(false)}
        />
      )}
      <h1>Hola, soy Juan Gabriel Pared</h1>
      <p>
        Técnico Universitario en Programación · Full Stack Developer
      </p>
      <p>
        Desarrollo aplicaciones web y móviles, con foco en soluciones
        reales y proyectos académicos y profesionales.
      </p>
    </header>
  )
}

export default Header
