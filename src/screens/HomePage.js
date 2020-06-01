
import React, { useEffect, useState } from 'react';
import {
    MDBBtn
} from 'mdbreact';
import FooterDefault from '../components/Footers/FooterDefault';
import ProdutosSection from '../components/HomePage/ProdutosSection';
import TestimonialsSection from '../components/HomePage/TestimonialsSection';
import AboutSection from '../components/HomePage/AboutSection';
import FloatButtonWhatsapp from '../components/Buttons/FloatButtonWhatsapp';


export default function HomePage() {
    const scrollToTop = () => window.scrollTo(0, 0);
    const [loadedPage, setLoadedPage] = useState(false);
    const scrollingTo = to => {
        let element = document.getElementById(to);

        element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

    useEffect(() => {
        if (!loadedPage) {
            scrollToTop();
            setLoadedPage(true);
        }
    });
    return (
        <div style={{ background: 'linear-gradient(to right, #232526, #414345)' }}>
            <div id="top-page" className="col-12" style={{ border: 'none', width: window.innerWidth, maxWidth: window.innerWidth, background: 'transparent' }}>
                <div className="container">
                    <div className="row justify-content-md-center align-items-end" style={{ height: '100vh' }}>
                        <div className="col-md-6 text-center d-none d-md-block">
                            <img src={require("../assets/img/tiago-c-2-green-378x480.png")} style={{ maxWidth: '70%' }} />
                        </div>
                        <div className="col-md-6 text-center align-items-center text-white">
                            <img src={require("../assets/img/green-logo-light-540x360.png")} style={{ maxWidth: '100%' }} />
                            <div className="d-block d-md-none" style={{ height: '5vh' }}></div>
                            <p>
                                <b>
                                    Desenvolvi técnicas de alta performance que transformaram minha forma de trabalho e consequentemente minha vida. Que tal deixar eu te ajudar a repensar tua jornada?
                                </b>
                            </p>
                            <div className="mt-2 mb-5">
                                <div className="row justify-content-md-center">
                                    <div className="col-md-6">
                                        <MDBBtn className="w-100" rounded color="green" onClick={() => scrollingTo('about')}>Conheça-me Mais</MDBBtn>
                                    </div>
                                    <div className="col-md-6">
                                        <MDBBtn className="w-100" outline color="green" onClick={() => scrollingTo('services')}>Veja meus serviços</MDBBtn>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div style={{ border: 'none', background: 'transparent' }}>
                <div className="container" id="about">
                    <AboutSection />
                </div>
            </div>
            <div style={{ paddingTop: 35, border: 'none', background: 'transparent' }}>
                <div className="container" id="consultorias">
                    <ProdutosSection />
                </div>
            </div>
            <div id="testimonials" style={{ paddingTop: 5, background: 'transparent' }} >
                <div className="container">
                    <TestimonialsSection />
                </div>
            </div>
            <FooterDefault />
            <FloatButtonWhatsapp />
        </div>
    );
}
