import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Carrito() {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>
      {carrito.map((prod) => (
        <div key={prod.id} className="prod-container">
          <h3 className="prod-title">{prod.title}</h3>
          <p className="prod-price">Precio unitario: ${prod.price}</p>
          <p className="prod-price">
            Precio total: ${(prod.price * prod.cantidad).toFixed(2)}
          </p>
          <p className="prod-cant">cant: {prod.cantidad}</p>
          <br />
        </div>
      ))}
      {carrito.length > 0 ? (
        <>
          <h2 className="prod-total-price">
            Precio total: ${precioTotal().toFixed(2)}
          </h2>
          <button onClick={handleVaciar} className="prod-button-vaciar-carrito">
            Vaciar Carrito
          </button>
        </>
      ) : (
        <h2 className="prod-carrito-vacio">El carrito esta vacio</h2>
      )}
    </div>
  );
}

export default Carrito;
