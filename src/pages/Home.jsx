import React from 'react'
import Features from '../assets/components/Features'
import About from '../assets/components/About'
import Landing from '../assets/components/Landing'

const Home = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-center'>
        <Landing />
        <Features />
        <About />
    </div>
  )
}

export default Home