import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { About, Home, Product } from "../pages";
const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/product" element={<Product />} />
    </Routes>
  );
};

export default Routing;
