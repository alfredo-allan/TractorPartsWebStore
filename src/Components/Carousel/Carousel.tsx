import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import Card from '../Card/Card';

const Carousel: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
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

    const cards = [
        {
            discountText: '12% OFF',
            productImage: 'https://via.placeholder.com/150',
            productDescription: 'Produto 1',
            oldPrice: 'R$ 100,00',
            currentPrice: 'R$ 88,00',
            pixPrice: 'R$ 80,00',
        },
        // Adicione mais cards aqui
    ];

    return (
        <Slider {...settings}>
            {cards.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </Slider>
    );
};

export default Carousel;
