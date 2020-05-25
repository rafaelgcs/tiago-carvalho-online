
import React, { useEffect, useState } from 'react';
import {
    MDBBtn
} from 'mdbreact';
import FooterDefault from '../components/Footers/FooterDefault';
import ProdutosSection from '../components/HomePage/ProdutosSection';
import TestimonialsSection from '../components/HomePage/TestimonialsSection';
import AboutSection from '../components/HomePage/AboutSection';


export default function AboutPage() {
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
            <div className="container" id="about">
                <AboutSection />
            </div>
            <FooterDefault />
        </>
    );
}
