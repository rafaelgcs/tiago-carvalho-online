
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

    useEffect(() => {
        if (!loadedPage) {
            scrollToTop();
            setLoadedPage(true);
        }
    });
    return (
        <>
            <div className="col-12" style={{ width: window.innerWidth, maxWidth: window.innerWidth, backgroundImage: `url(${require('../assets/img/bg-dark-01.jpg')})`, backgroundRepeat: 'none', backgroundSize: 'cover', backgroundPosition: 'fixed', backgroundAttachment: 'fixed' }}>
                <div className="container">
                    <div className="row justify-content-md-center align-items-end" style={{ height: '100vh' }}>
                        <div className="col-md-6 text-center d-none d-md-block">
                            <img src={require("../assets/img/tiago-c-2-green.png")} style={{ maxWidth: '70%' }} />
                        </div>
                        <div className="col-md-6 text-center align-items-center text-white">
                            <img src={require("../assets/img/green-logo-light.png")} height="300" />
                            <div className="d-block d-md-none" style={{ height: '5vh' }}></div>
                            <p>
                                <b>
                                    Desenvolvi técnicas de alta performance que transformaram minha forma de trabalho e consequentemente minha vida. Que tal deixar eu te ajudar a repensar tua jornada?
                                </b>
                            </p>
                            <div className="mt-2 mb-5">
                                <div className="row justify-content-md-center">
                                    <div className="col-md-6">
                                        <MDBBtn className="w-100" rounded color="green">Veja meus serviços</MDBBtn>
                                    </div>
                                    <div className="col-md-6">
                                        <MDBBtn className="w-100" outline color="green">Conheça-me Mais</MDBBtn>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container" id="about">
                <AboutSection />
            </div>
            <div className="container" id="products">
                <ProdutosSection />
            </div>
            <div className="container" id="testimonials">
                <TestimonialsSection />
            </div>
            <FooterDefault />
            <FloatButtonWhatsapp />
        </>
    );
}
