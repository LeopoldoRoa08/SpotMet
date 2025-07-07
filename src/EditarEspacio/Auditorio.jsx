import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Asegúrate de tener la configuración de Firebase correcta
import { collection, addDoc, getDocs } from 'firebase/firestore';
import './Auditorio.css'; // Asegúrate de tener el archivo CSS correspondiente

// Importa la imagen original
import AudiImage from './Auditorio3.jpg'; // Ruta a la imagen en tu carpeta assets

const Auditorio = () => {
  const [nombre, setNombre] = useState('');
  const [maxPersonas, setMaxPersonas] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(AudiImage); // Imagen predeterminada es AulaImage
  const [mensaje, setMensaje] = useState('');

  // Usamos useEffect para cargar la información predeterminada al cargar el componente
  useEffect(() => {
    // Información predeterminada que debe aparecer antes de editar
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'espacios'));
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        // Si hay datos guardados en Firestore, actualizamos el estado con esos valores
        setNombre(data.nombre || 'Auditorio Pensieri');
        setMaxPersonas(data.maxPersonas || 120);
        setPrecio(data.precio || 150);
        setDescripcion(data.descripcion || 'Descripción no disponible.');
        setImagen(data.imagen || AudiImage); // Si no hay imagen, usar la imagen predeterminada
      });
    };

    fetchData();
  }, []); // Solo se ejecuta una vez al montar el componente

  const handleGuardar = async (e) => {
    e.preventDefault();

    if (!nombre || !maxPersonas || !precio || !descripcion) {
      setMensaje('Por favor, complete todos los campos.');
      return;
    }

    try {
      await addDoc(collection(db, 'espacios'), {
        nombre: nombre,
        maxPersonas: maxPersonas,
        precio: precio,
        descripcion: descripcion,
        tipo: 'Audiotorio', // Específico para Salón
        imagen: imagen, // Guardar la imagen seleccionada en Firestore
      });

      // Mostrar mensaje de éxito
      setMensaje('¡Auditorio guardado con éxito!');
      setTimeout(() => setMensaje(''), 3000); // El mensaje se oculta después de 3 segundos

    } catch (error) {
      setMensaje('Error al guardar el Auditorio. Intenta nuevamente.');
    }
  };

  const handleEliminar = () => {
    // Resetear todos los campos a sus valores predeterminados
    setNombre('Auditorio Pensieri');
    setMaxPersonas(120);
    setPrecio(150);
    setDescripcion('Es uno de los mayores atractivos que posee la Universidad Metropolitana. Se trata de un amplio y diverso conjunto de áreas y edificaciones dispuestas a lo largo y ancho de su campus. En ellos tienen lugar múltiples actividades destinadas al fomento y disfrute de la cultura, la ciencia, la recreación y el esparcimiento. ');
    setImagen(AudiImage); // Restaurar la imagen original
    setMensaje(''); // Limpiar el mensaje de éxito o error
  };

  // Función para cambiar la imagen al hacer clic en ella
  const handleClickImagen = () => {
    document.getElementById('imageInput').click(); // Abrir el selector de archivos
  };

  // Función para manejar el cambio de imagen
  const handleImagenChange = (e) => {
    const file = e.target.files[0]; // Obtener el archivo seleccionado
    if (file) {
      setImagen(URL.createObjectURL(file)); // Crear un objeto URL y establecerlo como la nueva imagen
    }
  };

  return (
    <div className="editar-espacio-container">
      <div className="editar-espacio-header">
        <h2>Editar Auditorio</h2>
      </div>

      <div className="editar-espacio-content">
        <div className="foto-espacio" onClick={handleClickImagen}>
          {/* Mostrar la imagen predeterminada o la imagen seleccionada */}
          <img src={imagen} alt="Foto del espacio" style={{ cursor: 'pointer' }} />
        </div>

        <form onSubmit={handleGuardar} className="form-espacio">
          <div className="form-group">
            <label>Nombre del Auditorio</label>
            <input 
              type="text" 
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)} 
              required 
            />
          </div>

          <div className="form-group">
            <label>Capacidad Máxima de Personas</label>
            <input 
              type="number" 
              value={maxPersonas} 
              onChange={(e) => setMaxPersonas(e.target.value)} 
              required 
            />
          </div>

          <div className="form-group">
            <label>Precio de Alquiler</label>
            <input 
              type="text" 
              value={precio} 
              onChange={(e) => setPrecio(e.target.value)} 
              required 
            />
          </div>

          <div className="form-group">
            <label>Descripción del Salón</label>
            <textarea 
              value={descripcion} 
              onChange={(e) => setDescripcion(e.target.value)} 
              required 
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="guardar-btn">Guardar</button>
            <button type="button" className="eliminar-btn" onClick={handleEliminar}>Eliminar</button>
          </div>
        </form>

        {/* Mostrar el mensaje de éxito de manera discreta */}
        {mensaje && <p className="mensaje-exito">{mensaje}</p>}

        {/* Input de tipo file para cambiar la imagen */}
        <input 
          id="imageInput" 
          type="file" 
          accept="image/*"
          onChange={handleImagenChange} 
          style={{ display: 'none' }} 
        />
      </div>
    </div>
  );
};

export default Auditorio;
