import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ListCartContext } from "../../context/ListCartContext";
import React, { useContext } from "react";

export const ProductCard = ({ item }) => {
  const { addProduct } = useContext(ListCartContext);

  return (
    //Diseño de las card

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
      <div className="card-body bg-white items-center">
        <h2 className="card-title text-black">{item.productName}</h2>
        <p className="italic text-black font-bold text-sm">
          Categoría: {item.category}
        </p>
        <p className="text-black text-xl">{item.shortDesc}</p>
        <p className="font-bold text-black text-xl">Precio: ${item.price}</p>
        <div className="card-actions justify-end">
          <button className="button">
            <Link to={`/products/${item.id}`}>ver detalles</Link>
          </button>
          <button className="button ml-2" onClick={() => addProduct(item.id)}>
            <i className="ri-shopping-cart-2-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
