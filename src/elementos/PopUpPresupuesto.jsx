import React, { useState } from 'react';


const PopupPresupuesto = ({ isOpen, onClose }) => {
    const [datos, setDatos] = useState({ nombre: '', empresa: '', email: '', detalle: '' });
  
    const manejarCambio = (e) => {
      setDatos({ ...datos, [e.target.name]: e.target.value });
    };
  
    const manejarEnvio = (e) => {
      e.preventDefault();
      console.log("Presupuesto solicitado:", datos);
      onClose();
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl relative">
          <button onClick={onClose} className="absolute top-3 right-4 text-gray-600 hover:text-black text-xl">×</button>
          <h2 className="text-2xl font-semibold mb-4 text-center">Solicitud de Presupuesto</h2>
          <form onSubmit={manejarEnvio} className="flex flex-col gap-3">
            <input name="nombre" onChange={manejarCambio} value={datos.nombre} required placeholder="Nombre" className="p-2 border rounded" />
            <input name="empresa" onChange={manejarCambio} value={datos.empresa} placeholder="Empresa" className="p-2 border rounded" />
            <input name="email" onChange={manejarCambio} value={datos.email} required type="email" placeholder="Email" className="p-2 border rounded" />
            <textarea name="detalle" onChange={manejarCambio} value={datos.detalle} required placeholder="Detalle del proyecto o productos" rows={4} className="p-2 border rounded"></textarea>
            <button type="submit" className="bg-naranjaRosfin text-white py-2 rounded hover:bg-[#d65c1c]">Solicitar</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default PopupPresupuesto;
