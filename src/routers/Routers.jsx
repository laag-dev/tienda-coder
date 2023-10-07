import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { Home } from "../pages/Home";
import { Electronics } from "../pages/Electronics";
import { Furniture } from "../pages/Furniture";
import { Jewelery } from "../pages/Jewelery";
import { ProductDetails } from "../pages/ProductDetails";
import { ShoppingCart } from "../pages/ShoppingCart";
import { UserLogin } from "../pages/UserLogin";
import { UserRegistration } from "../pages/UserRegistration";



export const Routers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Define isModalOpen y su estado inicial

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
     
      <Route path="electronics" element={<Electronics/>} />
      <Route path="jewelery" element={<Jewelery/>} />
      <Route path="furniture" element={<Furniture/>} />
      <Route path="products/:id" element={<ProductDetails />} />
      <Route path="cart" element={<ShoppingCart/>} />
      <Route path="login" element={<UserLogin isOpenL={isModalOpen} onCloseL={closeModal} />}/>
      <Route path="registration" element={<UserRegistration isOpen={isModalOpen} onClose={closeModal} />}/>
    </Routes>
  );
};
