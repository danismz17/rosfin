import React from 'react';
import AOSInitializer from '../elementos/AOSInitializer';

const proyectos = [
    {
        img: "/icons/fabricacion-personalizada.svg",
        title: "Fabricación Personalizada",
        description: "Adaptamos nuestros procesos a tus especificaciones exactas"
    },
    {
        img: "/icons/trabajosamedida.svg",
        title: "Trabajos a Medida",
        description: "Diseñamos y fabricamos según tus dimensiones específicas"
    }
];

const CardProyectos = () => {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {proyectos.map((proyecto, index) => (
                <li 
                    key={index}
                    data-aos="zoom-in" // Efecto de entrada desde el centro
                    data-aos-delay={index * 200} // Retraso basado en el índice
                    data-aos-duration="800" // Duración de la animación
                    style={{
                        width: '560px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px',
                        backgroundColor: '#4B5945',
                        borderRadius: '20px',
                        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                        margin: '10px',
                    }}
                >
                    <img 
                        src={proyecto.img} 
                        alt={proyecto.title} 
                        style={{ height: '80px', marginBottom: '15px' }} 
                    />
                    <h4>
                        {proyecto.title}
                    </h4>
                    <p className='p-cards text-blancoRosfin'>
                        {proyecto.description}
                    </p>
                </li>
            ))}
        </div>
    );
};

export default CardProyectos;
