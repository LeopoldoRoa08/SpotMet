import React from 'react';
import './LaboratoriosEditar.css';
import Laboratorio from "./Laboratorios.png";
import Laboratorio2 from "./Lab1.jpg";
import Laboratorio3 from "./Lab2.png";

function EditarLaboratorio() {
  return (
    <div className="main-container">

      {/* Title */}
      <div className="page-title">
        Editar espacio
      </div>

      {/* Photo Gallery Section */}
      <div className="photo-section">
        <div className="photo-section-title">
          Fotos del espacio
        </div>
        <div className="photo-gallery">
          <div className="photo-column">
            <img
              src= {Laboratorio}
              className="photo-1"
              alt="Espacio foto 1"
            />
          </div>
          <div className="photo-column">
            <img
              src= {Laboratorio2}
              className="photo-2"
              alt="Espacio foto 2"
            />
          </div>
          <div className="photo-column">
            <div className="change-photo-container">
              <img
                src= {Laboratorio3}
                className="change-photo-background"
                alt="Background"
              />
              <div className="change-photo-text">
                Cambiar
              </div>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="form-container">
          {/* Space Name */}
          <div className="form-field-full">
            <div className="field-label">
              Nombre del Espacio
            </div>
            <div className="field-value-large">
              Laboratorio de Quimica I
            </div>
          </div>

          {/* Three Column Fields */}
          <div className="three-column-fields">
            <div className="form-field">
              <div className="field-label">
                Capacidad Máxima de personas
              </div>
              <div className="field-value-bold">
                18
              </div>
            </div>
            <div className="form-field">
              <div className="field-label">
                Precio de alquiler
              </div>
              <div className="field-value-bold">
                $ 80,00
              </div>
            </div>
            <div className="form-field">
              <div className="field-label">
                Tipo de Espacio
              </div>
              <div className="field-value-medium">
                Sala
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="description-field">
            <div className="field-label">
              Descripción del Espacio
            </div>
            <div className="description-text">
              La Universidad Metropolitana tiene laboratorios que  son utilizados para la investigación y enseñanza en sus programas de pregrado y posgrado. Estos laboratorios pueden incluir áreas como biología, química, física, entre otras, dependiendo de los programas ofrecidos por la universidad
            </div>
          </div>

          {/* Buttons */}
          <div className="save-button">
            Guardar
          </div>
          <div className="delete-button">
            Eliminar
          </div>
        </div>

        {/* Dashboard Link */}
        <div className="dashboard-link">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c42ec600022b3fae885d2bbdd8394046eae346c4?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
            className="dashboard-icon"
            alt="Dashboard icon"
          />
          <div className="dashboard-text">
            Dashboard
          </div>
        </div>
      </div>

    </div>
  );
}

export default EditarLaboratorio;