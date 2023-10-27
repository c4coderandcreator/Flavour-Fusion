import React from "react";
import { Link } from "react-router-dom";
import { HomeEgg, HomeSalad } from "../../assets/index";

const contentSections = () => {
  return (
    <>
      {/* First Content Section */}
      <div className="p-20 flex items-center justify-center rounded-lg mt-20 ">
        {/* Left Section */}
        <div className="text-left">
          <h1 className="text-6xl font-bold mb-4">
            Plant Based
            <br /> Meat <span className="text-green-600">Salad</span>
          </h1>
          <div className="mb-6">
            <p className="text-xl leading-7">
              Discover the exquisite taste of our dishes,
              <br /> crafted with passion and served with perfection.
            </p>
            <p className="text-xl leading-7">
              Experience a fusion of flavors like never before.
            </p>
          </div>
          <Link
            to="/menu"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full"
          >
            Explore Menu
          </Link>
        </div>

        {/* Right Section */}
        <div className="ml-10">
          <img
            src={HomeSalad}
            alt="FlavorFusion"
            className="h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Second Content Section */}
      <div className="p-10 flex items-center justify-center rounded-lg mt-7">
        {/* Left Section */}
        <div className="mr-14">
          <img
            src={HomeEgg}
            alt="FlavorFusion"
            className="w-[430px] h-[430px] rounded-lg"
          />
        </div>

        {/* Right Section */}
        <div className="text-left">
          <h1 className="text-6xl font-bold mb-6">
            Eat What Makes
            <br />
            You
            <br />
            <span className="text-green-600">Healthy & Happy!</span>
          </h1>
          <div className="mb-6">
            <p className="text-xl leading-7">
              Delight in the goodness of fresh ingredients,
              <br /> expertly prepared to tantalize your taste buds.
            </p>
            <p className="text-xl leading-7">
              Every bite tells a story of quality and flavor.
            </p>
          </div>
          <Link
            to="/menu"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full"
          >
            Order Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default contentSections;
