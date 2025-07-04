import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Home/PaginaPrincipal";
import IniciarSesion from "./IniciarSesion/IniciarSesion";
import RegistrarUsuario from "./RegistrarUsuario/RegistrarUsuario";
import Header from "./Componente/Header";
import Footer from "./Componente/Footer";
import Reseñas from "./Reseña/Reseña";
import VerEspaciosGeneral from "./VerEspacioMenu/VerEspaciosGeneral";
import Reservaauditorios from './Reserva/ReservaAuditorio';
import ReservarCanchas from "./Reserva/ReservaCanchas";
import Reservalab from "./Reserva/ReservaLabs";
import ReservaX from "./Reserva/ReservaMundoX";
import ReservaSala24horas from "./Reserva/ReservaSala24";
import Reservasalones from "./Reserva/ReservaSalones";
import Pagocheck from "./PagoCorrecto/PagoCorrecto";
import VerAuditorio from "./VerEspacio/VerAuditorio";
import VerAulas from "./VerEspacio/VerAulas";
import VerCanchas from "./VerEspacio/VerCanchas";
import VerCentroMundoX from "./VerEspacio/VerCentroMundoX";
import VerLaboratorios from "./VerEspacio/VerLaboratorios";
import VerSala24 from "./VerEspacio/VerSala24";
import EditarAuditorio from "./EditarEspacio/Auditorio"
import EditarAulas from "./EditarEspacio/Aulas"
import EditarCanchas from "./EditarEspacio/CanchasEditar";
import CentroMundoXEditar from "./EditarEspacio/CentroMundoXEditar";
import LaboratoriosEditar from "./EditarEspacio/LaboratoriosEditar";
import Sala24Editar from "./EditarEspacio/Sala24Editar";
import ContactPage from "./Contactos/ContactPage";
import EspaciosDisponiblesAdministrador from "./EspacioAdministrador/EspacioDisponible";
import Dashboard from "./Tablerodeladmin/DashBoard";
import ReportesAdministrador from "./ReportesAdministrador/ReportesAdministrador";
import PerfilUsuario from "./PerfilUsuario/PerfilUsuario";
import EditarPerfilDeUsuario from "./Editarperfil/EditarPerfilDeUsuario";
import CrearEspacio from "./CrearEspacio/CrearEspacio";


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
        <Route path="/reseña" element={<Reseñas/>} />
        <Route path="/canchas" element={<ReservarCanchas/>} />
        <Route path="/laboratorios" element={<Reservalab/>} />
        <Route path="/mundox" element={<ReservaX/>} />
        <Route path="/pago" element={<Pagocheck/>} />
        <Route path="/24horas" element={<ReservaSala24horas/>} />
        <Route path="/salon" element={< Reservasalones/>} />
        <Route path="/ver-auditorio" element={<VerAuditorio/>} />
        <Route path="/ver-aulas" element={<VerAulas/>} />
        <Route path="/ver-canchas" element={<VerCanchas/>} />
        <Route path="/ver-centrox" element={<VerCentroMundoX/>} />
        <Route path="/ver-laboratorio" element={<VerLaboratorios/>} />
        <Route path="/ver-sala24" element={<VerSala24/>} />
        <Route path="/ver-espacios" element={<VerEspaciosGeneral/>} />
        <Route path="/editar-auditorio" element={<EditarAuditorio/>} />
        <Route path="/editar-aulas" element={<EditarAulas/>} />
        <Route path="/editar-canchas" element={<EditarCanchas/>} />
        <Route path="/editar-centrox" element={<CentroMundoXEditar/>} />
        <Route path="/editar-laboratorio" element={<LaboratoriosEditar/>} />
        <Route path="/editar-24" element={<Sala24Editar/>} />
        <Route path="/contactos" element={<ContactPage />} />
        <Route path="/espacioAdmin" element={<EspaciosDisponiblesAdministrador />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reportes" element={<ReportesAdministrador />} />
        <Route path="/perfil" element={<PerfilUsuario />} />
        <Route path="/crear-espacio" element={<CrearEspacio />} />
        <Route path="/editar-perfil" element={<EditarPerfilDeUsuario />} />
        
        


      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);