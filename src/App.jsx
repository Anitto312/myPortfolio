// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from "./Navbar.jsx"
import Home from "./Home.jsx"
import Skills from "./Skills.jsx"
import Aboutme from "./Aboutme.jsx"
import Achievements from "./Acheivement.jsx"
import Education from "./Education.jsx"
import Contact from "./Contact.jsx"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <main>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Skills" element={<Skills/>}></Route>
        <Route path="/Aboutme" element={<Aboutme/>}></Route>
        <Route path="/Achievements" element={<Achievements/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Education" element={<Education/>}></Route>

      </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
