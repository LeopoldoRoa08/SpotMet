import React, { useState, useEffect } from 'react';
import './Reseña.css'; // Asegúrate de que esta ruta sea correcta
// Asegúrate de que estas importaciones de imagen sean correctas y las rutas sean válidas
import Idiomas from "./Aldebaran.jpeg";
import Psicologia from "./Camila.jpeg";
import IngElectrica from "./Daniel.jpg";
import Liberales from "./Luis.jpeg";
import IngCivil from "./Santiago.jpeg";
import IngQuimica from "./Valeria.jpg";

// Asegúrate de que tu firebase.js exporta db y storage correctamente
import { db } from '../firebase'; // La ruta a tu archivo firebase.js
import { collection, addDoc, getDocs, doc, deleteDoc, query, orderBy, Timestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function Resenas() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [carrera, setCarrera] = useState('');
  const [reseñaText, setReseñaText] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controlar el envío

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      setPreviewUrl('');
    }
  };

  const carreras = [
    "Ingeniería Química",
    "Ingeniería Civil",
    "Ingeniería Eléctrica",
    "Ingeniería Mecánica",
    "Ingeniería de Producción",
    "Ingeniería en Sistemas",
    "Matemáticas Industriales",
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

  const uploadImage = async (file) => {
    if (!file) {
      console.warn("No se proporcionó archivo para subir.");
      return null;
    }

    const storage = getStorage(); // Obtener la instancia de Storage
    // Crear un nombre de archivo único con timestamp para evitar conflictos
    const fileName = `${file.name.split('.')[0]}_${Date.now()}.${file.name.split('.').pop()}`;
    const storageRef = ref(storage, `review_images/${fileName}`);

    try {
      const snapshot = await uploadBytes(storageRef, file);
      const imageUrl = await getDownloadURL(snapshot.ref);
      return imageUrl;
    } catch (error) {
      console.error("Error al subir la imagen:", error);
      alert(`Hubo un error al subir la imagen: ${error.message}. Por favor, inténtalo de nuevo.`);
      return null;
    }
  };

  const handleSubmitReview = async () => {
    if (isSubmitting) return; // Prevenir doble envío

    if (!nombre || !apellido || !carrera || !reseñaText || rating === 0) {
      alert('Por favor, completa todos los campos y selecciona una calificación.');
      return;
    }

    setIsSubmitting(true); // Indicar que el envío está en curso

    let imageUrl = '';
    if (selectedFile) {
      imageUrl = await uploadImage(selectedFile);
      if (!imageUrl) {
        setIsSubmitting(false); // Resetear estado si falla la carga de imagen
        return; // Detener el envío si la imagen no se carga
      }
    }

    try {
      await addDoc(collection(db, 'reviews'), {
        nombre: nombre,
        apellido: apellido,
        carrera: carrera,
        reseña: reseñaText,
        rating: rating,
        timestamp: Timestamp.now(), // Usar Firebase Timestamp para la fecha del servidor
        imageUrl: imageUrl,
      });
      alert('Reseña enviada con éxito!');
      // Limpiar los campos del formulario
      setNombre('');
      setApellido('');
      setCarrera('');
      setReseñaText('');
      setRating(0);
      setSelectedFile(null);
      setPreviewUrl('');
      fetchReviews(); // Recargar reseñas para actualizar la lista
    } catch (e) {
      console.error('Error al añadir el documento: ', e);
      alert(`Hubo un error al enviar tu reseña: ${e.message || e}. Por favor, inténtalo de nuevo.`);
    } finally {
      setIsSubmitting(false); // Siempre resetear el estado de envío
    }
  };

  const fetchReviews = async () => {
    try {
      const reviewsCollectionRef = collection(db, 'reviews');
      const q = query(reviewsCollectionRef, orderBy('timestamp', 'desc'));
      const reviewSnapshot = await getDocs(q);
      const reviewList = reviewSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setReviews(reviewList);
    } catch (error) {
      console.error("Error al cargar las reseñas:", error);
      // Opcional: alert("Hubo un error al cargar las reseñas.");
    }
  };

  const handleDeleteReview = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta reseña?')) {
      try {
        await deleteDoc(doc(db, 'reviews', id));
        alert('Reseña eliminada con éxito!');
        fetchReviews(); // Recargar reseñas después de eliminar
      } catch (e) {
        console.error('Error al eliminar el documento: ', e);
        alert(`Hubo un error al eliminar la reseña: ${e.message || e}.`);
      }
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []); // Se ejecuta una vez al montar el componente

  return (
    <div className="resenas-container">
      <div className="hero-section">
        <h1>¡Compártenos tu opinión!</h1>
      </div>

      <div className="reviews-grid">
        {/* RESEÑAS ESTÁTICAS */}
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

        {/* RESEÑAS DINÁMICAS DE FIREBASE */}
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            {/* Botón de eliminar reseña */}
            <button className="delete-review-button" onClick={() => handleDeleteReview(review.id)}>
              &#x22EF; {/* Carácter de elipsis horizontal */}
            </button>
            <div className="review-header">
              {review.imageUrl ? (
                <img src={review.imageUrl} alt={`${review.nombre} ${review.apellido} profile`} className="reviewer-image" />
              ) : (
                // Placeholder para la imagen de perfil si no hay URL
                <div className="photo-placeholder reviewer-image" style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden' }}>
                  <svg viewBox="0 0 24 24" style={{ fill: '#ccc' }}>
                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13Z" />
                  </svg>
                </div>
              )}
              <div>
                <span className="reviewer-name">{review.nombre} {review.apellido}</span>
                <span className="reviewer-program">. {review.carrera}</span>
              </div>
            </div>
            <p className="review-text">{review.reseña}</p>
            <div className="star-rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="star" style={{ color: i < review.rating ? '#FFD700' : '#ccc' }}>★</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* SECCIÓN DEL FORMULARIO DE RESEÑA */}
      <div className="review-form-section">
        <h2>Compártenos tus ideas y experiencias aquí</h2>
        <div className="user-photo-section">
          <div className="photo-container">
            {previewUrl ? (
              // Si hay previewUrl, muestra la imagen subida
              <img src={previewUrl} alt="User preview" className="user-photo" />
            ) : (
              // Si no hay previewUrl, muestra el placeholder del icono
              <div className="photo-placeholder">
                <svg viewBox="0 0 24 24">
                  <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13Z" />
                </svg>
              </div>
            )}
            {/* NO hay condición aquí: el botón "Subir foto" siempre se renderiza */}
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
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="form-group highlighted-field">
            <label htmlFor="apellido">Apellido</label>
            <input
              type="text"
              id="apellido"
              className="form-input"
              placeholder="Tu apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group highlighted-field">
          <label htmlFor="carrera">Carrera</label>
          <select
            id="carrera"
            className="form-input"
            value={carrera}
            onChange={(e) => setCarrera(e.target.value)}
          >
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
            value={reseñaText}
            onChange={(e) => setReseñaText(e.target.value)}
          />
        </div>

        <div className="form-star-rating">
          <p>Calificación:</p>
          <div className="stars-container">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="star"
                style={{ cursor: 'pointer', color: i < rating ? '#FFD700' : '#ccc' }}
                onClick={() => setRating(i + 1)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <button className="submit-button" onClick={handleSubmitReview} disabled={isSubmitting}>
          {isSubmitting ? 'ENVIANDO...' : 'ENVIAR RESEÑA'}
        </button>
      </div>
    </div>
  );
}

export default Resenas;