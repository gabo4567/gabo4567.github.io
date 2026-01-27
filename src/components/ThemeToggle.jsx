import React from 'react'
import './ThemeToggle.css'

function ThemeToggle({ theme, onThemeChange }) {
  return (
    <button 
      className="theme-toggle" 
      onClick={() => onThemeChange(theme === 'light' ? 'dark' : 'light')}
      aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
      title={`Modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}

export default ThemeToggle
