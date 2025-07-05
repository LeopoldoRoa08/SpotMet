"use client";
import React from "react";
import "./PerfilDeAdmin.css";

const Header = () => {
  return (
    
        <nav className="nav">
          
         
        </nav>
      
    
  );
};

const DashboardSidebar = () => {
  return (
    <aside className="sidebar">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c42ec600022b3fae885d2bbdd8394046eae346c4?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
        className="sidebar-icon"
        alt="Dashboard icon"
      />
      <div className="sidebar-text">
        Dashboard
      </div>
    </aside>
  );
};

const ProfileForm = () => {
  return (
    <section className="profile-form">
      <h1 className="profile-title">
        Mis datos
      </h1>

      <div className="form-row">
        <div className="form-field">
          <label className="field-label">
            Nombres
          </label>
          <p className="field-value">
            Raúl Alejandro
          </p>
        </div>
        <div className="form-field">
          <label className="field-label">
            Apellidos
          </label>
          <p className="field-value">
            Rodriguez Matos
          </p>
        </div>
      </div>

      <div className="form-field-full">
        <label className="field-label">
          Número telefónico
        </label>
        <p className="field-value-bold">
          (0412) 123 45 67
        </p>
      </div>

      <div className="form-field-full">
        <label className="field-label">
          Correo electrónico
        </label>
        <p className="field-value-bold">
          prueba321@correo.unimet.edu.ve
        </p>
      </div>

      <button className="edit-button">
        <span className="edit-text">
          Editar datos
        </span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9699df56b7e6922dd6199e2a60cbaaca70b5e5e?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
          className="edit-icon"
          alt="Edit icon"
        />
      </button>
    </section>
  );
};



const PerfilDeAdmin = () => {
  return (
    <div className="main-container">
      <Header />

      <main className="main-content">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c59995f1f4aa347ae29cad11dca72ba40fc2c2f?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
          className="hero-banner"
          alt="Hero banner"
        />

        <div className="content-wrapper">
          <DashboardSidebar />
          <ProfileForm />
        </div>
      </main>

    </div>
  );
};

export default PerfilDeAdmin;
