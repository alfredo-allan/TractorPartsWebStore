import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegação
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
import routes from "../../Routes/Routes"; // Ajuste o caminho conforme necessário


interface HeaderProps {
    onCategoryClick?: (category: string) => void; // Define a função esperada como prop
}

const Header: React.FC<HeaderProps> = ({ onCategoryClick }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate(); // Hook para navegação

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.classList.toggle('mobile-menu-open', !isMobileMenuOpen); // Gerencia opacidade do fundo
    };

    // Função para tratar o clique nas categorias

    const handleCategoryClick = (route: string, event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation(); // Evita propagação indesejada
        onCategoryClick?.(route); // Chama a função se ela existir
        navigate(route); // Navega para a página
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container d-flex flex-column align-items-center">
                    {/* Logo e Campo de Pesquisa */}
                    <div className="d-flex w-100 justify-content-between align-items-center">
                        <a className="navbar-brand" href="#" onClick={(e) => {
                            e.preventDefault(); // Evita o comportamento padrão do link
                            window.location.reload(); // Recarrega a página
                        }}>
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
                                    < div
                                        key={index}
                                        className="icon mx-3 text-center d-flex align-items-center"
                                        onClick={index === 0 ? handleCategoryClick.bind(null, routes[index]) : undefined}
                                    >
                                        <img src={icon} alt={descriptions[index]} width="40" />
                                        <span className="ms-2 d-none d-md-inline">{descriptions[index]}</span>
                                    </div>

                                );
                            })}
                        </div>
                    </div>

                    {/* Ícones e Menu Control */}
                    <div className="d-flex justify-content-center w-100 mt-3" >
                        {[icon2, icon3, icon4, icon5, icon6].map((icon, index) => {
                            const routes = [
                                '/tractor',
                                '/construction',
                                '/generators',
                                '/offers',
                                '/partnership',
                            ];
                            const descriptions = [
                                'Trator',
                                'Construção civil',
                                'Geradores',
                                'Ofertas',
                                'Parceria',
                            ];
                            return (
                                <div
                                    key={index}
                                    className="icon mx-3 text-center d-flex align-items-center"
                                    onClick={index === 0 ? (event) => handleCategoryClick(routes[index], event) : undefined}
                                >
                                    <img src={icon} alt={descriptions[index]} width="40" />
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
                                    descriptions: ['Microtrator', 'Motocultivador', 'Carreta para Microtrator', 'Carreta Para Microtrator', 'Carreta Para Motocultivador', 'Implementos para Microtrator', 'Encanteirador', 'Roçadeiras', 'Sulcador', 'Implementos para Motocultivador', 'Arado', 'Encanteirador', 'Lâmina Frontal', 'Roçadeiras', 'Sulcador', 'Segadeira', 'Trator', 'Pulverizador', 'Pulverizador Costal', 'Bomba de Pulverização', 'Carrinho Pulverizador', 'Pulverizador Estacionário', 'Atomizador'],
                                },
                                {
                                    icon: icon3,
                                    descriptions: ['Alisadora de Piso', 'Argamassadeira', 'Betoneira', 'Caixa de Ferramentas', 'Carrinho', 'Compactador e Placa Vibratória', 'Compactador de Solo', 'Placa Vibratória', 'Compressor', 'Compressor de Ar', 'Compressor de Ar Direto', 'Furadeira', 'Furadeira à Gasolina', 'Furadeira De Bancada', 'Furadeira De Impacto', 'Martelete', 'Martelete Perfurador Rompedor', 'Martelete Rompedor', 'Motovibrador', 'Motovibrador à Diesel', 'Motovibrador à Gasolina', 'Motovibrador Elétrico', 'Motovibrador Portátil', 'Mangote Vibrador', 'Régua Vibratória / Niveladora', 'Régua Vibratória Com Motor', 'Régua Vibratória Sem Motor', 'Valetadeira', 'Politriz', 'Politriz de Bancada', 'Politriz De Piso', 'Cortadora de Piso', 'Unidade de Potência', 'Triturador de Entulho', 'Mesa Hidráulica'],
                                },
                                {
                                    icon: icon4,
                                    descriptions: ['Gerador à Diesel', 'Gerador à Diesel Monofásico', 'Gerador à Diesel Trifásico', 'Gerador à Gasolina', 'Gerador à Gasolina Monofásico', 'Gerador à Gasolina Trifásico', 'Alterador de Energia', 'Alterador Monofásico', 'Alterador Trifásico'],
                                },
                                {
                                    icon: icon5,
                                    descriptions: ['Agícola', 'Constução Civil', 'Motores', 'Geradores', 'Motobombas', 'Picadores e Trituradores', 'Floresta e Jardim', 'Lavadoras e Aspiradores', 'Náutica', 'Drone Pulverizador', 'Tratores'],
                                },

                            ]}
                        />
                    </div>
                </div>
            </nav>

            {/* Mobile Side Menu */}
            <MobileSideMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
        </header >
    );
};

export default Header;
