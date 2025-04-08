import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CardProductos from '../elementos/CardProductos';

const ListaProductos = ({ productos, iconoCategoria }) => {
    const [busqueda, setBusqueda] = useState('');

    const productosFiltrados = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <>
            {/* BUSCADOR */}
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

            {/* CONTENEDOR DE CARDS */}
            <div className="w-full max-w-[1200px] mx-auto flex flex-wrap items-start justify-start gap-5 mt-4 p-4">
                {productosFiltrados.map((item, index) => (
                    <motion.div
                        key={item.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                        <CardProductos producto={{ ...item, imagen: iconoCategoria }} />
                    </motion.div>
                ))}

                {productosFiltrados.length === 0 && (
                    <p className="text-center text-gray-600 w-full mt-4">
                        No se encontraron productos.
                    </p>
                )}
            </div>
        </>
    );
};

export default ListaProductos;
