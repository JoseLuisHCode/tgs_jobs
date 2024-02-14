// JobDetails.js
import React from 'react';
import ResumeForm from './ResumeForm';

const JobDetails = ({ vacancy }) => {
  return (
    <div>
      <h1>Detalles del Trabajo - {vacancy.cargo}</h1>
      <p><strong>Empresa:</strong> {vacancy.empresa}</p>
      <p><strong>Ciudad:</strong> {vacancy.ciudad}</p>
      <p><strong>Pago:</strong> {vacancy.pago}</p>
      <p><strong>Tiempo de Trabajo:</strong> {vacancy.tiempoDeTrabajo}</p>
      {/* Otro contenido de los detalles del trabajo */}
      <ResumeForm />
    </div>
  );
};

export default JobDetails;
