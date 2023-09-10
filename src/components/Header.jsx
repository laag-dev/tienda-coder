import React from 'react'
import logo from "@/images/logo.png"
import cart from "@/images/cart.png"
import avatar  from '@/images/avatar.jpeg';

export const Header = () => {
  return (
    <div className='w-full h-30 bg-white border-b-[1px] border-b-gray-800'>
        <div className='max-w-screen-xl h-full max-auto flex items-center justify-between'>
        <div>
            <img className='w-20 ' src={logo} alt="Logo de la tienda" />
        </div>
        
        <div className='flex items-center gap-8'>
            <ul className='flex items-center gap-8  text-black'>
                <li className='font-bold hover:text-[#af8970] hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Inicio</li>
                <li className='font-bold hover:text-[#af8970] hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Categoría</li>
                <li className='font-bold hover:text-[#af8970] hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Compras</li>
                <li className='font-bold hover:text-[#af8970] hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Elementos</li>
                <li className='font-bold hover:text-[#af8970] hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300' >Blog</li>
            </ul>
            <div className='relative'>
            <img className='w-8 ' src={cart} alt="cart"/>
            <span className='absolute w-8 top-2 left-0 text-black text-sm flex items-center justify-center font-semibold'>0</span>
            </div>

          <img className='w-8 h-8 rounded-full' src={avatar} alt="Login" />
        </div>
        </div>
    </div>
  )
}
