import React, { useEffect, useState } from 'react'
import { ItemListContainer } from './../components/itemListComponents/ItemListContainer';
import { Banner } from './../components/home/Banner';
import { productsData } from './../api/Api';

export const Home = () => {
// Usa useEffect para cargar los datos cuando el componente se monte
const [products, setProducts] = useState([]);

useEffect(() => {
  // Llama a la función para obtener los datos desde Api.js
  const fetchData = async () => {
    try {
      const data = await productsData();
      setProducts(data);
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  };

  // Llama a la función para cargar los datos
  fetchData();
}, []);

  return (
    <div>
    <Banner/>
    <ItemListContainer products ={products} />
    </div>
  )
}
