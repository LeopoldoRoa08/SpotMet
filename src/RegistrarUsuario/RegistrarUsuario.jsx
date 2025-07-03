import React, { useState } from 'react';
import './RegistrarUsuario.css';
import { useNavigate, Link } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';


export const RegistrarUsuario = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
    cedula: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nombre.trim()) newErrors.nombre = "Nombre es requerido";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Email inválido";
    if (formData.password.length < 6) newErrors.password = "Mínimo 6 caracteres";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Las contraseñas no coinciden";
    if (!/^\d+$/.test(formData.cedula)) newErrors.cedula = "Cédula debe contener solo números";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function handleSubmit(e){
    e.preventDefault();
    setIsSubmitting(true);
    
    if (validateForm()) {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });




    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="registrar-usuario">
      <div className="main-content">
        <div className="title">Crear cuenta</div>

          <form onSubmit={handleSubmit} className="content-wrapper"> 
          <div style={{display: "flex"}}>
          <div className="form-section">
            <div className="form-fields">
              <input
                name="nombre"
                className={`input-field ${errors.nombre ? 'error' : ''}`}
                placeholder="Ingrese su nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
              {errors.nombre && <span className="error-message">{errors.nombre}</span>}

              <input
                name="email"
                className={`input-field ${errors.email ? 'error' : ''}`}
                placeholder="Ingrese su Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}

              <div className={`password-field ${errors.password ? 'error' : ''}`}>
                <input
                  type="password"
                  name="password"
                  placeholder="Ingrese su contraseña"
                  value={formData.password}
                  onChange={handleChange}
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/c42ec600022b3fae885d2bbdd8394046eae346c4?placeholderIfAbsent=true"
                  className="password-icon"
                  alt="Password visibility"
                />
              </div>
              {errors.password && <span className="error-message">{errors.password}</span>}

              <div className={`password-field ${errors.confirmPassword ? 'error' : ''}`}>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirme su contraseña"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/c42ec600022b3fae885d2bbdd8394046eae346c4?placeholderIfAbsent=true"
                  className="password-icon"
                  alt="Password visibility"
                />
              </div>
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}

              <input
                name="cedula"
                className={`input-field ${errors.cedula ? 'error' : ''}`}
                placeholder="Ingrese su cédula"
                value={formData.cedula}
                onChange={handleChange}
              />
              {errors.cedula && <span className="error-message">{errors.cedula}</span>}
            </div>
          </div>
          
          <div className="image-section">
            <div className="image-container">
              <div className="profile-image-wrapper">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/290b1935e660613fd0f7ecb9d3418574b2c83776?placeholderIfAbsent=true"
                  className="profile-image"
                  alt="Profile"
                />
              </div>
              <div className="side-image-wrapper">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/09cce1e7a16f5862ca9c10cdaf4c3f63cb4902ed?placeholderIfAbsent=true"
                  className="side-image"
                  alt="Side image"
                />
              </div>
            </div>
          </div>
        </div>
          <div className="buttons-section">
            <button 
              type="submit" 
              className="register-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Registrando...' : 'Registrarme'}
            </button>
            
            <Link to="/Login" className="login-button">
              Ya tengo cuenta
            </Link>
          </div>
        </form>
        
        <div className="home-link">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/c42ec600022b3fae885d2bbdd8394046eae346c4?placeholderIfAbsent=true"
            className="home-icon"
            alt="Home"
          />
          <Link to="/" className="home-text">
            Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrarUsuario;