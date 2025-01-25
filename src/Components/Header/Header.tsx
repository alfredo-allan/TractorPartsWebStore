import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import MenuSquareRolling from '../MenuSquareRolling/MenuSquareRolling';
import MobileSideMenu from '../MobileSideMenu/MobileSideMenu';
import icon1 from '../../Assets/Img/more.png';
import icon2 from '../../Assets/Img/tractor.png';
import icon3 from '../../Assets/Img/engineering.png';
import icon4 from '../../Assets/Img/hydro-power.png';
import icon5 from '../../Assets/Img/discount.png';
import icon6 from '../../Assets/Img/shake-hands.png';
import logo from '../../Assets/Img/icoTratorMax.png';
import icon7 from '../../Assets/Img/customer-support.png';
import icon8 from '../../Assets/Img/user.png';
import icon9 from '../../Assets/Img/add-to-cart.png';
import icon10 from '../../Assets/Img/search.png';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.classList.toggle('mobile-menu-open', !isMobileMenuOpen); // Gerencia opacidade do fundo
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container d-flex flex-column align-items-center">
                    {/* Logo e Campo de Pesquisa */}
                    <div className="d-flex w-100 justify-content-between align-items-center">
                        <a className="navbar-brand" href="#">
                            <img
                                id="logo"
                                src={logo}
                                alt="Logo"
                                className="d-inline-block align-top"
                            />
                        </a>
                        <form className="d-flex mx-auto justify-content-center form-center">
                            <div className="input-group">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Pesquisar..."
                                    aria-label="Pesquisar"
                                />
                                <img
                                    id="lupa"
                                    src={icon10}
                                    alt="lupa"
                                    className="d-inline-block align-top"
                                />
                            </div>
                        </form>
                        <div className="d-flex justify-content-center w-100" id="IconUserHome">
                            {[icon7, icon8, icon9].map((icon, index) => {
                                const descriptions = ['Atendimento', 'Usuário', 'Carrinho'];
                                return (
                                    <div
                                        key={index}
                                        className="icon mx-3 text-center d-flex align-items-center"
                                    >
                                        <img src={icon} alt={`Ícone ${index + 1}`} width="30" />
                                        <span className="ms-2 d-none d-md-inline">
                                            {descriptions[index]}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Ícones e Menu Control */}
                    <div className="d-flex justify-content-center w-100 mt-3">
                        {[icon2, icon3, icon4, icon5, icon6].map((icon, index) => {
                            const descriptions = [
                                'Trator',
                                'Engenharia',
                                'Hidrelétrica',
                                'Desconto',
                                'Parceria',
                            ];
                            return (
                                <div
                                    key={index}
                                    className="icon mx-3 text-center d-flex align-items-center"
                                >
                                    <img src={icon} alt={`Ícone ${index + 2}`} width="50" />
                                    <span className="ms-2 d-none d-md-inline">
                                        {descriptions[index]}
                                    </span>
                                </div>
                            );
                        })}

                        {/* Controla o Menu Lateral Mobile */}
                        <MenuSquareRolling
                            icon={icon1}
                            onIconClick={toggleMobileMenu} // Controla o estado mobile
                            columnsData={[
                                {
                                    icon: icon2,
                                    descriptions: ['Cteste', 'Categoria 2', 'Categoria 3'],
                                },
                                {
                                    icon: icon3,
                                    descriptions: ['Categoria 4', 'Categoria 5', 'Categoria 6'],
                                },
                                {
                                    icon: icon4,
                                    descriptions: ['Categoria 7', 'Categoria 8', 'Categoria 9'],
                                },
                                {
                                    icon: icon5,
                                    descriptions: ['Categoria 10', 'Categoria 11', 'Categoria 12'],
                                },
                            ]}
                        />
                    </div>
                </div>
            </nav>

            {/* Mobile Side Menu */}
            <MobileSideMenu
                isOpen={isMobileMenuOpen}
                onClose={toggleMobileMenu}
            />
        </header>
    );
};

export default Header;
