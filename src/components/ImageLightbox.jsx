import React from 'react';
import './ImageLightbox.css';

const ImageLightbox = ({ images, initialIndex, onClose, language = 'es', altPrefix }) => {
  const [index, setIndex] = React.useState(initialIndex || 0);

  const prev = React.useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = React.useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const labels =
    language === 'en'
      ? { close: 'Close', prev: 'Previous', next: 'Next', goTo: 'Go to image', image: altPrefix || 'Screenshot' }
      : { close: 'Cerrar', prev: 'Anterior', next: 'Siguiente', goTo: 'Ir a imagen', image: altPrefix || 'Imagen' };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, onClose, prev]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label={labels.close}>✕</button>
        
        <button className="lightbox-btn prev" onClick={prev} aria-label={labels.prev}>‹</button>
        
        <div className="lightbox-image-wrap">
          <img src={images[index]} alt={`${labels.image} ${index + 1}`} />
        </div>
        
        <button className="lightbox-btn next" onClick={next} aria-label={labels.next}>›</button>
        
        <div className="lightbox-counter">
          {index + 1} / {images.length}
        </div>
        
        <div className="lightbox-dots" role="tablist">
          {images.map((_, i) => (
            <button
              key={i}
              className={`lightbox-dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`${labels.goTo} ${i + 1}`}
              aria-selected={i === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;
