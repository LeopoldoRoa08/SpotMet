import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Home/PaginaPrincipal";
import IniciarSesion from "./IniciarSesion/IniciarSesion";
import RegistrarUsuario from "./RegistrarUsuario/RegistrarUsuario";
import Header from "./Componente/Header";
import Footer from "./Componente/Footer";
import Reseñas from "./Reseña/Reseña";
import VerEspaciosGeneral from "./VerEspacioMenu/VerEspacio";
import Reservaauditorios from './Reserva/ReservaAuditorio';
import ReservarCanchas from "./Reserva/ReservaCanchas";
import Reservalab from "./Reserva/ReservaLabs";
import ReservaX from "./Reserva/ReservaMundoX";
import ReservaSala24horas from "./Reserva/ReservaSala24";
import Reservasalones from "./Reserva/ReservaSalones";
import Pagocheck from "./PagoCorrecto/PagoCorrecto";
import EspacioCrear from "./EspaciosDisponiblesCrear/EspaciosDisponiblesCrear";







const root = document.getElementById("root");
//Cambiamos algo de prueba
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Header />
    <main className="main-container">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<IniciarSesion />} />
        <Route path="/register" element={<RegistrarUsuario />} />
        <Route path="/auditorios" element={<Reservaauditorios/>} />
        <Route path="/canchas" element={<ReservarCanchas/>} />
        <Route path="/laboratorios" element={<Reservalab/>} />
        <Route path="/mundox" element={<ReservaX/>} />
        <Route path="/pago" element={<Pagocheck/>} />
        <Route path="/24horas" element={<ReservaSala24horas/>} />
        <Route path="/salon" element={< Reservasalones/>} />
        <Route path="/reseñas" element={<Reseñas/>} />
        <Route path="/ver-espacios" element={<VerEspaciosGeneral/>} />
        <Route path="/espacio-crear" element={<VerEspaciosGeneral/>} />


      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);