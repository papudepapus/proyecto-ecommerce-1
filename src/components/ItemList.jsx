import React from "react";
import Item from "./Item";
import { toCapitalise } from "../helpers/toCapitalise";

function ItemList({ productos, titulo }) {
  return (
    <div className="container">
      <h2 className="main-title">{toCapitalise(titulo)}</h2>
      <div className="productos">
        {productos.map((prod) => (
          <Item producto={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
