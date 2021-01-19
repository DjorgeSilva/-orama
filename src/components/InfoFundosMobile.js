
import "../css/index.css";
import React, { useState, useEffect } from 'react';
import {NavTabDestaqueTodos} from "./NavTabDestaqueTodos.js";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export const InfoFundosMobile = () => {

  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [FilteredData, setFilteredData] = useState([]);


  useEffect(() => {
    fetch("https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [])

  useEffect(() => {
    setFilteredData(
      data.filter(item => {
        return item.simple_name.toLowerCase().includes(q.toLowerCase())
      })
    )
  }, [q, data])


  function moneyFormatter(money) {
    const valor = new Intl.NumberFormat('pt-BR',
      { style: 'currency', currency: 'BRL' }
    ).format(money);

    return valor;
  }

  function reformatDate(dateStr) {
    const dArr = dateStr.split("-");
    return dArr[2] + "/" + dArr[1] + "/" + dArr[0].substring(2);
  }

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
    <>
      <div className="container-busca-mobile">
        <div class="box-busca">
          <input type="search" name="busca-fundo" id="buscaFundo" placeholder="Buscar fundo por nome" value={q} onChange={((e) => setQ(e.target.value))}/>
          <label for="busca-fundo" className="label-input-search">*Selecione o fundo para saber o horário limite de aplicação.</label>
        </div>
      </div>

      <NavTabDestaqueTodos/>

      <div classNames='data-mobile'>{FilteredData.slice(0, 100).map((item, index) => {

        const { specification: { fund_type: tipoFundo, fund_class: classeFundo, fund_risk_profile: { score_range_order: corPerfilRiscoFundo } } } = item;
        const { profitabilities: { month: lucroMes, m12, year: lucroAno } } = item;
        const { operability: { minimum_initial_application_amount: aplicacaoMinima, application_quotation_days_str: cotizacaoAplicacao, retrieval_quotation_days: cotizacaoAplicacaoSigla, retrieval_quotation_days_str: cotizacaoResgate,
          retrieval_liquidation_days_str: liquidacaoResgate, application_time_limit: horarioLimiteAplicacao } } = item;
        const { fees: { administration_fee: taxaAdministracao } } = item;



        return (

          <>
            <div class="box-display-fundos">

              <div class="box-item-fundo">

                <div class="wrap-titulo">
                  <h6 class="titulo-fundo">{item.simple_name}</h6>
                  <div class='box-status-fundo'><span style={{ backgroundColor: cor(corPerfilRiscoFundo) }}></span></div>
                </div>

                <p class="subtitulo-fundo">{tipoFundo} | {classeFundo}</p>

                <div class="box-item-info-fundos">
                  <p class="right-row">Data da cota:</p>
                  <p class="left-row">{reformatDate(item.quota_date)}</p>
                </div>

                <div class="box-item-info-fundos">
                  <p class="right-row">rentabilidade 12 Meses:</p>
                  <p class="left-row">{(Number(m12 * 100).toFixed(2))}</p>
                </div>

                <div class="box-item-info-fundos">
                  <p class="right-row">Aplicação Mínima:</p>
                  <p class="left-row">{moneyFormatter(Number(aplicacaoMinima).toFixed())}</p>
                </div>

                <div class="box-item-info-fundos">
                  <p class="right-row">Cotização do Resgate:</p>
                  <p class="left-row">D+{cotizacaoAplicacaoSigla}</p>
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
    </>


  );
}

