import React from 'react'
import { useRouteError } from 'react-router-dom'
import { Link } from "react-router-dom"


const ErrorPage = () => {
  const error = useRouteError();
  console.log(error)
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
    <h1 className="text-6xl font-bold text-red-600">404</h1>
    <h2 className="text-2xl font-semibold mt-4">Oops! Page Not Found</h2>
    {error && <p className="text-gray-600 mt-2">{error.data}</p>}
    <Link
      to="/"
      className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition"
    >
      Go Home
    </Link>
  </div>
  )
}

export default ErrorPage

