import React from 'react';

const data = [
    {
        title: "Calidad",
        description: "Compromiso inquebrantable con la excelencia en cada proyecto y producto que entregamos.",
    },
    {
        title: "Innovación",
        description: "Constante búsqueda de nuevas tecnologías y métodos para mejorar nuestros procesos.",
    },
    {
        title: "Responsabilidad",
        description: "Compromiso con nuestros clientes, empleados y el medio ambiente.",
    },
];

const NuestrosValores = () => {
    return (
        <ol style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '24px'
        }}>
            {data.map((item, index) => (
                <li key={index} style={{
                    width: '400px',
                    height: '225px',
                    backgroundColor: '#4B5945',
                    borderRadius: '20px',
                    color: '#D8D8D8',
                    paddingTop: '16px',
                    paddingBottom: '16px',
                    paddingInline: '16px',
                    margin: '24px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                }}>
                    <h4 style={
                        {
                            fontSize: '24px',
                            fontWeight: '600',
                            letterSpacing: '1.2px',
                            color: '#FF7F3E',
                        }}>{item.title}</h4>
                    <p style={{ fontSize: '16px', lineHeight: '1.5' }}>{item.description}</p>
                </li>
            ))}
        </ol>
    );
};

export default NuestrosValores;
