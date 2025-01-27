import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
    name: string;
    image: string;
    originalPrice: string;
    discountPrice: string;
    pixPrice: string;
    installment: string;
    installments: string;
    hasInterest: boolean;
    discount: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    name,
    image,
    originalPrice,
    discountPrice,
    pixPrice,
    installment,
    installments,
    hasInterest,
    discount,
}) => {
    return (
        <div className="product-card">
            {discount && <span className="discount-badge">{discount} OFF</span>}
            <img src={image} alt={name} className="product-image" />
            <h3 className="product-name">{name}</h3>
            <div className="product-prices">
                <span className="original-price">{originalPrice}</span>
                <span className="discount-price">{discountPrice}</span>
                <div className="installments">
                    <span className="text until">em até</span>
                    <span className="text parcels">
                        <b>{installments}</b>
                    </span>
                    <span className="text of">de</span>
                    <span className="text parcel-price">
                        <b>{installment}</b>
                    </span>
                    <span className="text interest">
                        {hasInterest ? 'com juros' : ' sem juros'}
                    </span>
                </div>
                <span className="pix-price">{pixPrice} no pix</span>
            </div>
            <div className="payment-icons">
                <img
                    src={require('../../Assets/Img/card.png')}
                    alt="Cartão"
                    className="payment-card"
                />
                <img
                    src={require('../../Assets/Img/pix.png')}
                    alt="Pix"
                    className="payment-pix"
                />
            </div>
            <button className="buy-button">Comprar</button>
        </div>
    );
};

export default ProductCard;
