import { useEffect, useState } from "react";
import { products } from "../assets/Products";
import { ProductsList } from "../components/UI/ProductsList";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Electronics = () => {

  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);

  useEffect(() => {
  
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
  
   
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
   
  }, []);

  return (

    // New arrivals Section
    <section className="bg-[#f3e9dc] py-8">
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-black mb-2"
        >
          Nuevos productos
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "30%" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-[#af8970]  h-1 mx-auto mb-4"
        ></motion.div>
        <div>
        <ProductsList data={mobileProducts.concat(wirelessProducts)}/>
        </div>
      </div>
    </section>
  )
}
