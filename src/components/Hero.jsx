import React from "react";
import hero from '@/images/hero.jpeg'

export const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={hero}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-black">¡Tienda Fit! Tu destino para un estilo de vida saludable</h1>
            <p className="py-6 ">
            Bienvenido a Tienda Fit, tu destino definitivo para el estilo de
              vida saludable! En nuestra tienda, encontrarás todo lo que
              necesitas para mantenerte en forma y enérgico. Desde ropa
              deportiva de alta calidad y accesorios para entrenamiento, hasta
              suplementos nutricionales y equipos de ejercicio de última
              generación, estamos comprometidos en ayudarte a alcanzar tus
              objetivos fitness.
            </p>
            <button className="btn bg-amber-400 text-black">Ir a comprar</button>
          </div>
        </div>
      </div>

    </>
  );
};
export default Hero;

