import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { ProductDetails } from "../pages/ProductDetails";
import { CheckOut } from "../pages/CheckOut";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { Jewelery } from "../pages/Jewelery";
import { Furniture } from "../pages/Furniture";
import { Electronics } from "../pages/Electronics";
import { Cart } from "../pages/Cart";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="electronics" element={<Electronics/>} />
      <Route path="jewelery" element={<Jewelery/>} />
      <Route path="furniture" element={<Furniture/>} />
      <Route path="products/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart/>} />
      <Route path="checkout" element={<CheckOut />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};
