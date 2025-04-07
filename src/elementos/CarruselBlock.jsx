import Marquee from "react-fast-marquee";

export default function CarruselBlock() {
  const images = [
    "/img/marcas/logo1.svg",
    "/img/marcas/logo2.svg",
    "/img/marcas/logo3.svg",
    "/img/marcas/logo4.svg",
    "/img/marcas/logo5.png",
    "/img/marcas/logo6.svg",
    "/img/marcas/logo7.svg",
    "/img/marcas/logo8.svg",
  ];

  return (
    <Marquee
      speed={80} // Ajusta la velocidad (más alto = más rápido)
      loop={0} // 0 significa que es infinito
      gradient={true} // Activa el difuminado en los bordes
      gradientWidth={100} // Ajusta la anchura del gradiente
      gradientColor="#CBCBCB" // Color del difuminado
      pauseOnHover={true} // Pausa el carrusel al pasar el mouse
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Marca ${index + 1}`}
          style={{ height: "80px", margin: "0 50px" }} // "mx-10" para agregar más espacio entre íconos
        />
      ))}
    </Marquee>
  );
}
