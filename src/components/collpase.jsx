
import React, { useState } from 'react'
import { Button, Collapse } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap';

export class InfoFundos extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e) {
        this.setState({ open: !this.state.open })
    }


    render() {
        return (

                    <div className="box-items-fundos-mobile" onClick={(e) => this.togglePanel(e)}>

                        <div class='box-status-fundo'><span></span></div>

                        <Row noGutters={true} className="row-header">

                            <Col md="3" className="coluna-header">
                                <h4 className="first-style">JP Morgan Global Macro Opportunities</h4>
                                <h2>Renda Fixa | Indexado Soberano</h2>
                            </Col>

                            <Col md="1" className="coluna-header">
                                <h4 className="style-bottom">29/04/2016</h4>
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
                        {this.state.open ? (
                            <div className="box-more-info">
                                {this.props.children}

                                <div className="box-more-info-grafico">

                                </div>

                                <div className="box-more-info-detalhes">
                                    <p>Cotização da aplicação: <span></span></p>
                                    <p>Cotização do resgate <span></span></p>
                                    <p>Liquidação do resgate: <span></span></p>
                                    <p className="last-p">Taxa de administração <span></span></p>


                                    <a href="#" className="link">Conheça mais informações sobre este fundo</a>

                                    <p className="style-bottom">CNPJ do fundo: <span></span></p>
                                </div>

                            </div>) : null}

                    </div>
                );
        }

}

