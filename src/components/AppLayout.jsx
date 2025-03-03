import React from 'react'
import Navbar from './UI/Navbar.jsx'
import Footer from './UI/Footer.jsx'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AppLayout
