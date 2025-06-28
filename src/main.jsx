import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Home/PaginaPrincipal";
import Login from "./IniciarSesion/IniciarSesion";
import Register from "./Registrar/RegistrarUsuario";
import Header from "./Componente/Header";
import Footer from "./Componente/Footer";
import ReservaAud from "./ReservaAuditorios/ReservaAuditorios";
import ReservaFurbo from "./ReservaCanchas/ReservaCanchas";
import ReservaMundoX from "./ReservaCentroMundoX/ReservaMundoX";
import ReservaLab from "./ReservaLaboratorios/ReservaLabs";
import Reserva24 from "./ReservaSala24Horas/ReservaSala24";
import Reservasalon from "./ReservaSalones/ReservaSalones";
import Reseñas from "./Reseña/Reseña";
import VerEspaciosGeneral from "./VerEspacio/VerEspacio";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Header />
    <main className="main-container">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reservaauds" element={<ReservaAud/>} />
        <Route path="/reservadep" element={<ReservaFurbo/>} />
        <Route path="/reservamundox" element={<ReservaMundoX/>} />
        <Route path="/reservalab" element={<ReservaLab/>} />
        <Route path="/reservasalones" element={<Reservasalon/>} />
        <Route path="/reserva24horas" element={<Reserva24/>} />
        <Route path="/reseñas" element={<Reseñas/>} />
        <Route path="/ver-espacios" element={<VerEspaciosGeneral/>} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);