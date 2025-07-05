import React from 'react';
import './CanchasEditar.css';
import Cancha1 from "./Canchas.png";
import Canchas2 from "./Canchas2.jpg";
import Canchas3 from "./Canchas3.jpg"

function EditarCanchas() {
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
              src= {Cancha1}
              className="photo-1"
              alt="Espacio foto 1"
            />
          </div>
          <div className="photo-column">
            <img
              src= {Canchas2}
              className="photo-2"
              alt="Espacio foto 2"
            />
          </div>
          <div className="photo-column">
            <div className="change-photo-container">
              <img
                src= {Canchas3}
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
              Canchas
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
                $ 60,00
              </div>
            </div>
            <div className="form-field">
              <div className="field-label">
                Tipo de Espacio
              </div>
              <div className="field-value-medium">
                Deportivo
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="description-field">
            <div className="field-label">
              Descripción del Espacio
            </div>
            <div className="description-text">
              La Universidad Metropolitana reinauguró sus canchas de fútbol y rugby luego de haber permanecido en obras por varios meses como parte del proyecto del acondicionamiento de la Ciudad Deportiva UNIMET.
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

export default EditarCanchas;