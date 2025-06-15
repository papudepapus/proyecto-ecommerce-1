import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

function ItemListContainer() {
  const [allProductos, setAllProductos] = useState([]);
  const [productosEnPagina, setProductosEnPagina] = useState([]);
  const [loading, setLoading] = useState(true);
  const category = useParams().category;
  const [titulo, setTitulo] = useState("Todos los Productos");

  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 30;
  const [totalPaginas, setTotalPaginas] = useState(0);

  useEffect(() => {
    setLoading(true);
    setAllProductos([]);
    setProductosEnPagina([]);

    const productosRef = collection(db, "productos");

    const q = category
      ? query(productosRef, where("category", "==", category))
      : productosRef;

    getDocs(q)
      .then((resp) => {
        const productosData = resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setAllProductos(productosData);
        setTotalPaginas(Math.ceil(productosData.length / productosPorPagina));
        setPaginaActual(1);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      })
      .finally(() => {
        setLoading(false);
      });

    setTitulo(category ? `Productos de ${category}` : "Todos los Productos");
  }, [category, productosPorPagina]);

  useEffect(() => {
    const startIndex = (paginaActual - 1) * productosPorPagina;
    const endIndex = startIndex + productosPorPagina;
    setProductosEnPagina(allProductos.slice(startIndex, endIndex));
  }, [paginaActual, allProductos, productosPorPagina]);

  const handlePreviousPage = () => {
    setPaginaActual((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setPaginaActual((prev) => Math.min(totalPaginas, prev + 1));
  };

  if (loading) {
    return (
      <div className="container main-title loading-message">
        Cargando productos...
      </div>
    );
  }

  return (
    <div className="container">
      {allProductos.length === 0 && !loading ? (
        <h2 className="main-title no-products-message">
          No se encontraron productos en esta categoría.
        </h2>
      ) : (
        <>
          <ItemList productos={productosEnPagina} titulo={titulo} />

          {totalPaginas > 1 && (
            <div className="pagination-controls">
              <button
                onClick={handlePreviousPage}
                disabled={paginaActual === 1}
              >
                Anterior
              </button>
              {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => setPaginaActual(pageNumber)}
                    className={pageNumber === paginaActual ? "active" : ""}
                  >
                    {pageNumber}
                  </button>
                )
              )}
              <button
                onClick={handleNextPage}
                disabled={paginaActual === totalPaginas}
              >
                Siguiente
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ItemListContainer;
