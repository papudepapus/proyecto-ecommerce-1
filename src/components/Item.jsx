import React from "react";

function Item({ producto }) {
  return (
    <div className="producto">
      <img src={producto.image} alt={producto.title} />
      <div>
        <h4>{producto.title}</h4>
        <p>Precio: ${producto.price}</p>
        <a href={`/item/${producto.id}`} className="ver-mas">
          Ver más
        </a>
      </div>
    </div>
  );
}

export default Item;
