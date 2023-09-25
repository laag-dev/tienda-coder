import React, { useState } from "react";
import logo from "@/assets/logo.png";
import avatar from "@/assets/avatar.jpeg";
import { NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget";


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const nav__links = [
    {
      path: "home",
      display: "Inicio",
    },
    {
      path: "shop",
      display: "Tienda",
    },
    {
      path: "cart",
      display: "Carrito",
    },
  ];


  return (
    <div className="w-full border-b-[1px] border-gray-950 text-black bg-white sticky top-0 z-50">
      <div className="md:container md:mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="w-20 uppercase cursor-pointer"
            src={logo}
            alt="Logo de la tienda"
          />
          <button className="lg:hidden ml-4" onClick={toggleMenu}></button>
        </div>
        <div className="navigation">
          <ul className="lg:flex gap-8 items-center">
            {nav__links.map((item) => (
              <li className="navbarLi">
                <NavLink to={item.path}>{item.display}</NavLink>
              </li>
            ))}
            
          </ul>
        </div>
        <div className="lg:flex gap-8 items-center">
          <CartWidget />
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={avatar} alt="Login" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#af8970] rounded-box w-52 text-black"
            >
              <li>
                <a className="justify-between">
                  Registro
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Ingreso</a>
              </li>
              <li>
                <a>Configuración</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};