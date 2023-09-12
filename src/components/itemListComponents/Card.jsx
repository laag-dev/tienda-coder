import React from "react";
import AddBtnCart from "./AddBtnCart";

const Card = ({ src, name, description, price }) => {
  return (
    <div className="bg-white p-10">

<div className="card w-96 bg-[#af8970] shadow-xl">
  <figure className="px-4 pt-9">
    <img src="https://acdn.mitiendanube.com/stores/903/627/products/neko-mail-company21-822c015f274df8b38b16478891951067-640-0.webp" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center text-white">
    <h2 className="card-title">Remera vintage</h2>
    <p>Talle M-L-XL</p>
    <p>Precio: <span className="font-bold">20$</span> </p>
    <div className="card-actions">
      <button className="w-48 h-10 bg-black text-white uppercase text-sm font-semibold rounded-md hover:bg-white hover:text-black duration-300">Añadir al carrito</button>
    </div>
  </div>
</div>

    </div>


    // <div className="card w-96 bg-base-100 shadow-xl">
    //   <figure><img src={src} alt="Imagen del producto" /></figure>
    //   <div className="card-body">
    //     <h2 className="card-title">{name}</h2>
    //     <p>{description}</p>
    //     <h3 className="justify-end">${price}</h3>
    //   </div>
    //   <AddBtnCart/>
    //   </div>

  );                                     
};
export default Card;