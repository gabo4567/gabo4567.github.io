import React, { useState, useEffect } from 'react';
import ImageLightbox from './ImageLightbox';
import './ProjectCarousel.css';

const ProjectCarousel = ({ images = [], altPrefix = 'Imagen' }) => {
  const [index, setIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 4500);
    return () => clearInterval(id);
  }, [images]);

  if (!images || images.length === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <>
      <div className="project-carousel" aria-roledescription="carousel">
        <div className="carousel-inner">
          <button className="carousel-btn prev" onClick={prev} aria-label="Anterior">‹</button>
          <div className="carousel-image-wrap" onClick={() => setIsLightboxOpen(true)}>
            <img src={images[index]} alt={`${altPrefix} ${index + 1}`} />
          </div>
          <button className="carousel-btn next" onClick={next} aria-label="Siguiente">›</button>
        </div>
        <div className="carousel-dots" role="tablist">
          {images.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Ir a imagen ${i + 1}`}
              aria-selected={i === index}
            />
          ))}
        </div>
      </div>
      {isLightboxOpen && (
        <ImageLightbox
          images={images}
          initialIndex={index}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </>
  );
};

export default ProjectCarousel;
