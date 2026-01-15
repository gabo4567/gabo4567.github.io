import React, { useState } from 'react';
import './ProjectGallery.css';
import img1 from '../assets/lotes/Captura de pantalla 2026-01-13 181113.png';
import img2 from '../assets/lotes/Captura de pantalla 2026-01-13 181156.png';
import img3 from '../assets/lotes/Captura de pantalla 2026-01-13 181226.png';
import img4 from '../assets/lotes/Captura de pantalla 2026-01-13 181313.png';
import img5 from '../assets/lotes/Captura de pantalla 2026-01-13 181650.png';

const images = [img1, img2, img3, img4, img5];

export default function ProjectGallery() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="project-gallery">
      <div className="gallery-grid">
        {images.map((src, i) => (
          <button
            key={i}
            className="thumb"
            onClick={() => setOpenIndex(i)}
            aria-label={`Abrir captura ${i + 1}`}
          >
            <img src={src} alt={`Captura ${i + 1}`} />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenIndex(null)}
        >
          <img src={images[openIndex]} alt={`Captura ampliada ${openIndex + 1}`} />
        </div>
      )}
    </div>
  );
}
