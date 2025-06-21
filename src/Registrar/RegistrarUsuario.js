import React, { useState } from 'react';
import './RegistrarUsuario.css';
import { useNavigate } from 'react-router-dom';

export const RegistrarUsuario = function() {
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

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(function(prev) {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function validateForm() {
    const newErrors = {};
    
    if (!formData.nombre.trim()) newErrors.nombre = "Nombre es requerido";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Email inválido";
    if (formData.password.length < 6) newErrors.password = "Mínimo 6 caracteres";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Las contraseñas no coinciden";
    if (!/^[0-9]{6,10}$/.test(formData.cedula)) newErrors.cedula = "Cédula inválida";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (validateForm()) {
      // Simulación de llamada a API
      setTimeout(function() {
        console.log('Datos enviados:', formData);
        setIsSubmitting(false);
        alert('Registro exitoso!');
        navigate('/iniciar-sesion');
      }, 1500);
    } else {
      setIsSubmitting(false);
    }
  }

  return React.createElement(
    'div',
    { className: 'registrar-usuario' },
    React.createElement(
      'div',
      { className: 'main-content' },
      React.createElement(
        'div',
        { className: 'title' },
        'Crear cuenta'
      ),
      React.createElement(
        'form',
        { onSubmit: handleSubmit },
        React.createElement(
          'div',
          { className: 'content-wrapper' },
          React.createElement(
            'div',
            { className: 'form-section' },
            React.createElement(
              'div',
              { className: 'form-fields' },
              // Campo Nombre
              React.createElement('input', {
                name: 'nombre',
                className: 'input-field',
                placeholder: 'Ingrese su nombre',
                value: formData.nombre,
                onChange: handleChange
              }),
              errors.nombre && React.createElement(
                'span',
                { className: 'error-message' },
                errors.nombre
              ),
              // Campo Email
              React.createElement('input', {
                name: 'email',
                className: 'input-field',
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
              React.createElement('input', {
                type: 'password',
                name: 'password',
                className: 'input-field',
                placeholder: 'Ingrese su contraseña',
                value: formData.password,
                onChange: handleChange
              }),
              errors.password && React.createElement(
                'span',
                { className: 'error-message' },
                errors.password
              ),
              // Campo Confirmar Contraseña
              React.createElement('input', {
                type: 'password',
                name: 'confirmPassword',
                className: 'input-field',
                placeholder: 'Confirme su contraseña',
                value: formData.confirmPassword,
                onChange: handleChange
              }),
              errors.confirmPassword && React.createElement(
                'span',
                { className: 'error-message' },
                errors.confirmPassword
              ),
              // Campo Cédula
              React.createElement('input', {
                name: 'cedula',
                className: 'input-field',
                placeholder: 'Ingrese su cédula',
                value: formData.cedula,
                onChange: handleChange
              }),
              errors.cedula && React.createElement(
                'span',
                { className: 'error-message' },
                errors.cedula
              )
            )
          ),
          // Sección de imágenes (se mantiene igual)
          React.createElement(
            'div',
            { className: 'image-section' },
            React.createElement(
              'div',
              { className: 'image-container' },
              React.createElement(
                'div',
                { className: 'profile-image-wrapper' },
                React.createElement('img', {
                  src: 'https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/290b1935e660613fd0f7ecb9d3418574b2c83776?placeholderIfAbsent=true',
                  className: 'profile-image',
                  alt: 'Profile'
                })
              ),
              React.createElement(
                'div',
                { className: 'side-image-wrapper' },
                React.createElement('img', {
                  src: 'https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/09cce1e7a16f5862ca9c10cdaf4c3f63cb4902ed?placeholderIfAbsent=true',
                  className: 'side-image',
                  alt: 'Side image'
                })
              )
            )
          )
        ),
        // Botones
        React.createElement(
          'div',
          { className: 'buttons-section' },
          React.createElement(
            'button',
            { 
              className: 'register-button',
              type: 'submit',
              disabled: isSubmitting
            },
            isSubmitting ? 'Registrando...' : 'Registrarme'
          ),
          React.createElement(
            'button',
            { 
              className: 'login-button',
              type: 'button',
              onClick: function() { navigate('/iniciar-sesion'); }
            },
            'Ya tengo cuenta'
          )
        ),
        // Enlace a Inicio
        React.createElement(
          'div',
          { className: 'home-link' },
          React.createElement('img', {
            src: 'https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/c42ec600022b3fae885d2bbdd8394046eae346c4?placeholderIfAbsent=true',
            className: 'home-icon',
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
    )
  );
};

export default RegistrarUsuario;