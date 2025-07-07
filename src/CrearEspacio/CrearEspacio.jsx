import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from '../firebase'; // Asegúrate de que 'db' se exporta desde tu firebase.js
import { collection, getDocs } from 'firebase/firestore';
import "./CrearEspacio.css";

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
      <rect
        className="rect"
        height="15"
        rx="7.5"
        stroke="#030027"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        width="15"
        x="3"
        y="3"
      />
      <path
        className="path"
        d="M17.5 17.5L21 21"
        stroke="#030027"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
    </svg>
  );
};

// Componente TypeBasicWrapper (buscador)
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
  tipo,
  capacidad,
  precio,
  ubicacion
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Si tienes rutas específicas para cada tipo de espacio, puedes mantener esto.
    // De lo contrario, puedes simplificarlo a una ruta genérica de detalles.
    switch(tipo) {
      case 'sala':
        navigate('/ver-sala24');
        break;
      case 'auditorio':
        navigate('/ver-auditorio');
        break;
      case 'salon':
        navigate('/ver-aulas');
        break;
      case 'laboratorio':
        navigate('/ver-laboratorio');
        break;
      case 'cancha':
        navigate('/ver-canchas');
        break;
      case 'centro':
        navigate('/ver-centrox');
        break;
      default:
        console.log(`Navigating to a generic detail page for type: ${tipo}`);
        // navigate('/ver-detalle-espacio', { state: { espacio: { titulo, descripcion, imagen, tipo, capacidad, precio, ubicacion } } });
        break;
    }
  };

  return (
    <div
      className={`group ${isHovered ? "hovered-card" : ""}`}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
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
        {/* Imagen */}
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
        {/* Título y Descripción */}
        <div className="text-wrapper-4">{titulo}</div>
        <p className="p">{descripcion}</p>
        {/* Botón Más información */}
        <div className="card-go-to-info" onClick={onClick}>
          <div className="text-wrapper-3">Más información</div>
          <Arrow6 className="arrow" />
        </div>
      </div>
    </div>
  );
};

// Componente principal
export const VerEspaciosGeneral = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [filter, setFilter] = useState("all"); // Estado para el filtro de tipo de espacio
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [espacios, setEspacios] = useState([]); // Estado para todos los espacios (preexistentes + Firebase)

  const [showCrearEspacioModal, setShowCrearEspacioModal] = useState(false);


  // Define aquí tus espacios preexistentes/estáticos
  // ¡¡IMPORTANTE!! Reemplaza los datos de ejemplo con tus datos reales.
  const predefinedSpaces = [
    {
      id: "pre1",
      titulo: "Sala de Conferencias Principal",
      descripcion: "Espacio amplio para reuniones y presentaciones.",
      imagen: "https://c.animaapp.com/vqVWvgRh/img/sala-1@2x.png", // Reemplaza con tu URL real
      capacidad: 50,
      precio: 150.00,
      tipo: "sala",
      ubicacion: "Edificio A, Piso 3"
    },
    {
      id: "pre2",
      titulo: "Auditorio Central",
      descripcion: "Ideal para grandes eventos y charlas magistrales.",
      imagen: "https://c.animaapp.com/vqVWvgRh/img/auditorio-2@2x.png", // Reemplaza con tu URL real
      capacidad: 200,
      precio: 300.00,
      tipo: "auditorio",
      ubicacion: "Edificio B, Planta Baja"
    },
    {
      id: "pre3",
      titulo: "Salón de Clases 101",
      descripcion: "Aula equipada para talleres y clases interactivas.",
      imagen: "https://c.animaapp.com/vqVWvgRh/img/rectangle-16-1@2x.png", // Reemplaza con tu URL real
      capacidad: 30,
      precio: 80.00,
      tipo: "salon", // Cambiado a 'salon' para este ejemplo
      ubicacion: "Edificio C, Piso 1"
    },
    {
      id: "pre4",
      titulo: "Laboratorio de Robótica",
      descripcion: "Laboratorio avanzado para proyectos de robótica.",
      imagen: "https://via.placeholder.com/420x250/FF7F50/FFFFFF?text=Laboratorio", // Placeholder
      capacidad: 20,
      precio: 120.00,
      tipo: "laboratorio",
      ubicacion: "Edificio D, Sótano"
    },
    {
      id: "pre5",
      titulo: "Cancha de Baloncesto",
      descripcion: "Cancha multiusos para deportes y eventos.",
      imagen: "https://via.placeholder.com/420x250/20B2AA/FFFFFF?text=Cancha", // Placeholder
      capacidad: 40,
      precio: 90.00,
      tipo: "cancha",
      ubicacion: "Área Deportiva"
    },
    {
      id: "pre6",
      titulo: "Aula de Conferencia Pequeña",
      descripcion: "Aula ideal para pequeñas reuniones o tutorías.",
      imagen: "https://via.placeholder.com/420x250/8A2BE2/FFFFFF?text=Aula", // Placeholder
      capacidad: 15,
      precio: 60.00,
      tipo: "aula",
      ubicacion: "Edificio E, Piso 2"
    },
    // Añade más espacios predefinidos aquí si los tienes
  ];

  // Fetch spaces from Firebase and combine them with predefined spaces
  useEffect(() => {
    const fetchEspacios = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "espacios"));
        const firebaseEspacios = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        // Combina los espacios predefinidos con los de Firebase
        setEspacios([...predefinedSpaces, ...firebaseEspacios]);
      } catch (error) {
        console.error("Error al cargar los espacios:", error);
        // En caso de error, al menos muestra los espacios predefinidos
        setEspacios(predefinedSpaces);
      }
    };

    fetchEspacios();
  }, [showCrearEspacioModal]); // Agregado showCrearEspacioModal como dependencia para refrescar al cerrar el modal

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
      (espacio.titulo && espacio.titulo.toLowerCase().includes(searchTerm)) ||
      (espacio.descripcion && espacio.descripcion.toLowerCase().includes(searchTerm));
    return matchesFilter && matchesSearch;
  });

  const renderFilters = () => {
    const filters = [
      { label: "Todos", value: "all" },
      { label: "Salas", value: "sala" },
      { label: "Auditorios", value: "auditorio" },
      { label: "Laboratorios", value: "laboratorio" },
      { label: "Canchas", value: "cancha" },
      { label: "Salones", value: "salon" },
      { label: "Aulas", value: "aula" }, // Añadido "Aulas"
      { label: "Centros", value: "centro" } // Mantener si aplica
    ];

    return (
      <div className="filter-buttons-container"> {/* Nueva clase para el contenedor */}
        {filters.map((f) => (
          <button
            key={f.value}
            className={`filter-button ${filter === f.value ? "active" : ""}`}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="ver-espacios-general" data-model-id="276:37">
      <div className="div" style={{
        height: "auto",
        paddingBottom: "150px",
        minHeight: "3000px"
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

        <div className="search-and-create-container">
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

          {/* Botón para abrir modal de Crear Espacio */}
          <div className="create-space-button-wrapper">
            <button
              className="crear-espacio-button"
              onClick={() => setShowCrearEspacioModal(true)}
            >
              Crear Nuevo Espacio
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>

        {renderFilters()} {/* Renderiza los filtros aquí */}

        <div style={{
          position: "relative",
          top: "850px",
          left: "175px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "40px",
          width: "1150px",
          marginBottom: "200px",
          paddingBottom: "200px"
        }}>
          {filteredEspacios.length > 0 ? (
            filteredEspacios.map((espacio) => (
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
                tipo={espacio.tipo}
                capacidad={espacio.capacidad}
                precio={espacio.precio}
                ubicacion={espacio.ubicacion}
              />
            ))
          ) : (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center', fontSize: '20px', color: '#666' }}>No se encontraron espacios que coincidan con los filtros.</p>
          )}
        </div>

        <div className="text-wrapper-15">Inicio</div>
        <img
          className="frame-4"
          alt="Frame"
          src="https://c.animaapp.com/vqVWvgRh/img/frame-2.svg"
        />
      </div>

      {showModal && selectedSpace && (
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
            <p style={{ marginBottom: "5px" }}>
              <strong>Capacidad:</strong> {selectedSpace.capacidad} personas
            </p>
            <p style={{ marginBottom: "5px" }}>
              <strong>Precio:</strong> ${selectedSpace.precio ? selectedSpace.precio.toFixed(2) : 'N/A'}
            </p>
            <p>
              <strong>Ubicación:</strong> {selectedSpace.ubicacion || 'No especificada'}
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

      {/* Modal para crear espacio */}
      {showCrearEspacioModal && (
        <div className="crear-espacio-modal-overlay">
          <div className="crear-espacio-modal-content">
            <button
              className="crear-espacio-modal-close-button"
              onClick={() => setShowCrearEspacioModal(false)}
            >
              ×
            </button>
            <CrearEspacio />
          </div>
        </div>
      )}

    </div>
  );
};

export default VerEspaciosGeneral;