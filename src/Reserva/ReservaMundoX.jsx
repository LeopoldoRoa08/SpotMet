import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReservaMundoX.css';
import mundox from './Centro-Mundo-X.jpg'; // Asegúrate de que la ruta sea correcta
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function ReservaMundoX() {
  const navigate = useNavigate();
  const dateInputRef = useRef(null); // Crear una ref para el input de fecha

  const [formData, setFormData] = useState({
    eventName: '',
    date: '', // La fecha será una cadena 'YYYY-MM-DD' del input
    startTime: '12:00',
    endTime: '14:00'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Función para manejar el cambio de inputs y selects
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

  // Función para abrir el calendario nativo al hacer clic en el contenedor
  const handleDateClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker(); // showPicker() es el método estándar para abrir el calendario
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
      today.setHours(0, 0, 0, 0); // Reset time for comparison

      if (isNaN(selectedDate.getTime())) { // Check for invalid date
        newErrors.date = 'Fecha inválida seleccionada';
      } else if (selectedDate < today) {
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
      const uid = localStorage.getItem("uid");
      if (!uid) {
        alert("Debes iniciar sesión para hacer una reserva.");
        navigate("/login");
        return;
      }

      const reservaData = {
        userId: uid,
        eventName: formData.eventName,
        date: formData.date,
        startTime: formData.startTime,
        endTime: formData.endTime,
        spaceType: "Laboratorio Experimental",
        spaceName: "Mundo X",
        timestamp: serverTimestamp()
      };

      await addDoc(collection(db, "reservas"), reservaData);

      alert('¡Reserva realizada con éxito!');
      navigate('/pago'); // **** CAMBIO REALIZADO AQUÍ: /pago en lugar de /pago-correcto ****

    } catch (error) {
      console.error('Error al realizar la reserva:', error);
      alert('Ocurrió un error al procesar tu reserva. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Función para formatear la fecha para mostrar en el span
  const formatDate = (dateString) => {
    if (!dateString) return 'dd/mm/aaaa';
    const date = new Date(dateString + 'T00:00:00'); // Añade T00:00:00 para evitar problemas de zona horaria
    if (isNaN(date.getTime())) return 'dd/mm/aaaa'; // Manejar fechas inválidas
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${day}/${month}/${year}`;
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
                  src={mundox}
                  className="space-main-image"
                  alt="Laboratorio Experimental del Metaverso"
                />
              </div>
            </div>
            <div className="space-details-column">
              <div className="space-details">
                <div className="space-type">Tipo de espacio: Laboratorio</div>
                <div className="space-name">
                  Laboratorio Experimental 
                </div>
                <div className="center-name">Centro Mundo X</div>
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
                    <div
                      className={`form-input-with-icon ${errors.date ? 'error' : ''}`}
                      onClick={handleDateClick} // Nuevo onClick para abrir el calendario
                    >
                      {/* El span muestra la fecha formateada */}
                      <span>{formatDate(formData.date)}</span>
                      {/* El icono de calendario */}
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a976e2166d0b21aae34377f21e72cf73c382b9e?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
                        className="input-icon"
                        alt="Calendario"
                      />
                      {/* El input type="date" real, ahora oculto pero funcional */}
                      <input
                        type="date"
                        id="date"
                        name="date"
                        className="date-input" // Clase para ocultar y posicionar con CSS
                        value={formData.date}
                        onChange={handleChange}
                        ref={dateInputRef} // Asignar la ref al input
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

        {/* **** Flecha de inicio / Breadcrumb - Confirmado que está presente **** */}
        <div className="breadcrumb" onClick={() => navigate('/')}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c42ec600022b3fae885d2bbdd8394046eae346c4?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
            className="input-icon"
            alt="Inicio"
          />
          <div className="breadcrumb-text">Inicio</div>
        </div>
      </div>
    </div>
  );
}

export default ReservaMundoX;

