import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./Home/PaginaPrincipal";
import Login from "./Iniciar sesion/IniciarSesion";
import Register from "./Registrar/RegistrarUsuario";
import Header from "./Componente/Header";
import Footer from "./Componente/Footer";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  {/* Aquí pongo el header para que se vea en todas las páginas */}
  <Header/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

    </Routes>
  <Footer/>
    {/* Footer para que esté en todas las páginas */}
  </BrowserRouter>
);


//*Aquí se conectan todas las páginas