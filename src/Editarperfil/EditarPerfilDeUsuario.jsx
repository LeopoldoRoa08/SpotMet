import React from "react";
import "./EditarPerfilDeUsuario.css";

const EditarPerfilDeUsuario = ({
  formData,
  handleChange,
  handleImageChange,
  handleSubmit,
  previewImage,
  errors,
  isLoading,
  successMessage
}) => {
  return (
    <div className="editar-perfil-de">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="text-wrapper">Editar Perfil</div>

          <div className="overlap-group">
            {/* Background with Dot Pattern */}
            <div className="background">
              <div className="div">
                <div className="plate" />
                <div className="shared-dot-pattern">
                  <svg
                    fill="none"
                    height="326"
                    viewBox="0 0 404 326"
                    width="404"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_585_120)">
                      <path d="M0 0H4V4H0V0Z" fill="#E5E7EB" />
                      <path d="M20 0H24V4H20V0Z" fill="#E5E7EB" />
                      <path d="M40 0H44V4H40V0Z" fill="#E5E7EB" />
                    </g>
                    <defs>
                      <clipPath id="clip0_585_120">
                        <rect fill="white" height="325.957" width="404" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Form Fields Group */}
            <div className="group-2">
              {/* Name Field */}
              <div className="div-wrapper">
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ingrese su nombre"
                  className="form-input"
                />
                {errors.nombre && <span className="error-message">{errors.nombre}</span>}
              </div>
              <div className="text-wrapper-3">Nombre:</div>

              {/* Last Name Field */}
              <div className="overlap-2">
                <input
                  type="text"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  placeholder="Ingrese su apellido"
                  className="form-input"
                />
                {errors.apellido && <span className="error-message">{errors.apellido}</span>}
              </div>
              <div className="text-wrapper-6">Apellido:</div>

              {/* Career Field */}
              <div className="overlap-3">
                <input
                  type="text"
                  name="carrera"
                  value={formData.carrera}
                  onChange={handleChange}
                  placeholder="Ingrese su Carrera"
                  className="form-input"
                />
                {errors.carrera && <span className="error-message">{errors.carrera}</span>}
              </div>
              <div className="text-wrapper-7">Carrera:</div>

              {/* Phone Field */}
              <div className="overlap-4">
                <input
                  type="text"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Ingrese su telefono"
                  className="form-input"
                />
                {errors.telefono && <span className="error-message">{errors.telefono}</span>}
              </div>
              <div className="text-wrapper-5">Telefono:</div>

              {/* Password Field */}
              <div className="overlap-5">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Ingrese su contraseña"
                  className="form-input"
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
              <div className="text-wrapper-8">Contraseña:</div>

              {/* Confirm Password Field */}
              <div className="overlap-6">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirme su contraseña"
                  className="form-input"
                />
                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
              </div>
              <div className="text-wrapper-9">Confirmar Contraseña:</div>
            </div>

            {/* Profile Picture Section */}
            <div className="ellipse" onClick={() => document.getElementById('profileImageInput').click()}>
              <img
                className="img"
                alt="Profile"
                src={previewImage}
              />
              <input
                id="profileImageInput"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
            </div>
            <div className="text-wrapper-10">Añadir Foto de Perfil</div>

            {/* Footer Section */}
            <img
              className="rectangle"
              alt="Rectangle"
              src="https://c.animaapp.com/6Q6bSWum/img/rectangle-67.svg"
            />
            <p className="copyright">
              <span className="span">
                Copyright © 2025 - Spotmet | Síguenos:{" "}
              </span>
              <span className="text-wrapper-11">Instagram</span>
              <span className="span"> | </span>
              <span className="text-wrapper-11">Facebook</span>
            </p>

            {/* Menu and Vector Icons */}
            <div className="menu-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="#EE5D08"/>
              </svg>
            </div>
          </div>

          {/* Save Button */}
          <div className="overlap-7" onClick={handleSubmit}>
            <div className="rectangle-3" />
            <div className="text-wrapper-12">
              {isLoading ? "Guardando..." : "Guardar"}
            </div>
          </div>

          {/* Home Link */}
          <div className="text-wrapper-13">Inicio</div>
          <img
            className="frame-2"
            alt="Frame"
            src="https://c.animaapp.com/6Q6bSWum/img/frame-1.svg"
          />

          {/* Success/Error Message */}
          {successMessage && (
            <div className="global-message success">
              {successMessage}
            </div>
          )}
          {errors.general && (
            <div className="global-message error">
              {errors.general}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditarPerfilDeUsuario;
