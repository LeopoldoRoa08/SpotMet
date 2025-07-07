import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./EspacioDisponible.css";

function EspaciosDisponiblesAdministrador() {
  const [espacios, setEspacios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEspacios = async () => {
      const snapshot = await getDocs(collection(db, "espacios"));
      const lista = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEspacios(lista);
    };
    fetchEspacios();
  }, []);

  return (
    <div className="contenedor-general">
      <div className="encabezado">
        <button className="btn-crear" onClick={() => navigate("/crear-espacio")}>
          Crear nuevo espacio <span>➕</span>
        </button>
        <h3>Espacios disponibles</h3>
      </div>

      {espacios.length === 0 ? (
        <p className="mensaje-vacio">No hay espacios nuevos</p>
      ) : (
        <div className="espacios-grid">
          {espacios.map((espacio) => (
            <div key={espacio.id} className="espacio-card">
              {espacio.imagen && (
                <div className="imagen-container">
                  <img src={espacio.imagen} alt={espacio.nombre} />
                  <span className="icono-editar">✏️</span>
                </div>
              )}
              <h3>{espacio.nombre}</h3>
              <p>{espacio.descripcion}</p>
              <p><strong>Tipo:</strong> {espacio.tipo}</p>
              <p><strong>Capacidad:</strong> {espacio.capacidad}</p>
              <p><strong>Precio:</strong> ${espacio.precio}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EspaciosDisponiblesAdministrador;