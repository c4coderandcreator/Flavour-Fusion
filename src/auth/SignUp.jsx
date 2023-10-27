import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/imgs/LoginBg.jpg";
import { RiGoogleFill } from "react-icons/ri";
import FFLogo from "../assets/icons/FFLogo.png";

const SignUp = () => {
  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center"
      style={backgroundStyles}
    >
      <div className="bg-transparent backdrop-blur-xl p-8 rounded-xl shadow-xl flex flex-col items-center space-y-4">
        <img
          src={FFLogo}
          alt="Logo"
          className="w-16 h-16 object-cover rounded-full mb-2"
        />
        {/* Login Form */}
        <form className="w-full max-w-md">
          <h1 className="text-2xl font-bold mb-5 text-gray-900">Sign up</h1>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <>
            <div className="flex space-x-2 mb-4">
              <button
                type="submit"
                className="flex-1 bg-lime-500 text-white py-2 px-4 rounded-md hover:bg-lime-600 transition duration-300"
              >
                Sign up
              </button>
              <button className="flex items-center space-x-2 bg-white text-gray-900 py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300">
                <RiGoogleFill className="text-2xl px-1" />
                Login with Google
              </button>
            </div>
            {/* Forgot Password and Sign Up Links */}
            <div className="text-gray-800 text-sm">
              <Link to="/passwordreset" className="hover:underline">
                Forgot Password?
              </Link>
              <span className="mx-2"></span>
              <Link to="/login">
                Already have an account?{" "}
                <span className="hover:underline text-black font-semibold">
                  Login
                </span>
              </Link>
            </div>
          </>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
