import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function CartWidget() {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <ul className="menu">
        <li>
          <Link to="/carrito" className="menu-link">
            Carrito
            <span className="numerito"> {cantidadEnCarrito()}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default CartWidget;
