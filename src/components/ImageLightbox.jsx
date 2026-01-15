import React from 'react';
import './ImageLightbox.css';

const ImageLightbox = ({ images, initialIndex, onClose }) => {
  const [index, setIndex] = React.useState(initialIndex || 0);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Cerrar">✕</button>
        
        <button className="lightbox-btn prev" onClick={prev} aria-label="Anterior">‹</button>
        
        <div className="lightbox-image-wrap">
          <img src={images[index]} alt={`Imagen ${index + 1}`} />
        </div>
        
        <button className="lightbox-btn next" onClick={next} aria-label="Siguiente">›</button>
        
        <div className="lightbox-counter">
          {index + 1} / {images.length}
        </div>
        
        <div className="lightbox-dots" role="tablist">
          {images.map((_, i) => (
            <button
              key={i}
              className={`lightbox-dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Ir a imagen ${i + 1}`}
              aria-selected={i === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;
