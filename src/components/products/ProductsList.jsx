import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductsList = ({ data }) => {

  return (
    
    //Container de las card

    <div className="bg-[#f3e9dc] min-h-screen py-12 px-4 sm:px-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
