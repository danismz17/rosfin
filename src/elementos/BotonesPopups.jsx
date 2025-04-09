import React, { useState } from 'react';
import PopupContacto from './PopupContacto';
import PopupPresupuesto from './PopUpPresupuesto';

const BotonesPopups = ({
  mostrarContacto = true,
  mostrarPresupuesto = true,
  contactoLabel = "Contactar",
  contactoIcon = "/icons/phone.svg",
  presupuestoLabel = "Presupuesto",
  presupuestoIcon = "/icons/calcu.svg",
  className = ""
}) => {
  const [openContacto, setOpenContacto] = useState(false);
  const [openPresupuesto, setOpenPresupuesto] = useState(false);

  return (
    <>
      <div className={`flex h-[48px] gap-x-20 flex-row justify-center gap-8 ${className}`}>
        {mostrarContacto && (
          <button className="btn-primary" onClick={() => setOpenContacto(true)}>
            <span>
              <img src={contactoIcon} alt="Ícono de contacto" className="icon" />
            </span>
            {contactoLabel}
          </button>
        )}

        {mostrarPresupuesto && (
          <button className="btn-primary" onClick={() => setOpenPresupuesto(true)}>
            <span>
              <img src={presupuestoIcon} alt="Ícono de presupuesto" className="icon" />
            </span>
            {presupuestoLabel}
          </button>
        )}
      </div>

      <PopupContacto isOpen={openContacto} onClose={() => setOpenContacto(false)} />
      <PopupPresupuesto isOpen={openPresupuesto} onClose={() => setOpenPresupuesto(false)} />
    </>
  );
};

export default BotonesPopups;
