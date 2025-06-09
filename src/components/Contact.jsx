import React, { useState } from "react";

function Contact() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviado", { nombre, email });
  };

  const handleNombre = (e) => {
    setNombre(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="main-title">Contacto</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ingresa tu nombre"
          value={nombre}
          onChange={handleNombre}
        />
        <input
          type="email"
          placeholder="ingresa tu email"
          value={email}
          onChange={handleEmail}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
