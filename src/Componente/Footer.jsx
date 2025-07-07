"use client";
import React from "react";
import "./Header-Footer.css"; 
import { useNavigate } from "react-router-dom";



function Footer() {
  const navigate = useNavigate();

  return (
      <div className="footera-section">
        <div className="footera-text">
          Copyright © 2025 - Spotmet | Síguenos:{" "}
          <span className="footera-bold">Instagram</span> |{" "}
          <span className="footera-bold">Facebook</span>
        </div>
      </div>
  
  )
}

export default Footer;
