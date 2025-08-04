import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <div className = "content">
            <div className = "header">
              <ul>
                <a href="#">Stack</a>
                <a href="#">Experience</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
              </ul>
            </div>
            <div className = "main">
              <p> Hi I'm Joshua De Jesus. I am an aspiring fullstack developer with a passion for building applications. 
                  I grew my interest with my past work experiences as a network engineer where I found that I enjoyed the 
                  engineering aspects the most. I've been self-teaching myself software engineering through the Odin Project 
                  and I want to showcase my growth on this page.</p>
            </div>
            <div className = "footer">
              <p>Designed and coded by Joshua De Jesus © 2025</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
