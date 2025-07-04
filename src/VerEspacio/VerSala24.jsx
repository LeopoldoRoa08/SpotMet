import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./VerSala24.css";
import SalaMenu from "./sala24horas.png";
import Sala1 from "./Sala1.jpg";
import entrada from "./Entrada.jpg";

function VerSala24() {
  const navigate = useNavigate();

  return (
    <div className="container">
      

      <div className="title">Reservar Espacio</div>

      <div className="heroSection">
        <div className="heroOverlay" />
        <img
          src= {SalaMenu}
          alt="Auditorio"
          className="heroImage"
        />
        <div className="heroText">Sala 24 horas</div>
      </div>

      <div className="contentSection">
        <div className="textBox orangeBox">
          <div className="textContent">
            Permanece abierta las{" "}
            <span className="bold-text">24 horas</span>. 
            <span>del día, y ofrece a los estudiantes la posibilidad de su uso para las actividades académicas, y realizar trabajos en grupo con mayor informalidad</span>
            .
          </div>
        </div>
        <img
          src= {Sala1}
          alt="Interior auditorio"
          className="contentImage"
        />
      </div>

      <div className="contentSection">
        <img
          src= {entrada}
          alt="Auditorios disponibles"
          className="contentImage"
        />
        <div className="textBox darkBox">
          <div className="textContent darkTextContent">
            <span> Este espacio está destinado para el </span>
            <span className="bold-text">estudio y la lectura.</span>
            <span> Dentro de la sala es importante usar un tono de voz adecuado y cuidar el mobiliario.{" "}</span>
            <span>Capacidad: 30 personas</span>
              
            
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

export default VerSala24;