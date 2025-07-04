"use client";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./LaboratoriosEditar.css"

export const LaboratoriosEditar = ({ className = "" }) => {
  return (
    <div className={`min-h-screen bg-neutral-100 ${className}`}>
      {/* Header */}
      <header className="flex justify-between items-center p-5 shadow-sm bg-neutral-100">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-24 w-24"
        />
        <div className="flex gap-5 items-center">
          <UserIcon />
          <MenuIcon />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        <h2 className="text-right text-xl mb-8">Editar espacio</h2>
        
        {/* Photos Section */}
        <section className="mb-12">
          <h3 className="text-neutral-500 font-semibold mb-4">Fotos del espacio</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PhotoItem src="photo1.jpg" />
            <PhotoItem src="photo2.jpg" />
            <PhotoItem src="photo3.jpg" isEditable />
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-white rounded-3xl p-8 mb-12">
          <InputField label="Nombre del Espacio" value="Centro Mundo X" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-6">
            <InputField label="Capacidad Máxima" value="50" />
            <InputField label="Precio de alquiler" value="$ 120,00" />
            <InputField label="Tipo de Espacio" value="Sala" />
          </div>
          
          <TextAreaField 
            label="Descripción del Espacio" 
            value="La Universidad Metropolitana (UNIMET) está a la vanguardia..."
          />
          
          <div className="flex flex-col sm:flex-row justify-center gap-8 mt-8">
            <button className="bg-orange-600 text-white py-2 px-6 rounded-2xl font-bold">
              Guardar
            </button>
            <button className="bg-black text-white py-2 px-6 rounded-lg font-semibold">
              Eliminar
            </button>
          </div>
        </section>

        {/* Back Link */}
        <div className="flex items-center gap-2 mb-12 cursor-pointer">
          <BackArrowIcon />
          <span className="font-bold">Dashboard</span>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 text-center">
        <p>
          Copyright © 2025 - Spotmet | Síguenos: 
          <span className="font-bold"> Instagram</span> | 
          <span className="font-bold"> Facebook</span>
        </p>
      </footer>
    </div>
  );
};

// Componentes auxiliares
function UserIcon() {
  return (
    <svg width="65" height="68" viewBox="0 0 65 68" fill="#030027">
      <path d="M27.0846 34.0002C24.1055 34.0002 21.5551 32.8904 19.4336 30.671C17.3121 28.4516 16.2513 25.7835 16.2513 22.6668C16.2513 19.5502 17.3121 16.8821 19.4336 14.6627C21.5551 12.4432 24.1055 11.3335 27.0846 11.3335C30.0638 11.3335 32.6142 12.4432 34.7357 14.6627C36.8572 16.8821 37.918 19.5502 37.918 22.6668C37.918 25.7835 36.8572 28.4516 34.7357 30.671C32.6142 32.8904 30.0638 34.0002 27.0846 34.0002ZM5.41797 56.6668V48.7335C5.41797 47.1752 5.80165 45.7113 6.56901 44.3418C7.33637 42.9724 8.39714 41.9335 9.7513 41.2252C12.0534 39.9974 14.6489 38.9585 17.5378 38.1085C20.4267 37.2585 23.6089 36.8335 27.0846 36.8335H28.0326C28.3034 36.8335 28.5742 36.8807 28.8451 36.9752C28.4839 37.8252 28.1793 38.7106 27.931 39.6314C27.6827 40.5522 27.4909 41.5085 27.3555 42.5002H27.0846C23.8798 42.5002 21.0022 42.9252 18.4518 43.7752C15.9015 44.6252 13.8138 45.4752 12.1888 46.3252C11.7826 46.5613 11.4553 46.8918 11.207 47.3168C10.9588 47.7418 10.8346 48.2141 10.8346 48.7335V51.0002H27.8971C28.168 51.9918 28.5291 52.9717 28.9805 53.9397C29.4319 54.9078 29.9284 55.8168 30.4701 56.6668H5.41797ZM43.3346 59.5002L42.5221 55.2502C41.9805 55.014 41.4727 54.7661 40.9987 54.5064C40.5247 54.2467 40.0395 53.9279 39.543 53.5502L35.6159 54.8252L32.9076 50.0085L36.0221 47.1752C35.9319 46.514 35.8867 45.9002 35.8867 45.3335C35.8867 44.7668 35.9319 44.1529 36.0221 43.4918L32.9076 40.6585L35.6159 35.8418L39.543 37.1168C40.0395 36.7391 40.5247 36.4203 40.9987 36.1606C41.4727 35.9009 41.9805 35.6529 42.5221 35.4168L43.3346 31.1668H48.7513L49.5638 35.4168C50.1055 35.6529 50.6133 35.9127 51.0872 36.196C51.5612 36.4793 52.0464 36.8335 52.543 37.2585L56.4701 35.8418L59.1784 40.8002L56.0638 43.6335C56.1541 44.2002 56.1992 44.7904 56.1992 45.4043C56.1992 46.0182 56.1541 46.6085 56.0638 47.1752L59.1784 50.0085L56.4701 54.8252L52.543 53.5502C52.0464 53.9279 51.5612 54.2467 51.0872 54.5064C50.6133 54.7661 50.1055 55.014 49.5638 55.2502L48.7513 59.5002H43.3346ZM46.043 51.0002C47.5326 51.0002 48.8077 50.4453 49.8685 49.3356C50.9293 48.2259 51.4596 46.8918 51.4596 45.3335C51.4596 43.7752 50.9293 42.4411 49.8685 41.3314C48.8077 40.2217 47.5326 39.6668 46.043 39.6668C44.5534 39.6668 43.2782 40.2217 42.2174 41.3314C41.1567 42.4411 40.6263 43.7752 40.6263 45.3335C40.6263 46.8918 41.1567 48.2259 42.2174 49.3356C43.2782 50.4453 44.5534 51.0002 46.043 51.0002ZM27.0846 28.3335C28.5742 28.3335 29.8494 27.7786 30.9102 26.6689C31.9709 25.5592 32.5013 24.2252 32.5013 22.6668C32.5013 21.1085 31.9709 19.7745 30.9102 18.6647C29.8494 17.555 28.5742 17.0002 27.0846 17.0002C25.5951 17.0002 24.3199 17.555 23.2591 18.6647C22.1984 19.7745 21.668 21.1085 21.668 22.6668C21.668 24.2252 22.1984 25.5592 23.2591 26.6689C24.3199 27.7786 25.5951 28.3335 27.0846 28.3335Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="46" height="53" viewBox="0 0 46 53" fill="#EE5D08">
      <path d="M5.75 39.75V35.3333H40.25V39.75H5.75ZM5.75 28.7083V24.2917H40.25V28.7083H5.75ZM5.75 17.6667V13.25H40.25V17.6667H5.75Z" />
    </svg>
  );
}

function PhotoItem({ src, isEditable = false }) {
  return (
    <div className="relative">
      <img
        src={src}
        alt="Espacio"
        className="rounded-3xl shadow-sm w-full h-auto"
      />
      {isEditable && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 rounded-3xl">
          <EditIcon />
          <span className="text-white text-2xl font-bold mt-2">Cambiar</span>
        </div>
      )}
    </div>
  );
}

function EditIcon() {
  return (
    <svg width="47" height="46" viewBox="0 0 47 46" fill="#030027">
      <path d="M9.79167 36.4167H12.5823L31.725 17.6812L28.9344 14.95L9.79167 33.6854V36.4167ZM5.875 40.25V32.1042L31.725 6.85208C32.1167 6.50069 32.5491 6.22917 33.0224 6.0375C33.4957 5.84583 33.9934 5.75 34.5156 5.75C35.0378 5.75 35.5438 5.84583 36.0333 6.0375C36.5229 6.22917 36.9472 6.51667 37.3063 6.9L39.999 9.58333C40.3906 9.93472 40.6762 10.35 40.8557 10.8292C41.0352 11.3083 41.125 11.7875 41.125 12.2667C41.125 12.7778 41.0352 13.2649 40.8557 13.7281C40.6762 14.1913 40.3906 14.6146 39.999 14.9979L14.1979 40.25H5.875ZM30.3052 16.3396L28.9344 14.95L31.725 17.6812L30.3052 16.3396Z" />
    </svg>
  );
}

function InputField({ label, value }) {
  return (
    <div className="bg-neutral-100 p-3 rounded-xl">
      <label className="text-xs text-neutral-500">{label}</label>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  );
}

function TextAreaField({ label, value }) {
  return (
    <div className="bg-neutral-100 p-3 rounded-xl h-80">
      <label className="text-xs text-neutral-500">{label}</label>
      <div className="text-xl text-neutral-600 mt-3">{value}</div>
    </div>
  );
}

function BackArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#EA3323">
      <path d="M7.825 11L20 11V13L7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11Z" />
    </svg>
  );
}

export default LaboratoriosEditar;