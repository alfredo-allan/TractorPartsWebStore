import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-5 pb-3">
            <div className="container">
                <div className="row">
                    {/* Newsletter Section */}
                    <div className="col-12 text-center mb-4">
                        <h5 className="text-warning">Receba novidades e promoções</h5>
                        <div className="d-flex justify-content-center mt-3">
                            <input type="email" className="form-control me-2" placeholder="Seu e-mail" id='email' style={{ maxWidth: '250px' }} />
                            <input type="text" className="form-control me-2" placeholder="Seu nome" id='name' style={{ maxWidth: '200px' }} />
                            <button className="btn btn-warning" id='cadastrar'>Cadastrar</button>
                        </div>
                    </div>

                    {/* Main Footer Section */}
                    <div className="col-md-4 text-center mb-4">
                        <img src={require('../../Assets/Img/icoTratorMax.png')} alt="Logo" className="mb-3" />
                        <div className="d-flex justify-content-center gap-3">
                            <a href="#" className="text-light"><i className="bi bi-instagram fs-4"></i></a>
                            <a href="#" className="text-light"><i className="bi bi-youtube fs-4"></i></a>
                            <a href="#" className="text-light"><i className="bi bi-linkedin fs-4"></i></a>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="row">
                            {/* Navigation */}
                            <div className="col-6 col-md-3 mb-4">
                                <h6 className="text-warning">Navegação</h6>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-light">Início</a></li>
                                    <li><a href="#" className="text-light">Dúvidas</a></li>
                                    <li><a href="#" className="text-light">Meu Carrinho</a></li>
                                    <li><a href="#" className="text-light">Meus Pedidos</a></li>
                                    <li><a href="#" className="text-light">Mais Vendidos</a></li>
                                </ul>
                            </div>

                            {/* Institutional */}
                            <div className="col-6 col-md-3 mb-4">
                                <h6 className="text-warning">Institucional</h6>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-light">Sobre</a></li>
                                    <li><a href="#" className="text-light">Política de Trocas</a></li>
                                    <li><a href="#" className="text-light">Privacidade</a></li>
                                    <li><a href="#" className="text-light">Contato</a></li>
                                </ul>
                            </div>

                            {/* Help Center */}
                            <div className="col-6 col-md-3 mb-4">
                                <h6 className="text-warning">Central de Ajuda</h6>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-light">Trocas</a></li>
                                    <li><a href="#" className="text-light">Segurança</a></li>
                                    <li><a href="#" className="text-light">Rastreamento</a></li>
                                </ul>
                            </div>

                            {/* Contact */}
                            <div className="col-6 col-md-3 mb-4 atendimento">
                                <h6 className="text-warning">Atendimento</h6>
                                <ul className="list-unstyled">
                                    <li><img src={require('../../Assets/Img/whatsapp.png')} id='wts' alt="" /><a href="https://wa.me/47999763436" className="text-light">(47) 99976-3436</a></li>
                                    <li><img src={require('../../Assets/Img/email.png')} id='icoemail' alt="" /><a href="mailto:vendas@lovamaquinas.com.br" className="text-light">vendas@lovamaquinas.com.br</a></li>
                                    <li className="text-light">Seg a Sex das 9h-12h / 13h-18h</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment and Certificates */}
                <div className="row mt-4">
                    <div className="col-12 text-center payment">
                        <h6 className="text-warning">Pagamento</h6>
                        <img src={require('../../Assets/Img/billet-color.svg').default} id='billet' alt="Métodos de Pagamento" className="img-fluid" />
                        <img src={require('../../Assets/Img/diners-color.svg').default} id='diners' alt="Métodos de Pagamento" className="img-fluid" />
                        <img src={require('../../Assets/Img/elo-color.svg').default} id='elo' alt="Métodos de Pagamento" className="img-fluid" />
                        <img src={require('../../Assets/Img/visa-color.svg').default} id='visa' alt="Métodos de Pagamento" className="img-fluid" />
                        <img src={require('../../Assets/Img/pix-color.svg').default} id='pix' alt="Métodos de Pagamento" className="img-fluid" />
                        <img src={require('../../Assets/Img/mastercard-color.svg').default} id='mastercard' alt="Métodos de Pagamento" className="img-fluid" />
                        <img src={require('../../Assets/Img/hipercard-color.svg').default} id='hipercard' alt="Métodos de Pagamento" className="img-fluid" />
                        <img src={require('../../Assets/Img/hiper-color.svg').default} id='hiper' alt="Métodos de Pagamento" className="img-fluid" />
                        <img src={require('../../Assets/Img/mercadopago-color.svg').default} id='mercadopago' alt="Métodos de Pagamento" className="img-fluid" />
                        <img src={require('../../Assets/Img/americanexpress-color.svg').default} id='amex' alt="Métodos de Pagamento" className="img-fluid" />

                    </div>
                    <div className="col-12 text-center mt-3">
                        <h6 className="text-warning">Certificados</h6>
                        <img src={require('../../Assets/Img/ssl-color.svg').default} id='ssl' alt="Certificados" className="img-fluid" />
                        <img src={require('../../Assets/Img/googlesafe-color.svg').default} id='googlesafe' alt="Certificados" className="img-fluid" />

                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="row mt-4">
                    <div className="col-12 text-center">
                        <p className="text-light mb-0">
                            Lova Comércio de Máquinas e Equipamentos Ltda | CNPJ 15.052.165/0001-84
                        </p>
                        <p className="text-light">
                            R. Alm. Barroso, 909 - Sala 1206 - Vila Nova, Blumenau - SC, 89035-401
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

