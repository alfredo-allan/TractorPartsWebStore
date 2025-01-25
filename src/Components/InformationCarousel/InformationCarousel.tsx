import React, { useState, useEffect } from 'react';
import './InformationCarousel.css';

interface Slide {
    icon: string;
    description: string; // Descrição aceita HTML
}

const InformationCarousel: React.FC = () => {
    const slides: Slide[] = [
        {
            icon: require('../../Assets/Img/pix-ico.png'),
            description: '<strong>Até 10% desconto</strong> no pix pague menos',
        },
        {
            icon: require('../../Assets/Img/atm-card.png'),
            description: '<strong>Parcelamento fácil</strong> em até 12x sem juros',
        },
        {
            icon: require('../../Assets/Img/free-delivery.png'),
            description: '<strong>Frete grátis no Sul e Sudeste</strong> válido por tempo limitado!',
        },
        {
            icon: require('../../Assets/Img/discount-coupon.png'),
            description: '<strong>Ofertas exclusivas</strong> toda semana. Não perca',
        },
        {
            icon: require('../../Assets/Img/browsing.png'),
            description: '<strong>Loja oficial e segura</strong> verificada no mercado',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const visibleSlides = 3;

    const getVisibleSlides = () => {
        return slides.slice(activeIndex, activeIndex + visibleSlides).concat(
            slides.slice(0, Math.max(0, activeIndex + visibleSlides - slides.length))
        );
    };

    return (
        <div className="information-carousel">
            <div className="carousel-container">
                {getVisibleSlides().map((slide, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={slide.icon} alt={`Slide ${index}`} className="slide-icon" />
                        <span
                            className="slide-description"
                            dangerouslySetInnerHTML={{ __html: slide.description }}
                        ></span>
                    </div>
                ))}
            </div>
            <div className="carousel-dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default InformationCarousel;
