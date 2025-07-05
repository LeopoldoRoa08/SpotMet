import React, { useState } from "react";
import "./VerEspaciosGeneral.css";

// Componente Arrow6
const Arrow6 = ({ className }) => {
  return (
    <svg
      className={`arrow-6 ${className}`}
      fill="none"
      height="28"
      viewBox="0 0 39 28"
      width="39"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3 14C14.88 14 29.95 14 36 14M36 14L25.3929 2.5M36 14L25.3929 25.5"
        stroke="#030027"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
    </svg>
  );
};

// Componente Search
const Search = ({ opacity = "0.5", className }) => {
  return (
    <svg
      className={`search ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10ZM13.594 16.0082C12.5434 16.6379 11.314 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.8276 16.2996 13.4916 15.1526 14.7383L19.2071 18.7929C19.5976 19.1834 19.5976 19.8166 19.2071 20.2071C18.8166 20.5976 18.1834 20.5976 17.7929 20.2071L13.594 16.0082Z"
        fill="black"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10ZM13.594 16.0082C12.5434 16.6379 11.314 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.8276 16.2996 13.4916 15.1526 14.7383L19.2071 18.7929C19.5976 19.1834 19.5976 19.8166 19.2071 20.2071C18.8166 20.5976 18.1834 20.5976 17.7929 20.2071L13.594 16.0082Z"
        fill="#2A59FE"
        fillOpacity="0.3"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10ZM13.594 16.0082C12.5434 16.6379 11.314 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.8276 16.2996 13.4916 15.1526 14.7383L19.2071 18.7929C19.5976 19.1834 19.5976 19.8166 19.2071 20.2071C18.8166 20.5976 18.1834 20.5976 17.7929 20.2071L13.594 16.0082Z"
        fill="white"
        fillOpacity={opacity}
        fillRule="evenodd"
      />
    </svg>
  );
};

// Componente Menu2
const Menu2 = ({ color = "#EE5D08", className }) => {
  return (
    <svg
      className={`menu-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z"
        fill={color}
      />
    </svg>
  );
};

// Componente TypeBasicWrapper
const TypeBasicWrapper = ({ type, className, text = "Search", onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  return (
    <div className={`type-basic-wrapper ${className}`}>
      <div className="frame">
        <Search className="search-1" opacity="0.5" />
        <input
          type="text"
          className="text-wrapper"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={text}
          style={{
            background: "transparent",
            border: "none",
            outline: "none",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};

// Componente EspacioCard
const EspacioCard = ({
  titulo,
  descripcion,
  imagen,
  onHover,
  onClick,
  isHovered,
}) => {
  return (
    <div
      className={`group ${isHovered ? "hovered-card" : ""}`}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={onClick}
      style={{
        cursor: "pointer",
        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
        transition: "transform 0.3s ease",
        position: "relative",
        marginBottom: "40px",
      }}
    >
      <div className="overlap-group">
        <div className="rectangle" />
        <div className="rectangle-2" />
        <div className="card-go-to-info">
          <div className="text-wrapper-3">Más información</div>
          <Arrow6 className="arrow" />
        </div>
        <p className="p">{descripcion}</p>
        <div className="text-wrapper-4">{titulo}</div>
        <img 
          className="sala" 
          alt={titulo} 
          src={imagen} 
          style={{ 
            height: "250px",
            objectFit: "cover",
            width: "90%",
            margin: "0 auto",
            display: "block",
            borderRadius: "10px"
          }} 
        />
      </div>
    </div>
  );
};

// Componente principal
export const VerEspaciosGeneral = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState(null);

  const espacios = [
    {
      id: 1,
      titulo: "Sala 24 horas",
      descripcion:
        "Permanece abierta las 24 horas del día, y ofrece a los estudiantes la posibilidad de su uso para las actividades académicas, y realizar trabajos en grupo con mayor informalidad.",
      imagen: "https://c.animaapp.com/vqVWvgRh/img/sala-24-3-1@2x.png",
      tipo: "sala",
      ubicacion: "Edificio Principal",
    },
    {
      id: 2,
      titulo: "Auditorios",
      descripcion:
        "Área que tiene lugar múltiples actividades destinadas al fomento y disfrute de la cultura, la ciencia, la recreación y el esparcimiento.",
      imagen: "https://c.animaapp.com/vqVWvgRh/img/lidera-6-2-1@2x.png",
      tipo: "auditorio",
      ubicacion: "Edificio Central",
    },
    {
      id: 3,
      titulo: "Salones",
      descripcion:
        "Espacios acondicionados con mobiliario básico, superficie de proyección/escritura e iluminación adecuada, diseñado para instrucción grupal, reuniones o talleres.",
      imagen:
        "https://c.animaapp.com/vqVWvgRh/img/whatsapp-image-2025-05-13-at-21-58-46-1bfeff77-1-1@2x.png",
      tipo: "salon",
      ubicacion: "Edificio Norte",
    },
    {
      id: 4,
      titulo: "Laboratorios",
      descripcion:
        "Para la investigación y resultados en sus programas de pregrado y posgrado. Estos laboratorios pueden incluir áreas como biología, plantas, líneas entre otras programas ofrecidos por la universidad.",
      imagen: "https://i.ibb.co/b54pkbTB/Lab.jpg",
      tipo: "laboratorio",
      ubicacion: "Edificio Científico",
    },
    {
      id: 5,
      titulo: "Centro Mundo X",
      descripcion:
        "Espacio único dedicado al desarrollo de gemelos digitales y experiencias inmersivas en el metaverso. Esta iniciativa posiciona a la UNIMET como líder en la transformación digital aplicada a la educación y la industria. ",
      imagen: "https://i.ibb.co/QjcSsLVM/image.png",
      tipo: "centro",
      ubicacion: "Edificio Innovación",
    },
    {
      id: 6,
      titulo: "Canchas",
      descripcion:
        "Canchas de fútbol y rugby como parte del proyecto del acondicionamiento de la Ciudad Deportiva UNIMET. En este espacio además de ser acogedor, posibilita tener un ambiente de confort y aire libre.",
      imagen: "https://i.ibb.co/YBP5hHrn/cancha.jpg",
      tipo: "cancha",
      ubicacion: "Zona Deportiva",
    },
  ];

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const handleCardClick = (espacio) => {
    setSelectedSpace(espacio);
    setShowModal(true);
  };

  const filteredEspacios = espacios.filter((espacio) => {
    const matchesFilter = filter === "all" || espacio.tipo === filter;
    const matchesSearch =
      searchTerm === "" ||
      espacio.titulo.toLowerCase().includes(searchTerm) ||
      espacio.descripcion.toLowerCase().includes(searchTerm);
    return matchesFilter && matchesSearch;
  });

  const renderFilters = () => {
    const filters = [
      { label: "Todos", value: "all" },
      { label: "Salas", value: "sala" },
      { label: "Auditorios", value: "auditorio" },
      { label: "Salones", value: "salon" },
      { label: "Laboratorios", value: "laboratorio" },
      { label: "Canchas", value: "cancha" },
      { label: "Centros", value: "centro" }
    ];

    return (
      <div style={{ 
        display: "flex", 
        flexWrap: "wrap",
        gap: "10px",
        position: "absolute",
        top: "750px",
        left: "250px",
        width: "1000px",
        justifyContent: "center"
      }}>
        {filters.map((f) => (
          <div 
            key={f.value}
            className="overlap-9"
            onClick={() => setFilter(f.value)}
            style={{
              backgroundColor: filter === f.value ? "#2A59FE" : "#e7e7e7",
              color: filter === f.value ? "white" : "#736f6f",
              width: "auto",
              padding: "0 20px",
              minWidth: "120px",
              textAlign: "center"
            }}
          >
            <div className="text-wrapper-13">{f.label}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="ver-espacios-general" data-model-id="276:37">
      <div className="div" style={{ 
        height: "auto", 
        paddingBottom: "150px",
        minHeight: "3000px" // Asegura suficiente espacio para todos los elementos
      }}>
        <div className="overlap-5">
          <div className="text-wrapper-10">Nuestros espacios</div>
          <img
            className="image"
            alt="Image"
            src="https://c.animaapp.com/vqVWvgRh/img/image-2.png"
          />
        </div>

        <div className="text-wrapper-2">Ver espacios</div>

        <div className="overlap-group-wrapper">
          <div className="overlap-7">
            <TypeBasicWrapper
              className="design-component-instance-node"
              text="Buscar espacio..."
              type="basic"
              onSearch={handleSearch}
            />
          </div>
        </div>

        {renderFilters()}

        <div style={{ 
          position: "relative",
          top: "850px",
          left: "175px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "40px",
          width: "1150px",
          marginBottom: "200px",
          paddingBottom: "200px" // Espacio adicional para evitar corte
        }}>
          {filteredEspacios.map((espacio) => (
            <EspacioCard
              key={espacio.id}
              titulo={espacio.titulo}
              descripcion={espacio.descripcion}
              imagen={espacio.imagen}
              onHover={(isHovered) =>
                setHoveredCard(isHovered ? espacio.id : null)
              }
              onClick={() => handleCardClick(espacio)}
              isHovered={hoveredCard === espacio.id}
            />
          ))}
        </div>

        

        <div className="text-wrapper-15">Inicio</div>
        <img
          className="frame-4"
          alt="Frame"
          src="https://c.animaapp.com/vqVWvgRh/img/frame-2.svg"
        />
      </div>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "20px",
              maxWidth: "600px",
              width: "80%",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              style={{
                color: "#EE5D08",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              {selectedSpace.titulo}
            </h2>
            <img
              src={selectedSpace.imagen}
              alt={selectedSpace.titulo}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            />
            <p style={{ marginBottom: "15px" }}>{selectedSpace.descripcion}</p>
            <p>
              <strong>Ubicación:</strong> {selectedSpace.ubicacion}
            </p>
            <button
              style={{
                backgroundColor: "#EE5D08",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "20px",
                display: "block",
                width: "100%",
                fontSize: "16px",
              }}
              onClick={() => {
                alert(`Reservando ${selectedSpace.titulo}`);
                setShowModal(false);
              }}
            >
              Reservar este espacio
            </button>
            <button
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "none",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerEspaciosGeneral;