import React from "react";
import { ImCart } from "react-icons/im";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <div className="flex-none">
      <div className="relative dropdown dropdown-end">
        <label tabIndex="0" className="btn btn-ghost btn-circle">
          <div className="indicator">
              <ImCart className="text-xl" />
            <span className="w-4 h-4 bg-[#af8970] text-white rounded-full absolute left-0 -bottom-2 text-xs flex items-center justify-center">
              8
            </span>
          </div>
        </label>
        <div
          tabIndex={0}
          className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div className="card-body bg-white shadow ">
            <span className="font-bold text-lg ">8 products</span>
            <span className="text-[#AF8970] font-semibold">Subtotal: $999</span>
            <div className="card-actions">
              <button className="button cursor-pointer"><Link to={"/cart"}>Ir al carrito</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
