import React from "react";
import { Routes, Route } from "react-router-dom";

import Cart from "./components/Cart";
import Product from "./components/Product";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default Routing;
