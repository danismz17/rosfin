import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CardProductos = ({ producto, index }) => {
  const {
    nombre,
    descripcion,
    tipoMaterial,
    ImagenArticulo,
    uso,
    enStock,
    unidadVenta,
    precioPorMedida,
    medidasDisponibles,
    medidas,
    imagen
  } = producto;

  const medidasArray = medidasDisponibles || Object.keys(precioPorMedida || medidas || {});
  const precios = precioPorMedida || medidas || {};
  const [medidaSeleccionada, setMedidaSeleccionada] = useState(medidasArray[0]);

  const capitalizarPrimeraLetra = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : '';

  function AjustarNombre({ texto }) {
    const [fontSize, setFontSize] = useState('1.25rem');

    useEffect(() => {
      if (texto.length > 30) {
        setFontSize('0.875rem');
      } else if (texto.length > 20) {
        setFontSize('1rem');
      } else {
        setFontSize('1.25rem');
      }
    }, [texto]);

    return (
      <h5
        className="mt-2 text-center text-white whitespace-nowrap overflow-hidden text-ellipsis"
        style={{ fontSize }}
      >
        {capitalizarPrimeraLetra(texto)}
      </h5>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      style={{
        width: "350px",
        height: "550px",
        backgroundColor: "#4B5945",
        borderRadius: "20px",
        position: "relative",
        display: "flex",
        overflow: "hidden",
        alignItems: "center",
        flexDirection: "column",
        padding: "16px",
      }}
    >
      <span className="w-8 flex justify-center items-center">
        <img src={imagen || "/icons/default.png"} alt={nombre} />
      </span>

      <AjustarNombre texto={nombre} />

      {descripcion && (
        <p className="text-xs pb-4 text-blancoRosfin text-center font-md ">
          {capitalizarPrimeraLetra(descripcion)}
        </p>
      )}

      <span className="w-48 flex justify-center items-center mt-2">
        <img src={ImagenArticulo || "/icons/default.png"} alt={nombre} />
      </span>

      <div className="w-full flex justify-center items-centergap-x-0">
        <ol className="w-full pl-8  flex justify-center flex-col items-start gap-y-2 mt-4">
          <li className="flex gap-x-4 justify-center items-center">
            <span className="w-6">
              <img src='/product-icons/material.png' alt="" />
            </span>
            <p className="text-xs text-white">
              {capitalizarPrimeraLetra(tipoMaterial)}
            </p>
          </li>

          <li className="flex gap-x-4 justify-center items-center">
            <span className="w-6">
              <img src='/product-icons/uso.png' alt="" />
            </span>
            <p className="text-xs text-white">
              {capitalizarPrimeraLetra(uso)}
            </p>
          </li>

          <li className="flex gap-x-4 justify-center items-center">
            <span className="w-6">
              <img src='/product-icons/stock.png' alt="" />
            </span>
            <p className="text-xs text-white">
              {enStock ? "En stock" : "Sin stock"}
            </p>
          </li>

          {medidasArray?.length > 0 && (
            <li className="flex gap-x-4 justify-center items-center">
              <span className="w-6">
                <img src='/product-icons/medidas.png' alt="" />
              </span>
              <select
                className="text-xs p-1 rounded bg-white text-black"
                style={{ width: "150px" }}
                onChange={(e) => setMedidaSeleccionada(e.target.value)}
                value={medidaSeleccionada}
              >
                {medidasArray.map((medida, index) => (
                  <option key={index} value={medida}>
                    {capitalizarPrimeraLetra(medida)}
                  </option>
                ))}
              </select>
            </li>
          )}
        </ol>
      </div>

      <div className="absolute bottom-0 left-0 w-full flex justify-between items-center px-4 pb-4">
        <span className="flex-grow h-[2px] bg-naranjaRosfin" />
        <span className="px-2">
          <p className="text-[12px] text-end text-white vina leading-tight">
            Metalmind <br /> Rosfin
          </p>
        </span>
      </div>
    </motion.div>
  );
};

export default CardProductos;
