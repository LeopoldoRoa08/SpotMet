import React, { useState } from 'react';
import './Reseña.css';
import Idiomas from "./Aldebaran.jpeg";
import Psicologia from "./Camila.jpeg";
import IngElectrica from "./Daniel.jpg";
import Liberales from "./Luis.jpeg";
import IngCivil from "./Santiago.jpeg";
import IngQuimica from "./Valeria.jpg";


function Resenas() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const carreras = [
    "Ingeniería Química",
    "Ingeniería Civil",
    "Ingeniería Eléctrica",
    "Ingeniería Mecanica",
    "Ingeniería de Produción",
    "Ingenieria en Sistemas",
    "Matematicas Industriales",
    "Educación",
    "Comunicación Social",
    "Psicología",
    "Estudios Liberales",
    "Idiomas Modernos",
    "Administración",
    "Economía",
    "Contaduría",
    "Derecho",
    "Estudios Internacionales",
  ];

  // Sample profile images (in a real app, these would come from user data)


  return (
    <div className="resenas-container">
      <div className="hero-section">
        <h1>¡Compartenos tu opinión!</h1>
      </div>

      <div className="reviews-grid">
        {/* Review 1 */}
        <div className="review-card">
          <div className="review-header">
            <img src={IngQuimica} alt="Profile" className="reviewer-image" />
            <div>
              <span className="reviewer-name">Valeria Solorzano</span>
              <span className="reviewer-program">. Ingeniería Química</span>
            </div>
          </div>
          <p className="review-text">
            Es una iniciativa interesante para aprovechar las instalaciones universitarias. Da versatilidad a los espacios. Una gran herramienta para conectar a los unimetanos.
          </p>
          <div className="star-rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="star">★</span>
            ))}
          </div>
        </div>

        {/* Review 2 */}
        <div className="review-card">
          <div className="review-header">
            <img src={IngCivil} alt="Profile" className="reviewer-image" />
            <div>
              <span className="reviewer-name">Santiago Zambrano</span>
              <span className="reviewer-program">. Ingeniería Civil</span>
            </div>
          </div>
          <p className="review-text">
            Yo personalmente no estaba enterado de que se podían reservar las instalaciones, buena aplicación, útil para reservar eventos referentes a la carrera.
          </p>
          <div className="star-rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="star">★</span>
            ))}
          </div>
        </div>

        {/* Review 3 */}
        <div className="review-card">
          <div className="review-header">
            <img src={Psicologia} alt="Profile" className="reviewer-image" />
            <div>
              <span className="reviewer-name">María Atilano</span>
              <span className="reviewer-program">. Psicología</span>
            </div>
          </div>
          <p className="review-text">
            Una página completa, ágil en la reserva de espacios de la universidad, interesante su diseño y descripción de todos los espacios, para tener una idea de los espacios y una presentación de los mismos.
          </p>
          <div className="star-rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="star">★</span>
            ))}
          </div>
        </div>

        {/* Review 4 */}
        <div className="review-card">
          <div className="review-header">
            <img src={Liberales} alt="Profile" className="reviewer-image" />
            <div>
              <span className="reviewer-name">Luis Torrealba</span>
              <span className="reviewer-program">. Estudios Liberales</span>
            </div>
          </div>
          <p className="review-text">
            En general me gustó mucho el diseño, es sólida y continua bien con el estilo de la universidad.
          </p>
          <div className="star-rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="star">★</span>
            ))}
          </div>
        </div>

        {/* Review 5 */}
        <div className="review-card">
          <div className="review-header">
            <img src={IngElectrica} alt="Profile" className="reviewer-image" />
            <div>
              <span className="reviewer-name">Daniel Rodrigues</span>
              <span className="reviewer-program">. Ingeniería Eléctrica</span>
            </div>
          </div>
          <p className="review-text">
            Página web eficiente y productiva. Tiene una interfaz simple e intuitiva que permite al personal de la universidad solicitar algún espacio con tiempo sin tener inconvenientes.
          </p>
          <div className="star-rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="star">★</span>
            ))}
          </div>
        </div>

        {/* Review 6 */}
        <div className="review-card">
          <div className="review-header">
            <img src={Idiomas} alt="Profile" className="reviewer-image" />
            <div>
              <span className="reviewer-name">Aldebaran Campos</span>
              <span className="reviewer-program">. Idiomas Modernos</span>
            </div>
          </div>
          <p className="review-text">
            Es llamativa a la vista gracias a la paleta de colores, y dinámica por el cambio de vídeos para las diferentes funciones del servicio.
          </p>
          <div className="star-rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="star">★</span>
            ))}
          </div>
        </div>
      </div>

      <div className="review-form-section">
        <h2>Compartenos tus ideas y experiencias aquí</h2>
        <div className="form-container">
          <div className="user-photo-section">
            <div className="photo-container">
              {previewUrl ? (
                <img src={previewUrl} alt="User preview" className="user-photo" />
              ) : (
                <div className="photo-placeholder">
                  <svg viewBox="0 0 24 24">
                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13Z" />
                  </svg>
                </div>
              )}
              <label htmlFor="photo-upload" className="upload-button">
                Subir foto
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </label>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group highlighted-field">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                className="form-input"
                placeholder="Tu nombre"
              />
            </div>
            <div className="form-group highlighted-field">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                id="apellido"
                className="form-input"
                placeholder="Tu apellido"
              />
            </div>
          </div>

          <div className="form-group highlighted-field">
            <label htmlFor="carrera">Carrera</label>
            <select id="carrera" className="form-input">
              <option value="">Selecciona tu carrera</option>
              {carreras.map((carrera, index) => (
                <option key={index} value={carrera}>{carrera}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="reseña">Tu reseña</label>
            <textarea
              id="reseña"
              className="review-input"
              placeholder="Escribe tu reseña aquí..."
            />
          </div>

          <div className="form-star-rating">
            <p>Calificación:</p>
            <div className="stars-container">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
          </div>

          <button className="submit-button">ENVIAR RESEÑA</button>
        </div>
      </div>
    </div>
  );
}

export default Resenas;