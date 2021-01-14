import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import "../css/index.css";


export const HeaderInfoFundos = () => {

    
    return (
        <div className="box-header-fundos">
                    <Row noGutters={true} className="row-header">
                        <Col md="3" className="coluna-header">
                            <h4 className="first-style">Fundo</h4>
                        </Col>
                        <Col md="1" className="coluna-header">
                            <h4  className="style-bottom">Data da cota</h4>
                        </Col>
                        <Col md="1" className="coluna-header ">
                            <h4>Mês (%)</h4>
                        </Col>
                        <Col md="1" className="coluna-header">
                            <h4>2020 (%)</h4>
                        </Col>
                        <Col md="1" className="coluna-header">
                            <h4>12M (%)</h4>
                        </Col>
                        <Col md="3" className="coluna-header">
                            <h4>Aplicação mínima (R$)</h4>
                        </Col>
                        <Col md="1" className="coluna-header">
                            <h4 className="style-bottom">Prazo do resgate</h4>
                        </Col>
                        <Col md="1" className="coluna-header">
                            <h4>Aplicar</h4>
                        </Col>
                    </Row>

                    
        </div>
    );
}

