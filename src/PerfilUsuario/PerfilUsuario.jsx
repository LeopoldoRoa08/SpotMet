
import React, { useState, useEffect } from "react";
import "./PerfilUsuario.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const PerfilDeUsuario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    carrera: "",
    telefono: "",
    fotoPerfil: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      const uid = localStorage.getItem("uid");
      if (!uid) return;
      const docRef = doc(db, "usuarios", uid);
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        setFormData(snap.data());
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="mainContent">
        <h1 className="title">Perfil del Usuario</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <div className="formContainer">
              <div className="formRow">
                <div className="formField">
                  <div className="fieldLabel">Nombre:</div>
                  <div className="input">{formData.nombre}</div>
                </div>
                <div className="formField">
                  <div className="fieldLabel">Apellido:</div>
                  <div className="input">{formData.apellido}</div>
                </div>
              </div>

              <div className="formRow">
                <div className="formField">
                  <div className="fieldLabel">Carrera:</div>
                  <div className="input">{formData.carrera}</div>
                </div>
                <div className="formField">
                  <div className="fieldLabel">Teléfono:</div>
                  <div className="input">{formData.telefono}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="profileSection">
            {formData.fotoPerfil && (
              <img
                src={formData.fotoPerfil}
                alt="Foto de perfil"
                className="profileImage"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilDeUsuario;
