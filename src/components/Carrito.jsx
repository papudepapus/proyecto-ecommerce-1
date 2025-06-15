import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Carrito() {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    if (window.confirm("¿Estás seguro que deseas vaciar el carrito?")) {
      vaciarCarrito();
    }
  };

  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>

      {carrito.length > 0 ? (
        <>
          {carrito.map((prod) => (
            <div key={prod.id} className="prod-container">
              <h3 className="prod-title">{prod.title}</h3>
              <p className="prod-price">Precio unitario: ${prod.price}</p>
              <p className="prod-price">
                Precio total: ${(prod.price * prod.cantidad).toFixed(2)}
              </p>
              <p className="prod-cant">Cantidad: {prod.cantidad}</p>
              <br />{" "}
            </div>
          ))}

          <h2 className="prod-total-price">
            Precio total: ${precioTotal().toFixed(2)}
          </h2>

          <div className="carrito-actions">
            <button onClick={handleVaciar} className="btn btn-danger">
              Vaciar Carrito
            </button>
            <Link to="/checkout" className="btn btn-primary">
              Finalizar Compra
            </Link>
          </div>
        </>
      ) : (
        <h2 className="prod-carrito-vacio">
          El carrito está vacio. ¡Busca nuestros productos!
        </h2>
      )}
    </div>
  );
}

export default Carrito;
