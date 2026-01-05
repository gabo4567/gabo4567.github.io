import Header from './components/Header'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import TopBanner from './components/TopBanner'
import './App.css'

function App() {
  return (
    <>
      <TopBanner />
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
