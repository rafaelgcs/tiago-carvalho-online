import React from "react";
import { MDBView, MDBMask } from "mdbreact";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        // <div className={className} style={{ ...style, display: 'block' }}>
        //     <MDBBtn gradient="blue" onClick={onClick}>
        //         <i class="fas fa-arrow-right"></i>
        //     </MDBBtn>
        // </div>
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
        // <div className={className}>
        //     <MDBBtn gradient="blue" onClick={onClick} style={{ ...style, display: 'block' }}>
        //         <i class="fas fa-arrow-left"></i>
        //     </MDBBtn>
        // </div>
    );
}
const ProdutosSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className="text-center my-5 align-items-center white-text green rounded" style={{ height: '90vh', backgroundColor: 'transparent' }}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-10 align-items-center">
                            <h2 className="h1-responsive font-weight-bold my-5">
                                Personal Trainer...
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar at risus ac aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque tincidunt molestie turpis, id dictum sem rutrum sed. Ut in orci tortor. Integer dignissim quam at faucibus placerat. Sed congue velit ligula, a bibendum urna porta sit amet. Nam vulputate lectus et nulla fringilla mollis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-center my-5 align-items-center black-text" style={{ height: '90vh', backgroundColor: 'transparent' }}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-10 align-items-center">
                            <h2 className="h1-responsive font-weight-bold my-5 green-text">
                                Treinamento Funcional...
                            </h2>
                            <p>
                                Donec viverra arcu vitae risus auctor finibus. Aenean eget leo id orci ultrices luctus posuere nec nibh. Vestibulum velit metus, tempus a tincidunt non, posuere ut mi. Aenean in tempus nisi. Phasellus laoreet turpis id neque dignissim lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa eget sem dictum viverra sed ac neque. Integer id urna fermentum, euismod felis non, faucibus tellus. Sed commodo ante nec semper iaculis. Integer quis blandit orci. Cras efficitur mattis posuere. Aliquam odio arcu, lacinia vitae nunc sed, tempus euismod ex. Phasellus mollis ante eget est dictum tempor.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-center my-5 align-items-center white-text green rounded" style={{ height: '90vh', backgroundColor: 'transparent' }}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-10 align-items-center">
                            <h2 className="h1-responsive font-weight-bold mt-5">
                                Consultoria
                            </h2>
                            <h4 className="h4-responsive mb-5">
                                (Online / Presencial)
                            </h4>
                            <p>
                                Integer commodo, sapien sit amet semper bibendum, augue massa varius magna, at mattis mi justo egestas augue. Etiam efficitur ipsum vel hendrerit tristique. Nullam scelerisque magna lacus, id blandit neque ultricies sit amet. Nulla tincidunt magna interdum lacus aliquam, nec luctus ante fringilla. Sed ac urna sed quam ultrices consequat. Cras dolor nisi, dictum sit amet dictum id, vulputate id ipsum. Quisque elementum nisl non elementum ullamcorper. Donec in est massa. Mauris tincidunt consectetur augue et viverra. Nulla in aliquet odio, ac tristique nulla. Aliquam erat volutpat. Nam commodo odio et magna mattis, a elementum enim blandit. Cras pulvinar nunc a ante mollis posuere. Sed tempor purus vitae nulla molestie, molestie elementum elit suscipit. Nunc convallis metus quis ligula porttitor, quis tincidunt erat pellentesque.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
    // return (
    //     <section className="text-center my-5 align-items-center indigo-text" style={{height: '100vh'}}>
    //         <h2 className="h1-responsive font-weight-bold my-5">
    //             Produtos
    //         </h2>
    //         <h6 className="h6-responsive mb-5">
    //             Conheça todos os meus produtos
    //         </h6>
    //         <Slider {...settings}>
    //             <div className="container">
    //                 <MDBView hover>
    //                     <img
    //                         src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
    //                         className="img-fluid"
    //                         alt=""
    //                     />
    //                     <MDBMask className="flex-center p-4" overlay="blue-strong">
    //                         <h3 className="white-text">Personal Trainer</h3>
    //                     </MDBMask>
    //                 </MDBView>
    //             </div>

    //             <div className="container">
    //                 <MDBView hover>
    //                     <img
    //                         src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
    //                         className="img-fluid"
    //                         alt=""
    //                     />
    //                     <MDBMask className="flex-center p-4" overlay="blue-strong">
    //                         <h3 className="white-text">Consultoria semi-presencial</h3>
    //                     </MDBMask>
    //                 </MDBView>
    //             </div>
    //             <div className="container">
    //                 <MDBView hover>
    //                     <img
    //                         src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
    //                         className="img-fluid"
    //                         alt=""
    //                     />
    //                     <MDBMask className="flex-center p-4" overlay="blue-strong">
    //                         <h3 className="white-text">Consultoria online</h3>
    //                     </MDBMask>
    //                 </MDBView>
    //             </div>
    //             <div className="container">
    //                 <MDBView hover>
    //                     <img
    //                         src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
    //                         className="img-fluid"
    //                         alt=""
    //                     />
    //                     <MDBMask className="flex-center p-4" overlay="blue-strong">
    //                         <h3 className="white-text">Mentoria para Profissionais da área de saúde</h3>
    //                     </MDBMask>
    //                 </MDBView>
    //             </div>
    //             <div className="container">
    //                 <MDBView hover>
    //                     <img
    //                         src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
    //                         className="img-fluid"
    //                         alt=""
    //                     />
    //                     <MDBMask className="flex-center p-4" overlay="blue-strong">
    //                         <h3 className="white-text">Gestão de academias e similares</h3>
    //                     </MDBMask>
    //                 </MDBView>
    //             </div>
    //         </Slider>

    //     </section>
    // );
}

export default ProdutosSection;