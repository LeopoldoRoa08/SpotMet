import React from 'react';
import './RegistrarUsuario.css';
import { Link } from "react-router";

export const RegistrarUsuario = (props) => {
  return (
    <div className="registrar-usuario">
      
      <div className="main-content">
        <div className="title">
          Crear cuenta
        </div>
        <div className="content-wrapper">
          <div className="form-section">
            <div className="form-fields">
              <input className="input-field" placeholder="Ingrese su nombre"></input>

              <input className="input-field" placeholder="Ingrese su Email"></input>

              <input type="password" className="input-field" placeholder="Ingrese su contraseña"></input>

              <input type="password" className="input-field" placeholder="Confirme su contraseña"></input>

              <input className="input-field" placeholder="Ingrese su cédula"></input>
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
          <button className="register-button">
            Registrarme
          </button>
          <button className="login-button">
            Ya tengo cuenta
          </button>
        </div>
        <div className="home-link">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/c42ec600022b3fae885d2bbdd8394046eae346c4?placeholderIfAbsent=true"
            className="home-icon"
            alt="Home"
          />
          <Link to="/" className="breadcrumb-text">
            Inicio
          </Link>
        </div>
      </div>

    </div>
  );
};

export default RegistrarUsuario;
