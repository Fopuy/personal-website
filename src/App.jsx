import './App.css'
import Header from './Components/header'
import About from './Components/about'
import Footer from './Components/footer'
import Skills from './Components/skills'
import Home from './Components/home'

function App() {

  return (
    <>
      <div>
        <div className = "content">
          <Header />
          <Home />
          <About />
          <Skills />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
