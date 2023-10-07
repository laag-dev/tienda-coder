import React, { createContext, useState } from "react";
import { products } from "../assets/Products";

export const ListCartContext = createContext(null);

export const ProviderListCartContext = ({ children }) => {
  const [listCart, setListCart] = useState([]);

  const addProduct = (id) => {
    // Encuentro el producto para agregar
    const productAdd = products.find((product) => product.id === id);

    if (!productAdd) {
      console.error(`Producto con ID ${id} no encontrado.`);
      return;
    }

    // Verifico si el producto ya existe en el carrito
    const existingProduct = listCart.find((product) => product.id === id);

    if (existingProduct) {
      // Si el producto ya existe en el carrito aumenta la cantidad
      existingProduct.quantity += 1;
      setListCart([...listCart]);
    } else {
      // Si el producto no existe en el carrito agrego con cantidad 1
      setListCart([...listCart, { ...productAdd, quantity: 1 }]);
    }
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
