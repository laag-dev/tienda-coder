import { useEffect, useState } from "react";
import home from "../assets/home.jpeg";
import { Link } from "react-router-dom";
import { Services } from "../Service/Services";
import { products } from "../assets/Products";
import { filterProps } from "framer-motion";
import { ProductsList } from "../components/products/ProductsList";

export const Home = () => {
  // Defining local state for 

  const [trendingProducts, setTrendingProducts,] = useState([]);
  const [bestSalesProducts, setBestSalesProducts,] = useState([]);
  // Home page + year
  const year = new Date().getFullYear();

  // Filtering the products and updating the data state
  useEffect(() => {
    const filteredTrendingProducts = products.filter((item) => item.category === "chair");
    const filteredBestSalesProducts = products.filter((item) => item.category === "sofa");

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
  }, []);



  return (
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
            <Link to="/shop">Ir a la tienda</Link>
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

      {/* Trending Products Section */}
      < section className="bg-[#f3e9dc] py-8">
        
          <h1 className="text-center text-5xl font-bold text-black">
            Productos en tendencia
          </h1>
          <ProductsList data={trendingProducts} />
        
      </section>

      {/* Bestsellers Section */}
      < section className="bg-[#f3e9dc] py-8">
        
          <h1 className="text-center text-5xl font-bold text-black">
            Los más vendidos
          </h1>
          <ProductsList data={bestSalesProducts} />
        
      </section>
     
    </div>
  );
};
