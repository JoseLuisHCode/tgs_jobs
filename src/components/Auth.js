// Auth.js
import React, { useState } from 'react';

const Auth = () => {
  // Estados para manejar los datos del formulario
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  // Funciones para manejar el envío de formularios
  const handleRegistro = (e) => {
    e.preventDefault();
    // Lógica para enviar datos de registro al backend
    console.log('Datos de registro enviados:', { correo, contrasena });
  };

  const handleInicioSesion = (e) => {
    e.preventDefault();
    // Lógica para enviar datos de inicio de sesión al backend
    console.log('Datos de inicio de sesión enviados:', { correo, contrasena });
  };

  return (
    <div>
      <h2>Autenticación</h2>
      <form onSubmit={handleRegistro}>
        <h3>Registro</h3>
        <label>
          Correo Electrónico:
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Registrarse</button>
      </form>

      <form onSubmit={handleInicioSesion}>
        <h3>Iniciar Sesión</h3>
        <label>
          Correo Electrónico:
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Auth;