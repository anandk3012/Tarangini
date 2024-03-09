import React from 'react'
import mainbg from '../images/main-bg.png' 

const Landing = () => {
  return (
    <div className="h-screen relative overflow-clip bg-contain">
    <img src={mainbg} alt="Background" className="w-full h-auto" />
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <h1 className="w-1/2 text-[3rem] text-white font-bold">Empowering Homes and Businesses with Affordable Solar Energy</h1>
    </div>
  </div>
  
  )
}

export default Landing