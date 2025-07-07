import React, { useState } from "react";
import "./CrearEspacio.css";
import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function CrearEspacio() {
  const [formData, setFormData] = useState({
    nombre: "",
    capacidad: "",
    precio: "",
    tipo: "",
    descripcion: "",
  });

  const [imagenFile, setImagenFile] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setImagenFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imagenURL = "";
      if (imagenFile) {
        const imageRef = ref(storage, `imagenes_espacios/${uuidv4()}_${imagenFile.name}`);
        await uploadBytes(imageRef, imagenFile);
        imagenURL = await getDownloadURL(imageRef);
      }

      await addDoc(collection(db, "espacios"), {
        ...formData,
        imagen: imagenURL,
      });

      navigate("/espacioAdmin");
    } catch (error) {
      console.error("Error al crear espacio:", error);
    }
  };

  return (
    <div className="crear-espacio-container">
      <h2>Crear nuevo espacio</h2>
      <form className="crear-espacio-form" onSubmit={handleSubmit}>
        <div className="imagen-upload">
          <label htmlFor="imagen">Añadir imágenes</label>
          <input type="file" id="imagen" accept="image/*" onChange={handleFileChange} />
        </div>

        <div className="input-group">
          <input type="text" name="nombre" placeholder="Nombre del Espacio" onChange={handleChange} required />
          <input type="number" name="capacidad" placeholder="Capacidad Máxima de personas" onChange={handleChange} required />
          <input type="number" name="precio" placeholder="Precio de alquiler" onChange={handleChange} required />
          <input type="text" name="tipo" placeholder="Tipo de Espacio" onChange={handleChange} required />
          <textarea name="descripcion" placeholder="Ingresa la Descripción del Espacio" onChange={handleChange} required />
        </div>

        <button type="submit" className="crear-btn">Crear nuevo espacio <span className="plus-icon">➕</span></button>
      </form>
      <p className="back-link" onClick={() => navigate("/dashboard")}>← Dashboard</p>
    </div>
  );
}

export default CrearEspacio;