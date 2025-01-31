import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import CategorySide from '../CategorySide/CategorySide';
import './CategoryDetails.css';

// Importando as imagens diretamente
import carretaAgricolaImg from '../../Assets/Img/carreta_agricola.jpeg';
import pulverizadorgsImg from '../../Assets/Img/pulverizador_gasolina.webp';
import bombapulverizacaoImg from '../../Assets/Img/bomba-pulverizacao.webp';
import bombapulverizacaos40Img from '../../Assets/Img/bomba-pulverizacaos40.webp'
import tratordissel25cvImg from '../../Assets/Img/trator-dissel-cv25.webp'
import motoculticadordisseImg from '../../Assets/Img/motocultivador-dissel.webp'
import motoculticadorgasolina75cvImg from '../../Assets/Img/motocultivadorgasolinacv75.webp'
import microtratordisselbraconImg from '../../Assets/Img/microtratordissebranco.webp'
import MicrotratorDiesel18CVBTDImg from '../../Assets/Img/MicrotratorDiesel18CVBTD-18.0E.webp'
import CarretaAgrícolaBasculanteTC500Img from '../../Assets/Img/CarretaAgrícolaBasculanteTC500-B.webp'



interface CategoryDetailsProps {
    category?: string;
}

const CategoryDetails: React.FC<CategoryDetailsProps> = ({ category }) => {
    const exampleProducts = [
        {
            name: "Carreta Basculante 601 Com Pneu - Gio Implementos",
            image: carretaAgricolaImg, // Usando a imagem importada
            originalPrice: "R$ 3.832,29",
            discountPrice: "R$ 3.449,570",
            pixPrice: "R$ 3.449,57",
            installment: "R$ 383,29",
            installments: "10x",
            hasInterest: false,
            discount: "10%"
        },
        {
            name: "Pulverizador à Gasolina 130L S40- R - PulMac",
            image: pulverizadorgsImg, // Usando a imagem importada
            originalPrice: "R$ R$ 7.264,25",
            discountPrice: "R$ 7.200,00",
            pixPrice: "R$ 7.000,00",
            installment: "R$ 726,43",
            installments: "10x",
            hasInterest: true,
            discount: ""
        }, {
            name: "Bomba para Pulverização Agrícola S70-F Ferro - Kawashima",
            image: bombapulverizacaoImg, // Usando a imagem importada
            originalPrice: "R$ 1.537,65",
            discountPrice: "R$ 1.350,09",
            pixPrice: "R$ 1.215,08",
            installment: "R$ 135,01",
            installments: "10x",
            hasInterest: true,
            discount: "12%"
        },
        {
            name: "Bomba para Pulverização Agrícola S40-F Ferro - Kawashima",
            image: bombapulverizacaos40Img, // Usando a imagem importada
            originalPrice: "R$ 795,96",
            discountPrice: "R$ 748,18",
            pixPrice: "R$ 673,36",
            installment: "R$ 74,82",
            installments: "10x",
            hasInterest: false,
            discount: "6%"
        },
        {
            name: "Trator à Diesel 25CV TRD 253 4 x 4 Direção Hidráulica - Kawashima",
            image: tratordissel25cvImg, // Usando a imagem importada
            originalPrice: "",
            discountPrice: "R$ 121.873,06",
            pixPrice: "R$ 109.685,75",
            installment: "R$ 12.187,31",
            installments: "10x",
            hasInterest: false,
            discount: ""
        },
        {
            name: "Motocultivador à Diesel 10CV BFD 1120 Part. Manual - Buffalo",
            image: motoculticadordisseImg, // Usando a imagem importada
            originalPrice: "R$ 9.280,97",
            discountPrice: "R$ 7.882,13",
            pixPrice: "R$ 7.093,92",
            installment: "R$ 788,21",
            installments: "10x",
            hasInterest: false,
            discount: "12%"
        },
        {
            name: "Motocultivador à Gasolina 7,5CV BTTG-7.5-800 Part. Manual - Branco",
            image: motoculticadorgasolina75cvImg, // Usando a imagem importada
            originalPrice: "R$ 6.635,15",
            discountPrice: "R$ 6.275,77",
            pixPrice: "R$ 5.648,19",
            installment: "R$ 627,58",
            installments: "10x",
            hasInterest: false,
            discount: "5%"
        },
        {
            name: "Microtrator à Diesel 18CV BTD-18.0 Part. Elétrica sem Enxadas Rotativas - Branco",
            image: microtratordisselbraconImg, // Usando a imagem importada
            originalPrice: "R$ 28.166,17",
            discountPrice: "R$ 26.166,17",
            pixPrice: "R$ 23.549,55",
            installment: "R$ 2.616,62",
            installments: "10x",
            hasInterest: false,
            discount: "7%"
        },
        {
            name: "Microtrator à Diesel 18CV BTD- 18.0E Part.Elétrica com Enxadas Rotativas - Branco",
            image: MicrotratorDiesel18CVBTDImg, // Usando a imagem importada
            originalPrice: "R$ 35.685,33",
            discountPrice: "R$ 31.954,63",
            pixPrice: "R$ 28.759,17",
            installment: "R$ 3.195,46",
            installments: "10x",
            hasInterest: false,
            discount: "10%"
        },
        {
            name: "Carreta Agrícola Basculante TC 500-B p/ Motocultivador - Kawashima",
            image: CarretaAgrícolaBasculanteTC500Img, // Usando a imagem importada
            originalPrice: "R$ 9.750,66",
            discountPrice: "R$ 8.125,97",
            pixPrice: "R$ 7.313,37",
            installment: "R$ 812,60",
            installments: "10x",
            hasInterest: false,
            discount: "24%"
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
