import React from "react";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
