import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsData] = useState([
    {
      reviewerName: "Shaikh Aman",
      imageUrl: "https://avatars.githubusercontent.com/u/110104595?s=200v=4",
      text: "Yummy food, quick delivery, excellent service. FlavorFusion rocks!",
      rating: 4,
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/97486205?s=200v=4",
      reviewerName: "Shyby Hamza",
      text: "FlavorFusion is always on time and the food is always delicious.",
      rating: 4,
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/65086865?s=200v=4",
      reviewerName: "SP.  Bieefilled",
      text: "Best online delivery service ever. Fresh, tasty and hot food. Awesome!",
      rating: 3,
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/143696125?s=200&v=4",
      reviewerName: "Richard Hartley",
      text: "Impressed by FlavorFusion. On-time, flavorful and satisfying food.",
      rating: 5,
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/119471995?s=200&v=4",
      reviewerName: "OM. Chauhan1",
      text: "Yummy food, quick delivery, excellent service. FlavorFusion rocks!",
      rating: 4,
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/24473439?s=200&v=4",
      reviewerName: "Arceen Annur",
      text: "Amazing food, generous portions, reasonable prices. FlavorFusion is the best!",
      rating: 4,
    },
  ]);

  const cardsPerPage = 3;
  const totalPages = Math.ceil(reviewsData.length / cardsPerPage);

  const handlePrevious = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : totalPages);
  };

  const handleNext = () => {
    setCurrentPage(currentPage < totalPages ? currentPage + 1 : 1);
  };
  return (
    <div className="p-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10">Our Reviews</h1>
      <div className="reviews-slider flex flex-wrap justify-center">
        {reviewsData
          .slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage)
          .map((review, index) => (
            <div
              key={index}
              className="card bg-white text-black-content m-4 p-10 hover:bg-lime-50 rounded-lg shadow-lg shadow-pink-200 max-w-[300px] flex flex-col items-center"
            >
              <img
                src={review.imageUrl || "placeholder.jpg"}
                alt="Reviewer"
                className="w-16 h-16 rounded-full bg-gray-300 object-cover mb-3"
              />

              <h4 className="text-2xl font-bold mb-3 text-center">
                {review.reviewerName}
              </h4>
              <p className="mb-3 whitespace-pre-line text-center">
                {review.text}
              </p>
              <div className="flex items-center">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="h-6 w-6 text-lime-500" />
                ))}
              </div>
            </div>
          ))}
      </div>

      <div className="controls mt-4">
        <button className="prev-btn" onClick={handlePrevious}>
          &lt;
        </button>
        <button className="next-btn" onClick={handleNext}>
          &gt;
        </button>
      </div>
      <div className="pagination-dots mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index}
            className={`dot ${index + 1 === currentPage ? "active" : ""}`}
            onClick={() => setCurrentPage(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
