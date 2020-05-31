import React from "react";
import {
    MDBBtn
} from 'mdbreact';

const AboutSection = () => {

    const scrollingTo = to => {
        let element = document.getElementById(to);

        element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

    return (
        <>
            <section className="text-center align-items-center green-text transparent" style={{ height: '90vh', backgroundColor: 'transparent' }}>
                <div className="row justify-content-md-center align-items-center" style={{ height: '100vh' }}>
                    <div className="col-md-6 text-center d-none d-md-block">
                        <img src={require("../../assets/img/tiago-c-3-green.png")} style={{ maxWidth: '50%' }} />
                    </div>
                    <div className="col-md-6 text-center align-items-center">
                        <div className="d-block d-md-none" style={{ height: '5vh' }}></div>
                        <div className="row justify-content-center">
                            <div className="col-md-2 col-8 d-block d-md-none">
                                <img
                                    src={require('../../assets/img/tiago-c-3-green-quad.png')}
                                    className='rounded-circle text-center'
                                    alt=''
                                    width='100%'
                                />
                            </div>
                        </div>
                        <h1 className="title">Quem sou eu?!</h1>
                        <p>
                            <b>
                                Sou Tiago Carvalho, profissional de Educação Física, formado desde 2012 pela UCSAL.
                                Atuo na área desde 2006, sou apaixonado por esportes, vida, saúde e movimento. Sou questionador por essência, um eterno buscador de mim mesmo.
                            </b>
                        </p>
                        <MDBBtn className="w-100" rounded color="green" onClick={() => scrollingTo('consultorias')}>Conheça Minhas Consultorias!</MDBBtn>

                    </div>

                </div>
            </section>
        </>
    );
}

export default AboutSection;