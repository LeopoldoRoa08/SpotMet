"use client";
import React from "react";
import "./Header-Footer.css"; 
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header-section">
      <div className="header-content">
        <div></div>
        {/* Logo que redirige a Registro */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/5ad1804f5fd6181303a513808017ff63ef5aa460?placeholderIfAbsent=true"
          className="logo-main"
          alt="Logo"
          onClick={() => navigate('/Register')}
          style={{ cursor: "pointer" }}
        />
        <div className="nav-icons">
          <div className="icon-group">
            {/* Icono que redirige a Iniciar Sesión */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/838c6ce7c2e92242362fe03e3bc5e25d051e820f?placeholderIfAbsent=true"
              className="icon-medium"
              alt="Icon"
              onClick={() => navigate('/Login')}
              style={{ cursor: "pointer" }}
            />
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/d87282eddaec632a6dc20f49a03ba37a632b0142?placeholderIfAbsent=true"
            className="icon-square"
            alt="Icon"
          />
        </div>
      </div>
    </div>
  )
}

export default Header;