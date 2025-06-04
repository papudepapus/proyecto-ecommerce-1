import React, { useState, useEffect } from "react";
import { pedirProductos } from "./pedirProductos";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [productos, setproductos] = useState([]);

  useEffect(() => {
    pedirProductos().then((res) => {
      setproductos(res);
      console.log(productos);
    });
  }, []);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
