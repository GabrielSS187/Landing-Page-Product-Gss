import { Routes ,Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { Services } from "../pages/Services";
import { SignUp } from "../pages/SignUp";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
};