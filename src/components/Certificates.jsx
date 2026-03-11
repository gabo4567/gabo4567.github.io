import { useCallback, useEffect, useMemo, useState } from 'react'
import './Certificates.css'

export default function Certificates({ language = 'es' }) {
  const content = useMemo(() => {
    return {
      title: language === 'en' ? 'Certificates' : 'Certificados',
      close: language === 'en' ? 'Close' : 'Cerrar',
      items: [
        {
          id: 'codo-a-codo',
          title: 'Codo a Codo 4.0 — Full Stack',
          image: '/certificates/codo-a-codo.png',
          alt: language === 'en' ? 'Codo a Codo certificate' : 'Certificado Codo a Codo'
        },
        {
          id: 'junior-achievement',
          title: 'Junior Achievement — Programación Web',
          image: '/certificates/junior-achievement.png',
          alt: language === 'en' ? 'Junior Achievement certificate' : 'Certificado Junior Achievement'
        }
      ]
    }
  }, [language])

  const [openId, setOpenId] = useState(null)
  const [isClosing, setIsClosing] = useState(false)
  const openItem = content.items.find((i) => i.id === openId) || null

  const requestClose = useCallback(() => {
    if (!openItem || isClosing) return
    setIsClosing(true)
  }, [isClosing, openItem])

  useEffect(() => {
    if (!openItem) return

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') requestClose()
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [openItem, requestClose])

  useEffect(() => {
    if (!isClosing) return
    const id = window.setTimeout(() => {
      setOpenId(null)
      setIsClosing(false)
    }, 170)
    return () => window.clearTimeout(id)
  }, [isClosing])

  return (
    <section id="certificates">
      <h2>{content.title}</h2>

      <div className="certificates-grid">
        {content.items.map((item) => (
          <button
            key={item.id}
            type="button"
            className="certificate-card"
            onClick={() => {
              setIsClosing(false)
              setOpenId(item.id)
            }}
            aria-label={item.title}
          >
            <div className="certificate-preview" aria-hidden="true">
              <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
            </div>
            <div className="certificate-title">{item.title}</div>
          </button>
        ))}
      </div>

      {openItem && (
        <div
          className={['certificate-modal-overlay', isClosing ? 'closing' : ''].filter(Boolean).join(' ')}
          role="dialog"
          aria-modal="true"
          aria-label={openItem.title}
          onClick={requestClose}
        >
          <div className={['certificate-modal', isClosing ? 'closing' : ''].filter(Boolean).join(' ')} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="certificate-modal-close"
              onClick={requestClose}
              aria-label={content.close}
            >
              ✕
            </button>

            <div className="certificate-modal-body">
              <div className="certificate-modal-preview" aria-hidden="true">
                <img src={openItem.image} alt={openItem.alt} decoding="async" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
