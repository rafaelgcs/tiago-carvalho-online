import React from "react";

const FooterDefault = () => {
    const logo = require('../../assets/img/green-logo-light-293x200.png');
    return (
        <footer className="page-footer font-small green-grey lighten-5">
            <div className="green">
                <div className="container">
                    <div className="row py-4 d-flex align-items-center">
                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0">Fique ligado em minhas redes sociais!</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row green-text">
                    <div className="col-md-12 py-5">
                        <div className="mb-5 flex-center">
                            <a className="fb-ic" href="https://facebook.com/tiago.carvalho.587606" target="_blank">
                                <i className="fab fa-facebook-f fa-lg green-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>

                            <a className="tw-ic" href="mailto:contato@tiagocarvalho.online" target="_blank">
                                <i className="fas fa-envelope fa-lg green-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>

                            <a className="ins-ic" href="https://instagram.com/pt.tiagocarvalho" target="_blank">
                                <i className="fab fa-instagram fa-lg green-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                        </div>
                    </div>


                </div>

            </div>
            <div className="container text-center text-md-left mt-5">
                <div className="row mt-3 dark-grey-text">
                    <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                        <img src={logo} height="200" />
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Serviços</h6>
                        <hr className="teal green mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                        <p>
                            <a className="dark-grey-text" href="#!">Personal Trainer</a>
                        </p>
                        <p>
                            <a className="dark-grey-text" href="#!">Treinamento Funcional</a>
                        </p>
                        <p>
                            <a className="dark-grey-text" href="#!">Consultoria (Online/Presencial)</a>
                        </p>

                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Links Úteis</h6>
                        <hr className="teal green mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                        <p>
                            <a className="dark-grey-text" href="https://api.whatsapp.com/send?phone=5571992483233">Fale Comigo no Whatsapp</a>
                        </p>
                        <p>
                            <a className="dark-grey-text" href="#!">FAQ</a>
                        </p>
                        <p>
                            <a className="dark-grey-text" href="#!">Marque uma consulta</a>
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase font-weight-bold">Contato</h6>
                        <hr className="teal green mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                        <p>
                            <i className="fas fa-envelope mr-3"></i> <a className="green-text" href="mailto:contato@tiagocarvalho.online" target="_blank">contato@tiagocarvalho.online</a>
                        </p>
                        <p>
                            <i className="fab fa-instagram mr-3"></i> <a className="green-text" href="https://instagram.com/pt.tiagocarvalho" target="_blank">Instagram</a>
                        </p>
                        <p>
                            <i className="fab fa-facebook mr-3"></i> <a className="green-text" href="https://facebook.com/tiago.carvalho.587606" target="_blank">Facebook</a>
                        </p>
                        <p>
                            <i className="fas fa-phone mr-3"></i> <a className="green-text" href="tel:71992483233" target="_blank">+55 71 9 9310-4517</a>
                        </p>
                    </div>


                </div>
            </div>
            <div className="footer-copyright text-center text-black-50 py-3"> © {new Date().getFullYear()} Copyright:
                <a className="dark-grey-text" href="#"> Tiago Carvalho</a>, feito com{" "}
                <i className="fa fa-heart heart dark-grey-text" /> por <a href="https://rafaelgcs.github.io" target="_blank" className="dark-grey-text">Rafael Guimarães</a>
            </div>


        </footer>
    );
}

export default FooterDefault;