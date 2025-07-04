

import React, { useState } from 'react';
import './ContactPage.css';
import { useNavigate } from 'react-router-dom';

function ContactPage() {
  const [isTopicOpen, setIsTopicOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('');

  const topics = [
    'Sugerencias del sitio web',
    'Espacios disponibles',
    'Servicios ofrecidos',
    'Problemas técnicos',
    'Otros'
  ];

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setIsTopicOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de envío del formulario
    console.log('Formulario enviado');
  };

  return (
    <div className="contact-page">
     
     

      {/* Main Content */}
      <main>
        <h1 className="page-title">Contacto</h1>

        <section className="contact-form-section">
          <h2 className="section-title">Información</h2>

          <div className="email-info">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e681f45b535caa3f81b63608c4b5a72841b27c3?width=67"
              alt="Paper airplane"
              className="paper-airplane"
            />
            <p className="email-text">E-Mail: Spotmet@correo.unimet.edu.ve</p>
          </div>

          <p className="description">
            En Spotmet estamos interesados en conocer su opinión. Envíenos sus
            sugerencias sobre el site, nuestros espacios o cualquiera de nuestros
            servicios.
          </p>

          <h2 className="section-title">Contáctanos</h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label className="field-label">Nombres y Apellidos</label>
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Nombres y Apellidos"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-field">
              <label className="field-label">Tópicos</label>
              <div className="select-container">
                <button
                  type="button"
                  onClick={() => setIsTopicOpen(!isTopicOpen)}
                  className="select-button"
                >
                  <span className="select-text">
                    {selectedTopic || 'Seleccione un Tópico'}
                  </span>
                  <div className="select-arrow">&gt;</div>
                </button>

                {isTopicOpen && (
                  <div className="select-dropdown">
                    {topics.map((topic, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleTopicSelect(topic)}
                        className="dropdown-option"
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="form-field">
              <label className="field-label">Email</label>
              <div className="input-container">
                <input
                  type="email"
                  placeholder="kgutierrez@correo.unimet.edu.ve"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-field">
              <label className="field-label">Teléfono</label>
              <div className="input-container">
                <input
                  type="tel"
                  placeholder="Ingresa tu número de teléfono"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-field">
              <label className="field-label">Reseña</label>
              <div className="textarea-container">
                <textarea
                  placeholder="Escriba su mensaje..."
                  className="form-textarea"
                />
              </div>
            </div>

            <div className="submit-container">
              <button type="submit" className="submit-button">
                ENVIAR
              </button>
            </div>
          </form>
        </section>
      </main>

      {/* Navigation */}
      <nav className="back-navigation">
        <button type="button" aria-label="Go back" className="back-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.825 11L20 11V13L7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11Z" fill="#EA3323"/>
          </svg>
        </button>
        <span className="back-text">Inicio</span>
      </nav>

      {/* Social Media */}
      <div className="social-media">
        <a href="#" aria-label="Social media link">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/347090464f93332f8e04491acff4bab92b5497c3?width=159" alt="" className="social-icon-1" />
        </a>
        <a href="#" aria-label="Instagram">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e048d2a8e7c806a219c27ecfaa4135df50624fb7?width=139" alt="" className="social-icon-2" />
        </a>
        <a href="#" aria-label="Facebook">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c74a960fabe08001efb08649d57e3c370ca4876?width=117" alt="" className="social-icon-3" />
        </a>
      </div>

      
    </div>
  );
}

export default ContactPage;
