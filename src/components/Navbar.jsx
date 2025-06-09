import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>E-commerce</h1>
      </Link>
      <ul className="menu">
        <li>
          <Link to="/" className="menu-link">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/productos" className="menu-link">
            Productos
          </Link>
        </li>
        <li>
          <Link to="/productos/Accessories" className="menu-link">
            Accesorios
          </Link>
        </li>
        <li>
          <Link to="/productos/Books" className="menu-link">
            Libros
          </Link>
        </li>
        <li>
          <Link to="/productos/Clothing" className="menu-link">
            Ropa
          </Link>
        </li>
        <li>
          <Link to="/nosotros" className="menu-link">
            Nosotros
          </Link>
        </li>
        <li>
          <Link to="/contact" className="menu-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
