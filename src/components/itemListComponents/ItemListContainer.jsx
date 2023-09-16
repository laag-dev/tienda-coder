import React from "react";
import { Card } from './Card';

export const ItemListContainer = () => {

  
  return (
    <>
      <div className=" bg-white py-10">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2x1 bg-black font-bold text-white py-2 w-80 text-center">
            ¡Compra cuando quieras!
          </h1>
          <span className="w-20 h-[3px] bg-black"></span>
          <p className="max-w-[700px] text-black text-center">
            Tienda coder, es la mejor tienda falsa de la web. Escoge tus
            productos.
          </p>
        </div>
        <div className="max-w-screen-xl mx-auto py-10">
        <Card/>
        </div>
      </div>
    </>
  );
};
