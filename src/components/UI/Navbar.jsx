import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-[#141414] text-white p-4'>
      <div className='container mx-auto flex items-center justify-evenly'>
        {/* Logo */}
        <div className='logo'>
          <NavLink to='/'>
            <h1 className='font-bold text-2xl'>World<span className='text-blue-500'>Atlas</span></h1>
          </NavLink>
        </div>
        
        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-7 items-center'>
          <li className='hover:text-blue-500 font-bold'><NavLink to='/'>Home</NavLink></li>
          <li className='hover:text-blue-500 font-bold'><NavLink to='/country'>Country</NavLink></li>
          <li className='hover:text-blue-500 font-bold'><NavLink to='/about'>About</NavLink></li>
          <li className='hover:text-blue-500 font-bold'><NavLink to='/contact'>Contact</NavLink></li>
          <li>
            <Link to='https://github.com/Zakria-sudo' target='_blank' >
              <img src='/Images/github-brands.svg' className='invert w-8' alt='GitHub' />
            </Link>
          </li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button className='md:hidden p-2 border border-white rounded' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <ul className='md:hidden flex flex-col items-center bg-[#1a1a1a] py-4 gap-4'>
          <li className='hover:text-blue-500'><NavLink to='/' onClick={() => setIsOpen(false)}>Home</NavLink></li>
          <li className='hover:text-blue-500'><NavLink to='/country' onClick={() => setIsOpen(false)}>Country</NavLink></li>
          <li className='hover:text-blue-500'><NavLink to='/about' onClick={() => setIsOpen(false)}>About</NavLink></li>
          <li className='hover:text-blue-500'><NavLink to='/contact' onClick={() => setIsOpen(false)}>Contact</NavLink></li>
          <li>
            <Link to='https://github.com/Zakria-sudo' target='_blank'>
              <img src='/Images/github-brands.svg' className='invert w-8' alt='GitHub' />
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;