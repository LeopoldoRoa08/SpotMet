import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Asegúrate de tener la configuración de Firebase correcta
import { collection, addDoc, getDocs } from 'firebase/firestore';
import './CentroMundoXEditar.css'; // Asegúrate de tener el archivo CSS correspondiente

// Importa la imagen original
import Centrox from './imagen.jpeg'; // Ruta a la imagen en tu carpeta assets

const CentroMundoX  = () => {
  const [nombre, setNombre] = useState('');
  const [maxPersonas, setMaxPersonas] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(Centrox); // Imagen predeterminada es AulaImage
  const [mensaje, setMensaje] = useState('');

  // Usamos useEffect para cargar la información predeterminada al cargar el componente
  useEffect(() => {
    // Información predeterminada que debe aparecer antes de editar
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'espacios'));
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        // Si hay datos guardados en Firestore, actualizamos el estado con esos valores
        setNombre(data.nombre || 'Canchas deportivas');
        setMaxPersonas(data.maxPersonas || 50);
        setPrecio(data.precio || 125);
        setDescripcion(data.descripcion || 'Descripción no disponible.');
        setImagen(data.imagen || Centrox); // Si no hay imagen, usar la imagen predeterminada
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
        tipo: 'Gaming', // Específico para Salón
        imagen: imagen, // Guardar la imagen seleccionada en Firestore
      });

      // Mostrar mensaje de éxito
      setMensaje('¡Salón guardado con éxito!');
      setTimeout(() => setMensaje(''), 3000); // El mensaje se oculta después de 3 segundos

    } catch (error) {
      setMensaje('Error al guardar el salón. Intenta nuevamente.');
    }
  };

  const handleEliminar = () => {
    // Resetear todos los campos a sus valores predeterminados
    setNombre('Centro Mundo X');
    setMaxPersonas(50);
    setPrecio(125);
    setDescripcion('La Universidad Metropolitana (UNIMET) está a la vanguardia de la innovación tecnológica en Venezuela con el Centro Mundo X, un espacio único en el país dedicado al desarrollo de gemelos digitales y experiencias inmersivas en el metaverso. Esta iniciativa posiciona a la UNIMET como líder en la transformación digital aplicada a la educación y la industria.');
    setImagen(Centrox); // Restaurar la imagen original
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
        <h2>Editar Cnetro</h2>
      </div>

      <div className="editar-espacio-content">
        <div className="foto-espacio" onClick={handleClickImagen}>
          {/* Mostrar la imagen predeterminada o la imagen seleccionada */}
          <img src={imagen} alt="Foto del espacio" style={{ cursor: 'pointer' }} />
        </div>

        <form onSubmit={handleGuardar} className="form-espacio">
          <div className="form-group">
            <label>Nombre del espacio</label>
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

export default CentroMundoX;