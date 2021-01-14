import React from 'react';
import "../css/index.css";
import {Container, Row, Col} from 'react-bootstrap';

export const InfoFundos = () => {
    return (
        <div class="box-display-fundos">
            
                <div class="box-item-fundo">

                    <div class="wrap-titulo">
                        <h6 class="titulo-fundo">Claritas Inflação Instituiconal FIM</h6>
                        <div class='box-status-fundo'><span></span></div>
                    </div>

                    <p class="subtitulo-fundo">Renda Fixa | Renda Fixa Indexados</p>
                    
                    <div class="box-item-info-fundos">
                        <p class="right-row">Data da cota:</p>
                        <p class="left-row">07/01/2021</p>
                    </div>

                    <div class="box-item-info-fundos">
                        <p class="right-row">rantabilidade 12 Meses:</p>
                        <p class="left-row">119,61</p>
                    </div>

                    <div class="box-item-info-fundos">
                        <p class="right-row">Aplicação Mínima:</p>
                        <p class="left-row">10.000,00</p>
                    </div>
                    
                    <div class="box-item-info-fundos">
                        <p class="right-row">Cotização do Resgate:</p>
                        <p class="left-row">D+1</p>
                    </div>

                    <div class="box-info-button">
                        <button type="button">Mais detalhes</button>
                        <button type="button">Aplicar</button>
                    </div>
                </div>

                <div className="box-items-fundos-mobile">

                    <Row noGutters={true} className="row-header">

                        <Col md="3" className="coluna-header">
                            <h4 className="first-style">JP Morgan Global Macro Opportunities</h4>
                            <h2>Renda Fixa | Indexado Soberano</h2>
                        </Col>

                        <Col md="1" className="coluna-header">
                            <h4  className="style-bottom">29/04/2016</h4>
                        </Col>

                        <Col md="1" className="coluna-header ">
                            <h4>0,47</h4>
                        </Col>

                        <Col md="1" className="coluna-header">
                            <h4>2,93</h4>
                        </Col>
                        
                        <Col md="1" className="coluna-header">
                            <h4>13,16</h4>
                        </Col>

                        <Col md="3" className="coluna-header">
                            <h4>1.000,00</h4>
                        </Col>

                        <Col md="1" className="coluna-header">
                            <h4 className="style-bottom">icone</h4>
                        </Col>

                        <Col md="1" className="coluna-header">
                            <h4>icone</h4>
                        </Col>

                    </Row>
                </div>

                

        </div>
    );
}
;
