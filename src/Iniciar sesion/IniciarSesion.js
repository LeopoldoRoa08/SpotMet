import React, { useState } from 'react';
import './IniciarSesion.css';
import { useNavigate } from 'react-router-dom';

export const IniciarSesion = function() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData(function(prev) {
      return {
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      };
    });
  }

  function validateForm() {
    const newErrors = {};
    
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Email inválido";
    if (formData.password.length < 6) newErrors.password = "Mínimo 6 caracteres";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (validateForm()) {
      // Simulación de llamada a API
      setTimeout(function() {
        console.log('Datos de login:', formData);
        setIsSubmitting(false);
        alert('Inicio de sesión exitoso!');
        navigate('/');
      }, 1500);
    } else {
      setIsSubmitting(false);
    }
  }

  function handleGoogleLogin() {
    console.log('Iniciando sesión con Google');
    // Aquí iría la lógica para autenticación con Google
  }

  return React.createElement(
    'div',
    { className: 'iniciar-sesion' },
    React.createElement(
      'div',
      { className: 'main-content' },
      React.createElement(
        'div',
        { className: 'content-wrapper' },
        React.createElement(
          'div',
          { className: 'columns-container' },
          // Columna izquierda - Formulario
          React.createElement(
            'div',
            { className: 'left-column' },
            React.createElement(
              'form',
              { 
                className: 'login-form',
                onSubmit: handleSubmit 
              },
              React.createElement(
                'div',
                { className: 'login-title' },
                'Iniciar sesión'
              ),
              // Campo Email
              React.createElement(
                'div',
                { className: 'email-label' },
                'Email'
              ),
              React.createElement('input', {
                name: 'email',
                className: 'email-input',
                placeholder: 'Ingrese su Email',
                value: formData.email,
                onChange: handleChange
              }),
              errors.email && React.createElement(
                'span',
                { className: 'error-message' },
                errors.email
              ),
              // Campo Contraseña
              React.createElement(
                'div',
                { className: 'password-label' },
                'Contraseña'
              ),
              React.createElement('input', {
                type: 'password',
                name: 'password',
                className: 'email-input',
                placeholder: 'Ingrese su contraseña',
                value: formData.password,
                onChange: handleChange
              }),
              errors.password && React.createElement(
                'span',
                { className: 'error-message' },
                errors.password
              ),
              // Acciones del formulario
              React.createElement(
                'div',
                { className: 'form-actions' },
                // Recordar usuario
                React.createElement(
                  'div',
                  { className: 'remember-me' },
                  React.createElement('input', {
                    type: 'checkbox',
                    name: 'rememberMe',
                    className: 'checkbox',
                    checked: formData.rememberMe,
                    onChange: handleChange
                  }),
                  React.createElement(
                    'div',
                    null,
                    'Recuérdame'
                  )
                ),
                // Botón de login
                React.createElement(
                  'button',
                  { 
                    type: 'submit',
                    className: 'login',
                    disabled: isSubmitting
                  },
                  isSubmitting ? 'Iniciando sesión...' : 'Iniciar Sesión'
                ),
                // Botón Google
                React.createElement(
                  'button',
                  { 
                    type: 'button',
                    className: 'google-login',
                    onClick: handleGoogleLogin
                  },
                  React.createElement('img', {
                    src: 'https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/a02f5535bcc86dd6ea0bd466eeb088b2a6616536?placeholderIfAbsent=true',
                    className: 'google-icon',
                    alt: 'Google'
                  }),
                  React.createElement(
                    'div',
                    { className: 'google-text' },
                    'Continuar con Google'
                  )
                ),
                // Botón de registro
                React.createElement(
                  'button',
                  { 
                    type: 'button',
                    className: 'register-button',
                    onClick: () => navigate('/registrar-usuario')
                  },
                  'Regístrate'
                )
              )
            )
          ),
          // Columna derecha - Imágenes
          React.createElement(
            'div',
            { className: 'right-column' },
            React.createElement(
              'div',
              { className: 'images-container' },
              React.createElement(
                'div',
                { className: 'image-columns' },
                React.createElement(
                  'div',
                  { className: 'left-image-column' },
                  React.createElement('img', {
                    src: 'https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/75942fadafa9bff1dde4eaf08c3f9e4ad18e3da4?placeholderIfAbsent=true',
                    className: 'main-image',
                    alt: 'Main'
                  })
                ),
                React.createElement(
                  'div',
                  { className: 'right-image-column' },
                  React.createElement('img', {
                    src: 'https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/444546aacb55b04f3da8247c85de09595f14596a?placeholderIfAbsent=true',
                    className: 'side-image',
                    alt: 'Side'
                  })
                )
              )
            )
          )
        )
      ),
      // Breadcrumb
      React.createElement(
        'div',
        { className: 'breadcrumb' },
        React.createElement('img', {
          src: 'https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/c42ec600022b3fae885d2bbdd8394046eae346c4?placeholderIfAbsent=true',
          className: 'breadcrumb-icon',
          alt: 'Home'
        }),
        React.createElement(
          'a',
          { 
            href: '/',
            className: 'breadcrumb-text',
            onClick: function(e) {
              e.preventDefault();
              navigate('/');
            }
          },
          'Inicio'
        )
      )
    )
  );
};

export default IniciarSesion;