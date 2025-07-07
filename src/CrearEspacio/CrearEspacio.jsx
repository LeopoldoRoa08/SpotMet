import React, { useState, useEffect } from "react";
import "./CrearEspacio.css";
import { db, storage } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
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
  const [tiposEspacio, setTiposEspacio] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTipos = async () => {
      const tiposRef = collection(db, "tipos_espacio");
      const snapshot = await getDocs(tiposRef);
      const lista = snapshot.docs.map(doc => doc.data().nombre);
      setTiposEspacio(lista);
    };
    fetchTipos();
  }, []);

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

          <select name="tipo" value={formData.tipo} onChange={handleChange} required>
            <option value="">Selecciona el tipo de espacio</option>
            {tiposEspacio.map((tipo, i) => (
              <option key={i} value={tipo}>{tipo}</option>
            ))}
          </select>

          <textarea name="descripcion" placeholder="Ingresa la Descripción del Espacio" onChange={handleChange} required />
        </div>

        <button type="submit" className="crear-btn">Crear nuevo espacio <span className="plus-icon">➕</span></button>
      </form>
      <p className="back-link" onClick={() => navigate("/dashboard")}>← Dashboard</p>
    </div>
  );
}

export default CrearEspacio;