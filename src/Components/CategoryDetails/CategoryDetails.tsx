import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import CategorySide from '../CategorySide/CategorySide';
import './CategoryDetails.css';

// Importando as imagens diretamente
import carretaAgricolaImg from '../../Assets/Img/carreta_agricola.jpeg';
import tratorImg from '../../Assets/Img/rocadeira_frontal.jpg';

interface CategoryDetailsProps {
    category?: string;
}

const CategoryDetails: React.FC<CategoryDetailsProps> = ({ category }) => {
    const exampleProducts = [
        {
            name: "Motocultivador X200",
            image: carretaAgricolaImg, // Usando a imagem importada
            originalPrice: "R$ 5.000,00",
            discountPrice: "R$ 4.500,00",
            pixPrice: "R$ 4.300,00",
            installment: "R$ 750,00",
            installments: "6x",
            hasInterest: false,
            discount: "10%"
        },
        {
            name: "Trator TS300",
            image: tratorImg, // Usando a imagem importada
            originalPrice: "R$ 8.000,00",
            discountPrice: "R$ 7.200,00",
            pixPrice: "R$ 7.000,00",
            installment: "R$ 1.200,00",
            installments: "7x",
            hasInterest: true,
            discount: "5%"
        }, {
            name: "Trator TS300",
            image: tratorImg, // Usando a imagem importada
            originalPrice: "R$ 8.000,00",
            discountPrice: "R$ 7.200,00",
            pixPrice: "R$ 7.000,00",
            installment: "R$ 1.200,00",
            installments: "7x",
            hasInterest: true,
            discount: "5%"
        },
        {
            name: "Motocultivador X200",
            image: carretaAgricolaImg, // Usando a imagem importada
            originalPrice: "R$ 5.000,00",
            discountPrice: "R$ 4.500,00",
            pixPrice: "R$ 4.300,00",
            installment: "R$ 750,00",
            installments: "6x",
            hasInterest: false,
            discount: "10%"
        },
        {
            name: "Motocultivador X200",
            image: carretaAgricolaImg, // Usando a imagem importada
            originalPrice: "R$ 5.000,00",
            discountPrice: "R$ 4.500,00",
            pixPrice: "R$ 4.300,00",
            installment: "R$ 750,00",
            installments: "6x",
            hasInterest: false,
            discount: "10%"
        }

    ];

    return (
        <div className="category-details">
            <CategorySide />
            <div className="product-section">
                {exampleProducts.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </div>
    );
};

export default CategoryDetails;
