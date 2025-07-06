"use client";
import React from "react";
import "./Header-Footer.css"; 
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const navigate = useNavigate();
  const sidebar = document.getElementById("sidebar");

  let location = useLocation();
  const [userEmail, setUserEmail] = useState("")
  useEffect(() => {
    setUserEmail(localStorage.getItem("user"))
    if(!["/", "/login", "/register"].includes(location.pathname) && !localStorage.getItem("user")){ 
      navigate("/login");
    }
  }, [location]);

  function toggleSidebar() {
    sidebar.classList.toggle("menu-open");
  }  

  return (
    <div className="header-section">
      <div className="header-content">
        <div className="sidebar" id="sidebar">
          <nav>
            <div className="sidebar-cerrar">
            <img 
            onClick={() => toggleSidebar()}
            src = "https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/d87282eddaec632a6dc20f49a03ba37a632b0142?placeholderIfAbsent=true" alt="boton para cerrar" className="boton-cerrar"></img>
            </div>
            <ul>
              {userEmail== "diegoadjs22@gmail.com"&&<li>
                <a href="#">
                  <img src = "https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/d629c2dee2c22b89c4e4f7ba96c0b40751484ec6?placeholderIfAbsent=true" alt="Header icon" className="header-icon"></img>
                  <span>DASHBOARD</span>
                </a>
              </li>}
              <li>
                <a href="/">
                  <img src = "https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/d629c2dee2c22b89c4e4f7ba96c0b40751484ec6?placeholderIfAbsent=true" alt="Header icon" className="header-icon"></img>
                  <span>INICIO</span>
                </a>
              </li>
              <li>
                <a href="/ver-espacios">
                  <img src = "https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/73bf00df99d1d8e96b5068d4ff0c248cc54c1e04?placeholderIfAbsent=true" alt="Ver espacios icon" className="nav-icon"></img>
                  <span>VER ESPACIOS</span>
                </a>
              </li>
              <li>
                <a href="/editar-perfil">
                  <img src = "https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/b4916fa81131025521d67cf961f0abd7fd720f02?placeholderIfAbsent=true" alt="Editar perfil icon" className="nav-icon profile"></img>  
                  <span>EDITAR PERFIL</span>
                </a>
              </li>
              <li>
                <a href="contactos">
                  <img src = "https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/c2b5d287587c9ea7108d0e685a7bd9800e4f9ad3?placeholderIfAbsent=true" alt="Contáctanos icon" className="nav-icon contact"></img>
                  <span>CONTÁCTANOS</span>
                </a>
              </li>
              <li>
                <a onClick={()=>{
                  localStorage.setItem("user","");
                  localStorage.setItem("uid","");
                  toggleSidebar();
                  navigate("/login");
                  }} href="#">
                  <img src = "https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/4bf5ec0d7ad0b5cb05d615b882a6c71761f02d2b?placeholderIfAbsent=true" alt="Cerrar sesión icon" className="nav-icon logout"></img>
                  <span>CERRAR SESIÓN</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/5ad1804f5fd6181303a513808017ff63ef5aa460?placeholderIfAbsent=true"
          className="logo-main"
          alt="Logo"
          onClick={() => navigate('/')}
          style={{ cursor: "pointer" }}
        />
        <div className="nav-icons">
          <div className="icon-group">
            <img
              src={userEmail == "diegoadjs22@gmail.com" ?
                "https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/a78025072316b6b030bb2e8cc1c369c6c9424a12?placeholderIfAbsent=true"
                : "https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/838c6ce7c2e92242362fe03e3bc5e25d051e820f?placeholderIfAbsent=true"}
              className="icon-medium"
              alt="Icon"
              onClick={() => {
                if (userEmail) {
                  navigate("/perfil");
                } else {
                  navigate("/login");
                }
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
          {userEmail && <img
            src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/d87282eddaec632a6dc20f49a03ba37a632b0142?placeholderIfAbsent=true"
            className="icon-square" id="icon-square"
            alt="Icon"
            onClick={() => toggleSidebar()}
            style={{ cursor: "pointer" }}
          />}
        </div>
      </div>
    </div>
  )
}

export default Header;
