import { useEffect, useState } from "react";
import home from "../assets/home.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Services } from "../Service/Services";
import { products } from "../assets/Products";
import { ProductsList } from "../components/UI/ProductsList";
import counterImg from "../assets/images/counter-timer-img.png";
import { Clock } from "../components/UI/Clock";
import { Banner } from "../components/header/Banner";

export const Home = () => {
  // Defining local state for

  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  // Home page + year
  const year = new Date().getFullYear();

  // Filtering the products and updating the data state
  useEffect(() => {
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "chair"
    );

    setBestSalesProducts(filteredBestSalesProducts);
  }, []);

  return (
    <>
    <Banner/>
    <div className="min-h-screen bg-white shadow">
      <Services />

      <div className="container mx-auto p-4 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-10/12 p-4">
          <p className="py-4 text-black font-semibold">
            Los mejores productos del {year}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-black">
            Tienda Coder, tu tienda ficticia en la red!
          </h1>
          <p className="py-4 text-black">
            En Tienda Coder, fusionamos el mundo de la programación y la
            innovación con la moda y el estilo.
            <br />
            <br />
            Descubre nuestra exclusiva colección de ropa con diseños inspirados
            en el código fuente, accesorios que incorporan elementos
            tecnológicos de vanguardia y joyería que refleja tu amor por la era
            digital.
            <br />
            <br />
            Ya sea que desees destacar tu pasión por la programación o
            simplemente desees agregar un toque de alta tecnología a tu estilo
            diario, en Tienda Coder encontrarás productos únicos que te
            permitirán expresar tu amor por la tecnología con elegancia.
            ¡Explora nuestra tienda y déjate llevar por la revolución de la moda
            tecnológica!
          </p>
          <button className="button">
            <Link to="/electronics">Ir a la tienda</Link>
          </button>
        </div>
        <div className="md:w-1/2 p-4">
          <img
            src={home}
            className="w-full max-w-xs md:max-w-full rounded-lg shadow-2xl"
            alt="Imagen de inicio"
          />
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="bg-[#f3e9dc] py-8 md:h-[95vh]">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-black mb-2"
          >
            Los más vendidos
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "30%" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#af8970]  h-1 mx-auto mb-4"
          ></motion.div>
          <ProductsList data={bestSalesProducts} />
        </div>
      </section>

      {/* Limited Offer Section*/}
      <section className="bg-white py-8 text-black md:h-[40vh]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="md:col-span-2 lg:col-span-1">
              <div className="h-auto md:h-300 flex flex-col items-center justify-center text-center md:text-left">
                <h2 className="text-3xl md:text-5xl  mb-4">
                  ¡Oferta limitada!
                </h2>
                <h3 className="text-xl md:text-3xl font-semibold mb-4">
                  Butaca de calidad
                </h3>
                <Clock />
                <div>
                  <motion.button whileTap={{ scale: 1.2 }} className="button">
                    <Link to="/furniture">Comprar</Link>
                  </motion.button>
                </div>
              </div>
            </div>
            <div className="text-center md:text-left flex items-end justify-center">
              <img src={counterImg} alt="" className="max-w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};
