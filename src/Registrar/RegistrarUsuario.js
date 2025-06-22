
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
    
    // Validación de nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = "Nombre es requerido";
    }
    
    // Validación de email
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      newErrors.email = "Email inválido (debe contener @ y .)";
    }
    
    // Validación de contraseña
    if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }
    
    // Validación de confirmación de contraseña
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }
    
    // Validación de cédula (solo números, entre 6 y 10 dígitos)
    if (!/^\d{6,10}$/.test(formData.cedula)) {
      newErrors.cedula = "Cédula inválida (6-10 dígitos)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function saveToLocalStorage(userData) {
    // Obtener usuarios existentes o inicializar array vacío
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Verificar si el email ya está registrado
    const emailExists = users.some(user => user.email === userData.email);
    if (emailExists) {
      alert('Este email ya está registrado');
      return false;
    }
    
    // Verificar si la cédula ya está registrada
    const cedulaExists = users.some(user => user.cedula === userData.cedula);
    if (cedulaExists) {
      alert('Esta cédula ya está registrada');
      return false;
    }
    
    // Agregar nuevo usuario
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (validateForm()) {
      // Preparar datos para guardar (sin la confirmación de contraseña)
      const userToSave = {
        nombre: formData.nombre,
        email: formData.email,
        password: formData.password,
        cedula: formData.cedula
      };
      
      // Guardar en localStorage
      if (saveToLocalStorage(userToSave)) {
        // Simulación de llamada a API
        setTimeout(function() {
          console.log('Usuario registrado:', userToSave);
          setIsSubmitting(false);
          alert('Registro exitoso!');
          navigate('/iniciar-sesion');
        }, 1000);
      } else {
        setIsSubmitting(false);
      }
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
                className: errors.nombre ? 'input-field error' : 'input-field',
                placeholder: 'Ingrese su nombre',
                value: formData.nombre,
                onChange: handleChange
              }),
              errors.nombre && React.createElement(
                'div',
                { className: 'error-message', style: { color: 'red', fontSize: '0.8rem', marginTop: '-1.5rem', marginBottom: '1rem' } },
                errors.nombre
              ),
              // Campo Email
              React.createElement('input', {
                name: 'email',
                className: errors.email ? 'input-field error' : 'input-field',
                placeholder: 'Ingrese su Email',
                value: formData.email,
                onChange: handleChange
              }),
              errors.email && React.createElement(
                'div',
                { className: 'error-message', style: { color: 'red', fontSize: '0.8rem', marginTop: '-1.5rem', marginBottom: '1rem' } },
                errors.email
              ),
              // Campo Contraseña
              React.createElement('input', {
                type: 'password',
                name: 'password',
                className: errors.password ? 'input-field error' : 'input-field',
                placeholder: 'Ingrese su contraseña (mínimo 6 caracteres)',
                value: formData.password,
                onChange: handleChange
              }),
              errors.password && React.createElement(
                'div',
                { className: 'error-message', style: { color: 'red', fontSize: '0.8rem', marginTop: '-1.5rem', marginBottom: '1rem' } },
                errors.password
              ),
              // Campo Confirmar Contraseña
              React.createElement('input', {
                type: 'password',
                name: 'confirmPassword',
                className: errors.confirmPassword ? 'input-field error' : 'input-field',
                placeholder: 'Confirme su contraseña',
                value: formData.confirmPassword,
                onChange: handleChange
              }),
              errors.confirmPassword && React.createElement(
                'div',
                { className: 'error-message', style: { color: 'red', fontSize: '0.8rem', marginTop: '-1.5rem', marginBottom: '1rem' } },
                errors.confirmPassword
              ),
              // Campo Cédula
              React.createElement('input', {
                name: 'cedula',
                className: errors.cedula ? 'input-field error' : 'input-field',
                placeholder: 'Ingrese su cédula (6-10 dígitos)',
                value: formData.cedula,
                onChange: handleChange
              }),
              errors.cedula && React.createElement(
                'div',
                { className: 'error-message', style: { color: 'red', fontSize: '0.8rem', marginTop: '-1.5rem', marginBottom: '1rem' } },
                errors.cedula
              )
            )
          ),
          // Sección de imágenes
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