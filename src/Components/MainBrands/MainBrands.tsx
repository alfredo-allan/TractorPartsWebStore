import React, { useState, useEffect } from "react";
import "./MainBrands.css";

// Dados das marcas
const brands = [
    { name: "ZMAX", icon: require("../../Assets/Img/zmax.png") },
    { name: "Vulcan Trent", icon: require("../../Assets/Img/vulcan.png") },
    { name: "Kawashima", icon: require("../../Assets/Img/kawashima.png") },
    { name: "Buffalo", icon: require("../../Assets/Img/buffalo.png") },
    { name: "Toyama", icon: require("../../Assets/Img/toyama.png") },
    { name: "Zmax", icon: require("../../Assets/Img/zmax.png") },
    { name: "Trapp", icon: require("../../Assets/Img/trapp.png") },
    { name: "Nakashi", icon: require("../../Assets/Img/nakashi.png") },
    { name: "Maquina Forte", icon: require("../../Assets/Img/maquinaforte.png") },
    { name: "Branco", icon: require("../../Assets/Img/branco.png") },
];

const MainBrands: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const visibleSlides = 5; // Número de marcas visíveis no carrossel

    // Atualiza automaticamente o índice do carrossel
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % brands.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Calcula as marcas visíveis com base no índice ativo
    const getVisibleSlides = () => {
        return brands
            .slice(activeIndex, activeIndex + visibleSlides)
            .concat(brands.slice(0, Math.max(0, activeIndex + visibleSlides - brands.length)));
    };

    return (
        <div className="main-brands-carousel container py-4">
            <h2 className="text-center mb-4">Principais Marcas</h2>
            <div className="carousel-container">
                {getVisibleSlides().map((brand, index) => (
                    <div key={index} className="carousel-slide" id="carousel-slide">
                        <img
                            src={brand.icon}
                            alt={brand.name}
                            className="brand-icon"
                            style={{ objectFit: "cover" }}
                        />
                        <span className="brand-name">{brand.name}</span>
                    </div>
                ))}
            </div>
            <div className="carousel-dots">
                {brands.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === activeIndex ? "active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default MainBrands;
