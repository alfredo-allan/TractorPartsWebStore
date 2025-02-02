import React from 'react';
import Slider from 'react-slick';
import './ProductCarousel.css';
import ProductCard from '../ProductCard/ProductCard'; // Importando o card

const ProductCarousel: React.FC = () => {
    const products = [
        {
            id: 1,
            name: 'Microtrator à Diesel 18CV ZT 18 Part. Elétrica com Enxadas Rotativas - Kawashima ',
            image: require('../../Assets/Img/microtratorzt18.webp'),
            originalPrice: 'R$ 29.833,60', // Preço original
            discountPrice: 'R$ 23.245,72', // Preço com desconto
            installment: 'R$ 2.324,57', // Valor das parcelas
            pixPrice: 'R$ 20.921,15', // Preço no PIX
            installments: '10x', // Quantidade de parcelas
            hasInterest: false, // Indica se possui juros
            discount: '22%', // Porcentagem de desconto
        },
        {
            id: 2,
            name: 'Microtrator à Diesel 18CV BFDE 180 Part. Elétrica com Enxadas Rotativas - Buffalo ',
            image: require('../../Assets/Img/microtratorbfde180.webp'),
            originalPrice: 'R$ 32.477,91', // Preço original
            discountPrice: 'R$ 25.658,37', // Preço com desconto
            installment: 'R$ 2.565,84', // Valor das parcelas
            pixPrice: 'R$ 23.092,53', // Preço no PIX
            installments: '10x', // Quantidade de parcelas
            hasInterest: false, // Indica se possui juros
            discount: '21%', // Porcentagem de desconto
        },
        {
            id: 3,
            name: 'Motor à Gasolina BFG 18CV Marine Part. Manual - Buffalo ',
            image: require('../../Assets/Img/motorbfg180.webp'),
            originalPrice: 'R$ 3.033,44', // Preço original
            discountPrice: 'R$ 2.676,07', // Preço com desconto
            installment: 'R$ 267,61', // Valor das parcelas
            pixPrice: 'R$ 2.408,46', // Preço no PIX
            installments: '10x', // Quantidade de parcelas
            hasInterest: false, // Indica se possui juros
            discount: '12%', // Porcentagem de desconto
        },
        {
            id: 4,
            name: 'Gerador a Gasolina 10 kVA BFGE 10.000 Plus Monofásico 115/230V Part. Elétrica - Buffalo',
            image: require('../../Assets/Img/motogeradorbfe10000.webp'),
            originalPrice: 'R$ 7.998,79', // Preço original
            discountPrice: 'R$ 7.668,13', // Preço com desconto
            installment: 'R$ 766,81', // Valor das parcelas
            pixPrice: 'R$ 6.901,32', // Preço no PIX
            installments: '10x', // Quantidade de parcelas
            hasInterest: false, // Indica se possui juros
            discount: '4%', // Porcentagem de desconto
        },
        {
            id: 5,
            name: 'Motor à Diesel BFDE 13CV Part. Elétrica Radiador - Buffalo',
            image: require('../../Assets/Img/motorbfdedissel.webp'),
            originalPrice: 'R$ 6.989,90', // Preço original
            discountPrice: 'R$ 6.467,29', // Preço com desconto
            installment: 'R$ 646,73', // Valor das parcelas
            pixPrice: 'R$ 5.820,56', // Preço no PIX
            installments: '10x', // Quantidade de parcelas
            hasInterest: false, // Indica se possui juros
            discount: '4%', // Porcentagem de desconto
        },
        {
            id: 6,
            name: 'Microtrator à Diesel 18CV BTD-18.0E Part. Elétrica com Enxadas Rotativas - Branco',
            image: require('../../Assets/Img/microtatorbtd180.webp'),
            originalPrice: 'R$ 35.685,33', // Preço original
            discountPrice: 'R$ 31.954,63', // Preço com desconto
            installment: 'R$ 3.195,46', // Valor das parcelas
            pixPrice: 'R$ 28.759,17', // Preço no PIX
            installments: '10x', // Quantidade de parcelas
            hasInterest: false, // Indica se possui juros
            discount: '10%', // Porcentagem de desconto
        },
        {
            id: 7,
            name: 'Microtrator à Diesel 13CV BFDE 130 Part. Elétrica com Enxadas Rotativas - Buffalo ',
            image: require('../../Assets/Img/microtratorBFDE130.webp'),
            originalPrice: 'R$ 23.573,57', // Preço original
            discountPrice: 'R$ 21.539,38', // Preço com desconto
            installment: 'R$ 2.153,94', // Valor das parcelas
            pixPrice: 'R$ 19.385,44', // Preço no PIX
            installments: '10x', // Quantidade de parcelas
            hasInterest: false, // Indica se possui juros
            discount: '9%', // Porcentagem de desconto
        },
        {
            id: 8,
            name: 'Valetadeira à Gasolina 15CV VG 15164-R Part. Manual - Kawashima',
            image: require('../../Assets/Img/valeteiraKawashima.webp'),
            originalPrice: 'R$ 21.862,20', // Preço original
            discountPrice: 'R$ 20.862,20', // Preço com desconto
            installment: 'R$ 2.086,22', // Valor das parcelas
            pixPrice: 'R$ 18.775,98', // Preço no PIX
            installments: '10x', // Quantidade de parcelas
            hasInterest: false, // Indica se possui juros
            discount: '0%', // Porcentagem de desconto
        },
        {
            id: 8,
            name: 'Valetadeira à Gasolina 15CV VG 15164-R Part. Manual - Kawashima',
            image: require('../../Assets/Img/cortadordegramaelecoidal.webp'),
            originalPrice: 'R$ 16.631,73', // Preço original
            discountPrice: 'R$ 14.248,44', // Preço com desconto
            installment: 'R$ 1.424,84', // Valor das parcelas
            pixPrice: 'R$ 12.823,60', // Preço no PIX
            installments: '10x', // Quantidade de parcelas
            hasInterest: false, // Indica se possui juros
            discount: '14%', // Porcentagem de desconto
        },
        // Adicione outros produtos conforme necessário...
    ];

    const settings = {
        dots: true, // Habilita os indicadores (pontos)
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true, // Ativa os botões de navegação
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
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
