import React, { useState, useEffect } from "react";
import Card from "../components/itemListComponents/Card";
import "../styles/itemDetailContainer.css"
import { useParams } from "react-router-dom";

const Detail = () => {
  const [product, setProduct] = useState(null);
  const { id: itemId } = useParams();
  console.log(useParams());

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => {
        if (itemId) {
          const selectedProduct = products.find(
            (product) => product.id === parseInt(itemId)
          );
          setProduct(selectedProduct);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [itemId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="itemDetailContainer">
      <Card
      styleCard="itemDetailCard"
        src={product.image}
        name={product.title}
        price={product.price}
        description={product.description}
      />
    </div>
  );
};

export default Detail;