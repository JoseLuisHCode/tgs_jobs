// ResumeForm.js
import React, { useState } from 'react';

const ResumeForm = () => {
  // Estados para manejar los datos del formulario
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  // Otros estados según sea necesario...

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos al backend
    console.log('Datos del formulario enviados:', { nombre, correo });
    // Puedes agregar lógica adicional para enviar los datos al backend
  };

  return (
    <div>
      <h2>Completa tu Hoja de Vida</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <br />
        <label>
          Correo Electrónico:
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </label>
        <br />
        {/* Agrega más campos según sea necesario */}
        <button type="submit">Enviar Hoja de Vida</button>
      </form>
    </div>
  );
};

export default ResumeForm;

