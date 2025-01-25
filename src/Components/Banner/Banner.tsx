import React, { useState, useEffect } from 'react';
import './Banner.css';

interface BannerProps {
    desktopImage: string; // Imagem para desktop
    mobileImage: string;  // Imagem para dispositivos móveis
}

const Banner: React.FC<BannerProps> = ({ desktopImage, mobileImage }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Define largura máxima para dispositivos móveis
        };

        handleResize(); // Chamada inicial para definir o estado corretamente
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="banner">
            <img
                src={isMobile ? mobileImage : desktopImage}
                alt="Banner"
                className="banner-image"
            />
        </div>
    );
};

export default Banner;
