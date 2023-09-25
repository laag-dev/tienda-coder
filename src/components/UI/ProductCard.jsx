import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export const ProductCard = ({item}) => {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="36"
      height="36"
    >
      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"></path>
    </svg>
  );
  return (
    <div className="card card-compact w-full bg-[#404040] shadow-xl">
      <figure>
        <motion.img whileHover={{scale: 0.9}}
          src={item.imgUrl}
          alt="Shoes"
        />
      </figure>
      <div className="card-body bg-white ">
        <h2 className="card-title  text-black"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h2>
        <p className="italic text-black font-bold  text-sm">{item.category}</p>
        <p className="text-black  text-xl">{item.shortDesc}</p>
        <p className="font-bold text-black text-xl">${item.price}</p>
        <div className="card-actions justify-end">
          <button className="button">
            {icon}
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
