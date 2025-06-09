import React, { useState } from "react";

function Contact() {
  const [valores, setValores] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviado", valores);
  };

  const handleValores = (e) => {
    setValores({ ...valores, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h1 className="main-title">Contacto</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ingresa tu nombre"
          value={valores.nombre}
          onChange={handleValores}
          name="nombre"
        />
        <input
          type="email"
          placeholder="ingresa tu email"
          value={valores.email}
          onChange={handleValores}
          name="email"
        />
        <input
          type="phone"
          placeholder="ingresa tu telefono"
          value={valores.telefono}
          onChange={handleValores}
          name="telefono"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
