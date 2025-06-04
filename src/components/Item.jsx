import React from "react";

function Item({ producto }) {
  return (
    <div>
      <img src={producto.image} alt={producto.title} />
      <h2>{producto.title}</h2>
      <p>{producto.description}</p>
      <p>${producto.price}</p>
    </div>
  );
}

export default Item;
