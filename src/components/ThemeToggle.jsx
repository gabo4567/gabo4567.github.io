import React from 'react'
import './ThemeToggle.css'

function ThemeToggle({ theme, onThemeChange, language = 'es', className }) {
  const nextTheme = theme === 'light' ? 'dark' : 'light'
  const ariaLabel =
    language === 'en'
      ? `Switch to ${nextTheme === 'dark' ? 'dark' : 'light'} mode`
      : `Cambiar a modo ${nextTheme === 'dark' ? 'oscuro' : 'claro'}`

  const title =
    language === 'en'
      ? `${nextTheme === 'dark' ? 'Dark' : 'Light'} mode`
      : `Modo ${nextTheme === 'dark' ? 'oscuro' : 'claro'}`

  return (
    <button 
      className={['theme-toggle', className].filter(Boolean).join(' ')} 
      onClick={() => onThemeChange(nextTheme)}
      aria-label={ariaLabel}
      title={title}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}

export default ThemeToggle
