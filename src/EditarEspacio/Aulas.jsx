import React from 'react';
import './Aulas.css';
import Aula1 from "./Aulas.png";
import Aula2 from "./Aula2.jpg";
import Aula3 from "./Salon2.jpg";

function EditarAulas() {
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
              src= {Aula1}
              className="photo-1"
              alt="Espacio foto 1"
            />
          </div>
          <div className="photo-column">
            <img
              src= {Aula2}
              className="photo-2"
              alt="Espacio foto 2"
            />
          </div>
          <div className="photo-column">
            <div className="change-photo-container">
              <img
                src= {Aula3}
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
              Aula A2-302
            </div>
          </div>

          {/* Three Column Fields */}
          <div className="three-column-fields">
            <div className="form-field">
              <div className="field-label">
                Capacidad Máxima de personas
              </div>
              <div className="field-value-bold">
                40
              </div>
            </div>
            <div className="form-field">
              <div className="field-label">
                Precio de alquiler
              </div>
              <div className="field-value-bold">
                $ 70,00
              </div>
            </div>
            <div className="form-field">
              <div className="field-label">
                Tipo de Espacio
              </div>
              <div className="field-value-medium">
                Aula
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="description-field">
            <div className="field-label">
              Descripción del Espacio
            </div>
            <div className="description-text">
              Son espacios acondicionados con mobiliario básico, superficie de proyección/escritura e iluminación adecuada, diseñado para instrucción grupal, reuniones o talleres, disponible por un periodo determinado a cambio de una tarifa. 
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

export default EditarAulas;