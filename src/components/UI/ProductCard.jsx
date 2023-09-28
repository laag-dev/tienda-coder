import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ProductCard = ({ item }) => {
 
  return (
    <div className="card card-compact w-full bg-[#404040] shadow-xl">
      <figure>
        <Link to={`/products/${item.id}`}>
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={item.imgUrl}
            alt="Shoes"
          />
        </Link>
      </figure>
      <div className="card-body bg-white items-center ">
        <h2 className="card-title  text-black">{item.productName}</h2>
        <p className="italic text-black font-bold  text-sm">
          Categoría: {item.category}
        </p>
        <p className="text-black  text-xl">{item.shortDesc}</p>
        <p className="font-bold text-black text-xl">Precio: ${item.price}</p>
        <div className="card-actions justify-end">
          <button className="button"><Link to={`/products/${item.id}`}>Ir a comprar</Link></button>
        </div>
      </div>
    </div>
  );
};
