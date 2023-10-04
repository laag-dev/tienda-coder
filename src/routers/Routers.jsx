import { Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from 'react';
import { Home } from "../pages/Home";
import { ProductDetails } from "../pages/ProductDetails";
import { Jewelery } from "../pages/Jewelery";
import { Furniture } from "../pages/Furniture";
import { Electronics } from "../pages/Electronics";
import { ShoppingCart } from "../pages/ShoppingCart";
import { UserLogin } from "../pages/UserLogin";




export const Routers = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="electronics" element={<Electronics/>} />
      <Route path="jewelery" element={<Jewelery/>} />
      <Route path="furniture" element={<Furniture/>} />
      <Route path="products/:id" element={<ProductDetails />} />
      <Route path="cart" element={<ShoppingCart/>} />
      <Route path="login" element={<UserLogin isOpen={isModalOpen} onClose={closeModal} />}/>
    </Routes>
  );
};
