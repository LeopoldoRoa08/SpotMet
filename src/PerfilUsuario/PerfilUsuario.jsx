import React, { useState } from "react";
import styles from "./PerfilUsuario.module.css"; // Cambiado a .module.css

const PerfilDeUsuario = ({ onSave, onBackToDashboard, initialData = {} }) => {
  const [formData, setFormData] = useState({
    nombre: initialData.nombre || "",
    apellido: initialData.apellido || "",
    carrera: initialData.carrera || "",
    telefono: initialData.telefono || "",
    password: initialData.password || "",
    confirmPassword: initialData.confirmPassword || "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
    }

    if (!formData.apellido.trim()) {
      newErrors.apellido = "El apellido es requerido";
    }

    if (!formData.carrera.trim()) {
      newErrors.carrera = "La carrera es requerida";
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es requerido";
    } else if (!/^\d{10}$/.test(formData.telefono.replace(/\s/g, ""))) {
      newErrors.telefono = "El teléfono debe tener 10 dígitos";
    }

    if (formData.password && formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      if (onSave) {
        onSave(formData);
      }
    }
  };

  const handleBackToDashboard = () => {
    if (onBackToDashboard) {
      onBackToDashboard();
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const EyeIcon = ({ isVisible, onClick }) => (
    <svg
      width="27"
      height="20"
      viewBox="0 0 27 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.passwordToggle}
      onClick={onClick}
    >
      {isVisible ? (
        <path
          d="M13.5 3C21.8602 3 27 9.3125 27 9.3125S21.8602 15.625 13.5 15.625S0 9.3125 0 9.3125S5.13982 3 13.5 3ZM13.5 5.5C11.0147 5.5 9 7.51472 9 10S11.0147 14.5 13.5 14.5S18 12.4853 18 10S15.9853 5.5 13.5 5.5ZM13.5 7.5C14.8807 7.5 16 8.61929 16 10S14.8807 12.5 13.5 12.5S11 11.3807 11 10S12.1193 7.5 13.5 7.5Z"
          fill="black"
        />
      ) : (
        <path
          d="M0 9.3125C0 9.3125 5.13982 3.10673 13.5 3.10673C14.6622 3.10673 15.757 3.23188 16.7866 3.43978L9.03273 9.97445C8.74328 9.44215 8.59262 8.86374 8.59091 8.27821C8.59091 7.30907 9.00205 6.42992 9.66477 5.72453C6.72914 6.56438 4.49305 8.19133 3.21668 9.3125C4.30397 10.2685 5.53323 11.1022 6.87395 11.7927L5.09073 13.2956C1.83723 11.5156 0 9.3125 0 9.3125ZM27 9.3125C27 9.3125 21.8602 15.5183 13.5 15.5183C12.339 15.5183 11.2467 15.39 10.2158 15.1842L4.90909 19.6555L3.06818 18.104L23.9318 0.520996L25.7727 2.07244L21.9105 5.32736C25.1603 7.10842 27 9.3125 27 9.3125ZM23.7907 9.31871C22.7015 8.36006 21.4692 7.52461 20.1248 6.8333L18.4091 8.27821C18.4091 9.37546 17.8919 10.4278 16.9713 11.2036C16.0506 11.9795 14.802 12.4154 13.5 12.4154L12.3378 13.3949C12.7182 13.4269 13.1036 13.4497 13.5 13.4497C18.3821 13.4497 22.021 10.8867 23.7907 9.31871Z"
          fill="black"
        />
      )}
    </svg>
  );

  const FormField = ({ label, type, placeholder, value, onChange, error, showToggle, onToggle, isVisible }) => (
    <div className={styles.formField}>
      <div className={styles.fieldLabel}>
        {label}
      </div>
      <div className={styles.inputWrapper}>
        <input
          type={showToggle ? (isVisible ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${styles.input} ${error ? styles.inputError : ""}`}
        />
        {showToggle && (
          <EyeIcon isVisible={isVisible} onClick={onToggle} />
        )}
      </div>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );

  return (
    <div className={styles.container}>
      

      {/* Main Content */}
      <div className={styles.mainContent}>
        <h1 className={styles.title}>Editar Perfil</h1>

        <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
          {/* First Row */}
          <div className={styles.formRow}>
            <FormField
              label="Nombre:"
              type="text"
              placeholder="Ingrese su nombre"
              value={formData.nombre}
              onChange={(value) => handleInputChange('nombre', value)}
              error={errors.nombre}
            />
            <FormField
              label="Contraseña:"
              placeholder="Ingrese su contraseña"
              value={formData.password}
              onChange={(value) => handleInputChange('password', value)}
              error={errors.password}
              showToggle={true}
              onToggle={togglePasswordVisibility}
              isVisible={showPassword}
            />
          </div>

          {/* Second Row */}
          <div className={styles.formRow}>
            <FormField
              label="Apellido:"
              type="text"
              placeholder="Ingrese su apellido"
              value={formData.apellido}
              onChange={(value) => handleInputChange('apellido', value)}
              error={errors.apellido}
            />
            <FormField
              label="Confirmar Contraseña:"
              placeholder="Confirme su contraseña"
              value={formData.confirmPassword}
              onChange={(value) => handleInputChange('confirmPassword', value)}
              error={errors.confirmPassword}
              showToggle={true}
              onToggle={toggleConfirmPasswordVisibility}
              isVisible={showConfirmPassword}
            />
          </div>

          {/* Third Row */}
          <div className={styles.formRow}>
            <FormField
              label="Carrera:"
              type="text"
              placeholder="Ingrese su Carrera"
              value={formData.carrera}
              onChange={(value) => handleInputChange('carrera', value)}
              error={errors.carrera}
            />
            <FormField
              label="Teléfono:"
              type="tel"
              placeholder="Ingrese su teléfono"
              value={formData.telefono}
              onChange={(value) => handleInputChange('telefono', value)}
              error={errors.telefono}
            />
          </div>
        </form>

        {/* Save Button */}
        <div className={styles.saveButtonContainer}>
          <button
            className={styles.saveButton}
            onClick={handleSave}
            type="button"
          >
            <span className={styles.saveButtonText}>Guardar</span>
          </button>
        </div>

        {/* Back Button */}
        <div className={styles.backButton} onClick={handleBackToDashboard}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.backArrow}
          >
            <path
              d="M7.825 11L20 11V13L7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11Z"
              fill="#EA3323"
            />
          </svg>
          <span className={styles.backText}>Dashboard</span>
        </div>
      </div>

      {/* Side Panel */}
      <div className={styles.sidePanel}>
        <div className={styles.sidePanelPlate} />
        <div className={styles.dotPattern}>
          <div className={styles.dotGrid}>
            <div className={styles.dotColumn} />
            <div className={styles.dotColumn}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2e005deee054c04d0983f882eb92e7d6ab85d3b?width=808"
                alt="Pattern"
                className={styles.patternImage}
              />
            </div>
            <div className={styles.dotColumn} />
          </div>
        </div>

        <div className={styles.profileSection}>
          <svg
            width="213"
            height="213"
            viewBox="0 0 213 213"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.profileCircleBg}
          >
            <circle cx="106.5" cy="106.5" r="106.5" fill="white" />
          </svg>
          <div className={styles.profileImageCircle} />
          <p className={styles.profileImageLabel}>
            Añadir Foto de Perfil
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default PerfilDeUsuario;