import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-[#141414] flex items-center justify-around text-white p-4'>
        <div className="logo">
            <h1 className='font-bold text-2xl'>World
                <span className='text-blue-500'>Atlas</span>
            </h1>
            </div>
        <ul className='flex gap-7'>
            <li><a href="/" className='hover:text-blue-500 font-bold'>Home</a></li>
            <li><a href="/Country" className='hover:text-blue-500 font-bold'>Country</a></li>
            <li><a href="/About" className='hover:text-blue-500 font-bold'>About</a></li>
            <li><a href="/Contact" className='hover:text-blue-500 font-bold'>Contact</a></li>
        </ul>
      </nav>    
    </div>
  ) 
}

export default Navbar
