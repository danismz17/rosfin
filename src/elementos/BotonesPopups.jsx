import React, { useState } from 'react';
import PopupContacto from './PopupContacto';
import PopupPresupuesto from './PopUpPresupuesto';

const BotonesPopups = ({
  texto = "Botón",
  color = "bg-negroRosfin",
  icono = null, 
  funcion = "", // modalContacto | modalPresupuesto | irAHome
  className = ""
}) => {
  const [openContacto, setOpenContacto] = useState(false);
  const [openPresupuesto, setOpenPresupuesto] = useState(false);

  const handleClick = () => {
    switch (funcion) {
      case "modalContacto":
        setOpenContacto(true);
        break;
  
      case "modalPresupuesto":
        setOpenPresupuesto(true);
        break;
  
      case "iraHome":
        localStorage.setItem('scrollToCategoria', 'true');
        window.location.href = "/";
        break;
  
      case "iraGaleria":
        localStorage.setItem('scrollToCategoria', 'true');
        window.location.href = "/galeria";
        break;
  
      default:
        break;
    }
  };

  const hoverColor = color === "bg-negroRosfin"
  ? "hover:bg-gray-950"
  : color === "bg-naranjaRosfin"
  ? "hover:bg-orange-400"
  : "hover:opacity-80"; // fallback si el color es otro
  

  return (
    <>
      <button
        className={`btn-primary ${color} text-blancoRosfin ${hoverColor} min-w-[180px] flex items-center justify-center gap-2 px-6 py-4 rounded-md ${className}`}
        onClick={handleClick}
      >
        {icono && (
          <img src={icono} alt="ícono" className="w-5 h-5" />
        )}
        {texto}
      </button>

      <PopupContacto isOpen={openContacto} onClose={() => setOpenContacto(false)} />
      <PopupPresupuesto isOpen={openPresupuesto} onClose={() => setOpenPresupuesto(false)} />
    </>
  );
};

export default BotonesPopups;
