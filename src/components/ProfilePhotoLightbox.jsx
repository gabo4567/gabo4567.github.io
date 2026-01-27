import React from 'react'
import './ProfilePhotoLightbox.css'

function ProfilePhotoLightbox({ image, onClose }) {
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="profile-lightbox-overlay" onClick={onClose}>
      <div className="profile-lightbox-container" onClick={(e) => e.stopPropagation()}>
        <button className="profile-lightbox-close" onClick={onClose} aria-label="Cerrar">✕</button>
        <img src={image} alt="Foto de presentación ampliada" />
      </div>
    </div>
  )
}

export default ProfilePhotoLightbox
