import React from 'react'
import {Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'
import Calculator from './pages/Calculator'


function App() {


  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/calculator" element={<Calculator />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
