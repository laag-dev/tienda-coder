import React from "react";


const Category = (props) => {
  return (

    <ul className="unión vertical">
        <li><a className="btn join-item">Inicio</a></li>
        <li><a className="btn join-item">{props.itemOne}</a></li>
        <li><a className="btn join-item">{props.itemTwo}</a></li>
        <li><a className="btn join-item">{props.itemThree}</a></li>

    </ul>
  );
};

export default Category;