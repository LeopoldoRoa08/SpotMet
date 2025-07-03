

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
      {/* Header */}
      <header className="header">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b30cb881b384d5e3a76ab65c9ed514be7a9ef15?width=354"
          alt=""
          className="logo"
        />
        <nav className="nav-icons">
          <button type="button" aria-label="User profile" className="icon-button">
            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.3591 23.3611C21.2177 23.3611 19.3845 22.5986 17.8596 21.0736C16.3346 19.5487 15.5721 17.7155 15.5721 15.5741C15.5721 13.4327 16.3346 11.5995 17.8596 10.0745C19.3845 8.54958 21.2177 7.78711 23.3591 7.78711C25.5005 7.78711 27.3337 8.54958 28.8587 10.0745C30.3836 11.5995 31.1461 13.4327 31.1461 15.5741C31.1461 17.7155 30.3836 19.5487 28.8587 21.0736C27.3337 22.5986 25.5005 23.3611 23.3591 23.3611ZM7.78516 38.935V33.4841C7.78516 32.381 8.06906 31.367 8.63686 30.4423C9.20466 29.5176 9.95902 28.8119 10.8999 28.3253C12.9116 27.3194 14.9557 26.5651 17.0322 26.0622C19.1087 25.5593 21.2177 25.3078 23.3591 25.3078C25.5005 25.3078 27.6095 25.5593 29.686 26.0622C31.7626 26.5651 33.8066 27.3194 35.8183 28.3253C36.7592 28.8119 37.5136 29.5176 38.0814 30.4423C38.6492 31.367 38.9331 32.381 38.9331 33.4841V38.935H7.78516ZM11.6786 35.0415H35.0396V33.4841C35.0396 33.1272 34.9503 32.8028 34.7719 32.5108C34.5934 32.2187 34.3582 31.9916 34.0662 31.8294C32.3141 30.9534 30.5458 30.2963 28.7613 29.8583C26.9768 29.4203 25.1761 29.2013 23.3591 29.2013C21.5421 29.2013 19.7414 29.4203 17.9569 29.8583C16.1724 30.2963 14.4041 30.9534 12.652 31.8294C12.36 31.9916 12.1248 32.2187 11.9463 32.5108C11.7679 32.8028 11.6786 33.1272 11.6786 33.4841V35.0415ZM23.3591 19.4676C24.4298 19.4676 25.3464 19.0863 26.1089 18.3239C26.8714 17.5614 27.2526 16.6448 27.2526 15.5741C27.2526 14.5034 26.8714 13.5868 26.1089 12.8243C25.3464 12.0618 24.4298 11.6806 23.3591 11.6806C22.2884 11.6806 21.3718 12.0618 20.6093 12.8243C19.8469 13.5868 19.4656 14.5034 19.4656 15.5741C19.4656 16.6448 19.8469 17.5614 20.6093 18.3239C21.3718 19.0863 22.2884 19.4676 23.3591 19.4676Z" fill="#030027"/>
            </svg>
          </button>
          <button type="button" aria-label="Menu" className="icon-button">
            <svg width="46" height="53" viewBox="0 0 46 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.75 39.75V35.3333H40.25V39.75H5.75ZM5.75 28.7083V24.2917H40.25V28.7083H5.75ZM5.75 17.6667V13.25H40.25V17.6667H5.75Z" fill="#EE5D08"/>
            </svg>
          </button>
        </nav>
      </header>

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

      {/* Footer */}
      <footer className="footer">
        <div className="footer-bg">
          <svg width="100%" height="100%" viewBox="0 0 1500 209" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H1500V209H0V0Z" fill="#030027"/>
          </svg>
        </div>
        <div className="footer-content">
          <p>
            Copyright © 2025 - Spotmet | Síguenos:
            <span className="footer-bold"> Instagram</span> |
            <span className="footer-bold"> Facebook</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ContactPage;
