import React from 'react'
import Demo from './components/Demo'
import Hero from './components/Hero'
import './App.css'

function App() {
  return (
    <main>
        {/* Main Box */}
        <div className="main">  
            <div className="gradient"/>
        </div>
        <div className="app">
            <Hero/>
            <Demo/>
        </div>
    </main>
  )
}

export default App