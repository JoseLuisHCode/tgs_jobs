// Home.js
import React, { useState } from 'react';

const Home = ({ onVacancySelected, onRegisterClick }) => {
  const [filtroPalabraClave, setFiltroPalabraClave] = useState('');
  const [filtroCiudad, setFiltroCiudad] = useState('');

  const vacantes = [
    {
      cargo: 'Desarrollador Frontend',
      empresa: 'TechCorp',
      ciudad: 'Ciudad Ejemplo',
      pago: '$50,000 - $70,000',
      tiempoDeTrabajo: 'Tiempo Completo',
      palabrasClave: ['React', 'JavaScript', 'Frontend'],
    },
    {
      cargo: 'Analista de Datos',
      empresa: 'DataInsights',
      ciudad: 'Otra Ciudad',
      pago: '$60,000 - $80,000',
      tiempoDeTrabajo: 'Tiempo Parcial',
      palabrasClave: ['Data Analysis', 'SQL', 'Python'],
    },
    {
      cargo: 'Diseñador UX',
      empresa: 'DesignStudio',
      ciudad: 'Ciudad Creativa',
      pago: '$55,000 - $75,000',
      tiempoDeTrabajo: 'Remoto',
      palabrasClave: ['UX Design', 'UI', 'Adobe XD'],
    },
  ];

  const filtrarVacantes = () => {
    return vacantes.filter(vacante => {
      const cuerpoVacante = `${vacante.cargo} ${vacante.empresa} ${vacante.ciudad} ${vacante.tiempoDeTrabajo} ${vacante.palabrasClave.join(' ')}`;

      const cumplePalabraClave = cuerpoVacante.toLowerCase().includes(filtroPalabraClave.toLowerCase());
      const cumpleCiudad = filtroCiudad === '' || vacante.ciudad.toLowerCase().includes(filtroCiudad.toLowerCase());

      return cumplePalabraClave && cumpleCiudad;
    });
  };

  return (
    <div>
      <h1>Página Principal</h1>
      <div>
        <label>
          Buscar por Palabra Clave:
          <input
            type="text"
            value={filtroPalabraClave}
            onChange={(e) => setFiltroPalabraClave(e.target.value)}
          />
        </label>
        <label>
          Filtrar por Ciudad:
          <input
            type="text"
            value={filtroCiudad}
            onChange={(e) => setFiltroCiudad(e.target.value)}
          />
        </label>
      </div>
      <h2>Lista de Vacantes</h2>
      {filtrarVacantes().length === 0 ? (
        <p>No hay resultados.</p>
      ) : (
        <ul>
          {filtrarVacantes().map((vacante, index) => (
            <li key={index}>
              <strong>Cargo:</strong> {vacante.cargo} <br />
              <strong>Empresa:</strong> {vacante.empresa} <br />
              <strong>Ciudad:</strong> {vacante.ciudad} <br />
              <strong>Pago:</strong> {vacante.pago} <br />
              <strong>Tiempo de Trabajo:</strong> {vacante.tiempoDeTrabajo} <br />
              <button onClick={() => onVacancySelected(vacante)}>Aplicar</button>
              <hr />
            </li>
          ))}
        </ul>
      )}
      <div>
        <p>¿No encuentras lo que buscas? ¡Regístrate ahora!</p>
        <button onClick={() => onRegisterClick()}>Registrarse</button>
      </div>
    </div>
  );
};

export default Home;
