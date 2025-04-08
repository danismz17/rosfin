
import React, { useState } from 'react';
import CardProductos from '../elementos/CardProductos';

const ListaProductos = ({ productos, iconoCategoria }) => {
  const [busqueda, setBusqueda] = useState('');

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <form className="w-full md:w-auto flex items-center justify-end mb-6">
        <input
          type="text"
          placeholder="Buscar productos..."
          className="w-full md:w-[300px] p-2 border border-gray-300 rounded-l-md focus:outline-none"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => e.preventDefault()}
          className="bg-verdeRosfin text-white px-4 py-2 rounded-r-md hover:bg-verdeRosfinDark"
        >
          Buscar
        </button>
      </form>

      <div className="w-full h-auto flex flex-wrap items-center justify-center gap-5 mt-4 p-4">
        {productosFiltrados.map((item) => (
          <CardProductos key={item.slug} producto={{ ...item, imagen: iconoCategoria }} />
        ))}

        {productosFiltrados.length === 0 && (
          <p className="text-center text-gray-600 w-full mt-4">No se encontraron productos.</p>
        )}
      </div>
    </>
  );
};

export default ListaProductos;
