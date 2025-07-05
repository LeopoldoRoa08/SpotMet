import React from 'react';
import './Sala24Editar.css';
import sala24A from "./Sala24.png";
import sala24B from "./Sala1.jpg";
import sala24C from "./Entrada.jpg"

function Sala24Editar() {
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
              src= {sala24A}
              className="photo-1"
              alt="Espacio foto 1"
            />
          </div>
          <div className="photo-column">
            <img
              src= {sala24B}
              className="photo-2"
              alt="Espacio foto 2"
            />
          </div>
          <div className="photo-column">
            <div className="change-photo-container">
              <img
                src= {sala24C}
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
              Sala 24 horas
            </div>
          </div>

          {/* Three Column Fields */}
          <div className="three-column-fields">
            <div className="form-field">
              <div className="field-label">
                Capacidad Máxima de personas
              </div>
              <div className="field-value-bold">
                30
              </div>
            </div>
            <div className="form-field">
              <div className="field-label">
                Precio de alquiler
              </div>
              <div className="field-value-bold">
                $ 90,00
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
              Permanece abierta las 24 horas del día, y ofrece a los estudiantes la posibilidad de su uso para las actividades académicas, y realizar trabajos en grupo con mayor informalidad.
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

export default Sala24Editar;