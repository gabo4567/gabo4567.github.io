import React from 'react'
import './DownloadCVButton.css'

function DownloadCVButton() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = new URL('../assets/CV.pdf', import.meta.url).href
    link.download = 'Juan_Gabriel_Pared_Developer_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="download-cv-container">
      <button className="download-cv-button" onClick={handleDownload}>
        <svg
          className="download-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        <span>Descargar CV (PDF)</span>
      </button>
    </div>
  )
}

export default DownloadCVButton
