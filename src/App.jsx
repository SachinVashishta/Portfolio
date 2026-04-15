import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {


  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="footer">
        <p>&copy; 2024 John Doe. Built with React & Vite.</p>
      </footer>
    </div>
  )
}

export default App
