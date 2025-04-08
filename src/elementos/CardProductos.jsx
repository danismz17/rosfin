import React, { useState } from 'react';

const CardProductos = ({ producto }) => {
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

  return (
    <div
      style={{
        width: "350px",
        height: "520px",
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

      <h5 className="mt-2 text-center leading-none">{nombre}</h5>
      {descripcion && (
        <p className="text-xs pb-4 text-blancoRosfin text-center font-md mt-4">{descripcion}</p>
      )}

      <span className="w-48 flex justify-center items-center mt-2">
        <img src={ImagenArticulo || "/icons/default.png"} alt={nombre} />
      </span>



      <div className="w-full flex justify-center items-centergap-x-0">

      <ol className="w-full pl-12 flex justify-center flex-col items-start gap-y-2 mt-4">
        <li className="flex gap-x-4 justify-center items-center">
          <span className="w-6">
            <img src='/product-icons/material.png' alt="" />
          </span>
          <p className="text-xs text-white">{tipoMaterial}</p>
        </li>

        <li className="flex gap-x-4 justify-center items-center">
          <span className="w-6">
          <img src='/product-icons/uso.png' alt="" />
          </span>
          <p className="text-xs text-white">{uso}</p>
        </li>

        <li className="flex gap-x-4 justify-center items-center">
          <span className="w-6">
          <img src='/product-icons/stock.png' alt="" />
          </span>
          <p className="text-xs text-white">{enStock ? "En Stock" : "Sin stock"}</p>
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
                  {medida}
                </option>
              ))}
            </select>
          </li>
        )}
      </ol>



      {/* <div className="w-full flex justify-center items-center flex-col gap-x-0">
        <h3 className="text-white p-0 m-0">
          {precios[medidaSeleccionada] ? `$${precios[medidaSeleccionada]}` : 'Consultar'}
        </h3>
        <p className="text-xs pb-4 text-white">{unidadVenta}</p>
      </div> */}







      </div>
    </div>
  );
};

export default CardProductos;
