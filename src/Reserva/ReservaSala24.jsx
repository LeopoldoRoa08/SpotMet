import React, { useState, useEffect } from 'react'; // Añadir useEffect
import { useNavigate } from 'react-router-dom';
import './ReservaAuditorio.css'; // Usar el mismo CSS
import sala24 from "./sala-24-horas-3.png";

function ReservaSala24() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    eventName: '',
    date: '',
    startTime: '12:00',
    endTime: '14:00'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const dateContainers = document.querySelectorAll('.form-input-with-icon');
    dateContainers.forEach(container => {
      container.addEventListener('click', (e) => {
        if (e.target.className.includes('input-icon')) {
          const dateInput = container.querySelector('.date-input');
          if (dateInput) dateInput.showPicker();
        }
      });
    });

    return () => {
      dateContainers.forEach(container => {
        container.removeEventListener('click', () => {});
      });
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.eventName.trim()) {
      newErrors.eventName = 'El nombre del evento es requerido';
    }
    
    if (!formData.date) {
      newErrors.date = 'La fecha es requerida';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.date = 'No puedes seleccionar una fecha pasada';
      }
    }
    
    if (!formData.startTime || !formData.endTime) {
      newErrors.time = 'El horario es requerido';
    } else if (formData.startTime >= formData.endTime) {
      newErrors.time = 'La hora de fin debe ser después de la hora de inicio';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert('¡Reserva realizada con éxito!');
      navigate('/confirmacion');
    } catch (error) {
      console.error('Error al realizar la reserva:', error);
      alert('Ocurrió un error al procesar tu reserva. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'dd/mm/aaaa';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES');
  };

  const formatTime = (timeString) => {
    if (!timeString) return 'Seleccione hora';
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours, 10);
    return `${hour > 12 ? hour - 12 : hour}:${minutes} ${hour >= 12 ? 'pm' : 'am'}`;
  };

  return (
    <div className="reserva-container">
      <div className="reservas-title">Reservas</div>

      <div className="main-content">
        <div className="space-info-section">
          <div className="space-info-grid">
            <div className="space-image-column">
              <div className="space-image-container">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c147f2907140d8bc3c1dc3f32cb293ef4135c554?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
                  className="space-background-image"
                  alt="Fondo del espacio"
                />
                <img
                  src={sala24}
                  className="space-main-image"
                  alt="Laboratorio Experimental del Metaverso"
                />
              </div>
            </div>
            <div className="space-details-column">
              <div className="space-details">
                <div className="space-type">Tipo de espacio: Sala 24 Horas</div>
                <div className="space-name">
                  Sala de Estudio 24 Horas
                </div>
                <div className="center-name">Centro de Estudios</div>
              </div>
            </div>
          </div>
        </div>

        <div className="booking-section">
          <form onSubmit={handleSubmit} className="booking-grid">
            <div className="form-column">
              <div className="booking-form">
                <div className="form-group">
                  <label htmlFor="eventName" className="form-label">
                    Nombre del Evento
                  </label>
                  <input
                    type="text"
                    id="eventName"
                    name="eventName"
                    className={`form-input ${errors.eventName ? 'error' : ''}`}
                    placeholder="Ingrese nombre del evento"
                    value={formData.eventName}
                    onChange={handleChange}
                  />
                  {errors.eventName && <span className="error-message">{errors.eventName}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group-half">
                    <label htmlFor="date" className="form-label">
                      Fecha
                    </label>
                    <div className={`form-input-with-icon ${errors.date ? 'error' : ''}`}>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        className="date-input"
                        value={formData.date}
                        onChange={handleChange}
                      />
                      <span>{formatDate(formData.date)}</span>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a976e2166d0b21aae34377f21e72cf73c382b9e?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
                        className="input-icon"
                        alt="Calendario"
                      />
                    </div>
                    {errors.date && <span className="error-message">{errors.date}</span>}
                  </div>

                  <div className="form-group-half">
                    <label className="form-label">Horario</label>
                    <div className={`form-input-with-icon ${errors.time ? 'error' : ''}`}>
                      <div>
                        <select
                          name="startTime"
                          value={formData.startTime}
                          onChange={handleChange}
                          className="time-select"
                        >
                          {Array.from({ length: 24 }, (_, i) => {
                            const hour = i < 10 ? `0${i}` : i;
                            return [`${hour}:00`, `${hour}:30`];
                          }).flat().map(time => (
                            <option key={time} value={time}>{formatTime(time)}</option>
                          ))}
                        </select>
                        {' - '}
                        <select
                          name="endTime"
                          value={formData.endTime}
                          onChange={handleChange}
                          className="time-select"
                        >
                          {Array.from({ length: 24 }, (_, i) => {
                            const hour = i < 10 ? `0${i}` : i;
                            return [`${hour}:00`, `${hour}:30`];
                          }).flat().map(time => (
                            <option key={time} value={time}>{formatTime(time)}</option>
                          ))}
                        </select>
                      </div>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a099937fa736467f13e9bd7ae8ebb62a64320cc8?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
                        className="input-icon-time"
                        alt="Reloj"
                      />
                    </div>
                    {errors.time && <span className="error-message">{errors.time}</span>}
                  </div>
                </div>
              </div>
            </div>

            <div className="checkout-column">
              <div className="checkout-container">
                <div className="checkout-card">
                  <div className="checkout-content">
                    <h3 className="checkout-title">Checkout</h3>
                    
                    <div className="checkout-row">
                      <div className="checkout-items-row">
                        <div className="checkout-item">
                          <label>Subtotal</label>
                          <span>$120.00</span>
                        </div>
                        
                        <div className="checkout-item">
                          <label>Impuestos</label>
                          <span>$5.00</span>
                        </div>
                        
                        <div className="checkout-item checkout-total">
                          <label>Total</label>
                          <span>$125.00</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="payment-methods-container">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/15e6cf2524259e92b18ba9a88c89e5e5d9e12908?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
                        className="payment-methods"
                        alt="PayPal"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="pay-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Procesando...' : 'Pagar'}
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="breadcrumb" onClick={() => navigate('/')}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c42ec600022b3fae885d2bbdd8394046eae346c4?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
            className="breadcrumb-icon"
            alt="Inicio"
          />
          <div className="breadcrumb-text">Inicio</div>
        </div>
      </div>
    </div>
  );
}

export default ReservaSala24;