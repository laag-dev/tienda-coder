import React from "react";
import AddBtnCart from "./AddBtnCart";

const Card = ({ src, name, description, price }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={src} alt="Imagen del producto" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <h3 className="justify-end">${price}</h3>
      </div>
      <AddBtnCart/>
      </div>
  );
};
export default Card;