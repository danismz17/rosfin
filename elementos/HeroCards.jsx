import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const HeroCards = () => {
    const [hoverIndex, setHoverIndex] = useState(null);
    const videoRefs = useRef([]);

    const options = [
        { title: 'Metalúrgica', video: '/videos/metalurgica.mp4' },
        { title: 'Herrería', video: '/videos/herreria.mp4' },
        { title: 'Reformas', video: '/videos/reforma de casas.mp4' },
        { title: 'Equipamiento', video: '/videos/2865276-uhd_3840_2160_30fps.mp4' },
    ];

    const handleMouseEnter = (index) => {
        setHoverIndex(index);
        videoRefs.current[index]?.play();
    };

    const handleMouseLeave = (index) => {
        setHoverIndex(null);
        videoRefs.current[index]?.pause();
        videoRefs.current[index].currentTime = 0;
    };

    return (
        <ol className="flex flex-wrap justify-center items-center gap-8">
            {options.map((option, index) => (
                <motion.li
                    key={index}
                    className="flex flex-col items-center space-y-4 px-8 py-8 bg-slate-300"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    <div className="overflow-hidden">
                        <motion.video
                            ref={(el) => (videoRefs.current[index] = el)} // Referencia del video
                            src={option.video}
                            className="transition duration-300"
                            style={{
                                maxWidth: '300px', // Máximo ancho del video
                                maxHeight: '150px', // Máximo alto del video
                                objectFit: 'contain', // Escala correctamente el contenido
                                borderRadius: '20px', // Aplica borde redondeado al video
                                marginBottom: '15px', // Espaciado inferior
                                cursor: 'pointer', // Cambia el cursor en hover
                                filter:
                                    hoverIndex === index
                                        ? 'none'
                                        : 'sepia(1) hue-rotate(-15deg) saturate(2.5) brightness(1.2)',
                            }}
                            loop
                            muted
                            playsInline
                        ></motion.video>
                    </div>
                    <h4 className="text-center">
                        {option.title}
                    </h4>
                </motion.li>
            ))}
        </ol>
    );
};

export default HeroCards;
