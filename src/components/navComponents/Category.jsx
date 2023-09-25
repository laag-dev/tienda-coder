import React from "react";
import { Link } from "react-router-dom";


const Category = ({category}) => {
  return (

    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black rounded-box w-42">
       <li><Link to={`/category/${category.name}`}>{category.name ==='electronics' ? 'Electrónicos':category.name ==='jewelery' ? 'Joyería':category.name ==="men's clothing" ? 'Ropa de Hombre':category.name ==="women's clothing" ? 'Ropa de Mujer':''}</Link></li>
     
    </ul>
  );
};

export default Category;