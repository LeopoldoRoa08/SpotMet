import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./VerCanchas.css";
import cancha1 from "./ciudad-del-deporte.jpg";
import canchaMenu from "./Canchas.png";
import cancha2 from "./Selecciones-deportivas.jpg"

function VerCanchas() {
  const navigate = useNavigate();

  return (
    <div className="container">
      
      <div className="title">Reservar Espacio</div>
      <div className="heroSection">
        <div className="heroOverlay" />
        <img
          src= {cancha1}
          alt="Principal"
          className="heroImage"
        />
        <div className="heroText">Canchas</div>
      </div>

      <div className="contentSection">
        <div className="textBox orangeBox">
          <div className="textContent">
            La {" "}
            <span className="bold-text">Universidad Metropolitana</span>. reinauguró sus canchas de fútbol y rugby luego de haber permanecido en obras por varios meses como parte del proyecto del acondicionamiento de la {" "}
            <span className="bold-text">
              Ciudad Deportiva UNIMET
            </span>
            .
          </div>
        </div>
        <img
          src= {canchaMenu}
          alt="Interior auditorio"
          className="contentImage"
        />
      </div>

      <div className="contentSection">
        <img
          src= {cancha2}
          alt="Auditorios disponibles"
          className="contentImage"
        />
        <div className="textBox darkBox">
          <div className="textContent darkTextContent">
            <span> Se pueden usar para eventos de diferentes deportes como: </span>
            <span className="bold-text"> padel, tenis, voleibol, beisbol, futbol y pickleball, atletismo, rugby, baloncesto y kickinball.
            </span>
            <span >capacidad 10 personas</span>
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

export default VerCanchas;