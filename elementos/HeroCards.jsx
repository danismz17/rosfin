import React from 'react';

const HeroCards = () => {
    const options = [
        { title: 'Metalúrgica', video: '/videos/metalurgica.mp4' },
        { title: 'Herrería', video: '/videos/herreria.mp4' },
        { title: 'Reformas', video: '/videos/reforma de casas.mp4' },
        { title: 'Equipamiento', video: '/videos/2865276-uhd_3840_2160_30fps.mp4' },
    ];

    return (
        <ul className="flex flex-wrap justify-center items-center gap-8">
            {options.map((option, index) => (
                <li key={index} className="flex flex-col items-center space-y-4 px-8 py-8 bg-slate-300">
                    <div className="w-[200px] h-[200px] rounded-[20px] overflow-hidden">
                        <video
                            src={option.video}
                            className="w-full h-full object-cover rounded-[20px]"
                            autoPlay
                            loop
                            muted
                            playsInline
                        ></video>
                    </div>
                    <h4 className="text-[50px] font-bold text-center mt-8">{option.title}</h4>
                </li>
            ))}
        </ul>
    );
};

export default HeroCards;
