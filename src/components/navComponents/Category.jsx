import React from "react";


const Category = (props) => {
  return (

    <ul tabIndex={0} className="menu menu-sm  mt-3 z-[1] p-2 shadow text-black rounded-box w-42">
        <li><a>Inicio</a></li>
        <li><a>{props.itemOne}</a></li>
        <li><a>{props.itemTwo}</a></li>
        <li><a>{props.itemThree}</a></li>

    </ul>
  );
};

export default Category;