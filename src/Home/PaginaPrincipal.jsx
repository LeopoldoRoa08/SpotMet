"use client";
import React from "react";
import "./PaginaPrincipal.css";

function PaginaPrincipal() {
  return (
    <div className="pagina-principal">

      <div className="hero-section">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/5e88f684d9912220bfe00b6306d4ab1567ad610f?placeholderIfAbsent=true"
          className="hero-background"
          alt="Background"
        />
        <p className="hero-text">
          <span className="hero-text-bold">Alquiler</span>{" "}
          <span className="hero-text-normal">de Espacios en la{" "}</span>
          <span className="hero-text-unimet">UNIMET</span>
        </p>
      </div>

      <div className="orange-section">
        <div className="orange-content">
          <div className="text-column">
            <div className="description-text">
              <span className="description-normal">Convierte cada espacio en la</span>{" "}
              <span className="description-bold">Universidad Metropolitana</span>
              <span className="description-normal">
                {" "}
                en el escenario perfecto para tu próxima gran idea. ¡Descubre,
                reserva y hazlo tuyo!
              </span>
            </div>
          </div>
          <div className="image-column">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/d492487a21e50556dfc12aa97cd0849e71280948?placeholderIfAbsent=true"
              className="orange-image"
              alt="Universidad"
            />
          </div>
        </div>
      </div>

      <div className="opportunity-section">
        <span className="opportunity-text-normal">¡Más que espacios, somos la{" "}</span>
        <span className="opportunity-text-bold">oportunidad{" "}</span>
        <span className="opportunity-text-normal">para</span>
        <span className="opportunity-text-bold">{" "}crear, aprender y conectar</span>
        <span className="opportunity-text-normal">{" "}con los</span>{" "}
        <span className="opportunity-text-orange">estudiantes</span>
        <span className="opportunity-text-bold">!</span>
      </div>

      <div className="explore-section">
        <div className="explore-content">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/0c06466c5fac065a53d33aa8feb4aa1956f7f7d6?placeholderIfAbsent=true"
            className="explore-background"
            alt="Background"
          />
          <div className="explore-banner">
            <div className="banner-content">
              <div className="banner-text">
                Descubre el{" "}
                <span className="banner-text-bold">lugar perfecto</span> para tu
                evento y<br />
                elige<span className="banner-text-medium"> cómo </span>hacer tu
                reserva
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/2c9ec2306b714ea6a32e622c4aa3b9f1a948fd6f?placeholderIfAbsent=true"
                className="banner-icon"
                alt="Icon"
              />
            </div>
          </div>
          <div className="explore-title">
            Explore los espacios
          </div>
          <div className="explore-button-section">
            <div className="explore-button">
              Ver Espacios
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default PaginaPrincipal;
