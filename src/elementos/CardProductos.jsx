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
        minHeight: "500px",
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

      <h4 className="mt-2 text-white font-bold">{nombre}</h4>
      {descripcion && (
        <p className="text-xs pb-4 text-white text-center">{descripcion}</p>
      )}

      <span className="w-36 flex justify-center items-center mt-2">
        <img src={ImagenArticulo || "/icons/default.png"} alt={nombre} />
      </span>

      <div className="w-full flex justify-center items-center flex-col gap-x-0">
        <h3 className="text-white p-0 m-0">
          {precios[medidaSeleccionada] ? `$${precios[medidaSeleccionada]}` : 'Consultar'}
        </h3>
        <p className="text-xs pb-4 text-white">{unidadVenta}</p>
      </div>

      <ol className="w-full flex justify-start flex-col items-start gap-y-2 mt-2">
        <li className="flex gap-x-2 justify-center items-center">
          <span className="w-6">
            <img src={imagen} alt="" />
          </span>
          <p className="text-xs text-white">{tipoMaterial}</p>
        </li>

        <li className="flex gap-x-2 justify-center items-center">
          <span className="w-6">
            <img src={imagen} alt="" />
          </span>
          <p className="text-xs text-white">{uso}</p>
        </li>

        <li className="flex gap-x-2 justify-center items-center">
          <span className="w-6">
            <img src={imagen} alt="" />
          </span>
          <p className="text-xs text-white">{enStock ? "En Stock" : "Sin stock"}</p>
        </li>

        {medidasArray?.length > 0 && (
          <li className="flex gap-x-2 justify-center items-center">
            <span className="w-6">
              <img src={imagen} alt="" />
            </span>
            <select
              className="text-xs p-1 rounded bg-white text-black"
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
    </div>
  );
};

export default CardProductos;
