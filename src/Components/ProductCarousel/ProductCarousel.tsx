import React from 'react';
import Slider from 'react-slick';
import './ProductCarousel.css';
import ProductCard from '../ProductCard/ProductCard'; // Importando o card

const ProductCarousel: React.FC = () => {
    const products = [
        {
            id: 1,
            name: 'Rachador de Lenha 3CV RL 31250-E 220V - Kawashima',
            image: require('../../Assets/Img/rachador_lenha.png'),
            originalPrice: 'R$ 8.766,00', // Preço original
            discountPrice: 'R$ 7.696,81', // Preço com desconto
            installment: 'R$ 769,68', // Valor das parcelas
            pixPrice: 'R$ 6.927,13', // Preço no PIX
            installments: '10x', // Quantidade de parcelas
            hasInterest: false, // Indica se possui juros
            discount: '12%', // Porcentagem de desconto
        },
        {
            id: 2,
            name: 'Rachador de Lenha 3CV RL 31250-E 220V - Kawashima',
            image: require('../../Assets/Img/rachador_lenha.png'),
            originalPrice: 'R$ 8.766,00', // Preço original
            discountPrice: 'R$ 7.696,81', // Preço com desconto
            installment: 'R$ 769,68', // Valor das parcelas
            pixPrice: 'R$ 6.927,13', // Preço no PIX
            installments: '10x', // Quantidade de parcelas
            hasInterest: false, // Indica se possui juros
            discount: '12%', // Porcentagem de desconto
        },
        {
            id: 3,
            name: 'Rachador de Lenha 3CV RL 31250-E 220V - Kawashima',
            image: require('../../Assets/Img/rachador_lenha.png'),
            originalPrice: 'R$ 8.766,00', // Preço original
            discountPrice: 'R$ 7.696,81', // Preço com desconto
            installment: 'R$ 769,68', // Valor das parcelas
            pixPrice: 'R$ 6.927,13', // Preço no PIX
            installments: '10x', // Quantidade de parcelas
            hasInterest: false, // Indica se possui juros
            discount: '12%', // Porcentagem de desconto
        },
        {
            id: 4,
            name: 'Rachador de Lenha 3CV RL 31250-E 220V - Kawashima',
            image: require('../../Assets/Img/rachador_lenha.png'),
            originalPrice: 'R$ 8.766,00', // Preço original
            discountPrice: 'R$ 7.696,81', // Preço com desconto
            installment: 'R$ 769,68', // Valor das parcelas
            pixPrice: 'R$ 6.927,13', // Preço no PIX
            installments: '10x', // Quantidade de parcelas
            hasInterest: false, // Indica se possui juros
            discount: '12%', // Porcentagem de desconto
        },
        // Adicione outros produtos conforme necessário...
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // 4 cards no desktop
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3, // 3 cards em tablets
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2, // 2 cards no mobile
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, // 1 card em telas muito pequenas
                },
            },
        ],
    };

    return (
        <div className="product-carousel">
            <div className="carousel-title">
                <h2>Produtos em Destaque</h2>
            </div>
            <Slider {...settings}>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        image={product.image}
                        originalPrice={product.originalPrice}
                        discountPrice={product.discountPrice}
                        pixPrice={product.pixPrice}
                        installment={product.installment}
                        installments={product.installments}
                        hasInterest={product.hasInterest}
                        discount={product.discount}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default ProductCarousel;
