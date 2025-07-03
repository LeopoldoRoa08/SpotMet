import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./VerLaboratorios.css";

function VerLaboratorios() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="header">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bf96a450be474661dca0a642c458df2b0633b50?width=354"
          alt="Logo Universidad"
          className="logo"
        />
        <svg
          className="userIcon"
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.3611 23.3611C21.2196 23.3611 19.3865 22.5986 17.8615 21.0736C16.3366 19.5487 15.5741 17.7155 15.5741 15.5741C15.5741 13.4327 16.3366 11.5995 17.8615 10.0745C19.3865 8.54958 21.2196 7.78711 23.3611 7.78711C25.5025 7.78711 27.3357 8.54958 28.8606 10.0745C30.3856 11.5995 31.148 13.4327 31.148 15.5741C31.148 17.7155 30.3856 19.5487 28.8606 21.0736C27.3357 22.5986 25.5025 23.3611 23.3611 23.3611ZM7.78711 38.935V33.4841C7.78711 32.381 8.07101 31.367 8.63881 30.4423C9.20661 29.5176 9.96097 28.8119 10.9019 28.3253C12.9135 27.3194 14.9576 26.5651 17.0341 26.0622C19.1107 25.5593 21.2196 25.3078 23.3611 25.3078C25.5025 25.3078 27.6115 25.5593 29.688 26.0622C31.7645 26.5651 33.8086 27.3194 35.8202 28.3253C36.7611 28.8119 37.5155 29.5176 38.0833 30.4423C38.6511 31.367 38.935 32.381 38.935 33.4841V38.935H7.78711ZM11.6806 35.0415H35.0415V33.4841C35.0415 33.1272 34.9523 32.8028 34.7738 32.5108C34.5954 32.2187 34.3602 31.9916 34.0682 31.8294C32.3161 30.9534 30.5478 30.2963 28.7633 29.8583C26.9788 29.4203 25.178 29.2013 23.3611 29.2013C21.5441 29.2013 19.7434 29.4203 17.9588 29.8583C16.1743 30.2963 14.406 30.9534 12.654 31.8294C12.362 31.9916 12.1267 32.2187 11.9483 32.5108C11.7698 32.8028 11.6806 33.1272 11.6806 33.4841V35.0415ZM23.3611 19.4676C24.4318 19.4676 25.3484 19.0863 26.1108 18.3239C26.8733 17.5614 27.2545 16.6448 27.2545 15.5741C27.2545 14.5034 26.8733 13.5868 26.1108 12.8243C25.3484 12.0618 24.4318 11.6806 23.3611 11.6806C22.2904 11.6806 21.3738 12.0618 20.6113 12.8243C19.8488 13.5868 19.4676 14.5034 19.4676 15.5741C19.4676 16.6448 19.8488 17.5614 20.6113 18.3239C21.3738 19.0863 22.2904 19.4676 23.3611 19.4676Z"
            fill="#030027"
          />
        </svg>
        <svg
          className="menuIcon"
          width="46"
          height="53"
          viewBox="0 0 46 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.75 39.75V35.3333H40.25V39.75H5.75ZM5.75 28.7083V24.2917H40.25V28.7083H5.75ZM5.75 17.6667V13.25H40.25V17.6667H5.75Z"
            fill="#EE5D08"
          />
        </svg>
      </div>

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

      <div className="footer">
        <div className="footerText">
          <span>Copyright © 2025 - Spotmet | Síguenos: </span>
          <span className="bold-text">Instagram</span>
          <span> | </span>
          <span className="bold-text">Facebook</span>
        </div>
      </div>
    </div>
  );
}

export default VerLaboratorios;