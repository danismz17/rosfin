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
        <ol className="flex flex-wrap gap-4 justify-center">
            {data.map((item, index) => (
                <li
                    key={index}
                    data-aos="zoom-in" // Efecto de entrada desde el centro
                    data-aos-delay={index * 200} // Retraso basado en el índice
                    data-aos-duration="500" // Duración de la animación
                    style={
                        {
                            width: '268px',
                            height: '225px',
                            backgroundColor: '#4B5945',
                            borderRadius: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'start',
                            paddingTop: '8px',
                            paddingBottom: '8px',
                            paddingInline: '16px',
                            color: '#D8D8D8',
                            textAlign: 'start',
                            margin: '8px',
                        }
                    }
                >
                    <img src={item.imgSrc} alt={item.title} className="object-contain" style={{height:'48px'}} />
                    <h4>{item.title}</h4>
                    <p className='p-cards'>{item.description}</p>
                </li>
            ))}
        </ol>
    );
};

export default SobreNosotrosCards;
