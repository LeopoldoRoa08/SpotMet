
import React, { useState, useRef } from 'react';
import './ContactPage.css';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function ContactPage() {
  const [isTopicOpen, setIsTopicOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('');
  const form = useRef();
  const navigate = useNavigate();

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

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('spotmet_correo', 'template_x1akagd', form.current, 'vAJENPiz1PKnun3FJ')
      .then((result) => {
        alert('Mensaje enviado con éxito');
        setTimeout(() => navigate('/'), 1500);
        form.current.reset();
      }, (error) => {
        alert('Hubo un error al enviar el mensaje');
        console.error(error.text);
      });
  };

  return (
    <div className="contact-page">
      <main>
        <div className="top-header-contacto">
          <h1>Contáctanos</h1>
          <button className="btn-inicio" onClick={() => navigate('/')}>Inicio</button>
        </div>

        <section className="contact-form-section">
          <h2 className="section-title">Escríbenos</h2>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label>Nombre</label>
              <input type="text" name="user_name" required />
            </div>
            <div className="form-group">
              <label>Correo electrónico</label>
              <input type="email" name="user_email" required />
            </div>
            <div className="form-group">
              <label>Tema</label>
              <div className="dropdown-container">
                <div className="dropdown-toggle" onClick={() => setIsTopicOpen(!isTopicOpen)}>
                  {selectedTopic || 'Selecciona un tema'}
                  <span className="dropdown-arrow">▼</span>
                </div>
                {isTopicOpen && (
                  <div className="dropdown-menu">
                    {topics.map(topic => (
                      <div
                        key={topic}
                        className="dropdown-item"
                        onClick={() => handleTopicSelect(topic)}
                      >
                        {topic}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <input type="hidden" name="topic" value={selectedTopic} />
            </div>
            <div className="form-group">
              <label>Mensaje</label>
              <textarea name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-submit">Enviar mensaje</button>
          </form>
        </section>
      </main>
    </div>
  );
}

// Este formulario envía correos a spotmet08@gmail.com usando EmailJS
export default ContactPage;
