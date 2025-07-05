import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./VerAuditorio.css";

function VerAuditorio() {
  const navigate = useNavigate();

  return (
    <div className="container">

      <div className="title">Reservar Espacio</div>

      <div className="heroSection">
        <div className="heroOverlay" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb3e46da9152839e94708920dc57adb85f6e6637?width=2504"
          alt="Auditorio"
          className="heroImage"
        />
        <div className="heroText">Auditorios</div>
      </div>

      <div className="contentSection">
        <div className="textBox orangeBox">
          <div className="textContent">
            Es uno de los mayores atractivos que posee la{" "}
            <span className="bold-text">Universidad Metropolitana</span>. Se
            trata de un amplio y diverso conjunto de áreas y edificaciones
            dispuestas a lo largo y ancho de su campus. En ellos tienen lugar
            múltiples actividades destinadas al{" "}
            <span className="bold-text">
              fomento y disfrute de la cultura, la ciencia, la recreación y el
              esparcimiento
            </span>
            .
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0043a4ba48ffa6f80c128c5a8b9593195286c31?width=938"
          alt="Interior auditorio"
          className="contentImage"
        />
      </div>

      <div className="contentSection">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0df4b4b2418859e012d2b78b8eb5445db6a8f9c?width=938"
          alt="Auditorios disponibles"
          className="contentImage"
        />
        <div className="textBox darkBox">
          <div className="textContent darkTextContent">
            <span>5 auditorios con capacidad entre </span>
            <span className="bold-text">120 y 180 personas</span>
            <span>:</span>
            <br />
            <br />
            <span className="bold-text">
              <span>Manoa</span>
              <br />
              <span>Francesca Pensieri</span>
              <br />
              <span>Polar</span>
              <br />
              <span>Julio Sosa Rodríguez</span>
              <br />
              <span>Ana Teresa Arismendi</span>
            </span>
          </div>
        </div>
      </div>

      <div className="reserveButton" onClick={() => navigate("/auditorio")}>
        <div className="reserveButtonInner">¡Reserva Ya!</div>
      </div>

      <div className="backNavigation" onClick={() => navigate("/")}>
        <svg
          className="backArrow"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.825 11L20 11V13L7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11Z"
            fill="#EA3323"
          />
        </svg>
        <div className="backText">Inicio</div>
      </div>


    </div>
  );
}

export default VerAuditorio;