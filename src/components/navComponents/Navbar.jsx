import React, { useState } from "react";
import logo from "@/images/logo.png";
import avatar  from '@/images/avatar.jpeg';

import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { Cart } from "./Cart";

export const Navbar = () => {


    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
  return (
    <div className="w-full h-22 lg:h-26 border-b-[1px] border-gray-950 text-black bg-white">
      <div className="max-w-screen-2x1 h-full max-auto px-4 flex items-center justify-between">
        <img
          className="w-20 uppercase cursor-pointer"
          src={logo}
          alt="Logo de la tienda"
        />
        <div className="inline-flex lg:hidden" onClick={toggleMenu}>
          <FiMenu className="text-2xl" />
        </div>
        <ul className={`lg:inline-flex items-center gap-8 uppercase text-sm ${menuOpen ? 'hidden' : 'block'}`}>
          <li className="navbarLi">Inicio</li>

          <li className="navbarLi">Electrónicos</li>

          <li className="navbarLi">Joyería</li>

          <li className="navbarLi menu lg:menu-horizontal ">
          <details open>
            <summary>Ropa</summary>
          <ul className=" bg-[#af8970] text-black p-2 rounded-box">
            <li><a>Hombres</a></li>
            <li><a>Mujeres</a></li>
          </ul>
        </details>
        </li>
          <li className="navbarLi">Contacto</li>
        </ul>
        
        <div className="hidden lg:inline-flex gap-8 items-center ">
          <BsSearch className="text-xl hover:text-hoverColor" />
          <Cart/>

      <div className="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img  src={avatar} alt="Login" />
        </div>
      </label>
      <ul tabindex="0" className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-[#af8970] rounded-box w-52">
        <li>
          <a className="justify-between">
            Perfil
            <span className="badge">Nuevo</span>
          </a>
        </li>
        <li><a>Configuración</a></li>
        <li><a>Cerrar sesión</a></li>
      </ul>
    </div>
          
          <button className="w-48 h-10 bg-black text-white uppercase text-sm font-semibold rounded-md hover:bg-[#af8970] hover:text-white duration-300">
            Iniciar Sesión
          </button>
        </div>
        
      </div>
    </div>
  );
};