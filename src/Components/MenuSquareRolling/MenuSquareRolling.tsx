import React, { useState } from 'react';
import './MenuSquareRolling.css';

interface MenuSquareRollingProps {
    icon: string;
    columnsData: { icon: string; descriptions: string[] }[];
    onIconClick?: () => void; // Nova prop opcional
}

const MenuSquareRolling: React.FC<MenuSquareRollingProps> = ({ icon, columnsData, onIconClick }) => {
    const [isBoxVisible, setIsBoxVisible] = useState(false);

    const handleMouseEnter = () => {
        if (window.innerWidth > 768) {
            // Mostra o menu suspenso apenas em telas maiores
            setIsBoxVisible(true);
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth > 768) {
            setIsBoxVisible(false);
        }
    };

    const handleClick = () => {
        if (onIconClick && window.innerWidth <= 768) {
            // Aciona o menu lateral em telas menores
            onIconClick();
        }
    };

    return (
        <div
            className="menu-square-rolling"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={icon}
                alt="Menu Icon"
                className="menu-icon"
                onClick={handleClick} // Adiciona interação para clique no mobile
            />
            {isBoxVisible && (
                <div className="menu-box">
                    <div className="columns">
                        {/* Para cada coluna, exibir o ícone e suas descrições */}
                        {columnsData.map((column, index) => (
                            <div key={index} className="column">
                                <img src={column.icon} alt={`Icon ${index + 2}`} className="column-icon" />
                                <div className="column-categories">
                                    {column.descriptions.map((description, idx) => (
                                        <span key={idx} className="menu-item">
                                            {description}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenuSquareRolling;
