import React from "react";
import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <div className="producto">
      <img src={producto.image} alt={producto.title} />
      <div>
        <h4>{producto.title}</h4>
        <p>Precio: ${producto.price}</p>
        <p>Categoria: {producto.category}</p>
        <Link to={`/item/${producto.id}`} className="ver-mas">
          Ver más
        </Link>
      </div>
    </div>
  );
}

export default Item;
