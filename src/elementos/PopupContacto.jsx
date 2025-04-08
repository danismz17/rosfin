import React, { useState } from 'react';


const PopupContacto = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });

  const manejarCambio = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl relative">
        <button onClick={onClose} className="absolute top-3 right-4 text-gray-600 hover:text-black text-xl">×</button>
        <h2 className="text-2xl font-semibold mb-4 text-center">Contacto</h2>
        <form onSubmit={manejarEnvio} className="flex flex-col gap-3">
          <input name="nombre" onChange={manejarCambio} value={formData.nombre} required placeholder="Nombre" className="p-2 border rounded" />
          <input name="email" onChange={manejarCambio} value={formData.email} required type="email" placeholder="Email" className="p-2 border rounded" />
          <textarea name="mensaje" onChange={manejarCambio} value={formData.mensaje} required placeholder="Mensaje" rows={4} className="p-2 border rounded"></textarea>
          <button type="submit" className="bg-verdeRosfin text-white py-2 rounded hover:bg-verdeRosfinDark">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default PopupContacto;
