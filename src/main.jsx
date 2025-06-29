import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Home/PaginaPrincipal";
import Login from "./IniciarSesion/IniciarSesion";
import Register from "./Registrar/RegistrarUsuario";
import Header from "./Componente/Header";
import Footer from "./Componente/Footer";

import Reseñas from "./Reseña/Reseña";
import VerEspaciosGeneral from "./VerEspacio/VerEspacio";

const root = document.getElementById("root");
//Cambiamos algo 
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Header />
    <main className="main-container">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reseñas" element={<Reseñas/>} />
        <Route path="/ver-espacios" element={<VerEspaciosGeneral/>} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);