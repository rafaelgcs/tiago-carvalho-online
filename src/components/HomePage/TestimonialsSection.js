import React from "react";
import { MDBTestimonial, MDBIcon } from "mdbreact";
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
const TestimonialsSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <section className="text-center my-5 align-items-center green-text transparent" style={{ height: '100vh', backgroundColor: 'transparent' }}>
            <h2 className="h1-responsive font-weight-bold m-t5">
                Depoimentos
            </h2>
            <h6 className="h6-responsive mb-5 grey-text">
                Veja depoimentos de alguns dos meus alunos
            </h6>
            <Slider {...settings}>
                <div className="container">
                    <MDBTestimonial>
                        <div className="row justify-content-center">
                            <div className="col-md-2 col-5">
                                <img
                                    src='https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg'
                                    className='rounded-circle text-center'
                                    alt=''
                                    width='100%'
                                />
                            </div>
                        </div>
                        <p className="container grey-text">
                            <MDBIcon icon='quote-left' /> Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum. Sed ut perspiciatis unde omnis iste natus error
                            sit voluptatem accusantium doloremque laudantium.
                        </p>

                        <h4 className='font-weight-bold'>John Doe</h4>
                        <h6 className='font-weight-bold my-3'>
                            Front-end Developer in NY
                        </h6>
                        <MDBIcon icon='star' className='green-text' />
                        <MDBIcon icon='star' className='green-text' />
                        <MDBIcon icon='star' className='green-text' />
                        <MDBIcon icon='star' className='green-text' />
                        <MDBIcon far icon='star' className='green-text' />
                    </MDBTestimonial>
                </div>
                <div className="container">
                    <MDBTestimonial>
                        <div className="row justify-content-center">
                            <div className="col-md-2 col-5">
                                <img
                                    src='https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg'
                                    className='rounded-circle text-center'
                                    alt=''
                                    width='100%'
                                />
                            </div>
                        </div>
                        <p className="container grey-text">
                            <MDBIcon icon='quote-left' /> Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum. Sed ut perspiciatis unde omnis iste natus error
                            sit voluptatem accusantium doloremque laudantium.
                        </p>

                        <h4 className='font-weight-bold'>John Doe</h4>
                        <h6 className='font-weight-bold my-3'>
                            Front-end Developer in NY
                        </h6>
                        <MDBIcon icon='star' className='green-text' />
                        <MDBIcon icon='star' className='green-text' />
                        <MDBIcon icon='star' className='green-text' />
                        <MDBIcon icon='star' className='green-text' />
                        <MDBIcon far icon='star' className='green-text' />
                    </MDBTestimonial>
                </div>
                <div className="container">
                    <MDBTestimonial>
                        <div className="row justify-content-center">
                            <div className="col-md-2 col-5">
                                <img
                                    src='https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg'
                                    className='rounded-circle text-center'
                                    alt=''
                                    width='100%'
                                />
                            </div>
                        </div>
                        <p className="container grey-text">
                            <MDBIcon icon='quote-left' /> Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum. Sed ut perspiciatis unde omnis iste natus error
                            sit voluptatem accusantium doloremque laudantium.
                        </p>

                        <h4 className='font-weight-bold'>John Doe</h4>
                        <h6 className='font-weight-bold my-3'>
                            Front-end Developer in NY
                        </h6>
                        <MDBIcon icon='star' className='green-text' />
                        <MDBIcon icon='star' className='green-text' />
                        <MDBIcon icon='star' className='green-text' />
                        <MDBIcon icon='star' className='green-text' />
                        <MDBIcon far icon='star' className='green-text' />
                    </MDBTestimonial>
                </div>
                <div className="container">
                    <MDBTestimonial>
                        <div className="row justify-content-center">
                            <div className="col-md-2 col-5">
                                <img
                                    src='https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg'
                                    className='rounded-circle text-center'
                                    alt=''
                                    width='100%'
                                />
                            </div>
                        </div>
                        <p className="container grey-text">
                            <MDBIcon icon='quote-left' /> Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum. Sed ut perspiciatis unde omnis iste natus error
                            sit voluptatem accusantium doloremque laudantium.
                        </p>

                        <h4 className='font-weight-bold'>John Doe</h4>
                        <h6 className='font-weight-bold my-3'>
                            Front-end Developer in NY
                        </h6>
                        <MDBIcon icon='star' className='green-text' />
                        <MDBIcon icon='star' className='green-text' />
                        <MDBIcon icon='star' className='green-text' />
                        <MDBIcon icon='star' className='green-text' />
                        <MDBIcon far icon='star' className='green-text' />
                    </MDBTestimonial>
                </div>

                </Slider>

        </section>
    );
}

export default TestimonialsSection;