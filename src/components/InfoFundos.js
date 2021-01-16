import React, { useState, useEffect, ExpandCollapse } from 'react'
import { Button } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap';
import { Colors } from 'react-foundation';

require("es6-promise").polyfill();
require("isomorphic-fetch");



export const InfoFundos = () => {

    const [data, setData] = useState([]);
    const [q, setQ] = useState("");

    useEffect(() => {
        fetch("https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full")
            .then((response) => response.json())
            .then((json) => setData(json));
    }, [])

    function cor(idCor) {
        switch (idCor) {
            case 1:
                return '#A6ECFC';
                break;
            case 2:
                return '#68F1DD';
                break;
            case 3:
                return '#91ED6E';
                break;

            case 4:
                return '#B0F42A';
                break;

            case 5:
                return '#DDF40C';
                break;

            case 6:
                return '#FAF00E';
                break;

            case 7:
                return '#FFDC00';
                break;

            case 8:
                return '#FFBB00';
                break;

            case 9:
                return '#FFBB00';
                break;

            case 10:
                return '#FF5E00';
                break;
            case 11:
                return '#FF0600';
                break;

            case 12:
                return '#FFFFFF';
                break;

            default:
                return '#000';
                break;
        }
    }


    return (
        <div classNames='data-mobile'>{data.slice(0, 100).map((item, index) => {

            const { specification: { fund_type: tipoFundo, fund_class: classeFundo, fund_risk_profile: { score_range_order: corPerfilRiscoFundo } } } = item;
            const { profitabilities: { month: lucroMes, m12, year: lucroAno } } = item;
            const { operability: { minimum_initial_application_amount: aplicacaoMinima, application_quotation_days_str: cotizacaoAplicacao, retrieval_quotation_days_str: cotizacaoResgate,
                retrieval_liquidation_days_str: liquidacaoResgate, application_time_limit: horarioLimiteAplicacao } } = item;
            const { fees: { administration_fee: taxaAdministracao } } = item;



            return (


                <div className="box-items-fundos-mobile">

                    <div class='box-status-fundo' style={{ backgroundColor: cor(corPerfilRiscoFundo) }}><span></span></div>

                    <Row noGutters={true} className="row-header">

                        <Col md="3" className="coluna-header fundo">
                            <h4 className="first-style">{item.simple_name}</h4>
                            <h2>{tipoFundo} | {classeFundo}</h2>
                        </Col>

                        <Col md="1" className="coluna-header dataCota">
                            <h4 className="style-bottom">{item.quota_date}</h4>
                        </Col>

                        <Col md="1" className="coluna-header mes">
                            <h4>{(Number(lucroMes * 100).toFixed(2))}</h4>
                        </Col>

                        <Col md="1" className="coluna-header ano">
                            <h4>{(Number(lucroMes * 100).toFixed(2))}</h4>
                        </Col>

                        <Col md="1" className="coluna-header _12m">
                            <h4>{(Number(m12 * 100).toFixed(2))}</h4>
                        </Col>

                        <Col md="3" className="coluna-header aplicacao_minima">
                            <h4>{(Number(aplicacaoMinima).toFixed())}</h4>
                        </Col>

                        <Col md="1" className="coluna-header prazoResgate">
                            <h4 className="style-bottom">{cotizacaoResgate}</h4>
                        </Col>

                        <Col md="1" className="coluna-header">
                            <h4>icone</h4>
                        </Col>

                    </Row>

                    <div className="box-more-info">

                        <div className="box-more-info-grafico">

                        </div>

                        <div className="box-more-info-detalhes">
                            <p>Cotização da aplicação: <span>{cotizacaoAplicacao}</span></p>
                            <p>Cotização do resgate <span>{cotizacaoResgate}</span></p>
                            <p>Liquidação do resgate: <span>{liquidacaoResgate}</span></p>
                            <p className="last-p">Taxa de administração: <span>{taxaAdministracao}</span></p>


                            <a href="#" className="link">Conheça mais informações sobre este fundo</a>

                            <p className="style-bottom">CNPJ do fundo: <span>{item.cnpj}</span></p>
                        </div>

                    </div>

                </div>
            );
        })}</div>
    );

}