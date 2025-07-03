import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./VerCentroMundoX.css";
import centroXMenu from "./Centrox1.jpeg";
import centro1X from "./Centro-Mundo-X.jpg";
import centro2X from "./Centrox2.jpeg";

function VerCentroMundoX() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="title">Reservar Espacio</div>

      <div className="heroSection">
        <div className="heroOverlay" />
        <img
          src={centroXMenu}
          alt="Centro Mundo X"
          className="heroImage"
        />
        <div className="heroText">Centro Mundo X</div>
      </div>

      <div className="contentSection">
        <div className="textBox orangeBox">
          <div className="textContent">
            <span className="bold-text">La Universidad Metropolitana (UNIMET)</span> está a la vanguardia de la innovación tecnológica en Venezuela con el Centro Mundo X, un espacio único en el país dedicado al desarrollo de gemelos digitales y experiencias inmersivas en el metaverso. Esta iniciativa posiciona a la UNIMET como líder en la transformación digital aplicada a la educación y la industria.
          </div>
        </div>
        <img
          src={centro1X}
          alt="Interior del Centro Mundo X"
          className="contentImage"
        />
      </div>

      <div className="contentSection">
        <img
          src={centro2X}
          alt="Tecnologías del Centro Mundo X"
          className="contentImage"
        />
    <div className="textBox darkBox">
      <div className="textContent">
            <span className="bold-text">El Centro Mundo X</span> facilita la simulación de procesos industriales, creación de modelos 3D y experimentación en entornos virtuales, reduciendo costos de ensayos físicos. Los estudiantes desarrollan habilidades en diseño digital, realidad aumentada y programación avanzada, ganando ventaja competitiva profesional. Capacidad: 50 personas.
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

export default VerCentroMundoX;