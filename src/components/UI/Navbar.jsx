import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-gray-800 flex items-center justify-around text-white p-4'>
        <div className="logo">
            <h1 className='font-bold text-2xl'>World
                <span className='text-blue-500'>Atlas</span>
            </h1>
            </div>
        <ul className='flex gap-7'>
            <li><a href="/" className='hover:text-blue-500'>Home</a></li>
            <li><a href="/Country" className='hover:text-blue-500'>Country</a></li>
            <li><a href="/About" className='hover:text-blue-500'>About</a></li>
            <li><a href="/Contact" className='hover:text-blue-500'>Contact</a></li>
        </ul>
      </nav>    
    </div>
  )
}

export default Navbar
