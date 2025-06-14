import React, { useState, useEffect } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const category = useParams().category;
  const [titulo, setTitulo] = useState("Productos");

  useEffect(() => {
    const productosRef = collection(db, "productos");

    const q = category
      ? query(productosRef, where("category", "==", category))
      : productosRef;

    getDocs(q).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [category]);

  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
}

export default ItemListContainer;
