import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-auto flex justify-between items-center py-5 px-14'>
      <div className='copyright w-1/5'>
        <p >© Tarangini 2024</p>
      </div>
      <div className='links w-1/5 flex justify-center gap-3'>
        <a href='/' className='w-auto h-full flex justify-center'>
        <AiFillInstagram />
        </a>
        <a href='/' className='w-auto h-full flex justify-center'>
        <FaTwitter />
        </a>
      </div>
    </div>
  )
}

export default Footer