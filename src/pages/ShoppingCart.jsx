import React, { useContext } from "react";
import { ControllerShowCartProvider } from "../components/cart/ContextCart";
import { ListCartContext } from "../context/ListCartContext";

export const ShoppingCart = () => {
  const { cartShow, setCartShow } = useContext(ControllerShowCartProvider); // Cambia "controllerShowCart" a "ControllerShowCartProvider"
  const { listCart, clearCart } = useContext(ListCartContext);

  const closeCart = () => {
    setCartShow(cartShow === "none" ? "flex" : "none");
  };

  return (
    <div className={`cart ${cartShow}`}>
      <div className="cerrar">
        <button className="close" onClick={closeCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M13.293 6.293a1 1 0 011.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 011.414-1.414L10 8.586l2.293-2.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="containerItemsCart">
        {listCart.length === 0 ? (
          <span className="emptyCart">
            Tu carrito está vacío, ¡llénalo!
          </span>
        ) : (
          listCart.map((producto) => (
            <ItemCart
              key={producto.id}
              id={producto.id}
              title={producto.title}
              image={producto.imageProduct.firtsImage}
              quantity={producto.quantity}
              price={producto.price}
            />
          ))
        )}
      </div>

      <div className="TerminarCompra">
        <button className="terminar bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Terminar compra
        </button>

        <button className="clear" onClick={clearCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 6.293a1 1 0 011.414-1.414L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 11-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
