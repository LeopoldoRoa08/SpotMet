import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./PerfilUsuario.css";

const PerfilUsuario = () => {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    if (uid) {
      const fetchData = async () => {
        const docRef = doc(db, "usuarios", uid);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          setUsuario(snap.data());
        }
      };
      fetchData();
    }
  }, []);

  const irAEditarPerfil = () => {
    navigate("/editar-perfil");
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
          <p><strong>Correo:</strong> {usuario?.correo || ""}</p>
        </div>

        <button className="btn-editar" onClick={irAEditarPerfil}>
          Editar perfil ✏️
        </button>
        <div className="back-link" onClick={() => navigate("/")}>
          ← Inicio
        </div>
      </div>
    </div>
  );
};

export default PerfilUsuario;