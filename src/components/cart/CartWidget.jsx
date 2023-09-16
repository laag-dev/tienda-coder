import React from 'react'
import { ImCart } from "react-icons/im";


export const CartWidget = () => {
  return (
        <div className='flex-none'>
        <div className="relative dropdown dropdown-end">
        <label tabindex="0" className="btn btn-ghost btn-circle">
        <div className="indicator">
            <ImCart className="text-xl" />
            <span className="w-4 h-4 bg-[#af8970] text-white rounded-full absolute left-0 -bottom-2 text-xs flex items-center justify-center">
              8
            </span>
            </div>
      </label>
            
    </div>
    </div>    

        
    
  )
}
