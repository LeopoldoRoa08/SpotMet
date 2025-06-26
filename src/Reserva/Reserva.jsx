import React from "react";
import "./Reserva.css";

function Reserva() {
  return (
    <div className="reserva-container">
      <div className="header-section">
        <div className="header-content">
          <div className="logo-section">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c38026be22641ba7b03c300f6c4f682a61fcc744?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
              className="logo-primary"
              alt="Logo"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a002b7b916d204e74cf7852b9b208d16b62e7999?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
              className="logo-secondary"
              alt="Logo"
            />
          </div>
          <div className="nav-icons">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2244eee61c86ad5995a8c588ef6e4612733ca15c?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
              className="nav-icon-1"
              alt="Navigation"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c20ecf9abcc8418328b9b565d312d57c7c4cabd5?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
              className="nav-icon-2"
              alt="Navigation"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d88aab2b1b666849b92aba3f0d8946b35a76cb1?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
              className="nav-icon-3"
              alt="Navigation"
            />
          </div>
        </div>
      </div>

      <div className="reservas-title">
        Reservas
      </div>
<div className="main-content">
        <div className="space-info-section">
          <div className="space-info-grid">
            <div className="space-image-column">
              <div className="space-image-container">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c147f2907140d8bc3c1dc3f32cb293ef4135c554?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
                  className="space-background-image"
                  alt="Background"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ca7b8776fe739b75ec7a884761348ebe9983c8a?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
                  className="space-main-image"
                  alt="Space"
                />
              </div>
            </div>
            <div className="space-details-column">
              <div className="space-details">
                <div className="space-type">
                  Tipo de espacio: Laboratorio
                </div>
                <div className="space-name">
                  Laboratorio Experimental
                  <br />
                  del Metaverso
                </div>
                               <div className="center-name">
                  Centro Mundo X
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="booking-section">
          <div className="booking-grid">
            <div className="form-column">
              <div className="booking-form">
                <div className="form-group">
                  <div className="form-label">
                    Nombre del Evento
                  </div>
                  <div className="form-input">
                    Ingrese nombre del evento
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group-half">
                    <div className="form-label">
                      Fecha
                    </div>
                    <div className="form-input-with-icon">
                      <div>01/01/2025</div>
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a976e2166d0b21aae34377f21e72cf73c382b9e?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
                        className="input-icon"
                        alt="Calendar"
                      />
                    </div>
                  </div>
                  <div className="form-group-half">
                    <div className="form-label">
                      Horario
                    </div>
                    <div className="form-input-with-icon">
                      <div>12:00 pm - 02:00 pm</div>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a099937fa736467f13e9bd7ae8ebb62a64320cc8?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
                        className="input-icon-time"
                        alt="Clock"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
                       <div className="checkout-column">
              <div className="checkout-container">
                <div className="checkout-card">
                  <div className="checkout-content">
                    <div className="checkout-row">
                      <div className="checkout-labels">
                        <div className="checkout-title">
                          Checkout
                        </div>
                        <div className="checkout-item">
                          Subtotal
                        </div>
                        <div className="checkout-item">
                          Impuestos
                        </div>
                        <div className="checkout-total-label">
                          Total
                        </div>
                      </div>
                      <div className="checkout-values">
                        <div className="checkout-value">
                          $120.00
                        </div>
                        <div className="checkout-value">
                          $5.00
                        </div>
                        <div className="checkout-total-value">
                          $125.00
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/15e6cf2524259e92b18ba9a88c89e5e5d9e12908?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
                      className="payment-methods"
                      alt="Payment methods"
                    />
                  </div>
                </div>
                <div className="pay-button">
                  Pagar
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="breadcrumb">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c42ec600022b3fae885d2bbdd8394046eae346c4?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
            className="breadcrumb-icon"
            alt="Home"
          />
          <div className="breadcrumb-text">
            Inicio
          </div>
        </div>
      </div>
      <div className="footer">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b708494abc0c92a344e20f877db113f79b8c86d?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
          className="footer-background"
          alt="Footer background"
        />
        <div className="footer-content">
          Copyright © 2025 - Spotmet | Síguenos:{" "}
          <span style={{fontWeight: 700}}>Instagram</span> |{" "}
          <span style={{fontWeight: 700}}>Facebook</span>
        </div>
      </div>
    </div>
  );
}

export default Reserva;