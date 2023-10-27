import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Reserve = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Navbar />
      <div className="p-8 bg-lime-50 shadow-lg rounded-md mt-[170px]">
        <h1 className="text-3xl font-semibold mb-4">
          Online <span className="text-pink-600">Reservation</span>
        </h1>
        <p className="text-gray-600 mb-6">
          <span className="font-semibold text-black">Booking request: </span>
          <span className="text-green-600 font-bold hover:border-b-2 cursor-pointer">
            +123-456-7890
          </span>{" "}
          or Fill out the form below
        </p>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="name" className="block text-sm font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your name"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="phone" className="block text-sm font-semibold">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/3">
              <label htmlFor="persons" className="block text-sm font-semibold">
                Number of Persons
              </label>
              <select
                id="persons"
                name="persons"
                className="mt-1 p-2 w-full border rounded-md"
              >
                {[...Array(10)].map((_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1} Person{index === 0 ? "" : "s"}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/3">
              <label htmlFor="date" className="block text-sm font-semibold">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="w-1/3">
              <label htmlFor="time" className="block text-sm font-semibold">
                Time
              </label>
              <select
                id="time"
                name="time"
                className="mt-1 p-2 w-full border rounded-md"
              >
                {[...Array(15)].map((_, index) => {
                  const hour = index + 8;
                  const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
                  return (
                    <option key={index} value={`${formattedHour}:00`}>
                      {`${formattedHour}:00 ${hour < 12 ? "AM" : "PM"}`}
                    </option>
                  );
                })}
              </select>
              <p className="text-gray-500 text-xs mt-1">
                (Available from 8 AM to 10 PM)
              </p>
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold">
              Additional Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-lime-500 text-white py-2 px-4 rounded-md hover:bg-lime-600 transition duration-300 w-full"
          >
            Submit
          </button>
        </form>
      </div>
      <footer className="text-black py-10 w-full border-t-2 border-gray-300">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              Booking Request
              <br />{" "}
              <span className="text-green-600 font-bold hover:border-b-2 cursor-pointer">
                +123-456-7890
              </span>
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Location</h2>
            <p>Hyderabad</p>
            <p>Banglore</p>
            <p>Mumbai</p>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Email Us</h2>
            <Link
              to="https://mail.google.com/"
              className="hover:border-b-2 border-red-500"
            >
              support@flavorfusion.com
            </Link>
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
    </div>
  );
};

export default Reserve;
