import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  };

  return (
    <div className="container-contact">
      <h1 className="main-title">Contacto</h1>
      <form onSubmit={handleSubmit(enviar)}>
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
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
