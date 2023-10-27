import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AboutCircle1, AboutCircle2, AboutCircle3 } from "../assets/index";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Navbar />
      <div className="flex-1 overflow-y-auto p-8 flex flex-col items-center justify-center mt-24">
        <h1 className="text-4xl font-bold text-green-800 border-b-4 border-lime-200">
          About Us
        </h1>
        <div className="container mx-auto mt-10 p-8">
          <div className="flex items-center justify-center mb-8">
            {/* 1st Section */}
            <div className="flex items-center">
              <img
                src={AboutCircle1}
                alt="Circle"
                className="w-56 h-56 rounded-full mr-6"
              />
              <div>
                <h2 className="text-3xl font-semibold mb-4">
                  Nurtured by Local Farmers
                </h2>
                <p className="text-gray-600 text-lg">
                  At Harvest Haven, we believe in the symbiotic relationship
                  between the land and our tables. Our restaurant's foundation
                  rests upon the hard work and dedication of local farmers who
                  cultivate the organic produce we proudly serve. We collaborate
                  closely with these passionate individuals who share our
                  commitment to sustainable practices, ensuring that every dish
                  tells a story of community, growth, and respect for nature.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center border-t-2 border-yellow-300 py-8 mb-8">
            {/* 2nd Section */}
            <div className="flex items-center">
              <div>
                <h2 className="text-3xl font-semibold mb-4">
                  Cultivating Goodness from Seed to Plate
                </h2>
                <p className="text-gray-600 text-lg">
                  Our restaurant embodies a living testament to the cycle of
                  growth and harvest. Step into our garden, where rows of
                  vibrant greens and fragrant herbs flourish under the sun's
                  embrace. We take immense pride in cultivating our own organic
                  produce, carefully tending to each plant from seed to plate.
                </p>
              </div>
              <img
                src={AboutCircle2}
                alt="Circle"
                className="w-56 h-56 rounded-full ml-6"
              />
            </div>
          </div>

          <div className="flex items-center justify-center border-t-2 border-yellow-300 py-8 mb-8">
            {/* 3rd Section */}
            <div className="flex items-center">
              <img
                src={AboutCircle3}
                alt="Circle"
                className="w-56 h-56 rounded-full mr-6"
              />

              <div>
                <h2 className="text-3xl font-semibold mb-4">
                  The Essence of Organic Ingredients
                </h2>
                <p className="text-gray-600 text-lg">
                  Nature's bounty takes center stage in our culinary creations.
                  We source only the finest organic ingredients, meticulously
                  selected to bring you flavors that burst with authenticity and
                  nourishment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
