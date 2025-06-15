import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

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
        <li className="dropdown">
          <Link to="/productos" className="menu-link">
            Productos ▼
          </Link>
          <ul className="dropdown-content">
            <li>
              <Link to="/productos/Accessories" className="menu-link-dropdown">
                Accesorios
              </Link>
            </li>
            <li>
              <Link to="/productos/Books" className="menu-link-dropdown">
                Libros
              </Link>
            </li>
            <li>
              <Link to="/productos/Clothing" className="menu-link-dropdown">
                Ropa
              </Link>
            </li>
          </ul>
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
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
