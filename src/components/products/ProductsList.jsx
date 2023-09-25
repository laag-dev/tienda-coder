import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductsList = ({ data }) => {
  return (
    <div className="bg-[#f3e9dc] py-12  px-4 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 m-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
    </div>
  );
};
