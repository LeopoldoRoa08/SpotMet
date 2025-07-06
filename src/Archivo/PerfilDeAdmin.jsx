// PerfilDeAdmin.jsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import "./PerfilDeAdmin.css";

// El componente DashboardSidebar ha sido eliminado ya que no se usará en el renderizado principal

const ProfileForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    nombres: "",
    apellidos: "",
    telefono: "",
    email: ""
  });
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tempImage, setTempImage] = useState(null);
  const fileInputRef = useRef(null);
  const [userUid, setUserUid] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserUid(user.uid);
        try {
          const docRef = doc(db, "administradores", user.uid);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            const data = docSnap.data();
            setProfileData({
              nombres: data.nombres || "",
              apellidos: data.apellidos || "",
              telefono: data.telefono || "",
              email: data.email || ""
            });
            if (data.profileImage) {
              setProfileImage(data.profileImage);
            }
          } else {
            setProfileData({ nombres: "", apellidos: "", telefono: "", email: "" }); // FIX: Añadido email: ""
            setProfileImage(null);
          }
        } catch (error) {
          console.error("Error cargando datos:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setProfileData({ nombres: "", apellidos: "", telefono: "", email: "" }); // FIX: Añadido email: ""
        setProfileImage(null);
        setLoading(false);
        setUserUid(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setTempImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSave = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const dataToSave = {
          ...profileData,
          profileImage: tempImage || profileImage || null
        };

        Object.keys(dataToSave).forEach(key => {
          if (dataToSave[key] === undefined || dataToSave[key] === "") {
            delete dataToSave[key];
          }
        });

        await setDoc(doc(db, "administradores", user.uid), dataToSave, { merge: true }); 
        
        if (tempImage) {
          setProfileImage(tempImage);
          setTempImage(null);
        }
        
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Error guardando datos:", error);
      alert(`Error al guardar los cambios: ${error.message}`);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTempImage(null);
  };

  if (loading) {
    return <div className="profile-form">Cargando datos...</div>;
  }

  if (!userUid) {
    return <div className="profile-form">Por favor, inicia sesión para ver tu perfil.</div>;
  }

  const currentImage = tempImage || profileImage || "https://cdn.builder.io/api/v1/image/assets/TEMP/default-profile-icon";

  return (
    <section className="profile-form">
      {/* Foto de perfil */}
      <div 
        className="profile-image-container" 
        onClick={isEditing ? triggerFileInput : null}
        style={{ backgroundImage: `url(${currentImage})` }} 
      >
        {isEditing && (
          <div className="image-edit-overlay">Cambiar foto</div>
        )}
        <input
          ref={fileInputRef}
          id="profile-image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
          disabled={!isEditing}
        />
      </div>

      <h1 className="profile-title">Editar datos del administrador</h1>

      <div className="form-row">
        <div className="form-field">
          <label className="field-label">Nombres</label>
          {isEditing ? (
            <input
              type="text"
              name="nombres"
              value={profileData.nombres}
              onChange={handleInputChange}
              className="editable-field"
            />
          ) : (
            <p className="field-value">{profileData.nombres}</p>
          )}
        </div>
        <div className="form-field">
          <label className="field-label">Apellidos</label>
          {isEditing ? (
            <input
              type="text"
              name="apellidos"
              value={profileData.apellidos}
              onChange={handleInputChange}
              className="editable-field"
            />
          ) : (
            <p className="field-value">{profileData.apellidos}</p>
          )}
        </div>
      </div>

      <div className="form-field-full">
        <label className="field-label">Número telefónico</label>
        {isEditing ? (
          <input
            type="text"
            name="telefono"
            value={profileData.telefono}
            onChange={handleInputChange}
            className="editable-field-bold"
          />
        ) : (
          <p className="field-value-bold">{profileData.telefono}</p>
        )}
      </div>

      <div className="form-field-full">
        <label className="field-label">Correo electrónico</label>
        {isEditing ? (
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleInputChange}
            className="editable-field-bold"
          />
        ) : (
          <p className="field-value-bold">{profileData.email}</p>
        )}
      </div>

      {isEditing ? (
        <div className="action-buttons">
          <button 
            className="save-button" 
            onClick={handleSave}
          >
            Guardar cambios
          </button>
          <button 
            className="cancel-button" 
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </div>
      ) : (
        <button 
          className="edit-button" 
          onClick={() => setIsEditing(true)}
        >
          Editar datos
        </button>
      )}
    </section>
  );
};

const PerfilDeAdmin = () => {
  return (
    <div className="main-container">
      {/* El componente Header ya no se renderiza aquí */}

      <main className="main-content">
        {/* hero-banner y DashboardSidebar eliminados */}
        <ProfileForm />
      </main>
    </div>
  );
};

export default PerfilDeAdmin;