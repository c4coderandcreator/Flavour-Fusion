import React from "react";
import { Link } from "react-router-dom";
import {
  HomeNewOrder,
  HomeOrderHistory,
  HomeTrackOrder,
} from "../../assets/index";

const Orders = () => {
  return (
    <div className="p-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10">Orders</h1>
      <div className="flex justify-center space-x-8">
        {/* Order History */}
        <div className="flex flex-col items-center p-10 rounded-lg shadow-lg shadow-pink-200 hover:bg-lime-50">
          <img
            src={HomeOrderHistory}
            alt="Order History"
            className="mb-4 h-20 w-20 object-cover"
          />
          <p className="text-lg font-medium mb-4">Order History</p>
          <Link
            to="/orders"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full flex items-center"
          >
            View History <i className="fa fa-arrow-right ml-2"></i>
          </Link>
        </div>

        {/* Order Now */}
        <div className="flex flex-col items-center p-10 rounded-lg shadow-lg shadow-pink-200 hover:bg-lime-50">
          <img
            src={HomeNewOrder}
            alt="Order Now"
            className="mb-4 h-20 w-20 object-cover"
          />
          <p className="text-lg font-medium mb-4">Order Now</p>
          <Link
            to="/menu"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full flex items-center"
          >
            Place Order <i className="fa fa-arrow-right ml-2"></i>
          </Link>
        </div>

        {/* Track Order */}
        <div className="flex flex-col items-center p-10 rounded-lg shadow-lg shadow-pink-200 hover:bg-lime-50">
          <img
            src={HomeTrackOrder}
            alt="Track Order"
            className="mb-4 h-20 w-20 object-cover"
          />
          <p className="text-lg font-medium mb-4">Track Order</p>
          <Link
            to="/orders"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full flex items-center"
          >
            Track Now <i className="fa fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Orders;
