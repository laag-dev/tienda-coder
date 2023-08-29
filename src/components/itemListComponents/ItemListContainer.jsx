import React, { useState, useEffect } from "react";
import Card from "../itemListComponents/Card";
import "../../styles/itemListContainer.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";



const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id: categoryName } = useParams();
  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => {
        if (categoryName) {
          const filteredProducts = products.filter(
            (product) => product.category === categoryName
          );
          setProducts(filteredProducts);
        } else {
          setProducts(products);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [categoryName]);

  const location = useLocation();
  const isDetailPage = location.pathname.includes("/item/");

  return (
    <div className="itemListContainer">
      {products.map((product) => (
        <Link key={product.id} to={`/item/${product.id}`}>
          <Card
          styleCard="card"
            src={product.image}
            name={product.title}
            price={product.price}
            description={product.description}
            isDetailPage={isDetailPage}
          />
        </Link>
      ))}
    </div>
  );
};

export default ItemListContainer;