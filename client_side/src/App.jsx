import './App.css'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Skills from './assets/components/Skills'
import Projects from './assets/components/Projects'
import Contact from './assets/components/Contact'

function App() {
  return (
    <>
      <div>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
      </div>
    </>
  )
}

export default App
