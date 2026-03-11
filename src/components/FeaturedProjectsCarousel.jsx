import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

function getScrollStep(trackEl) {
  const cards = trackEl.querySelectorAll('.project-card')
  if (cards.length >= 2) {
    const step = cards[1].offsetLeft - cards[0].offsetLeft
    if (step > 0) return step
  }
  if (cards.length === 1) return cards[0].clientWidth
  return trackEl.clientWidth
}

export default function FeaturedProjectsCarousel({ language = 'es', children }) {
  const trackRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const labels = useMemo(() => {
    return language === 'en'
      ? { prev: 'Previous', next: 'Next' }
      : { prev: 'Anterior', next: 'Siguiente' }
  }, [language])

  const updateLimits = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const maxScrollLeft = el.scrollWidth - el.clientWidth
    setCanPrev(el.scrollLeft > 2)
    setCanNext(el.scrollLeft < maxScrollLeft - 2)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    updateLimits()

    const onScroll = () => updateLimits()
    el.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateLimits)

    return () => {
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateLimits)
    }
  }, [updateLimits])

  const scrollByCard = useCallback((direction) => {
    const el = trackRef.current
    if (!el) return
    const step = getScrollStep(el)
    el.scrollBy({ left: step * direction, behavior: 'smooth' })
  }, [])

  return (
    <div className="featured-carousel" role="region" aria-roledescription="carousel">
      <button
        type="button"
        className="carousel-arrow prev"
        onClick={() => scrollByCard(-1)}
        aria-label={labels.prev}
        disabled={!canPrev}
      >
        ‹
      </button>
      <div ref={trackRef} className="featured-track">
        {children}
      </div>
      <button
        type="button"
        className="carousel-arrow next"
        onClick={() => scrollByCard(1)}
        aria-label={labels.next}
        disabled={!canNext}
      >
        ›
      </button>
    </div>
  )
}
