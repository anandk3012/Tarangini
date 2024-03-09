import React from 'react'
import logo from '../images/logo.png'

const Navbar = () => {
  return (
    <div className='w-full h-auto flex justify-between p-3 border-b-[1px] border-black'>
      <a href='/' className='logo w-1/6 h-full flex items-center'>
        <img src={logo} alt="" className='w-1/4 ' />
        <h1 className='font-alexandria font-bold text-[1rem]' >Tarangini</h1>
      </a>
      <div className='nav w-1/5 flex justify-evenly text-[0.8rem] font-alexandria font-medium items-center'>
        <div><a href='/'>How it works</a></div>
        <div><a href='/calculator'>Calculator</a></div>
      </div>
    </div>
  )
}

export default Navbar