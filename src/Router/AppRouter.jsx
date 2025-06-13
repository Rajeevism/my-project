import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
//import CartPage from "../pages/CartPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default AppRouter;
