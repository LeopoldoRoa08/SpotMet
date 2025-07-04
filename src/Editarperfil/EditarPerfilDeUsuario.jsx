import React from "react";
import "./EditarPerfilDeUsuario.css";

const EditarPerfilDeUsuario = () => {
  return (
    <div className="editar-perfil-de">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="text-wrapper">Editar Perfil</div>

          <div className="overlap-group">
            {/* Header Group */}
            
              
              
             

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
                      {/* Simplified dot pattern - just showing a few dots as example */}
                      <path d="M0 0H4V4H0V0Z" fill="#E5E7EB" />
                      <path d="M20 0H24V4H20V0Z" fill="#E5E7EB" />
                      <path d="M40 0H44V4H40V0Z" fill="#E5E7EB" />
                      {/* More dots would be here in the full pattern */}
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
                <div className="text-wrapper-2">Ingrese su nombre</div>
              </div>
              <div className="text-wrapper-3">Nombre:</div>

              {/* Last Name Field */}
              <div className="overlap-2">
                <div className="text-wrapper-2">Ingrese su apellido</div>
              </div>
              <div className="text-wrapper-6">Apellido:</div>

              {/* Career Field */}
              <div className="overlap-3">
                <div className="text-wrapper-2">Ingrese su Carrera</div>
              </div>
              <div className="text-wrapper-7">Carrera:</div>

              {/* Phone Field */}
              <div className="overlap-4">
                <div className="text-wrapper-4">Ingrese su telefono</div>
              </div>
              <div className="text-wrapper-5">Telefono:</div>

              {/* Password Field */}
              <div className="overlap-5">
                <img
                  className="vector"
                  alt="Vector"
                  src="https://c.animaapp.com/6Q6bSWum/img/vector.svg"
                />
                <div className="text-wrapper-4">Ingrese su contraseña</div>
              </div>
              <div className="text-wrapper-8">Contraseña:</div>

              {/* Confirm Password Field */}
              <div className="overlap-6">
                <img
                  className="vector"
                  alt="Vector"
                  src="https://c.animaapp.com/6Q6bSWum/img/vector-1.svg"
                />
                <div className="text-wrapper-4">Confirme su contraseña</div>
              </div>
              <div className="text-wrapper-9">Confirmar Contraseña:</div>
            </div>

            {/* Profile Picture Section */}
            <div className="ellipse" />
            <img
              className="img"
              alt="Ellipse"
              src="https://c.animaapp.com/6Q6bSWum/img/ellipse-9@2x.png"
            />
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
              
                <path
                  d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z"
                  fill="#EE5D08"
                />
            
            </div>
            <div className="vector-wrapper">
             
            </div>
          </div>

          {/* Save Button */}
          <div className="overlap-7">
            <div className="rectangle-3" />
            <div className="text-wrapper-12">Guardar</div>
          </div>

          {/* Home Link */}
          <div className="text-wrapper-13">Inicio</div>
          <img
            className="frame-2"
            alt="Frame"
            src="https://c.animaapp.com/6Q6bSWum/img/frame-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default EditarPerfilDeUsuario;
