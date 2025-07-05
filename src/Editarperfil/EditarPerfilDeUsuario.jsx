
import React, { useState } from 'react';
import './EditarPerfilDeUsuario.css';

const EditarPerfilDeUsuario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    carrera: '',
    telefono: '',
    contraseña: '',
    confirmarContraseña: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="editar-perfil">
      <div className="decor-right">
        <div className="orange-gradient"></div>
        <div className="dot-pattern"></div>
      </div>

      <div className="form-box">
        <h1 className="title">Editar Perfil</h1>

        <div className="content">
          <div className="left">
            <div className="form-grid">
              <div className="form-field">
                <label>Nombre:</label>
                <input
                  type="text"
                  placeholder="Ingrese su nombre"
                  value={formData.nombre}
                  onChange={e => handleInputChange('nombre', e.target.value)}
                />
              </div>
              <div className="form-field">
                <label>Contraseña:</label>
                <div className="password-container">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Ingrese su contraseña"
                    value={formData.contraseña}
                    onChange={e => handleInputChange('contraseña', e.target.value)}
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="toggle-btn">👁</button>
                </div>
              </div>
              <div className="form-field">
                <label>Apellido:</label>
                <input
                  type="text"
                  placeholder="Ingrese su apellido"
                  value={formData.apellido}
                  onChange={e => handleInputChange('apellido', e.target.value)}
                />
              </div>
              <div className="form-field">
                <label>Confirmar Contraseña:</label>
                <div className="password-container">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirme su contraseña"
                    value={formData.confirmarContraseña}
                    onChange={e => handleInputChange('confirmarContraseña', e.target.value)}
                  />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="toggle-btn">👁</button>
                </div>
              </div>
              <div className="form-field">
                <label>Carrera:</label>
                <input
                  type="text"
                  placeholder="Ingrese su Carrera"
                  value={formData.carrera}
                  onChange={e => handleInputChange('carrera', e.target.value)}
                />
              </div>
              <div className="form-field">
                <label>Teléfono:</label>
                <input
                  type="tel"
                  placeholder="Ingrese su telefono"
                  value={formData.telefono}
                  onChange={e => handleInputChange('telefono', e.target.value)}
                />
              </div>
            </div>

            <button className="save-btn">Guardar</button>
            <div className="back-text">← Inicio</div>
          </div>

          <div className="right">
            <div className="profile-pic" />
            <span className="profile-label">Añadir Foto de Perfil</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarPerfilDeUsuario;
