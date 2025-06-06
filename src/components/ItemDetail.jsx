import React from "react";

function ItemDetail({ item }) {
  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.image} alt={item.title} />
        <div>
          <h3 className="titulo">{item.title}</h3>
          <p className="descripcion">{item.description}</p>
          <p className="precio">${item.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
