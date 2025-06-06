import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="" className="logo">
        <h1>E-commerce</h1>
      </a>
      <ul className="menu">
        <li>
          <a href="#" className="menu-link">
            Inicio
          </a>
        </li>
        <li>
          <a href="#" className="menu-link">
            Nosotros
          </a>
        </li>
        <li>
          <a href="#" className="menu-link">
            Producto
          </a>
        </li>
        <li>
          <a href="#" className="menu-link">
            Contactos
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
