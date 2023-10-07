import React, { useContext, useState, useEffect } from "react";
import { ListCartContext } from "../../context/ListCartContext";
import "remixicon/fonts/remixicon.css";

 const ButtonCart = ({ id }) => {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="36"
      height="36"
    ></svg>
  );

  const [count, setCount] = useState(1);
  const { addProduct } = useContext(ListCartContext);

  // resta la cantidad de productos al carrito 
  const decrease = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  // sumo la cantidad de productos al carrito
  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const addToCart = () => {
    // Agrego el producto al carrito según el valor de count

    for (let i = 0; i < count; i++) {
      addProduct(id);
    }
  };

  useEffect(() => {}, [count]);

  return (
    <div>
      <button
        className="button text-black font-semibold text-sm px-2 py-1 mr-2"
        disabled={count <= 1}
        onClick={decrease}
      >
        -
      </button>
      <span className="text-black font-semibold text-lg">{count}</span>
      <button
        className="button text-black font-semibold text-sm px-2 py-1 ml-2"
        onClick={increase}
      >
        +
      </button>
      <button className="button mt-2 ml-2" id="addCart" onClick={addToCart}>
        <span>
          <i className="ri-shopping-cart-2-line"></i>
        </span>
        Agregar al carrito
      </button>
    </div>
  );
};
export default ButtonCart;