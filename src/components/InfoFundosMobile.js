import React from 'react';
import "../css/index.css";
import { Container, Row, Col } from 'react-bootstrap';

export const InfoFundosMobile = ({ data }) => {
  return (
    <div classNames='data-mobile'>{data.slice(0, 100).map((item, index) => {

      const { specification: { fund_type: tipoFundo, fund_class: classeFundo } } = item;
      const { profitabilities: { month: lucroMes, m12, year: lucroAno } } = item;
      const { operability: { minimum_initial_application_amount: aplicacaoMinima, application_quotation_days_str: cotizacaoAplicacao, retrieval_quotation_days_str: cotizacaoResgate,
        retrieval_liquidation_days_str: liquidacaoResgate, application_time_limit: horarioLimiteAplicacao } } = item;
      const { fees: { administration_fee: taxaAdministracao } } = item;


      return (
        <>
          <div class="box-display-fundos">

            <div class="box-item-fundo">

              <div class="wrap-titulo">
                <h6 class="titulo-fundo">{item.simple_name}</h6>
                <div class='box-status-fundo'><span></span></div>
              </div>

              <p class="subtitulo-fundo">{tipoFundo} | {classeFundo}</p>

              <div class="box-item-info-fundos">
                <p class="right-row">Data da cota:</p>
                <p class="left-row">{item.quota_date}</p>
              </div>

              <div class="box-item-info-fundos">
                <p class="right-row">rantabilidade 12 Meses:</p>
                <p class="left-row">{(Number(m12 * 100).toFixed(2))}</p>
              </div>

              <div class="box-item-info-fundos">
                <p class="right-row">Aplicação Mínima:</p>
                <p class="left-row">{(Number(aplicacaoMinima).toFixed())}</p>
              </div>

              <div class="box-item-info-fundos">
                <p class="right-row">Cotização do Resgate:</p>
                <p class="left-row">{cotizacaoResgate}</p>
              </div>

              <div class="box-info-button">
                <button type="button">Mais detalhes</button>
                <button type="button">Aplicar</button>
              </div>
            </div>

          </div>

        </>
      );
    })}</div>

  );
}

