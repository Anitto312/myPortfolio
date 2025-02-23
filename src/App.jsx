// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from "./Navbar.jsx"
import Home from "./Home.jsx"
import Skills from "./skills.jsx"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <main>
      <BrowserRouter>
      
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Skills" element={<Skills/>}></Route>
      </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
