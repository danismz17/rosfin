import React from "react";

const data = [
  {
    imgSrc: "/icons/trayectoria.png",
    title: "Trayectoria",
    description: "Más de 60 años de experiencia en la industria"
  },
  {
    imgSrc: "/icons/equipo-experto.png",
    title: "Equipo Experto",
    description: "Profesionales altamente capacitados y comprometidos"
  },
  {
    imgSrc: "/icons/diseno-inteligente.png",
    title: "Diseño Inteligente",
    description: "Diseñamos nuestros productos a la medida"
  },
  {
    imgSrc: "/icons/certificaciones.png",
    title: "Certificaciones",
    description: "Cumplimos con los más altos estándares de calidad"
  }
];

const SobreNosotrosCards = () => {
  return (
<ol className="w-full flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 max-w-[600px]">
    {data.map((item, index) => (
      <li
        key={index}
        data-aos="zoom-in"
        data-aos-delay={index * 200}
        data-aos-duration="500"
        className="w-[268px] h-[225px] bg-[#4B5945] flex flex-col justify-center items-start pt-2 pb-2 px-4 text-[#D8D8D8] text-left hover:shadow-lg transition"
        style={{ borderRadius: '20px', margin: '10px', padding: '20px' }}
        data-aos-easing="ease-in-out"
      >
        <div className="w-12 h-12 mb-4 flex justify-start items-start overflow-hidden">
          <img
            src={item.imgSrc}
            alt={item.title}
            className="h-12 object-contain"
          />
        </div>
        <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
        <p className="text-sm">{item.description}</p>
      </li>
    ))}
  </div>
</ol>


  );
};

export default SobreNosotrosCards;
