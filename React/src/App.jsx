import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./containers/Main";
import { About, Menu, Orders, Reserve } from "./components";
import "font-awesome/css/font-awesome.min.css";
import { ForgotPassword, SignUp, Login } from "./auth/index";

const App = () => {
  return (
    <div
      className="w-screen min-h-screen h-auto flex flex-col items-center justify-center"
      data-theme="light"
    >
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/passwordreset" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
};

export default App;
