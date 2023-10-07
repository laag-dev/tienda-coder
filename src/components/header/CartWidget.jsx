import React, { useContext, useState, useEffect } from "react";
import { ListCartContext } from "../../context/ListCartContext";
import { ImCart } from "react-icons/im";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { listCart } = useContext(ListCartContext); // Obtengo la lista de productos en el carrito desde el contexto
  const [totalProducts, setTotalProducts] = useState(0);

  // Calculo la cantidad total de productos y el subtotal
  const subtotal = listCart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  useEffect(() => {
    // Calculo la cantidad total de productos sumando las cantidades de todos los productos en el carrito
    const newTotalProducts = listCart.reduce(
      (total, product) => total + product.quantity,
      0
    );
    setTotalProducts(newTotalProducts);
  }, [listCart]);

  return (
    <div className="flex-none">
      <div className="relative dropdown dropdown-end">
        <label tabIndex="0" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <ImCart className="text-xl" />

            <span className="w-4 h-4 bg-[#af8970] text-white rounded-full absolute left-0 -bottom-2 text-xs flex items-center justify-center">
              {totalProducts}
            </span>
          </div>
        </label>
        <div
          tabIndex={0}
          className="mt-3 z-[1] card card-compact dropdown-content w-80 bg-base-100 shadow"
        >
          <div className="card-body bg-white shadow ">
            <span className="font-bold text-lg ">
              {totalProducts} productos
            </span>
            <span className="text-[#AF8970] font-semibold">
              Subtotal: ${subtotal}
            </span>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="col-span-1">
                {listCart.map((product) => (
                  <div key={product.id} className="flex items-center space-x-2">
                    <img
                      src={product.imgUrl}
                      alt={product.title}
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{product.quantity}X</span>
                    <span>{product.productName}</span>
                  </div>
                ))}
              </div>
              <div className="col-span-1 text-right">
                <button className="button cursor-pointer">
                  <Link to={"/cart"}>Ir al carrito</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
