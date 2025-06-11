import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

function ItemDetail({ item }) {
  const { carrito, AgregarAlCarrito } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleSumar = () => {
    if (cantidad < item.stock) {
      setCantidad(cantidad + 1);
    }
  };

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.image} alt={item.title} />
        <div>
          <h3 className="titulo">{item.title}</h3>
          <p className="descripcion">{item.description}</p>
          <p className="precio">${item.price}</p>
          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={() => {
              AgregarAlCarrito(item, cantidad);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
