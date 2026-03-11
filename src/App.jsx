import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
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

  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language')
    if (saved === 'es' || saved === 'en') return saved
    return 'es'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
  }, [language])

  return (
    <>
      <Navbar
        theme={theme}
        onThemeChange={handleThemeChange}
        language={language}
        onLanguageChange={setLanguage}
      />
      <div className="container">
        <Header language={language} />
        <About language={language} />
        <Projects language={language} />
        <Technologies language={language} />
        <Education language={language} />
        <Certificates language={language} />
      </div>
      <Footer language={language} />
    </>
  )
}

export default App
