import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './../assets/Products';
import { motion } from 'framer-motion';
import { ButtonCart } from '../components/UI/ButtonCart';

export const ProductDetails = () => {
  const { id } = useParams();

  // Función para encontrar el producto por ID
  const findProductById = (productId) => {
    return products.find((product) => product.id === productId);
  };

  const product = findProductById(id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="py-8 px-4 sm:px-8 md:h-[78vh] bg-[#f3e9dc] flex flex-col md:flex-row items-center">
      <figure className="w-full md:w-1/3">
        <motion.img whileHover={{ scale: 0.9 }} src={product.imgUrl} alt={product.productName} className="w-full" />
      </figure>
      <div className="card-body text-center md:text-left w-full md:w-1/2 mt-4 md:mt-0">
        <h2 className="card-title text-black text-2xl md:text-3xl mb-2">{product.productName}</h2>
        <p className="italic text-black font-bold text-sm mb-2">Categoría: {product.category}</p>
        <p className="text-black text-lg md:text-xl mb-4">{product.description}</p>
        <p className="font-bold text-black text-xl mb-4">Precio: ${product.price}</p>
        <div className="card-actions flex flex-col md:flex-row justify-center md:justify-start">
          <ButtonCart />
        </div>
      </div>
    </div>
  );
};
