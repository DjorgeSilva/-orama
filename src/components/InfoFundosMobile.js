
import "../css/index.css";
import React, { useState, useEffect } from 'react';
import { NavTabDestaqueTodos } from "./NavTabDestaqueTodos.js";
import { HeaderInfoFundos } from "./HeaderInfoFundos.jsx";
import * as IoIcons from "react-icons/io5";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export const InfoFundosMobile = () => {

  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [q, setQ] = useState("");
  const [aplicacaoMinima, setAplicacaoMinima] = useState(20000);
  const [perfilRisco, setPerfilRisco] = useState(12);
  const [prazoResgate, setPrazoResgate] = useState(30);
  const [FilteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [])

  useEffect(() => {
    setFilteredData(
      data.filter(item => {
        return item.simple_name.toLowerCase().includes(q.toLowerCase())&&
        Number(item.operability.minimum_initial_application_amount<=aplicacaoMinima)&&
        Number(item.specification.fund_risk_profile.score_range_order<=perfilRisco)&&
        Number(item.operability.retrieval_quotation_days<=prazoResgate)
      })
    )
  }, [q, data,aplicacaoMinima, perfilRisco, prazoResgate])

    function changeValueMinimo() {
      var inputAplicacaoMinima = document.querySelector("#aplicacaoMinima");
      var outputAplicacaoMinima = document.querySelector("#valueAplicacaoMinima");


      outputAplicacaoMinima.innerHTML = moneyFormatter(inputAplicacaoMinima.value);
      setAplicacaoMinima(Number(inputAplicacaoMinima.value));

      inputAplicacaoMinima.oninput = function () {
        const valor = this.value;
        outputAplicacaoMinima.innerHTML = valor;
      }
    }

    function changeValuePerfilRisco() {
      var inputPerfilRisco = document.querySelector("#perfilRisco");
      var outputPerfilRisco = document.querySelector("#valuePerfilRisco");

      outputPerfilRisco.innerHTML = inputPerfilRisco.value;
      setPerfilRisco(Number(inputPerfilRisco.value));

      inputPerfilRisco.oninput = function () {
        outputPerfilRisco.innerHTML = this.value;
      }
    }

    function changeValuePrazoResgate() {
      var inputPrazoResgate = document.querySelector("#prazoResgate");
      var outputPrazoResgate = document.querySelector("#valuePrazoResgate");

      outputPrazoResgate.innerHTML = inputPrazoResgate.value;
      setPrazoResgate(Number(inputPrazoResgate.value))


      inputPrazoResgate.oninput = function () {
        outputPrazoResgate.innerHTML = this.value;
      }
    }


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

    function collapse(key) {
      setIsOpen(!isOpen);

      console.log(key)

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
          return '#FF8800';
          break;

        case 10:
          return '#FF5E00';
          break;
        case 11:
          return '#FF0600';
          break;

        case 12:
          return '#B51414';
          break;

        default:
          return '#000';
          break;
      }
    }

    return (
      <>
        <div className="container-busca">
          <div class="box-busca">
            <input type="search" id="buscaFundo" placeholder="Buscar fundo por nome" value={q} onChange={((e) => setQ(e.target.value))} />
            <label for="busca-fundo" className="label-input-search">*Selecione o fundo para saber o horário limite de aplicação.</label>

            <div className="box-filtros">

              <div className="aplicacao-minima item-filtro">
                <p>Aplicação mínima</p>
                <input type="range" min="0" max="20000" id="aplicacaoMinima" defaultValue="20000" onChange={changeValueMinimo} />
                <label htmlFor="aplicacao-minima">Até <span id="valueAplicacaoMinima">R$ 20.000,00</span></label>
              </div>

              <div className="perfilRiscoFundo item-filtro perfilRisco">
                <p className="style">Perfil de risco de fundo</p>
                <label htmlFor="aplicacao-minima">
                  <ul>
                    <li><span className="item-filter-risco" onHoverT></span></li>
                    <li><span className="item-filter-risco"></span></li>
                    <li><span className="item-filter-risco"></span></li>
                    <li><span className="item-filter-risco"></span></li>
                    <li><span className="item-filter-risco"></span></li>
                    <li><span className="item-filter-risco"></span></li>
                    <li><span className="item-filter-risco"></span></li>
                    <li><span className="item-filter-risco"></span></li>
                    <li><span className="item-filter-risco"></span></li>
                    <li><span className="item-filter-risco"></span></li>
                    <li><span className="item-filter-risco"></span></li>
                    <li><span className="item-filter-risco"></span></li>
                  </ul>
                </label>
                <input type="range" min="1" max="12" defaultValue="12" id="perfilRisco" onChange={changeValuePerfilRisco} />
                <span id="valuePerfilRisco"></span>
              </div>

              <div className="prazoResgate item-filtro">
                <p>Prazo de resgate</p>
                <input type="range" min="0" max="30" defaultValue="30" id="prazoResgate" onChange={changeValuePrazoResgate} />
                <label htmlFor="prazoResgate">Até <span id="valuePrazoResgate">30</span> dias utéis</label>
              </div>

            </div>

            <p className="label-filtros">Horário limite de aplicação: 12:00</p>

          </div>

        </div>

        <NavTabDestaqueTodos />
        <HeaderInfoFundos />

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


              <div className="box-items-fundos-mobile" onClick={collapse.bind(this)}>

                <div class='box-status-fundo' style={{ backgroundColor: cor(corPerfilRiscoFundo) }}><span></span></div>

                <div className="grid-x row-header">

                  <div md="3" className="cell medium-3 coluna-header fundo">
                    <h4 className="first-style">{item.simple_name}</h4>
                    <h2>{tipoFundo} | {classeFundo}</h2>
                  </div>

                  <div md="1" className="cell medium-1 coluna-header dataCota">
                    <h4 className="style-bottom">{reformatDate(item.quota_date)}</h4>
                  </div>

                  <div md="1" className="cell medium-1 coluna-header mes">
                    <h4>{(Number(lucroMes * 100).toFixed(2))}</h4>
                  </div>

                  <div md="1" className="cell medium-1 coluna-header ano">
                    <h4>{(Number(lucroMes * 100).toFixed(2))}</h4>
                  </div>

                  <div md="1" className="cell medium-1 coluna-header _12m">
                    <h4>{(Number(m12 * 100).toFixed(2))}</h4>
                  </div>

                  <div md="3" className="cell medium-3 coluna-header aplicacao_minima">
                    <h4>{moneyFormatter(Number(aplicacaoMinima).toFixed())}</h4>
                  </div>

                  <div md="1" className="cell medium-1 coluna-header prazoResgate">
                    <h4 className="style-bottom">D+{cotizacaoAplicacaoSigla}</h4>
                  </div>

                  <div md="1" className="cell medium-1 coluna-header">
                    <IoIcons.IoArrowUndoCircleSharp className="icone-aplicar" />
                  </div>

                </div>

                {isOpen && (
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
                )}

              </div>

            </>


          );
        })}</div>
      </>


    );
  }

