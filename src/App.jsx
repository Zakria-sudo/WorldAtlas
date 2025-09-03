import { useState } from "react";
import Navbar from "./components/UI/Navbar.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Country from "./pages/Country.jsx";
import About from "./pages/About.jsx";
import AppLayout from "./components/UI/layout/AppLayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import CountryDetails from "./components/UI/layout/CountryDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "country", element: <Country /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "country/:id", element: <CountryDetails /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <></>
    </RouterProvider>
  );
}

export default App;
