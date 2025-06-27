import React from "react";
import "./VerEspacio.css";
import { useNavigate } from "react-router-dom";

function VerEspaciosGeneral() {
  const navigate = useNavigate();
  return (
    <div className="ver-espacios-general">
      <div className="main-container">

        <div className="hero-section">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/00ce76b7794718690246f8df74b9ae25e0fdda28?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
            className="hero-background"
            alt="Hero background"
          />
          <div className="hero-text">Nuestros espacios</div>
        </div>

        <div className="page-title">
          Ver espacios
          <br />
        </div>
      </div>

      <div className="search-section">
        <div className="search-container">
          <div className="filter-dropdown">
            Tipo de Espacio
          </div>
          <div className="search-input-container">
            <div className="search-input">
              <div className="search-content">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3aceaede4e66243e8151004dd6efc680090b2955?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
                  className="search-icon"
                  alt="Search"
                />
                <div className="search-text">
                  Buscar espacio...
                </div>
              </div>
            </div>
          </div>
          <div className="search-input-container search-overlay-1">
            <div className="search-input">
              <div className="search-content">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3aceaede4e66243e8151004dd6efc680090b2955?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
                  className="search-icon"
                  alt="Search"
                />
                <div className="search-text">
                  Buscar espacio...
                </div>
              </div>
            </div>
          </div>
          <div className="search-input-container search-overlay-2">
            <div className="search-input">
              <div className="search-content">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3aceaede4e66243e8151004dd6efc680090b2955?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
                  className="search-icon"
                  alt="Search"
                />
                <div className="search-text">
                  Buscar espacio...
                </div>
              </div>
            </div>
          </div>
          <div className="location-dropdown">
            Ubicación
          </div>
        </div>
      </div>

      <div className="spaces-section">
        <div className="spaces-container">
          <div className="spaces-content">
            <div className="space-row">
              <div className="space-column">
                <div className="space-card laboratorios" onClick={() => navigate('/reserva')}
              style={{ cursor: "pointer" }}>
                  <div className="space-header">
                    Laboratorios
                  </div>
                  <div className="space-content">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/72f07f7be764b07b452b8ada39c29e312c4d29b9?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
                      className="space-image"
                      alt="Laboratorios"
                    />
                    <div className="space-description">
                      Utilizados para la investigación y enseñanza en sus
                      programas de pregrado y posgrado. Estos
                      laboratorios pueden incluir áreas como biología, química,
                      física, entre otros programas ofrecidos por la universidad
                    </div>
                    <div className="space-info-link">
                      <div className="info-text">
                        Más información
                      </div>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b88866faa238272c20677bf8799714f022763ad?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
                        className="info-arrow"
                        alt="Arrow"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-column">
                <img
                onClick={() => navigate('/reserva')}
              style={{ cursor: "pointer" }}
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7953f16dcf08766a54382e3b6ad0b0900e2b0887?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
                  className="space-side-image"
                  alt="Space"
                />
              </div>
            </div>

            <div className="space-row">
              <div className="space-column">
                <div className="space-card centro-mundo" onClick={() => navigate('/reserva')}
              style={{ cursor: "pointer" }}>
                  <div className="space-header">
                    Centro Mundo X
                  </div>
                  <div className="space-content">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e942914f6bc192db563729efd6911b9fc8086f3?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
                      className="space-image"
                      alt="Centro Mundo X"
                    />
                    <div className="space-description">
                      Espacio único dedicado al desarrollo de gemelos digitales
                      y experiencias inmersivas en el metaverso. Esta iniciativa
                      posiciona a la UNIMET como líder en la transformación
                      digital aplicada a la educación y la industria.{" "}
                    </div>
                    <div className="space-info-link">
                      <div className="info-text">
                        Más información
                      </div>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b88866faa238272c20677bf8799714f022763ad?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
                        className="info-arrow"
                        alt="Arrow"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-column">
                <img
                onClick={() => navigate('/reserva')}
              style={{ cursor: "pointer" }}
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd84e0247529802ca8fc76c20ec4cbcb7e97e6d0?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
                  className="space-side-image"
                  alt="Space"
                />
              </div>
            </div>

            <div className="space-row">
              <div className="space-column">
                <div className="space-card canchas" onClick={() => navigate('/reserva')}
              style={{ cursor: "pointer" }}>
                  <div className="space-header">
                    Canchas
                    <br />
                  </div>
                  <div className="space-content">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/534f8c68f8421de81f1bfb064689cd70448347a5?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
                      className="space-image"
                      alt="Canchas"
                    />
                    <div className="space-description">
                      Canchas de fútbol y rugby como parte del proyecto del
                      acondicionamiento de la Ciudad Deportiva UNIMET. En este
                      espacio además de ser acogedor, posibilita tener un
                      ambiente de confort y aire libre.
                    </div>
                    <div className="space-info-link">
                      <div className="info-text">
                        Más información
                      </div>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b88866faa238272c20677bf8799714f022763ad?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
                        className="info-arrow"
                        alt="Arrow"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-column">
                <img
                onClick={() => navigate('/reserva')}
              style={{ cursor: "pointer" }}
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f81ff0c92741836608fac39941da2f9c04d3f01b?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
                  className="space-side-image"
                  alt="Space"
                />
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
        </div>
      </div>
    </div>
  );
}

export default VerEspaciosGeneral;
