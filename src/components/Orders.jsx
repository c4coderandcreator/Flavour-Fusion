import React from "react";
import { Navbar, Footer } from "../components/index";

const Orders = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen items-center justify-center">
      <div>
        <Navbar />
      </div>
      <div className="flex-grow flex items-center justify-center">
        <h1 className="font-bold text-xl text-black">No Orders Yet</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
