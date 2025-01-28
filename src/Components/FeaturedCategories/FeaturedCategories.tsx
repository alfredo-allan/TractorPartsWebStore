import React from "react";
import './FeaturedCategories.css'
// Dados das categorias com os caminhos específicos para cada imagem
const categories = [
    { name: "Geradores", icon: require("../../Assets/Img/energy.png") },
    { name: "Motores", icon: require("../../Assets/Img/car-engine.png") },
    { name: "Construção Civil", icon: require("../../Assets/Img/ct-epi.png") },
    { name: "Cortadores de Grama", icon: require("../../Assets/Img/ct-cortador-grama.png") },
    { name: "Microtratores", icon: require("../../Assets/Img/ct-microtratores.png") },
    { name: "Motocultivadores", icon: require("../../Assets/Img/ct-motocultivador.png") },
    { name: "Tratores", icon: require("../../Assets/Img/ct-trator.png") },
    { name: "Implementos", icon: require("../../Assets/Img/ct-implementos.png") },
    { name: "Trituradores", icon: require("../../Assets/Img/ct-trituradores.png") },
    { name: "Lavadoras", icon: require("../../Assets/Img/ct-lavadoras.png") },
    { name: "Roçadeiras", icon: require("../../Assets/Img/ct-racadeiras.png") },
    { name: "+ Vendidos", icon: require("../../Assets/Img/ct-mais-vendidos.png") },
];

const FeaturedCategories = () => {
    return (
        <div className="container py-4">
            <h2 className="text-center mb-4">Categorias em Destaque</h2>
            <div className="row">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="col-6 col-md-3 col-lg-2 text-center mb-4 d-flex flex-column align-items-center"
                    >
                        <div className="mb-2" style={{ width: "50px", height: "50px" }}>
                            <img
                                src={category.icon} // Caminho específico para cada imagem
                                alt={category.name}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
                        <span id="categoryName" >{category.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedCategories;
