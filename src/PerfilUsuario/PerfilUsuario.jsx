import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore"; // Importar collection, query, where, getDocs
import { useNavigate } from "react-router-dom";
import "./PerfilUsuario.css";

const PerfilUsuario = () => {
  const [usuario, setUsuario] = useState(null);
  const [reservas, setReservas] = useState([]); // Nuevo estado para las reservas
  const navigate = useNavigate();
  const correo = localStorage.getItem("user")

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    console.log("UID del usuario:", uid);
    if (uid) {
      const fetchData = async () => {
        // Obtener datos del usuario
        const userDocRef = doc(db, "usuarios", uid);
        const userSnap = await getDoc(userDocRef);
        if (userSnap.exists()) {
          setUsuario(userSnap.data());
        }

        // Obtener reservas del usuario
        const q = query(collection(db, "reservas"), where("userId", "==", uid));
        const querySnapshot = await getDocs(q);
        const userReservas = [];
        querySnapshot.forEach((doc) => {
          userReservas.push({ id: doc.id, ...doc.data() });
        });
        setReservas(userReservas);
      };
      fetchData();
    }
  }, []);

  const irAEditarPerfil = () => {
    navigate("/editar-perfil");
  };

  const formatReservationDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <h2>Mi perfil</h2>
      </div>

      <div className="perfil-card-left mejor-espaciado">
        <div className="perfil-foto-wrapper">
          {usuario?.fotoPerfil ? (
            <img
              src={usuario.fotoPerfil}
              alt="Foto de perfil"
              className="perfil-foto"
            />
          ) : (
            <div className="perfil-foto placeholder">Sin foto</div>
          )}
        </div>

        <p className="editar-foto">Editar Foto de Perfil</p>

        <div className="info-box grande">
          <p><strong>Nombre:</strong> {usuario?.nombre || ""}</p>
          <p><strong>Apellido:</strong> {usuario?.apellido || ""}</p>
          <p><strong>Correo:</strong> {correo || ""}</p>
        </div>

        <button className="btn-editar" onClick={irAEditarPerfil}>
          Editar perfil ✏️
        </button>

        <div className="mis-reservas-section">
          <h3>Mis Reservas</h3>
          {reservas.length > 0 ? (
            <ul className="reservas-list">
              {reservas.map((reserva) => (
                <li key={reserva.id} className="reserva-item-card">
                  <p><strong>Evento:</strong> {reserva.eventName}</p>
                  <p><strong>Espacio:</strong> {reserva.spaceName} ({reserva.spaceType})</p>
                  <p><strong>Fecha:</strong> {formatReservationDate(reserva.date)}</p>
                  <p><strong>Horario:</strong> {reserva.startTime} - {reserva.endTime}</p>
                  {reserva.timestamp && (
                    <p className="reserva-timestamp">
                      Reservado el: {new Date(reserva.timestamp.toDate()).toLocaleString('es-ES')}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No tienes reservas realizadas.</p>
          )}
        </div>

        <div className="back-link" onClick={() => navigate("/")}>
          ← Inicio
        </div>
      </div>
    </div>
  );
};

export default PerfilUsuario;