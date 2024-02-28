import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { About, Home } from "../pages";
const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  );
};

export default Routing;
