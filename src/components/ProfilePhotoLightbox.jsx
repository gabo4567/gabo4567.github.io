import React from 'react'
import './ProfilePhotoLightbox.css'

function ProfilePhotoLightbox({ image, onClose, alt, language = 'es' }) {
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
        <button
          className="profile-lightbox-close"
          onClick={onClose}
          aria-label={language === 'en' ? 'Close' : 'Cerrar'}
        >
          ✕
        </button>
        <img src={image} alt={alt || (language === 'en' ? 'Enlarged profile photo' : 'Foto de presentación ampliada')} />
      </div>
    </div>
  )
}

export default ProfilePhotoLightbox
