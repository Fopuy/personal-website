import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/header'
import Main from './Components/main'
import Footer from './Components/footer'

function App() {

  return (
    <>
      <div>
        <div className = "content">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
