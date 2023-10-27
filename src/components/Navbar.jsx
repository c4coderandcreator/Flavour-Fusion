import React from "react";
import { Link } from "react-router-dom";
import "../utils/home.css";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-lightGreen p-6 z-10 shadow-2xl">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-4xl font-bold">
          <span className="text-green-900">F</span>lavor
          <span className="text-green-900">F</span>usion
        </Link>
        <div className="space-x-8 font-bold text-lg">
          <Link to="/" className="link-underline">
            Home
          </Link>
          <Link to="/Menu" className="link-underline">
            Menu
          </Link>
          <Link to="/About" className="link-underline">
            About
          </Link>
          <Link to="/orders" className="link-underline">
            Orders
          </Link>
          <Link to="/reserve" className="link-underline text-pink-700">
            Reserve
          </Link>
          <Link
            to="/login"
            className="text-white bg-black rounded-full px-4 py-2 hover:text-black hover:bg-white"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
