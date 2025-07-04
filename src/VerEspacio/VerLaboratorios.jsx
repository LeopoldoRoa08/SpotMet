import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./VerLaboratorios.css";
import Lab from "./Lab1.jpg";
import Labmenu from "./LabMenu.jpg"
import LabDos from "./Lab2.png"

function VerLaboratorios() {
  const navigate = useNavigate();

  return (
    <div className="container">

      <div className="title">Reservar espacio</div>

      <div className="heroSection">
        <div className="heroOverlay" />
        <img
          src= {Labmenu}
          alt="Auditorio"
          className="heroImage"
        />
        <div className="heroText">Laboratorios</div>
      </div>

      <div className="contentSection">
        <div className="textBox orangeBox">
          <div className="textContent">
            <span className="bold-text"> La Universidad Metropolitana</span>. tiene laboratorios que  son utilizados para la investigación y enseñanza en sus programas de pregrado y posgrado. {" "} 
            Estos laboratorios pueden incluir áreas como{" "}
            <span className="bold-text">
            biología, química, física,
            </span>
            <span>entre otras, dependiendo de los programas ofrecidos por la universidad.</span>
            .
          </div>
        </div>
        <img
          src= {Lab}
          alt="Interior auditorio"
          className="contentImage"
        />
      </div>

      <div className="contentSection">
        <img
          src= {LabDos}
          alt="Auditorios disponibles"
          className="contentImage"
        />
        <div className="textBox darkBox">
          <div className="textContent darkTextContent">
            <span>La Universidad Metropolina cuenta con laboratorios en las áreas de:</span>
            <span className="bold-text">
              <span>Ciencias Básicas e Ingeniería (Capacidad: 18 personas)</span>
              <span>Tecnología y Sistemas (Capacidad: 30 personas)</span>
              <span>Ingeniería Civil y Arquitectura (Capacidad: 18 personas)</span>
            </span>
          </div>
        </div>
      </div>

      <div className="reserveButton">
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

export default VerLaboratorios;