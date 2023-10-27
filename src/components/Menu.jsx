import React, { useState } from "react";
import { Navbar, Footer } from "../components";
import { MenuSS1, MenuSS2, MenuSS3 } from "../assets/index";
import menuData from "./Menu/MenuList";
import { BsCart2, BsHeart } from "react-icons/bs";

const Menu = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  //menuData is from "./Menu/MenuList"
  const [menuItems, setMenuItems] = useState(menuData);

  const handleLikeClick = (index) => {
    const updatedMenuItems = [...menuItems];
    updatedMenuItems[index].liked = !updatedMenuItems[index].liked;
    setMenuItems(updatedMenuItems);
  };

  const slides = [
    {
      heading: "Summer Sale",
      text: "Up to 70% off",
      imageUrl: MenuSS1,
    },
    {
      heading: "Summer Sale",
      text: "Up to 70% off",
      imageUrl: MenuSS2,
    },
    {
      heading: "Summer Sale",
      text: "Up to 70% off",
      imageUrl: MenuSS3,
    },
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const categories = [
    "All",
    "Starter",
    "Salad",
    "Dessert",
    "Soup",
    "Spaghetti",
    "Drinks",
  ];

  const filteredMenuItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 w-full">
      <Navbar />
      <div className="w-full py-10 mt-20 mb-20">
        <div className="container mx-auto flex flex-col items-center space-y-8">
          <div
            className="w-full max-w-5xl mx-auto rounded-3xl shadow-lg relative overflow-hidden"
            style={{
              background: "linear-gradient(to right, #64f38c, #f79d00)",
              height: "400px",
            }}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 flex">
                  <div className="w-1/2 p-6 flex flex-col justify-center items-center space-y-4">
                    <h1 className="text-5xl font-bold">{slide.heading}</h1>
                    <p className="text-gray-800 font-lg text-xl mb-2">
                      {slide.text}
                    </p>
                    <button className="p-3 border border-black bg-transparent text-xl font-bold rounded-lg hover:shadow-lg">
                      Buy Now
                    </button>
                  </div>
                  <div className="w-1/2 overflow-hidden">
                    <img
                      src={slide.imageUrl}
                      alt={`Slide ${index + 1}`}
                      className="w-[80%] h-auto object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black px-4 py-2 text-6xl select-none"
              onClick={prevSlide}
            >
              {"<"}
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black px-4 py-2 text-6xl select-none"
              onClick={nextSlide}
            >
              {">"}
            </button>
          </div>

          {/* Category filter buttons */}
          <h1 className="text-4xl font-bold mb-10">Menu</h1>
          <div className="flex items-center space-x-4 mt-8">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`btn ${
                  selectedCategory === category
                    ? "btn-primary"
                    : "btn-secondary"
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu items */}
          <div className="flex flex-wrap justify-center mt-8 space-x-4">
            {filteredMenuItems.map((item, index) => (
              <div
                key={index}
                className="card card-compact w-72 shadow-xl shadow-pink-200 m-4 flex flex-col p-5"
              >
                <figure className="w-full">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-auto object-cover"
                  />
                </figure>
                <div className="p-4 flex flex-col items-start space-y-4">
                  <h1 className="text-2xl font-bold">{item.name}</h1>
                  <p className="text-lg font-bold">
                    <span className="text-blue-600">$</span>
                    {item.price}
                  </p>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-4">
                      <button className="border border-black bg-transparent text-lg font-bold rounded-lg hover:shadow-lime-200 hover:shadow-xl  p-2">
                        Add to Cart
                      </button>
                    </div>
                    <BsHeart
                      className={`text-2xl hover:scale-95 cursor-pointer select-none ${
                        item.liked ? "text-red-500" : "text-gray-500"
                      }`}
                      onClick={() => handleLikeClick(index)}
                    />
                    <BsCart2 className="text-2xl text-blue-500 cursor-pointer select-none hover:scale-95" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
