
// EditarPerfilDeUsuario.jsx
import React, { useState, useEffect } from 'react';
import './EditarPerfilDeUsuario.css';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

const EditarPerfilDeUsuario = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    carrera: '',
    telefono: '',
    contrasena: '',
    confirmarContrasena: '',
    fotoPerfil: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleGuardar = async () => {
    const uid = localStorage.getItem('uid');
    if (!uid) return alert('Usuario no autenticado');

    if (formData.contrasena !== formData.confirmarContrasena) {
      return alert('Las contraseñas no coinciden');
    }

    try {
      let fotoPerfilURL = formData.fotoPerfil;
      if (imageFile) {
        const storage = getStorage();
        const imageRef = ref(storage, `fotosPerfil/${uid}`);
        await uploadBytes(imageRef, imageFile);
        fotoPerfilURL = await getDownloadURL(imageRef);
      }

      await setDoc(doc(db, 'usuarios', uid), {
        ...formData,
        fotoPerfil: fotoPerfilURL
      });

      // Actualizar estado para mostrar imagen recién subida
      setFormData((prev) => ({ ...prev, fotoPerfil: fotoPerfilURL }));

      alert('✅ Los datos se guardaron correctamente.');
    } catch (error) {
      console.error('Error al guardar datos:', error);
      alert('Error al guardar los datos');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const uid = localStorage.getItem('uid');
      if (!uid) return;
      const docRef = doc(db, 'usuarios', uid);
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        setFormData(snap.data());
      }
    };
    fetchData();
  }, []);

  return (
    <div className="editar-perfil">
      <div className="decor-right">
        <div className="orange-gradient"></div>
        <div className="dot-pattern"></div>
      </div>

      <div className="form-box">
        <h1 className="title">Editar Perfil</h1>

        <div className="content">
          <div className="left">
            <div className="form-grid">
              <div className="form-field">
                <label>Nombre:</label>
                <input type="text" value={formData.nombre} onChange={e => handleInputChange('nombre', e.target.value)} />
              </div>
              <div className="form-field">
                <label>Contraseña:</label>
                <div className="password-container">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.contrasena}
                    onChange={e => handleInputChange('contrasena', e.target.value)}
                  />
                  <button type="button" className="toggle-btn" onClick={() => setShowPassword(!showPassword)}>👁</button>
                </div>
              </div>
              <div className="form-field">
                <label>Apellido:</label>
                <input type="text" value={formData.apellido} onChange={e => handleInputChange('apellido', e.target.value)} />
              </div>
              <div className="form-field">
                <label>Confirmar Contraseña:</label>
                <div className="password-container">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmarContrasena}
                    onChange={e => handleInputChange('confirmarContrasena', e.target.value)}
                  />
                  <button type="button" className="toggle-btn" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>👁</button>
                </div>
              </div>
              <div className="form-field">
                <label>Carrera:</label>
                <input type="text" value={formData.carrera} onChange={e => handleInputChange('carrera', e.target.value)} />
              </div>
              <div className="form-field">
                <label>Teléfono:</label>
                <input type="tel" value={formData.telefono} onChange={e => handleInputChange('telefono', e.target.value)} />
              </div>
            </div>
            <button className="save-btn" onClick={handleGuardar}>Guardar</button>
            <div className="back-text" onClick={() => navigate('/')}>← Inicio</div>
          </div>

          <div className="right">
            <div className="profile-pic">
              {formData.fotoPerfil ? (
                <img src={formData.fotoPerfil} alt="Perfil" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
              ) : null}
            </div>
            <span className="profile-label">Añadir Foto de Perfil</span>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarPerfilDeUsuario;
