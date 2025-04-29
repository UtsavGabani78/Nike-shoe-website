import React from 'react'
import amazon from '../assets/amazon.svg'
import flipkart from '../assets/flipkart.svg'
import shoe from '../assets/shoe_image.svg'

function Main() {
  return (
    <div className='m-9 flex'>
      <div className='flex flex-wrap flex-col gap-9 pl-6'>
        <div>
          <p className='text-[108px] text-black font-bold leading-30'>YOUR FEET DESERVE <br />THE BEST</p>
          <p className='text-[16px] text-gray-700'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br /> SHOES.</p></div>
        <div className='flex gap-3.5'>
          <button className='px-2.5 bg-[#d01c28] text-white cursor-pointer'>Shope Now</button>
          <button className='px-2.5 border-[1px] cursor-pointer text-gray-700'>Category</button>
        </div>
        <div>
          <p className='text-[16px] text-gray-700 font-medium'>Also Available On</p>
          <div className='flex'>
            <img src={flipkart} alt="" />
            <img src={amazon} alt="" />
          </div>
        </div>
      </div>
      <div className='w-[800px] flex items-center'>
        <img src={shoe} alt="" className='w-[800px]' />
      </div>
    </div>
  )
}

export default Main