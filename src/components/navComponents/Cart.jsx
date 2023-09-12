import React from 'react'
import { ImCart } from "react-icons/im";


export const Cart = () => {
  return (
        <div className='flex-none'>
        <div className="relative dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
        <div class="indicator">
            <ImCart className="text-xl" />
            <span className="w-4 h-4 bg-[#af8970] text-white rounded-full absolute left-0 -bottom-2 text-xs flex items-center justify-center">
              8
            </span>
            </div>
      </label>
            <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-[#af8970fb] shadow">
        <div class="card-body">
          <span className="font-bold text-lg">8 Artículos</span>
          <span class="text-white font-bold">Sub-total: $999</span>
          <div class="card-actions">
            <button className="w-48 h-10 bg-black text-white uppercase text-sm font-semibold rounded-md hover:bg-white hover:text-black duration-300">Comprar</button>
          </div>
        </div>
      </div>
    </div>
    </div>    

        
    
  )
}
