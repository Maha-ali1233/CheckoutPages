import React from "react";
import { Routes, Route } from "react-router-dom";
import Checkout from "./pages/checkout1/Checkout.jsx";
import OrderComplete from "./pages/checkout1/OrderComplete.jsx";

const App = () => (
  <Routes>
    <Route path="/checkout" element={<Checkout currentStep={2} />} />
    <Route path="/" element={<Checkout currentStep={2} />} />
    <Route path="/order-complete" element={<OrderComplete />} />
  </Routes>
);

export default App;
