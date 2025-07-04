import React, { useState } from 'react';
import './IniciarSesion.css';
import { useNavigate, Link } from 'react-router-dom';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';  // Adjust the path to your Firebase config file
import { signInWithPopup } from 'firebase/auth';


const IniciarSesion = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Email inválido";
    if (formData.password.length < 6) newErrors.password = "Mínimo 6 caracteres";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (validateForm()) {

        signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/")
            console.log(user);
            localStorage.setItem("user", user.email);
        })
        .catch((error) => {
            alert("ERROR: Cuenta invalida")
            setIsSubmitting(false);
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
      
    } else {
      setIsSubmitting(false);
    }
  };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function handleGoogleLogin(){
    try {
      const data = await signInWithPopup(auth, googleProvider);
      alert('Signed in successfully with Google');
      navigate("/")
      console.log(data.user);
      localStorage.setItem("user", data.user.email);
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
    return
  }

  return (
    <div className="iniciar-sesion">
      <div className="main-content">
        <div className="content-wrapper">
          <div className="columns-container">
            <div className="left-column">
              <form onSubmit={handleSubmit} className="login-form">
                <div className="login-title">Iniciar sesión</div>
                
                <div className="email-label">Email</div>
                <input
                  name="email"
                  className={`email-input ${errors.email ? 'error' : ''}`}
                  placeholder="Ingrese su Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}

                <div className="password-label">Contraseña</div>
                <div className="password-input-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className={`password-input ${errors.password ? 'error' : ''}`}
                    placeholder="Ingrese su contraseña"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <span 
                    className="password-toggle" 
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </span>
                </div>
                {errors.password && <span className="error-message">{errors.password}</span>}

                <div className="form-actions">
                  <div className="remember-me">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      className="checkbox"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                    />
                    <div>Recuérdame</div>
                  </div>

                  <button 
                    type="submit" 
                    className="login"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                  </button>

                  <button 
                    type="button" 
                    className="google-login"
                    onClick={()=>handleGoogleLogin()}
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/a02f5535bcc86dd6ea0bd466eeb088b2a6616536?placeholderIfAbsent=true"
                      className="google-icon"
                      alt="Google"
                    />
                    <div className="google-text">Continuar con Google</div>
                  </button>

                  <div className="register-link">
                    <Link to="/register" className="register-button">
                      Regístrate
                    </Link>
                  </div>
                </div>
              </form>
            </div>

            <div className="right-column">
              <div className="images-container">
                <div className="image-columns">
                  <div className="left-image-column">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/290b1935e660613fd0f7ecb9d3418574b2c83776?placeholderIfAbsent=true"
                      className="main-image"
                      alt="Main"
                    />
                  </div>
                  <div className="right-image-column">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/09cce1e7a16f5862ca9c10cdaf4c3f63cb4902ed?placeholderIfAbsent=true"
                      className="side-image"
                      alt="Side"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;