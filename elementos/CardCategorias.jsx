import React, { useRef } from "react";

const CardCategorias = ({ title, ico, video, cantidad }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reinicia el video al hacer hover
      videoRef.current.play().catch((error) => console.error("Error al reproducir el video:", error));
    }
  };

  return (
    <div
      style={{
        width: "270px",
        height: "400px",
        backgroundColor: "#4B5945",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "20px",
        padding: "16px",
        cursor: "pointer",
      }}
      onMouseEnter={handleMouseEnter} // ⬅ Reinicia el video en hover
    >
      {/* Contenedor del video */}
      <div
        style={{
          width: "100%",
          height: "160px",
          borderRadius: "20px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Video en loop siempre */}
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />

        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
          }}
        >
          <img
            style={{
              width: "80px",
            }}
            src={ico}
            alt={title}
          />
        </span>
      </div>

      <h3
        style={{
          fontSize: title === "Trabajos a Medida" ? "24px" : "24px", // ⬅ Cambia el tamaño si es "Trabajos a Medida"
          fontWeight: title === "Trabajos a Medida" ? "bold" : "bold",
          textAlign: "center",
          margin: "16px 0",
        }}
      >
        {title}
      </h3>
      <p className="text-blancoRosfin">{cantidad} elementos</p>
      <button className="btn-primary">Ver Artículos</button>
    </div>
  );
};

const ListaCategorias = () => {
  const categoriasElementos = [
    { title: "Mecánica", ico: "/icons/mecanicas.png", video: "/videos/mecanica.mp4", cantidad: 12 },
    { title: "Muebles", ico: "/icons/muebles.png", video: "/videos/muebles.mp4", cantidad: 15 },
    { title: "Construcción", ico: "/icons/construccion.png", video: "/videos/construccion.mp4", cantidad: 10 },
    { title: "Ferretería", ico: "/icons/ferreteria.png", video: "/videos/ferreteria.mp4", cantidad: 8 },
    { title: "Electricidad", ico: "/icons/electricidad.png", video: "/videos/electricidad.mp4", cantidad: 14 },
    { title: "Trabajos a Medida", ico: "/icons/trabajosamedida.png", video: "/videos/trabajosamedida.mp4", cantidad: 6 },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        justifyContent: "center",
      }}
    >
      {categoriasElementos.map((categoria, index) => (
        <CardCategorias
          key={index}
          title={categoria.title}
          ico={categoria.ico}
          video={categoria.video}
          cantidad={categoria.cantidad}
        />
      ))}
    </div>
  );
};

export default ListaCategorias;
