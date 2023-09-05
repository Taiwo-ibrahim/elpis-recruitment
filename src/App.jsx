import React from "react"
import './App.css'
import Home from './assets/Home/Home'
import About from './assets/About/About'
import Services from './assets/Services/Services'
import Contact from './assets/Contact/Contact'
import Privacy from './assets/Privacy/Privacy'
import Talent from './assets/Talent/Talent'
import AntiSlavery from './assets/AntiSlavery/AntiSlavery'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Privacy' element={<Privacy />} />
          <Route path='/Talent' element={<Talent />} />
          <Route path='/AntiSlavery' element={<AntiSlavery />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
