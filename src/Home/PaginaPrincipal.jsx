"use client";
import React from "react";
import "./PaginaPrincipal.css";
import { useNavigate } from "react-router-dom";

function PaginaPrincipal() {
  const navigate = useNavigate();
  
  return (
    <div className="pagina-principal">

      <div className="hero-section-home">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/5e88f684d9912220bfe00b6306d4ab1567ad610f?placeholderIfAbsent=true"
          className="hero-background-home"
          alt="Background"
        />
        <p className="home-hero-text">
          <span className="home-hero-text-bold">Alquiler</span>{" "}
          <span className="home-hero-text-normal">de Espacios en la{" "}</span>
          <span className="home-hero-text-unimet">UNIMET</span>
        </p>
      </div>

      <div className="home-orange-section">
        <div className="home-orange-content">
          <div className="home-text-column">
            <div className="home-description-text">
              <span className="home-description-normal">Convierte cada espacio en la</span>{" "}
              <span className="home-description-bold">Universidad Metropolitana</span>
              <span className="home-description-normal">
                {" "}
                en el escenario perfecto para tu próxima gran idea. ¡Descubre,
                reserva y hazlo tuyo!
              </span>
            </div>
          </div>
          <div className="home-image-column">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/d492487a21e50556dfc12aa97cd0849e71280948?placeholderIfAbsent=true"
              className="home-orange-image"
              alt="Universidad"
            />
          </div>
        </div>
      </div>

      <div className="home-opportunity-section">
        <span className="home-opportunity-text-normal">¡Más que espacios, somos la{" "}</span>
        <span className="home-opportunity-text-bold">oportunidad{" "}</span>
        <span className="home-opportunity-text-normal">para</span>
        <span className="home-opportunity-text-bold">{" "}crear, aprender y conectar</span>
        <span className="home-opportunity-text-normal">{" "}con los</span>{" "}
        <span className="home-opportunity-text-orange">estudiantes</span>
        <span className="home-opportunity-text-bold">!</span>
      </div>

      <div className="home-explore-section">
        <div className="home-explore-content">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/0c06466c5fac065a53d33aa8feb4aa1956f7f7d6?placeholderIfAbsent=true"
            className="home-explore-background"
            alt="Background"
          />
          <div className="home-explore-banner">
            <div className="home-banner-content">
              <div className="home-banner-text">
                Descubre el{" "}
                <span className="home-banner-text-bold">lugar perfecto</span> para tu
                evento y<br />
                elige<span className="home-banner-text-medium"> cómo </span>hacer tu
                reserva
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/2c9ec2306b714ea6a32e622c4aa3b9f1a948fd6f?placeholderIfAbsent=true"
                className="home-banner-icon"
                alt="Icon"
              />
            </div>
          </div>
          <div className="home-explore-title">
            Explore los espacios
          </div>
          <div className="home-explore-button-section">
            <div className="home-explore-button"
            onClick={() => navigate('/ver-espacios')}
            style={{ cursor: "pointer" }}
            >
              Ver Espacios
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default PaginaPrincipal;
