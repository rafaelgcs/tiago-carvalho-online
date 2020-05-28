import React from "react";
import { MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";
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
            <section className="text-center my-5 align-items-center white-text green rounded" style={{ backgroundColor: 'transparent' }}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-10 align-items-center">
                            <h2 className="h1-responsive font-weight-bold my-5">
                                Consultoria Fitness
                            </h2>
                            {/* <h4 className="h4-responsive mb-5">
                                (Online / Presencial)
                            </h4> */}
                            <p>
                                Antes de você escolher um dos planos de treino eu preciso te explicar algumas coisas:
                                <br />
                                Primeiramente quero te dar parabéns por ter chegado até aqui. Isso mostra que você está a fim de melhorar a sua saúde e eu, na qualidade de profissional de Educação Física, fico feliz em saber que você acredita que eu possa te ajudar nessa jornada.
                                Quando você compra meu treino, você não compra uma consultoria, você compra <strong>ECONOMIA DE TEMPO!</strong>
                            </p>
                            <h4 className="h4-responsive">
                                <strong>
                                    MAS VOCÊ JÁ SABE COMO SERÁ ESTA
                                    CONSULTORIA? SE AINDA NÃO SABE...
                                </strong>
                            </h4>
                            <p>
                                o meu trabalho você não vai encontrar um "personal online". O que eu ofereço é um planejamento de treinamento baseado na ciência, com o intuito de te manter saudável, com um corpo bacana e com um programa eficaz, capaz de você economizar o seu tempo, coisa que poucos tem sobrando.
                            </p>
                            <p>
                                Então baseado em um questionário que você deverá preencher no momento da compra do plano, informando dados corporais, disponibilidade, rotina, dieta e limitações, eu vou montar o melhor planejamento de treinamento possível para que você possa alcançar o seu objetivo. Isso significa que eu possa sugerir mudanças na sua rotina para poder maximizar o seu resultado.
                            </p>
                            <p>
                                Não está incluso plano de alimentação nos pacotes. Para isso você deve procurar um nutricionista da sua confiança.
                            </p>
                            <p>
                                Você pode escolher se deseja um treino para fazer na <strong>ACADEMIA OU EM CASA</strong>.
                            </p>
                            <p>
                                Lembrando que, em uma academia, as condições e equipamentos para treinar são melhores. Mas se não gosta do ambiente, se você não tem mais saco de sair de casa para treinar, quem sabe os exercícios em casa sejam o que faltava! O planejamento dos treinamento tem validade de 30 dias.
                            </p>
                            <p>
                                <strong>Trabalho com três tipos de planos:</strong>
                                <ul className="container">
                                    <li>
                                        No plano de 1 consultoria, você receberá um planejamento com validade de 30 dias.
                                    </li>
                                    <li>
                                        No plano de 3 consultorias, receberá 3 planejamentos, um por mês, e cada um com validade de 30 dias.
                                    </li>
                                    <li>
                                        No plano de 12 consultorias, receberá 12 planejamentos, um por mês, e cada um com validade de 30 dias.
                                    </li>
                                </ul>
                            </p>
                            <p>
                                Todo o processo de compra e preenchimento do questionário e recebimento do planejamento é feito pelo aplicativo.
                            </p>
                            <p>
                                As formas de pagamento são transferencia ou via link (que mando pelo WhatsApp). Nos segundo caso, é possível pagar de forma parcelada mas tem alguma taxa de juros do próprio sistema.
                            </p>
                            <p>
                                Após a sua compra, toda a nossa comunicação se dará por meio da sua área de usuário; onde fico total disponível para ajudar nas dúvidas, questionamentos, entre outras situações.
                            </p>
                            <p>
                                Pra finalizar, te digo sem nenhum receio... se você fizer como combinado, permitindo que a ciência supere o senso comum, eu garanto os nossos resultados!
                            </p>
                            <p>
                                Vamos nessa?
                            </p>
                            <p>
                                <strong>
                                    O melhor do treinamento em suas mãos!
                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-center my-5 align-items-center black-text" style={{ backgroundColor: 'transparent' }}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-10 align-items-center">
                            <h2 className="h1-responsive font-weight-bold mt-5 green-text">
                                App MFITPERSONAL
                            </h2>
                            <h4 className="h4-responsive mb-5">
                                Aplicativo Inteligente
                            </h4>
                            <h4>
                                <img src={require("../../assets/img/mfit-logo.png")} height="200" />
                            </h4>
                            <p>
                                Seu treino personalizado ficará disponível no aplicativo Ptrainer, com todos as explicações do programa em vídeos super detalhados.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="text-center my-5 align-items-center white-text green rounded" style={{ backgroundColor: 'transparent' }}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-10 align-items-center mb-5">
                            <h2 className="h1-responsive font-weight-bold my-5 white-text">
                                Minhas Consultorias
                            </h2>
                            <MDBRow className="text-center">
                                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                    <MDBView className="overlay rounded z-depth-1" waves>
                                        <img
                                            src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                        <a href="#!">
                                            <MDBMask overlay="white-slight" />
                                        </a>
                                    </MDBView>
                                    <MDBCardBody className="pb-0">
                                        <h4 className="white-text font-weight-bold my-3">Treino Inteligente</h4>
                                        <p className="white-text">
                                            Cada parte do seu treino é resultado de rigorosos estudos científicos. É assim que você garante a certeza de fazer o melhor treino possível no conforto de sua casa.
                                </p>
                                        <MDBBtn color="white" size="sm">
                                            <MDBIcon far icon="clone" className="left" /> QUERO AGORA!
                                </MDBBtn>
                                    </MDBCardBody>
                                </MDBCol>
                                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                    <MDBView className="overlay rounded z-depth-1" waves>
                                        <img
                                            src="https://mdbootstrap.com/img/Photos/Others/project4.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                        <a href="#!">
                                            <MDBMask overlay="green-slight" />
                                        </a>
                                    </MDBView>
                                    <MDBCardBody className="pb-0">
                                        <h4 className="white-text font-weight-bold my-3">Suporte Exclusivo</h4>
                                        <p className="white-text">
                                            Estarei lado a lado contigo durante todo processo. Você terá acesso direto ao meu Whatsapp pessoal para resolver qualquer dificuldade.
                                </p>
                                        <MDBBtn color="white" size="sm">
                                            <MDBIcon far icon="clone" className="left" /> QUERO AGORA!
                                </MDBBtn>
                                    </MDBCardBody>
                                </MDBCol>
                                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                    <MDBView className="overlay rounded z-depth-1" waves>
                                        <img
                                            src="https://mdbootstrap.com/img/Photos/Others/images/88.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                        <a href="#!">
                                            <MDBMask overlay="green-slight" />
                                        </a>
                                    </MDBView>
                                    <MDBCardBody className="pb-0">
                                        <h4 className="white-text font-weight-bold my-3">Conteúdo Prêmio</h4>
                                        <p className="white-text">
                                            E mais, você receberá materiais exclusivos que vão te levar aos resultados que você deseja muito mais rápido. Tudo isso dentro do nosso portal premium.
                                </p>
                                        <MDBBtn color="white" size="sm">
                                            <MDBIcon far icon="clone" className="left" /> QUERO AGORA!
                                </MDBBtn>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>

                        </div>

                    </div>
                </div>
            </section>

            <section className="text-center my-5 align-items-center white-text green rounded" style={{ backgroundColor: 'transparent' }}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-10 align-items-center">
                            <h2 className="h1-responsive font-weight-bold mt-5">
                                Treinamento Funcional
                            </h2>
                            {/* <h4 className="h4-responsive mb-5">
                                (Online / Presencial)
                            </h4> */}
                            <p>
                                A atividade se baseia nos movimentos naturais do corpo, como pular, correr, puxar, agachar, girar e empurrar. Por conta da quantidade infinita de exercícios e possibilidades, costuma ser mais motivador que a musculação.
                            </p>
                            <p>
                                Ele melhora o condicionamento físico como um todo. Em um segundo momento, desenvolve e aprimora habilidades específicas do indivíduo, sejam elas voltadas para um esporte ou para a vida diária, promovendo uma melhor qualidade de vida.
                            </p>
                            <p>
                                Como complementos, nos treinos funcionais você pode usar itens como elásticos, cordas, bolas e hastes. A ideia não é focar no aumento da massa muscular, mas sim aprimorar o condicionamento físico e aumentar a força e a resistência do corpo.
                            </p>
                            <p>
                                <strong>
                                    Principais benefícios do treinamento funcional
                                </strong>
                                <ul>
                                    <li>
                                        Aumenta a força muscular;
                                    </li>
                                    <li>
                                        Melhora o equilíbrio estático e dinâmico;
                                    </li>
                                    <li>
                                        Desenvolve condicionamento, resistência e agilidade;
                                    </li>
                                    <li>
                                        Desenvolve a percepção dos movimentos;
                                    </li>
                                    <li>
                                        Acelera o metabolismo e queima gordura;
                                    </li>
                                    <li>
                                        Correção da má postura e desequilíbrios musculares;
                                    </li>
                                    <li>
                                        Aumento da estabilidade da região core (saúde da coluna vertebral);
                                    </li>
                                    <li>
                                        Alivia o estresse;
                                    </li>
                                    <li>
                                        Melhora as estruturas afetadas por lesão no processo de reabilitação.
                                    </li>
                                </ul>
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