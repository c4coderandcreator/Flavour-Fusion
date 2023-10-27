import React from "react";
import { RiGoogleFill, RiHome2Fill } from "react-icons/ri"; // Import the home icon
import { Link } from "react-router-dom"; // Import Link from React Router
import FpBg from "../assets/imgs/FpBg.jpg";

const ForgotPassword = () => {
  const backgroundStyles = {
    backgroundImage: `url(${FpBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center"
      style={backgroundStyles}
    >
      {/* Home Button */}
      <Link
        to="/"
        className="absolute top-10 right-10 text-4xl text-lime-500 hover:text-lime-600"
      >
        <RiHome2Fill />
      </Link>

      <div className="backdrop-blur-2xl p-8 rounded-lg shadow-lg flex flex-col items-center space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-900">
          Forgot Password
        </h2>
        <p className="text-gray-900">
          Enter your email to reset your password.
        </p>

        {/* Email Input */}
        <div className="w-full">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your email"
          />
        </div>

        {/* Reset Button */}
        <button className="bg-lime-500 text-white py-2 px-4 rounded-md hover:bg-lime-600 transition duration-300 w-full">
          Reset Password
        </button>

        {/* Google Login Button */}
        <button className="flex items-center justify-center space-x-2 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100 transition duration-300 w-full">
          <RiGoogleFill className="text-4xl p-2" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
