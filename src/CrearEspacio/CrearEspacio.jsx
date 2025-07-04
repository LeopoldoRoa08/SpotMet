import React from 'react';
import './CrearEspacio.css';

function CrearEspacio() {
  return (
    <div className="espacios-container">
      <div className="espacios-header">
        <h1 className="espacios-page-title">Crear nuevo espacio</h1>
      </div>

      <div className="espacios-main-content">
        {/* Sección de imágenes */}
        <div className="espacios-image-section">
          <div className="espacios-image-upload-section">
            <div className="espacios-image-upload-content">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#D1D5DB" fillOpacity="0.2"/>
                <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" stroke="#9CA3AF" strokeWidth="2"/>
              </svg>
              <p className="espacios-upload-text">Añadir imágenes</p>
            </div>
          </div>
        </div>

        {/* Sección de formulario */}
        <div className="espacios-form-container">
          <h2 className="espacios-section-title">Completa datos</h2>
          
          <div className="espacios-form-section">
            {/* Nombre del espacio */}
            <div className="espacios-input-field">
              <input 
                type="text" 
                placeholder="Nombre del Espacio" 
                className="espacios-input"
              />
            </div>

            {/* Fila de 3 campos con mejor separación */}
            <div className="espacios-input-row">
              <div className="espacios-input-column">
                <input 
                  type="text" 
                  placeholder="Capacidad Máxima de personas" 
                  className="espacios-input"
                />
              </div>
              <div className="espacios-input-column">
                <input 
                  type="text" 
                  placeholder="Precio de alquiler" 
                  className="espacios-input"
                />
              </div>
              <div className="espacios-input-column">
                <select className="espacios-select">
                  <option value="">Tipo de Espacio</option>
                  <option value="oficina">Canchas</option>
                  <option value="sala">Aula</option>
                  <option value="evento">Laboratorios</option>
                </select>
              </div>
            </div>

            {/* Descripción */}
            <div className="espacios-textarea-field">
              <textarea 
                placeholder="Ingresa la Descripción del Espacio" 
                className="espacios-textarea"
              ></textarea>
            </div>

            {/* Botón de crear */}
            <div className="espacios-actions-container">
              <a href="/dashboard" className="espacios-dashboard-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.825 11L20 11V13L7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11Z" fill="#EA3323"/>
                </svg>
                Dashboard
              </a>
              
              <button className="espacios-submit-button">
                Crear nuevo espacio
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrearEspacio;