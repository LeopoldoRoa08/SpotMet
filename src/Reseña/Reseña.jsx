import React from 'react';
import './Reseña.css';
import { useState } from 'react';

function Reseñas() {
  const reviews = [
    {
      id: 1,
      name: "Valeria Solorzano",
      program: "Ingeniería Química",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/4755aba7b6e3f9347e033c25f38251e084bd96de?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7",
      text: "Es una iniciativa interesante para aprovechar las instalaciones universitarias. Da versatilidad a los espacios. Una gran herramienta para conectar a los unimetanos.",
      stars: [
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/89a86d4a20b15795396b284de080da084b9edde0?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: true },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b52df8bbd80b10e94ee007789afd0622e2e5392a?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: false },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/89a86d4a20b15795396b284de080da084b9edde0?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: true },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b52df8bbd80b10e94ee007789afd0622e2e5392a?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: false },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b52df8bbd80b10e94ee007789afd0622e2e5392a?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: false }
      ]
    },
    {
      id: 2,
      name: "Maria Atilano",
      program: "Psicología",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef10643d17465e1aa59b748505afa46d9fb1c834?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7",
      text: "Una página completa, agil en la reserva de espacios de la universidad, interesante su diseño y descripción de todos los espacios, para tener una idea de los espacios y una presentación de los mismos.",
      stars: [
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f913ea4c1757a396a63a330b9bd0653c215e851?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: true },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f16d2886f1c27d8abb39df902bc540db728b0de5?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: false },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f913ea4c1757a396a63a330b9bd0653c215e851?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: true },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f16d2886f1c27d8abb39df902bc540db728b0de5?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: false },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d22509adbde85bd6e27d4de5b4db8a94e5529d72?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: false }
      ]
    },
    {
      id: 3,
      name: "Santiago Zambrano",
      program: "Ingeniería Civil",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e266b96584ec1de12fc0a51173f568a2e9d812f?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7",
      text: "Yo personalmente no estaba enterado de que se podían reservar las instalaciones, buena aplicación, útil para reservar eventos referentes a la carrera.",
      stars: [
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad8b0918f4e7394a14f315c166b80b907d134ed3?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: true },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/73cd7d90bc602a5c55427ad094f049a1866eebb7?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: false },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad8b0918f4e7394a14f315c166b80b907d134ed3?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: true },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ccd2c96fcc98b4ec2fe2466c9a7a0f952d31859?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: false },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad8b0918f4e7394a14f315c166b80b907d134ed3?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: true }
      ]
    },
    {
      id: 4,
      name: "Luis Torrealba",
      program: "Estudios Liberales",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/0a878c47c4acbd23b81621fbdf50701f9c59968f?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7",
      text: "En general me gustó mucho el diseño, es solida y combina bien con el estilo de la universidad",
      stars: [
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/73cd7d90bc602a5c55427ad094f049a1866eebb7?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: false },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/73cd7d90bc602a5c55427ad094f049a1866eebb7?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: false },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad8b0918f4e7394a14f315c166b80b907d134ed3?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: true },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/73cd7d90bc602a5c55427ad094f049a1866eebb7?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: false },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad8b0918f4e7394a14f315c166b80b907d134ed3?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: true }
      ]
    },
    {
      id: 5,
      name: "Daniel Rodrigues",
      program: "Ingeniería Electrica",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/cdc2b6652630c853f78f87e9412e7847f1525428?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7",
      text: "Pagina web eficiente y productiva. Tiene una interfaz simple e intuitiva que permite al personal de la universidad solicitar algún espacio con tiempo sin tener inconvenientes.",
      stars: [
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac63557295bbe77a5cc189649b5b0ad82fb1e81f?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: true },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac63557295bbe77a5cc189649b5b0ad82fb1e81f?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: true },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5be4d268409d6ea6c919f382c1a66b71b188ef8b?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: true },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb74ccde04076eab3afc224397f5b661ee92daf6?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: false },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3fa5edb876c11ca77776d74caff587e9fba23cfb?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: false }
      ]
    },
    {
      id: 6,
      name: "Aldebaran Campos",
      program: "Idiomas Modernos",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/a732f05c8ae6e9b621cb7a9ff8fa27f912f25f70?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7",
      text: "Es llamativa a la vista gracias a la paleta de colores, y dinámica por el cambio de videos para las diferentes funciones del servicio.",
      stars: [
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5be4d268409d6ea6c919f382c1a66b71b188ef8b?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: true },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac63557295bbe77a5cc189649b5b0ad82fb1e81f?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: true },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac63557295bbe77a5cc189649b5b0ad82fb1e81f?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: true },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb74ccde04076eab3afc224397f5b661ee92daf6?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: false },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c369c15973067cc618ab32cfc25caf62828bb50f?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7", filled: true }
      ]
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    program: '',
    review: '',
    rating: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Review submitted:', formData);
    alert('¡Gracias por tu reseña!');
    setFormData({
      name: '',
      program: '',
      review: '',
      rating: 0
    });
  };

  const ReviewCard = ({ review, compact = false }) => {
    return (
      <div className={`review-card ${compact ? 'compact' : ''}`}>
        <div className="review-header">
          <img src={review.avatar} alt={review.name} className="review-avatar" />
          <div className="review-user-info">
            <h3 className="review-name">{review.name}</h3>
            <p className="review-program">{review.program}</p>
          </div>
        </div>
        <div className="review-content">
          <p className="review-text">{review.text}</p>
          <div className="review-stars">
            {review.stars.map((star, index) => (
              <img 
                key={index}
                src={star.src} 
                alt={star.filled ? "Filled star" : "Empty star"} 
                className={`star ${star.filled ? 'filled' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const ReviewForm = () => {
    return (
      <div className="review-form-card">
        <h2 className="review-form-title">¡Compartenos tu opinión!</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="review-form-group">
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label className="review-form-label">Nombre:</label>
                <input
                  type="text"
                  className="review-form-input"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={{ flex: 1 }}>
                <label className="review-form-label">Carrera:</label>
                <input
                  type="text"
                  className="review-form-input"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="review-form-group">
            <label className="review-form-label">Reseña:</label>
            <textarea
              className="review-form-textarea"
              name="review"
              value={formData.review}
              onChange={handleChange}
              required
              placeholder="Escriba su reseña..."
            />
          </div>

          <div className="review-form-group">
            <label className="review-form-label">Calificación:</label>
            <div className="review-form-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`review-form-star ${star <= formData.rating ? 'filled' : ''}`}
                  onClick={() => handleRatingChange(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <button type="submit" className="review-form-submit">
            Enviar Reseña
          </button>
        </form>
      </div>
    );
  };

  return (
    <div className="reseñas-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/66edb4f0f5d8b12414fa1399fbbf064dce585597?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
          className="hero-background"
          alt="Background"
        />
        <h1 className="hero-title">¡Compartenos tu opinión!</h1>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <div className="reviews-columns-container">
          {/* Columna izquierda */}
          <div className="reviews-column left-column">
            <ReviewCard review={reviews[0]} />
            <ReviewCard review={reviews[2]} />
            <ReviewCard review={reviews[4]} />
          </div>
          
          {/* Columna derecha */}
          <div className="reviews-column right-column">
            <ReviewCard review={reviews[1]} />
            <ReviewCard review={reviews[3]} />
            <ReviewCard review={reviews[5]} />
          </div>
        </div>

        {/* Review Form Section */}
        <div className="form-section">
          <ReviewForm />
          <div className="home-link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c42ec600022b3fae885d2bbdd8394046eae346c4?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
              className="home-icon"
              alt="Home"
            />
            <div className="home-text">Inicio</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reseñas;