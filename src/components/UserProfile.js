// UserProfile.js
import React from 'react';

const UserProfile = () => {
  // Simulamos datos de usuario y trabajos aplicados
  const usuario = {
    nombre: 'Usuario Ejemplo',
    correo: 'usuario@example.com',
  };

  const trabajosAplicados = ['Desarrollador Frontend', 'Analista de Datos', 'Diseñador UX'];

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <div>
        <strong>Nombre:</strong> {usuario.nombre}
      </div>
      <div>
        <strong>Correo Electrónico:</strong> {usuario.correo}
      </div>
      <h3>Trabajos Aplicados</h3>
      <ul>
        {trabajosAplicados.map((trabajo, index) => (
          <li key={index}>{trabajo}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
