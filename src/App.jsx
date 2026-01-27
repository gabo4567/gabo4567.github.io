import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import TopBanner from './components/TopBanner'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    // Cargar tema del localStorage o usar preferencia del sistema
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    // Aplicar tema al documento
    document.documentElement.setAttribute('data-theme', theme)
    // Guardar preferencia
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
  }

  return (
    <>
      <TopBanner />
      <ThemeToggle theme={theme} onThemeChange={handleThemeChange} />
      <div className="container">
        <Header />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
