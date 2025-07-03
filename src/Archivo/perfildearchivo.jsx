import React, { useState } from 'react';
import './PerfilDeAdmin.css';

const Header = () => {
  const handleNavigation = () => {
    // Lógica para navegación
    console.log('Navegación clickeada');
  };

  const handleProfileClick = () => {
    // Lógica para el perfil
    console.log('Perfil clickeado');
  };

  return (
    <div className="flex flex-col items-center px-16 w-full bg-neutral-100 shadow-[0px_4px_10px_rgba(0,0,0,0.15)] max-md:px-5 max-md:max-w-full">
      <div className="flex z-10 flex-wrap gap-5 justify-between -mb-1.5 w-full max-w-[1252px] max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a002b7b916d204e74cf7852b9b208d16b62e7999?placeholderIfAbsent=true&apiKey=a6087c1025124b4ea3e5b1a71e3cc15f"
          className="object-contain shrink-0 max-w-full aspect-[1.03] w-[177px]"
          alt="Logo"
        />
        <div className="flex gap-5 my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4426b22577054f7ab2c351abf4057143024d196a?placeholderIfAbsent=true&apiKey=a6087c1025124b4ea3e5b1a71e3cc15f"
            className="object-contain shrink-0 aspect-[0.96] w-[65px]"
            alt="Navigation icon"
            onClick={handleNavigation}
            style={{ cursor: 'pointer' }}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d88aab2b1b666849b92aba3f0d8946b35a76cb1?placeholderIfAbsent=true&apiKey=a6087c1025124b4ea3e5b1a71e3cc15f"
            className="object-contain shrink-0 my-auto aspect-[0.87] w-[46px]"
            alt="Profile icon"
            onClick={handleProfileClick}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </div>
  );
};

const UserDataForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nombres: 'Raúl Alejandro',
    apellidos: 'Rodriguez Matos',
    telefono: '(0412) 123 45 67',
    email: 'prueba321@correo.unimet.edu.ve'
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="flex flex-col grow shrink-0 px-20 py-16 bg-white basis-0 rounded-[41px] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] w-fit max-md:px-5 max-md:max-w-full">
      <div className="self-center text-xl font-semibold text-slate-950">
        Mis datos
      </div>

      <div className="flex flex-wrap gap-6 mt-16 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex flex-col flex-1 grow shrink-0 items-start py-3 pr-20 pl-4 rounded-xl basis-0 bg-neutral-100 w-fit max-md:pr-5">
          <div className="text-xs text-neutral-500">Nombres</div>
          {isEditing ? (
            <input
              type="text"
              name="nombres"
              value={formData.nombres}
              onChange={handleInputChange}
              className="text-xl font-medium text-black bg-transparent"
            />
          ) : (
            <div className="text-xl font-medium text-black">{formData.nombres}</div>
          )}
        </div>
        <div className="flex flex-col flex-1 grow shrink-0 items-start py-3 pr-20 pl-4 rounded-xl basis-0 bg-neutral-100 w-fit max-md:pr-5">
          <div className="text-xs text-neutral-500">Apellidos</div>
          {isEditing ? (
            <input
              type="text"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleInputChange}
              className="text-xl font-medium text-black bg-transparent"
            />
          ) : (
            <div className="text-xl font-medium text-black">{formData.apellidos}</div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-start py-3 pr-20 pl-4 mt-9 rounded-xl bg-neutral-100 max-md:pr-5 max-md:max-w-full">
        <div className="text-xs text-neutral-500">Número telefónico</div>
        {isEditing ? (
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
            className="text-xl font-semibold text-black bg-transparent"
          />
        ) : (
          <div className="text-xl font-semibold text-black">{formData.telefono}</div>
        )}
      </div>

      <div className="flex flex-col items-start py-3 pr-20 pl-4 mt-9 rounded-xl bg-neutral-100 max-md:pr-5 max-md:max-w-full">
        <div className="text-xs text-neutral-500">Correo electrónico</div>
        {isEditing ? (
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="text-xl font-semibold text-black bg-transparent"
          />
        ) : (
          <div className="text-xl font-semibold text-black">{formData.email}</div>
        )}
      </div>

      <button 
        onClick={handleEditClick}
        className="flex gap-1.5 self-center px-4 py-2.5 mt-14 max-w-full text-lg font-bold text-white bg-orange-600 rounded-xl w-[152px] max-md:mt-10 hover:bg-orange-700 transition-colors"
      >
        <div className="grow my-auto">
          {isEditing ? 'Guardar cambios' : 'Editar datos'}
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9699df56b7e6922dd6199e2a60cbaaca70b5e5e?placeholderIfAbsent=true&apiKey=a6087c1025124b4ea3e5b1a71e3cc15f"
          className="object-contain shrink-0 w-6 aspect-square"
          alt="Edit icon"
        />
      </button>
    </div>
  );
};

const Footer = () => {
  const handleSocialClick = (platform) => {
    console.log(`Redirigiendo a ${platform}`);
    // Lógica para redirección a redes sociales
  };

  return (
    <div className="flex relative flex-col px-16 py-24 mt-10 w-full text-xl text-center text-white min-h-[209px] max-md:px-5 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b708494abc0c92a344e20f877db113f79b8c86d?placeholderIfAbsent=true&apiKey=a6087c1025124b4ea3e5b1a71e3cc15f"
        className="object-cover absolute inset-0 size-full"
        alt="Footer background"
      />
      <div className="relative z-10">
        Copyright © 2025 - Spotmet | Síguenos:{" "}
        <button 
          className="font-bold hover:underline cursor-pointer"
          onClick={() => handleSocialClick('Instagram')}
        >
          Instagram
        </button>{" "}
        |{" "}
        <button 
          className="font-bold hover:underline cursor-pointer"
          onClick={() => handleSocialClick('Facebook')}
        >
          Facebook
        </button>
      </div>
    </div>
  );
};

// Los demás componentes (BannerSection, DashboardNavigation, MainContent, PerfilDeAdmin) 
// permanecen iguales pero usando los componentes actualizados donde corresponda

// ... (Los demás componentes mantienen su estructura básica pero usando las versiones actualizadas)
