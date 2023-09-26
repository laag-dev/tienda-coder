import { useEffect, useState } from "react";
import { products } from "../assets/Products";
import { ProductsList } from "../components/UI/ProductsList";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Jewelery = () => {
  // Defining local state for
  const [jeweleryProducts, setJeweleryProducts] = useState([]);
  // Filtering the products and updating the data state
  useEffect(() => {
    const filteredJeweleryProducts = products.filter(
      (item) => item.category === "watch"
    );

    setJeweleryProducts(filteredJeweleryProducts);
  }, []);

  return (
    // Jewelery categories

    <section className="bg-[#f3e9dc] py-8">
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
          <ProductsList data={jeweleryProducts} />
        </div>
      </div>
    </section>
  );
};
