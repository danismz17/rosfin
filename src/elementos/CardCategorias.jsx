import React, { useRef } from "react";
import categorias from '../data/categorias.json';

const CardCategorias = ({ title, ico, video, cantidad, slug }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((error) =>
        console.error("Error al reproducir el video:", error)
      );
    }
  };

  return (
    <a href={`/categorias/${slug}`} style={{ textDecoration: 'none' }}>
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
        onMouseEnter={handleMouseEnter}
      >
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
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            margin: "16px 0",
            color: "#ffffff",
          }}
        >
          {title}
        </h3>
        <p className="p-cards text-blancoRosfin">{cantidad} elementos</p>
        <button className="btn-primary">Ver Artículos</button>
      </div>
    </a>
  );
};

const ListaCategorias = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        justifyContent: "center",
      }}
    >
      {categorias.map((categoria, index) => (
        <CardCategorias
          key={index}
          title={categoria.title}
          ico={categoria.ico}
          video={categoria.video}
          cantidad={categoria.cantidad}
          slug={categoria.slug}
        />
      ))}
    </div>
  );
};

export default ListaCategorias;
