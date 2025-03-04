import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const Home = () => {
  return (
    <div className='flex max-w-[70%] bg-black mx-auto text-white '>
      <div className="left m-5 p-5">
        <h1 className='font-bold text-4xl p-2'>Explore the World, One Country at a time</h1>
        <p className='p-2'>Discover the History, culture and beauty of every nation. Sort, seacrh and filter through countries to find the details you need</p>
        <button className='border-2 border-gray-500 flex items-center justify-center gap-2 bg-gray-700 px-4 py-1 rounded-full p-2 my-4 cursor-pointer'>Start Exploring<FaRegArrowAltCircleRight /></button>
      </div>
      <div className="right m-5  p-1 ">
        <img src="/Images/world.png" width={1000} alt="" />
      </div>
    </div>
  )
}

export default Home
