import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Home/PaginaPrincipal";
import IniciarSesion from "./IniciarSesion/IniciarSesion";
import RegistrarUsuario from "./RegistrarUsuario/RegistrarUsuario";
import Header from "./Componente/Header";
import Footer from "./Componente/Footer";
import Reseña from "./Reseña/Reseña";
import VerEspaciosGeneral from "./VerEspacio/VerEspacio";
import Reservaauditorios from './Reserva/ReservaAuditorio';
import ReservarCanchas from "./Reserva/ReservaCanchas";
import Reservalab from "./Reserva/ReservaLabs";
import ReservaX from "./Reserva/ReservaMundoX";
import ReservaSala24horas from "./Reserva/ReservaSala24";
import Reservasalones from "./Reserva/ReservaSalones";




const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Header />
    <main className="main-container">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/iniciarsesion" element={<IniciarSesion />} />
        <Route path="/registrar" element={<RegistrarUsuario />} />
        <Route path="/auditorio" element={<Reservaauditorios/>} />
        <Route path="/canchas" element={<ReservarCanchas/>} />
        <Route path="/reseña" element={<Reseña/>} />
        <Route path="/laboratorios" element={<Reservalab/>} />
        <Route path="/mundox" element={<ReservaX/>} />
        <Route path="/sala24" element={<ReservaSala24horas/>} />
        <Route path="/salon" element={<Reservasalones/>} />
        <Route path="/ver-espacios" element={<VerEspaciosGeneral/>} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);