import React, { useState } from 'react';
import IconeOfertasPublicas from "../assets/img/icone-ofertasPublicas.png"
import IconeGestaoRecursos from "../assets/img/icone-gestaoRecursos.png"
import IconeDistribuicaoProdutos from "../assets/img/icone-distribuicaoProdutos.png"
import IconePrivate from "../assets/img/icone-private.png"
import IconeBSM from "../assets/img/bsm-icone.png"
import IconeBrasilBolsa from "../assets/img/icone-brasilbolsa.png"
import IconeMelhor from "../assets/img/icone-a-melhor.png"
import IconeExecution from "../assets/img/icone-execution.png"
import { RiArrowDownSLine } from "react-icons/ri";
import { Collapse, Badge } from "react-bootstrap"




export const Footer = () => {
    const [openSegurosPrevidencia, setOpenSegurosPrevidencia] = useState(false);
    const [openRendaVariavel, setOpenRendaVariavel] = useState(false);
    const [openOfertaPublica, setOpenOfertaPublica] = useState(false);
    const [openRendaFixa, setOpenRendaFixa] = useState(false);
    const [openFundoInvestimento, setOpenFundoInvestimento] = useState(false);


    function handlerDropItem(e){

    } 
    return(
        
        <>
            <div className="footer">

                <div className="footer-txt">

                    <div className="box-footer-inner">
                        <div className="box-item-footer">
                            <h6>Quem somos</h6>
                            <a href="#">A Empresa</a>
                            <a href="#">Trabalhe conosco</a>
                            <a href="#">Aplicativo</a>
                        </div>

                        <div className="box-item-footer">
                            <h6>Assessoria Órama</h6>
                            <a href="#">Privilege</a>
                            <a href="#">Wealth Management</a>
                        </div>

                        <div className="box-item-footer">
                            <h6>Parcerias</h6>
                            <a href="#">Seja um Parceiro</a>
                            <a href="#">Agente Autônomo</a>
                        </div>
                    </div>

                    <div className="box-footer-inner">

                        <div className="box-item-footer">
                            <h6>Primeiros Passos</h6>
                            <a href="#">Como funciona</a>
                            <a href="#">Educacional</a>
                            <a href="#">Blog Órama</a>
                            <a href="#">Transferência de Recursos</a>
                            <a href="#">Investimento Ideal</a>
                        </div>

                        <div className="box-item-footer">
                            <h6>Moedas e Serviços</h6>
                            <a href="#">Entenda Moedas e Serviços</a>
                        </div>
                    </div>

                    <div className="box-footer-inner">
                        <div className="box-item-footer">
                            <h6>Invista agora</h6>
                            <a href="#">Todos os Investimentos</a>
                            <p className="style" onClick={() => setOpenFundoInvestimento(!openFundoInvestimento)} aria-controls="Fundo-de-Investimentos" aria-expanded={openFundoInvestimento}>
                                Fundo de Investimentos<RiArrowDownSLine style={openFundoInvestimento===false?{}: {transform: `rotate(${180}deg)` }} className="drop-item-footer"/></p>
                            <Collapse in={openFundoInvestimento} >
                                <div id="Fundo-de-Investimentos">
                                    <a href="#">Entenda Fundo de Investimentos</a>
                                    <a href="#">Lista de Fundos</a>
                                    <a href="#">Conheça os Gestores</a>
                                </div>
                            </Collapse>

                            <p href="#" className="style" onClick={() => setOpenRendaFixa(!openRendaFixa)} aria-controls="Renda-Fixa" aria-expanded={openRendaFixa}>Renda Fixa
                            <RiArrowDownSLine style={openRendaFixa===false?{}: {transform: `rotate(${180}deg)` }} className="drop-item-footer"/></p>
                            <Collapse in={openRendaFixa} >
                                <div id="Renda-Fixa">
                                    <a href="#">Entenda Renda Fixa</a>
                                </div>
                            </Collapse>

                            <p href="#" className="style" onClick={() => setOpenRendaVariavel(!openRendaVariavel)} aria-controls="Renda-Variavel" aria-expanded={openRendaVariavel}>
                                Renda Variavél<RiArrowDownSLine style={openRendaVariavel===false?{}: {transform: `rotate(${180}deg)` }} className="drop-item-footer"/></p>
                            <Collapse in={openRendaVariavel} >
                                <div id="Renda-Variavel">
                                    <a href="#">Entenda Renda Variavél</a>
                                    <a href="#">RLP - Provedor de Liquidez <span className="new-item">NOVO</span></a>
                                </div>
                            </Collapse>

                            <p href="#" className="style" onClick={() => setOpenOfertaPublica(!openOfertaPublica)} key="4" aria-controls="Oferta-Publica" aria-expanded={openOfertaPublica}>
                                Oferta Pública<RiArrowDownSLine style={openOfertaPublica===false?{}: {transform: `rotate(${180}deg)` }} className="drop-item-footer"/></p>
                            <Collapse in={openOfertaPublica} >
                                <div id="Oferta-Publica">
                                    <a href="#">Entenda Oferta Pública</a>
                                    <a href="#">Lista de Ofertas</a>
                                </div>
                            </Collapse>

                            <a href="#">Tessouro Direto</a>
                            <p href="#" className="style" onClick={() => setOpenSegurosPrevidencia(!openSegurosPrevidencia)} key="5" aria-controls="Seguros-Previdência" aria-expanded={openSegurosPrevidencia}>Seguros e Previdência
                            <RiArrowDownSLine style={openSegurosPrevidencia===false?{}: {transform: `rotate(${180}deg)` }} className="drop-item-footer"/></p>
                            <Collapse in={openSegurosPrevidencia} >
                                <div id="Seguros-Previdência">
                                    <a href="#">Entenda Seguro de Vida</a>
                                    <a href="#">Entenda Previdência Privada</a>
                                    <a href="#">Entenda planos de Previdência</a>
                                </div>
                            </Collapse>
                            <a href="#">Entenda COE</a>
                            <a href="#">Entenda Custos</a>
                        </div>
                    </div>

                    <div className="box-footer-inner">
                        <div className="box-item-footer">
                            <h6>Fale conosco</h6>
                            <a href="#">Atendimento</a>
                            <a href="#">Consultoria</a>
                        </div>

                        <div className="box-item-footer">
                            <h6>Onde estamos</h6>
                            <p>Praia de Botafogo, 228 18°</p>
                            <p>Botafogo - cep: 22250-906</p>
                            <p>Rio de Janeiro - Brasil</p>
                        </div>
                    </div>

                </div>

                <div className="footer-links">
                    <div className="box-termos-legais">
                        <a href="#">Politíca de privacidade</a>
                        <a href="#">Termo de uso</a>
                        <a href="#">Informações legais</a>
                        <a href="#">Canal de denúncias</a>
                        <a href="#">Compliance</a>
                        <a href="#">Mapa do site</a>
                    </div>

                </div>
                    <div className="footer-img">


                        <div className=" box-img-footer">

                            <div className="itemRight">

                                <div className="box-item-img">
                                    <img src={IconeOfertasPublicas} alt="" />
                                </div>

                                <div className="box-item-img">
                                    <img src={IconeGestaoRecursos} alt="" />
                                </div>

                            </div>

                            <div className="itemLeft">

                                <div className="box-item-img">
                                    <img src={IconeDistribuicaoProdutos} alt="" />
                                </div>

                                <div className="box-item-img">
                                    <img src={IconePrivate} alt="" />
                                </div>
                            </div>


                        </div>


                        <div className=" box-img-footer">

                            <div className="itemRight">
                                <div className="box-item-img">
                                    <img className="styleBSM-img" src={IconeBSM} alt="" />
                                </div>

                                <div className="box-item-img">
                                    <img className="styleBrasil-img" src={IconeBrasilBolsa} alt="" />
                                </div>
                            </div>

                            <div className="itemLeft">
                                <div className="box-item-img">
                                    <img className="styleExecution-img" src={IconeExecution} alt="" />
                                </div>
                            </div>


                        </div>

                    </div>

                    <div className="footer-img-desktop">
                        <div className=" box-img-footer">

                            <div className="itemRight style-right">

                                <div className="box-item-img">
                                    <img className="styleBSM-img" src={IconeBSM} alt="" />
                                </div>

                                <div className="box-item-img">
                                    <img className="styleBrasil-img" src={IconeBrasilBolsa} alt="" />
                                </div>

                                <div className="box-item-img">
                                    <img className="styleExecution-img" src={IconeExecution} alt="" />
                                </div>
                            </div>

                            <div className="itemRight">

                                <div className="box-item-img">
                                    <img src={IconeOfertasPublicas} alt="" />
                                </div>

                                <div className="box-item-img">
                                    <img src={IconeGestaoRecursos} alt="" />
                                </div>

                                <div className="box-item-img">
                                    <img src={IconeDistribuicaoProdutos} alt="" />
                                </div>

                                <div className="box-item-img">
                                    <img src={IconePrivate} alt="" />
                                </div>
                            </div>


                        </div>



                    </div>




                    <div className="box-img-redes">
                        <div className="box-img-footer-eleita">
                            <p>Eleita</p>
                            <div className="box-item-img">
                                <img src={IconeMelhor} alt="" />
                            </div>
                        </div>

                        <div className="box-redes-sociais">
                            <a href="https://www.facebook.com/oramainvest">facebook</a>
                            <a href="https://www.linkedin.com/company/oramainvest/">linkedin</a>
                            <a href="https://twitter.com/oramainvest">twitter</a>
                            <a href="https://www.youtube.com/channel/UCcmiKisvBXwAZF63qansofQ">youtube</a>
                            <a href="https://www.instagram.com/oramainvestimentos/">instagram</a>
                        </div>
                    </div>

                    <div className="box-txt-footer">
                        <p>Informações legais</p>
                    </div>



            </div>


        </>

    );
}
