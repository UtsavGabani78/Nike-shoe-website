import React from 'react'
import logo from '../assets/brand_logo.svg'

function Navbar() {
  return (
    <div className='flex p-8 justify-between items-center'>
      <img src={logo} alt="" />
      <ul className='flex gap-7 text-[#2E2E2E]'>
        <li className='cursor-pointer'>MENU</li>
        <li className='cursor-pointer'>LOCATION</li>
        <li className='cursor-pointer'>ABOUT</li>
        <li className='cursor-pointer'>CONTACT</li>
      </ul>

      <button className='px-4 bg-[#d01c28] text-white text-[18px] cursor-pointer'>Login</button>
    </div>
  )
}

export default Navbar