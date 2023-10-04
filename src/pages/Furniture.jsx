import { useEffect, useState } from "react";
import { products } from "../assets/Products";
import { ProductsList } from "../components/products/ProductsList";
import { motion } from "framer-motion";

export const Furniture = () => {
  const [chairProducts, setChairProducts] = useState([]);
  const [sofaProducts, setSofaProducts] = useState([]);

  //filtro por categorías
  useEffect(() => {
    const filteredChairProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filteredSofaProducts = products.filter(
      (item) => item.category === "sofa"
    );

    setChairProducts(filteredChairProducts);
    setSofaProducts(filteredSofaProducts);
  }, []);

  return (
    <section className="bg-[#f3e9dc] py-8">
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }} // Animación inicial
          animate={{ opacity: 1, y: 0 }} // Animación al entrar
          transition={{ duration: 0.5 }} // Duración de la animación
          className="text-3xl md:text-5xl font-bold text-black mb-2"
        >
          Productos en tendencia
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "30%" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-[#af8970] h-1 mx-auto mb-4"
        ></motion.div>
        {/* Concateno los filtros para que quede bien organizadas las card */}
        <ProductsList data={chairProducts.concat(sofaProducts)} />
      </div>
    </section>
  );
};
