import React, { useState } from "react";
import logo from "@/assets/logo.png";
import avatar from "@/assets/avatar.jpeg";
import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { CartWidget } from "../cart/CartWidget";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full h-22 lg:h-26 border-b-[1px] border-gray-950 text-black bg-white sticky top-0 z-50">
      <div className="max-w-screen-2x1 h-full max-auto px-4 flex items-center justify-between">
        <img
          className="w-20 uppercase cursor-pointer"
          src={logo}
          alt="Logo de la tienda"
        />
        <div className="inline-flex lg:hidden" onClick={toggleMenu}>
          <FiMenu className="text-2xl" />

          
        </div>
        <ul
          className={`lg:inline-flex items-center gap-8 uppercase text-md ${
            menuOpen ? "hidden" : "block"
          }`}
        >
          <li className="navbarLi">Inicio</li>
          <li className="navbarLi">Categoría</li>
          <li className="navbarLi">Comprar</li>
          <li className="navbarLi">Elemento</li>
        </ul>

        <div className="hidden lg:inline-flex gap-8 items-center ">
          <CartWidget />
          <div className="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={avatar} alt="Login" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
