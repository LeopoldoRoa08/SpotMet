import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import EditarPerfilDeUsuario from "./EditarPerfilDeUsuario";

const EditarPerfilDeUsuarioContainer = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    carrera: "",
    telefono: "",
    password: "",
    confirmPassword: "",
  });
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(
    "https://c.animaapp.com/6Q6bSWum/img/ellipse-9@2x.png"
  );
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = firebase.auth.currentUser;
        if (user) {
          const userDoc = await firebase.getDoc(firebase.getUserDoc(user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setFormData({
              nombre: userData.nombre || "",
              apellido: userData.apellido || "",
              carrera: userData.carrera || "",
              telefono: userData.telefono || "",
              password: "",
              confirmPassword: "",
            });
            if (userData.profileImage) {
              setPreviewImage(userData.profileImage);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setErrors({
          general: "Error al cargar los datos del usuario"
        });
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nombre.trim()) newErrors.nombre = "Nombre es requerido";
    if (!formData.apellido.trim()) newErrors.apellido = "Apellido es requerido";
    if (!formData.carrera.trim()) newErrors.carrera = "Carrera es requerida";
    if (!formData.telefono.trim()) newErrors.telefono = "Teléfono es requerido";
    else if (!/^\d+$/.test(formData.telefono)) newErrors.telefono = "Teléfono debe contener solo números";
    
    if (formData.password) {
      if (formData.password.length < 6) newErrors.password = "La contraseña debe tener al menos 6 caracteres";
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Las contraseñas no coinciden";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");
    
    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    try {
      const user = firebase.auth.currentUser;
      if (!user) {
        throw new Error("No hay usuario autenticado");
      }

      const updates = {
        nombre: formData.nombre,
        apellido: formData.apellido,
        carrera: formData.carrera,
        telefono: formData.telefono,
      };

      if (profileImage) {
        const storageRef = firebase.getProfileImageRef(user.uid);
        await firebase.uploadBytes(storageRef, profileImage);
        const imageUrl = await firebase.getDownloadURL(storageRef);
        updates.profileImage = imageUrl;
        setPreviewImage(imageUrl);
      }

      await firebase.updateDoc(firebase.getUserDoc(user.uid), updates);

      if (formData.password) {
        await firebase.updatePassword(user, formData.password);
      }

      setSuccessMessage("Perfil actualizado correctamente!");
      setErrors({});
    } catch (error) {
      console.error("Error al actualizar perfil:", error);
      setErrors({
        general: "Ocurrió un error al actualizar el perfil. Por favor, inténtalo de nuevo."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <EditarPerfilDeUsuario 
      formData={formData}
      handleChange={handleChange}
      handleImageChange={handleImageChange}
      handleSubmit={handleSubmit}
      previewImage={previewImage}
      errors={errors}
      isLoading={isLoading}
      successMessage={successMessage}
    />
  );
};

export default EditarPerfilDeUsuarioContainer;