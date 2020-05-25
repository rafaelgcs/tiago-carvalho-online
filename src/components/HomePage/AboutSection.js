import React from "react";
import {
    MDBBtn
} from 'mdbreact';

const AboutSection = () => {

    return (
        <>
            <section className="text-center align-items-center green-text transparent" style={{ height: '90vh', backgroundColor: 'transparent' }}>
                <div className="row justify-content-md-center align-items-center" style={{ height: '100vh' }}>
                    <div className="col-md-6 text-center d-none d-md-block">
                        <img src={require("../../assets/img/tiago-c-3-green.png")} style={{ maxWidth: '50%' }} />
                    </div>
                    <div className="col-md-6 text-center align-items-center">
                        <div className="d-block d-md-none" style={{ height: '5vh' }}></div>
                        <h1 className="title d-none d-md-block">Prazer, sou Tiago Carvalho,</h1>
                        <p>
                            <b>
                                Tem x anos, natural de Salvador-BA...
                            </b>
                        </p>

                    </div>

                </div>
            </section>
        </>
    );
}

export default AboutSection;