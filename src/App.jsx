import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from "./components/Nosotros";
import Contact from "./components/Contact";
import { useState } from "react";
import { CartContext } from "./context/CartContext";

function App() {
  const [carrito, setCarrito] = useState([]);

  const AgregarAlCarrito = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };

    const nuevoCarrito = [...carrito];

    const estaEnElCarrito = nuevoCarrito.find(
      (producto) => producto.id === itemAgregado.id
    );

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;
      setCarrito(nuevoCarrito);
    } else {
      nuevoCarrito.push(itemAgregado);
      setCarrito(nuevoCarrito);
    }
  };

  return (
    <>
      <CartContext.Provider value={{ carrito, AgregarAlCarrito }}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route
              path="/productos/:category"
              element={<ItemListContainer />}
            />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}

export default App;
