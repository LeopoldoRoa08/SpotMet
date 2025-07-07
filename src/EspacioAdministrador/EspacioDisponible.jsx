import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc, query, where } from "firebase/firestore";
import "./EspacioDisponible.css";

function EspaciosDisponiblesAdministrador() {
  const [espacios, setEspacios] = useState([]);

  useEffect(() => {
    const fetchEspacios = async () => {
      const snapshot = await getDocs(collection(db, "espacios"));
      const lista = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEspacios(lista);
    };
    fetchEspacios();
  }, []);

  const eliminarEspacio = async (id) => {
    const reservasRef = collection(db, "alquileres");
    const q = query(reservasRef, where("espacioId", "==", id));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      alert("Este espacio no se puede eliminar porque tiene reservas activas.");
      return;
    }

    await deleteDoc(doc(db, "espacios", id));
    setEspacios((prev) => prev.filter((espacio) => espacio.id !== id));
  };

  return (
    <div className="contenedor-general">
      <div className="encabezado">
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
                </div>
              )}
              <h3>{espacio.nombre}</h3>
              <p>{espacio.descripcion}</p>
              <p><strong>Tipo:</strong> {espacio.tipo}</p>
              <p><strong>Capacidad:</strong> {espacio.capacidad}</p>
              <p><strong>Precio:</strong> ${espacio.precio}</p>
              <button onClick={() => eliminarEspacio(espacio.id)}>Eliminar</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EspaciosDisponiblesAdministrador;