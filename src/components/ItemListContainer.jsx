import React, { useState, useEffect } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const category = useParams().category;
  const [titulo, setTitulo] = useState("Productos");

  useEffect(() => {
    pedirDatos().then((res) => {
      if (category) {
        setProductos(res.filter((prod) => prod.category === category));
        setTitulo(category);
      } else {
        setProductos(res);
        setTitulo("Productos");
      }
    });
  }, [category]);

  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
}

export default ItemListContainer;
