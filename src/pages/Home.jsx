import React from "react";
import home from "../assets/home.jpeg";
import { Link } from "react-router-dom";



export const Home = () => {

  const year = new Date().getFullYear();
  return (
    <div className="hero min-h-screen bg-white shadow ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={home} className="max-w-xs rounded-lg shadow-2xl" />
        <div>
        <p className="py-14 text-black font-semibold">
          Los mejores productos del {year}
        </p>
          <h1 className="text-5xl font-bold text-black">
            Tienda Coder, tu tienda fiícticia en la red!
          </h1>
          <p className="py-14 text-black">
            En Tienda Coder, fusionamos el mundo de la programación y la innovación con la moda y el estilo.<br/><br/>
            Descubre nuestra exclusiva colección de ropa con diseños inspirados
            en el código fuente, accesorios que incorporan elementos
            tecnológicos de vanguardia y joyería que refleja tu amor por la era
            digital. <br/><br /> Ya sea que desees destacar tu pasión por la programación o
            simplemente desees agregar un toque de alta tecnología a tu estilo
            diario, en Tienda Coder encontrarás productos únicos que te
            permitirán expresar tu amor por la tecnología con elegancia.
            ¡Explora nuestra tienda y déjate llevar por la revolución de la moda
            tecnológica!".
          </p>
          <button className="btn bg-[#AF8970] text-black hover:bg-black hover:text-white"><Link to="/shop">Ir a la tienda</Link></button>
        </div>
      </div>
    </div>
    
  );
};
