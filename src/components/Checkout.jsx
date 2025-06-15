import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

function Checkout() {
  const [pedidosId, setPedidosId] = useState("");
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };
    console.log(pedido);

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidosId(doc.id);
      vaciarCarrito();
    });
  };

  if (pedidosId) {
    return (
      <div className="container">
        <h1 className="main-title">muchas gracias por tu compra</h1>
        <p>tu numero de pedido es: {pedidosId}</p>
      </div>
    );
  }

  return (
    <div className="container-contact">
      <h1 className="main-title">Finalizar compra</h1>
      <form onSubmit={handleSubmit(comprar)}>
        <input
          type="text"
          placeholder="ingresa tu nombre"
          {...register("nombre")}
        />
        <input
          type="email"
          placeholder="ingresa tu email"
          {...register("email")}
        />
        <input
          type="phone"
          placeholder="ingresa tu telefono"
          {...register("phone")}
        />
        <button type="submit">Comprar</button>
      </form>
    </div>
  );
}

export default Checkout;
