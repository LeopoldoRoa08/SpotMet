import React from 'react';
import './IniciarSesion.css';
import { Link } from "react-router";

export const IniciarSesion = (props) => {
  return (
    <div className="iniciar-sesion">
      

      <div className="main-content">
        <div className="content-wrapper">
          <div className="columns-container">
            <div className="left-column">
              <form className="login-form">
                <div className="login-title">
                  Iniciar sesión
                </div>

                <div className="email-label">
                  Email
                </div>
                  <input className="email-input" placeholder="Ingrese su Email"></input>

                <div className="password-label">
                  Contraseña
                </div>
                  <input type="password" className="email-input" placeholder="Ingrese su contraseña"></input>
                <div className="form-actions">
                  <div className="remember-me">
                    <input type="checkbox" className="checkbox"></input>
                    <div>Recuerdame</div>
                  </div>

                  <button type="submit" className="login">
                    Iniciar Sesión
                  </button>
                  <button className="google-login">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/a02f5535bcc86dd6ea0bd466eeb088b2a6616536?placeholderIfAbsent=true"
                      className="google-icon"
                      alt="Google"
                    />
                    <div className="google-text">
                      Continuar con Google
                    </div>
                  </button>

                  <button className="facebook-login">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/a5e7f6b937aca6736cf4c1919e74c558adf94849?placeholderIfAbsent=true"
                      className="facebook-icon"
                      alt="Facebook"
                    />
                    <div className="facebook-text">
                      Continuar con Facebook
                    </div>
                  </button>

                  <button className="register-button">
                    Regístrate
                  </button>
                </div>
              </form>
            </div>

            <div className="right-column">
              <div className="images-container">
                <div className="image-columns">
                  <div className="left-image-column">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/75942fadafa9bff1dde4eaf08c3f9e4ad18e3da4?placeholderIfAbsent=true"
                      className="main-image"
                      alt="Main"
                    />
                  </div>
                  <div className="right-image-column">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/444546aacb55b04f3da8247c85de09595f14596a?placeholderIfAbsent=true"
                      className="side-image"
                      alt="Side"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="breadcrumb">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/c42ec600022b3fae885d2bbdd8394046eae346c4?placeholderIfAbsent=true"
            className="breadcrumb-icon"
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

export default IniciarSesion;
