import React from "react";
import { motion } from "framer-motion";
import { serviceData } from "./ServiceData";

export const Services = () => {
  return (
    // Service Cards

    <div className="bg-[#f3e9dc] py-12  px-4 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 m-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {serviceData.map((item, index) => (
          <motion.div
            whileHover={{ scale: 0.9 }}
            className="bg-[#AF8970] rounded-lg shadow-xl p-4"
            key={index}
          >
            <span>{item.icon}</span>
            <h3 className="text-black font-bold text-lg">{item.title}</h3>
            <p className="text-black text-sm">{item.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
