import React, { createContext, useState } from "react";
import { products } from "../assets/Products";

export const ListCartContext = createContext(null);

export const ProviderListCartContext = ({ children }) => {
  const [listCart, setListCart] = useState([]);

  const addProduct = (id) => {
    // Encuentra el producto que quieres agregar
    const productAdd = products.find((product) => product.id === id);

    if (!productAdd) {
      console.error(`Producto con ID ${id} no encontrado.`);
      return;
    }

   
    // Mantén los productos en el carrito
    const productsToMaintain = listCart.filter((product) => product.id !== id);

    let add = true;
    for (let product of listCart) {
      if (product.id === id) {
        let quantity = product.quantity;

        if (quantity < productAdd.stock) {
          const newQuantity = { ...product, quantity: quantity + 1 };
          setListCart([...productsToMaintain, newQuantity]);
        }

        add = false;
        break;
      }
    }

    add && setListCart([...productsToMaintain, { ...productAdd, quantity: 1 }]);
  };
  
  const clearCart = () => {
    setListCart([]);
  };

  const removeFromCart = (id) => {
    const updatedCart = listCart.filter((product) => product.id !== id);
    setListCart(updatedCart);
  };

  return (
    <ListCartContext.Provider
      value={{ removeFromCart, listCart, addProduct, clearCart }} //
    >
      {children}
    </ListCartContext.Provider>
  );
};
