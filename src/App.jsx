import { useState } from 'react'
import Navbar from './components/UI/Navbar.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Country from './pages/Country.jsx'
import About from './pages/About.jsx'
import AppLayout from './components/AppLayout.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        },
        {
        path:'country',
        element:<Country/>,
        },
        {
        path:'contact',
        element:<Contact/>,
        },
        {
        path:'about',
        element:<About/>,
        },
    ],
  },
    
])
function App() {

  return (
    <RouterProvider router={router}>
    <>
     
    </>
    </RouterProvider>
  )
}

export default App
