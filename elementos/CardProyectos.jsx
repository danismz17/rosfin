import React from 'react';

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
                <div 
                    key={index} 
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
                    <h4 
                        style={{ 
                            fontSize: '24px', 
                            color: '#D8D8D8', 
                            fontWeight: 'bold', 
                            letterSpacing: '1px' 
                        }}
                    >
                        {proyecto.title}
                    </h4>
                    <p 
                        style={{ 
                            color: '#D8D8D8', 
                            letterSpacing: '.3px' 
                        }}
                    >
                        {proyecto.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default CardProyectos;
