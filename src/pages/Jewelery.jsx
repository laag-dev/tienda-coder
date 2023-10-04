import { useEffect, useState } from "react";
import { products } from "../assets/Products";
import { ProductsList } from "../components/products/ProductsList";
import { motion } from "framer-motion";

export const Jewelery = () => {
  const [jewelerysProducts, setJewelerysProducts] = useState([]);

  //filtro por categorías
  useEffect(() => {
    const filteredJewelerysProducts = products.filter(
      (item) => item.category === "watch"
    );

    setJewelerysProducts(filteredJewelerysProducts);
  }, []);

  return (
    <section className="bg-[#f3e9dc] py-16">
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-black mb-2"
        >
          Categorías populares
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "30%" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-[#af8970]  h-1 mx-auto mb-4"
        ></motion.div>
        <div>
          <ProductsList data={jewelerysProducts} />
        </div>
      </div>
    </section>
  );
};
