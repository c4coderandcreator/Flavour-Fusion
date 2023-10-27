import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-black py-10 w-full border-t-2 border-gray-300">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">FlavorFusion</h2>
          <p>
            Where Quality Meets
            <br /> Culinary Passion!
          </p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Explore</h2>
          <ul>
            <li>
              <Link to="/menu" className="hover:text-green-700">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/orders" className="hover:text-green-700">
                Orders
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Our Company</h2>
          <ul>
            <li>
              <Link to="/about" className="hover:text-green-700">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-green-700">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2023 FlavorFusion. All rights reserved</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-3xl text-blue-500 hover:text-blue-700" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-3xl text-pink-500 hover:text-pink-700" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-3xl text-blue-400 hover:text-blue-600" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
