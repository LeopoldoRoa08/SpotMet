import React from 'react';
import './CentroMundoXEditar.css';

function EditarCentroMundoX() {
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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5110f6f57c299c42f8890c1349c0991d6d807342?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
              className="photo-1"
              alt="Espacio foto 1"
            />
          </div>
          <div className="photo-column">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/87e9155c2d4a9685519b803f567ed0858b82c91f?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
              className="photo-2"
              alt="Espacio foto 2"
            />
          </div>
          <div className="photo-column">
            <div className="change-photo-container">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e00357bae30131d9b0044764152fcb91a9fbe23d?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
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
              Centro Mundo X
            </div>
          </div>

          {/* Three Column Fields */}
          <div className="three-column-fields">
            <div className="form-field">
              <div className="field-label">
                Capacidad Máxima de personas
              </div>
              <div className="field-value-bold">
                50
              </div>
            </div>
            <div className="form-field">
              <div className="field-label">
                Precio de alquiler
              </div>
              <div className="field-value-bold">
                $ 120,00
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
              La Universidad Metropolitana (UNIMET) está a la vanguardia de la
              innovación tecnológica en Venezuela
              <br />
              con el Centro Mundo X, un espacio único en el país dedicado al
              desarrollo de gemelos digitales y experiencias inmersivas en el
              metaverso. Esta iniciativa posiciona a la UNIMET como líder en la
              transformación digital aplicada a la educación y la industria.
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

export default EditarCentroMundoX;