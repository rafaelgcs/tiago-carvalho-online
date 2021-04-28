
import React from 'react';
import ButtonMKR from "components/CustomButtons/Button.js";

export default function Subscription() {
    return (
        <section id="contact_form" className="text-center mb-4 pb-4 align-items-center white-text" style={{ backgroundColor: 'transparent' }}>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-10 col-12 align-items-center">
                        <h2 className="h1-responsive font-weight-bold mt-5 blue-text">
                            Tem interesse em algum de nossos planos?
                        </h2>
                        <h4 className="h4-responsive mb-5">
                            Cadastre-se agora!
                        </h4>
                        <div>
                            <ButtonMKR
                                style={{ borderRadius: 30 }}
                                color='info'
                                size="small"
                                href="https://www.mfitpersonal.com.br/index?share=MjE1MjIvMC85LzA="
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>Clique aqui para preencher o formulário</span>
                            </ButtonMKR>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}