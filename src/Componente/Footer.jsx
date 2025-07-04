"use client";
import React from "react";
import "./Header-Footer.css"; 
import { useNavigate } from "react-router-dom";



function Footer() {
  const navigate = useNavigate();

  return (
      <div className="footer-section">
        <div className="footer-text">
          Copyright © 2025 - Spotmet | Síguenos:{" "}
          <span className="footer-bold">Instagram</span> |{" "}
          <span className="footer-bold">Facebook</span>
        </div>
        
      </div>
  
  )
}

export default Footer;
