
import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./VerAulas.css";
import A2 from "./Salon.png";
import Salon1 from "./Pdu.jpg";
import Salon2 from "./Salon2.jpg";

function VerAulas() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="title">Reservar Espacio</div>
      <div className="heroSection">
        <div className="heroOverlay" />
        <img
          src = {A2}
          alt="Auditorio"
          className="heroImage"
        />
        <div className="heroText">Aulas</div>
      </div>

      <div className="contentSection">
        <div className="textBox orangeBox">
          <div className="textContent">
            Son{" "}
            <span className="bold-text">Espacios acondicionados</span> con mobiliario básico, superficie de proyección/escritura e iluminación adecuada, diseñado para instrucción grupal, reuniones o talleres, disponible por un periodo determinado a cambio de una tarifa. {" "}.
          </div>
        </div>
        <img
          src= {Salon1}
          alt="Interior auditorio"
          className="contentImage"
        />
      </div>

      <div className="contentSection">
        <img
          src= {Salon2}
          alt="Auditorios disponibles"
          className="contentImage"
        />
        <div className="textBox darkBox">
          <div className="textContent darkTextContent">
            <span> Su usos van desde talleres y cursos, reuniones, presentaciones, seminarios, eventos de networking, mentorias, actividades de divulgación, preparadurias y espacio de trabajo colaborativo. {" "} <span className="bold-text">Capacidad: 40 personas</span> 
            </span>
            
          </div>
        </div>
      </div>

      <div className="reserveButton" onClick={() => navigate("/salon")}>
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

export default VerAulas;