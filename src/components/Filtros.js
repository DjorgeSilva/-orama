
import "../css/index.css";
import React, { useState, useEffect } from 'react';
import { NavTabDestaqueTodos } from "./NavTabDestaqueTodos.js";
import { HeaderInfoFundos } from "./HeaderInfoFundos.jsx";
import { RiArrowDownSFill } from "react-icons/ri";
import { Button, Collapse, Tooltip, OverlayTrigger, Popover } from "react-bootstrap"
import { DisplayDataMobile } from "./DisplayDataMobile.js";
import { Loading } from "./Loading.js";
import { DisplayDataDesktop } from "./DisplayDataDesktop.js";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export const Filtros = () => {

  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [aplicacaoMinima, setAplicacaoMinima] = useState(20000);
  const [perfilRisco, setPerfilRisco] = useState(12);
  const [prazoResgate, setPrazoResgate] = useState(30);
  let [FilteredData, setFilteredData] = useState([]);
  const rendaFixaID = "1";
  const diferenciadaID = "2";
  const varivelID = "3";
  const [isCheckedRendaFixa, setIsCheckedRendaFixa] = useState(true);
  const [isCheckedDifereciada, setIsCheckedDifereciada] = useState(false);
  const [isCheckedRendaVariavel, setIsCheckedRendaVariavel] = useState(false);
  const [isCheckedQualificado, setIsCheckedQualificado] = useState(false);
  const [isCheckedESG, setIsCheckedESG] = useState(false)
  const [openRendaFixa, setOpenRendaFixa] = useState(false);
  const [openDiferenciada, setOpenDiferenciada] = useState(false);
  const [openGestores, setOpenGestores] = useState(false);
  const [openVariavel, setOpenVariavel] = useState(false);
  const [rendaFixa, setRendaFixa] = useState([]);
  const [diferenciada, setDiferenciada] = useState([]);
  const [rendaVariavel, setRendaVariavel] = useState([]);
  const [checado, setChecado] = useState(true);
  var filtraNomeRendaFixa = [];
  var uniqueNomeRendaFixa = [];
  var filtraNomeEstrategiaDiferenciada = [];
  var uniqueNomeEstrategiaDiferenciada = [];
  var filtraNomeRendaVariavel = [];
  var uniqueNomeRendaVariavel = [];
  var filtraNomeGestores = [];
  var uniqueNomeGestores = [];
  var strRendaFixa = "";
  var countQualificados = 0;
  var countESG = 0;
  const [dadosFiltradosRendaFixa, setDadosFiltradosRendaFixa] = useState(false);
  var checksRendaFixa = [];



  useEffect(() => {
    fetch("https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [])



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



  useEffect(() => {

    let filtroRendaFixa, filtroDiferenciada, filtroRendaVariavel = "";
    const checkRendaFixa = (document.querySelector('#input-valor-rendaFixa').checked);
    const checkDiferenciada = document.querySelector('#input-valor-estrategiasDiferenciadas').checked;
    const isCheckedRendaVariavel = document.querySelector('#input-valor-rendaVariavel').checked;

    if (checkRendaFixa) {
      filtroRendaFixa = rendaFixaID;
    }

    if (checkDiferenciada) {
      filtroDiferenciada = diferenciadaID;

    }
    if (isCheckedRendaVariavel) {
      filtroRendaVariavel = varivelID;
    }

    setFilteredData(
      data.filter(item => {
        return Number(item.operability.minimum_initial_application_amount <= aplicacaoMinima) &&
          Number(item.specification.fund_risk_profile.score_range_order <= perfilRisco) &&
          Number(item.operability.retrieval_quotation_days <= prazoResgate) &&
          JSON.stringify(item.specification.fund_macro_strategy.id).toLowerCase() === filtroRendaFixa &&
          item.simple_name.toLowerCase().includes(q.toLowerCase()) &&
          outrosFiltrosQualificados(JSON.stringify(item.description.target_audience).toLocaleLowerCase()) &&
          outrosFiltrosESG(item.esg_seal) ||


          Number(item.operability.minimum_initial_application_amount <= aplicacaoMinima) &&
          Number(item.specification.fund_risk_profile.score_range_order <= perfilRisco) &&
          Number(item.operability.retrieval_quotation_days <= prazoResgate) &&
          JSON.stringify(item.specification.fund_macro_strategy.id).toLowerCase() === filtroDiferenciada &&
          item.simple_name.toLowerCase().includes(q.toLowerCase()) &&
          outrosFiltrosQualificados(JSON.stringify(item.description.target_audience).toLocaleLowerCase()) &&
          outrosFiltrosESG(item.esg_seal) ||

          Number(item.operability.minimum_initial_application_amount <= aplicacaoMinima) &&
          Number(item.specification.fund_risk_profile.score_range_order <= perfilRisco) &&
          Number(item.operability.retrieval_quotation_days <= prazoResgate) &&
          JSON.stringify(item.specification.fund_macro_strategy.id).toLowerCase() === filtroRendaVariavel &&
          item.simple_name.toLowerCase().includes(q.toLowerCase()) &&
          outrosFiltrosQualificados(JSON.stringify(item.description.target_audience).toLocaleLowerCase()) &&
          outrosFiltrosESG(item.esg_seal)

      })
    )
  }, [q, data, aplicacaoMinima, perfilRisco, prazoResgate, isCheckedRendaVariavel, isCheckedRendaFixa, isCheckedDifereciada, isCheckedQualificado, isCheckedESG, dadosFiltradosRendaFixa])


  function outrosFiltrosQualificados(outrosfiltros) {
    const checkQualificados = document.querySelector('#input-outros-filtros-qualificados').checked;

    if (checkQualificados) {
      var filtroQualificado = "investidores qualificados";
      var recebe = outrosfiltros.indexOf(filtroQualificado);
      countQualificados++;

      return ((recebe > -1) ? true : false);


    } else {
      if (countQualificados === 0) {
        return (true ? countQualificados === 0 : false)
      }
    }
  }

  function outrosFiltrosESG(outrosfiltros) {
    const checkESG = document.querySelector('#input-outros-filtros-esg').checked;

    if (checkESG) {
      var recebe = outrosfiltros;
      countESG++;

      return ((recebe) ? true : false);


    } else {
      if (countESG === 0) {
        return (true ? countESG === 0 : false)
      }
    }
  }

  function filterDataRendaFixa(e) {
    let index = Number(e.target.getAttribute("a-key"));
    let posicaoElemento = checksRendaFixa.indexOf(uniqueNomeRendaFixa[index]);


    if (e.target.checked === true) {
      if (posicaoElemento === -1) {
        checksRendaFixa.push(uniqueNomeRendaFixa[index]);
        strRendaFixa = checksRendaFixa.toString();
        console.log(checksRendaFixa)
        console.log(strRendaFixa);
      }

    }
    if (e.target.checked === false) {
      checksRendaFixa.splice(posicaoElemento, 1);
      strRendaFixa = checksRendaFixa.toString();
      console.log(checksRendaFixa);
      console.log(strRendaFixa);
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


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    setRendaFixa(
      data.filter(item => {
        return JSON.stringify(item.specification.fund_macro_strategy.id).toLowerCase().includes(rendaFixaID.toLowerCase())
      })
    )
  }, [data])

  useEffect(() => {
    setDiferenciada(
      data.filter(item => {
        return JSON.stringify(item.specification.fund_macro_strategy.id).toLowerCase().includes(diferenciadaID.toLowerCase())
      })
    )
  }, [data])

  useEffect(() => {
    setRendaVariavel(
      data.filter(item => {
        return JSON.stringify(item.specification.fund_macro_strategy.id).toLowerCase().includes(varivelID.toLowerCase())
      })
    )
  }, [data])



  rendaFixa.map((item) => {
    filtraNomeRendaFixa.push(item.specification.fund_main_strategy.name);
  })

  uniqueNomeRendaFixa = filtraNomeRendaFixa.filter(function (item, pos) {
    return filtraNomeRendaFixa.indexOf(item) == pos;
  })

  checksRendaFixa = filtraNomeRendaFixa.filter(function (item, pos) {
    return filtraNomeRendaFixa.indexOf(item) == pos;
  }) //adiciona os dados já marcados do filtro Renda Fixa no array para ser filtrado quando mudado o seu valor

  strRendaFixa = checksRendaFixa.toString();

  diferenciada.map((item) => {
    filtraNomeEstrategiaDiferenciada.push(item.specification.fund_main_strategy.name);
  })

  uniqueNomeEstrategiaDiferenciada = filtraNomeEstrategiaDiferenciada.filter(function (item, pos) {
    return filtraNomeEstrategiaDiferenciada.indexOf(item) == pos;
  })

  rendaVariavel.map((item) => {
    filtraNomeRendaVariavel.push(item.specification.fund_main_strategy.name);
  })

  uniqueNomeRendaVariavel = filtraNomeRendaVariavel.filter(function (item, pos) {
    return filtraNomeRendaVariavel.indexOf(item) == pos;
  })

  data.map((item) => {
    filtraNomeGestores.push(item.fund_manager.name);
  })

  uniqueNomeGestores = filtraNomeGestores.filter(function (item, pos) {
    return filtraNomeGestores.indexOf(item) == pos;
  })

  uniqueNomeGestores.sort((a, b) => (a > b) ? 1 : ((b > a) ? -1 : 0))
  FilteredData.sort((a, b) => (a.profitabilities.m12 < b.profitabilities.m12) ? 1 : ((b.profitabilities.m12 < a.profitabilities.m12) ? -1 : 0));


  return (
    <>
      <div className="grid-x box-wrap-all-filters">
        <div className="column large-9 box-right-wrap-all">

          <div className="container-busca">
            <div class="box-busca">
              <input type="search" id="buscaFundo" placeholder="Buscar fundo por nome" value={q} onChange={((e) => setQ(e.target.value))} />
              <label for="busca-fundo" className="label-input-search">*Selecione o fundo para saber o horário limite de aplicação.</label>

              <div className="box-filtros">

                <div className="aplicacao-minima item-filtro">
                  <p>Aplicação mínima</p>
                  <input type="range" min="0" max="500000" id="aplicacaoMinima" defaultValue="500000" onChange={changeValueMinimo} />
                  <label htmlFor="aplicacao-minima">Até <span id="valueAplicacaoMinima">R$ 500.000,00</span></label>
                </div>

                <div className="perfilRiscoFundo item-filtro perfilRisco">
                  <p className="style">Perfil de risco de fundo</p>
                  <label htmlFor="aplicacao-minima">
                    <ul>
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
                      <li><span className="item-filter-risco"></span></li>
                    </ul>
                  </label>
                  <p className="style-p style-p-menor">menor</p>
                  <input type="range" min="1" max="12" defaultValue="12" id="perfilRisco" onChange={changeValuePerfilRisco} />
                  <p className="style-p style-p-maior">maior</p>
                  <span id="valuePerfilRisco"></span>
                </div>

                <div className="prazoResgate item-filtro">
                  <p>Prazo de resgate</p>
                  <input type="range" min="0" max="270" defaultValue="270" id="prazoResgate" onChange={changeValuePrazoResgate} />
                  <label htmlFor="prazoResgate">Até <span id="valuePrazoResgate">270</span> dias utéis</label>
                </div>

              </div>

              <p className="label-filtros">Horário limite de aplicação: 12:00</p>

            </div>

          </div>

          <NavTabDestaqueTodos>
          </NavTabDestaqueTodos>
          <HeaderInfoFundos className="cell medium-9" />

          <div classNames='data-mobile'>{(FilteredData.length > 1 ? FilteredData.map((item, index) => {

            const { specification: { fund_type: tipoFundo, fund_class: classeFundo, fund_risk_profile: { score_range_order: corPerfilRiscoFundo } } } = item;
            const { specification: { fund_main_strategy: { name: estrategia_principal } } } = item;
            const { profitabilities: { month: lucroMes, m12, year: lucroAno } } = item;
            const { operability: { minimum_initial_application_amount: aplicacaoMinima, application_quotation_days_str: cotizacaoAplicacao, retrieval_quotation_days: cotizacaoAplicacaoSigla, retrieval_quotation_days_str: cotizacaoResgate,
              retrieval_liquidation_days_str: liquidacaoResgate, application_time_limit: horarioLimiteAplicacao } } = item;
            const { fees: { administration_fee: taxaAdministracao } } = item;



            return (

              <>
                <DisplayDataMobile simple_name={item.simple_name} corPerfilRisco={Number(corPerfilRiscoFundo)} estrategia_principal={estrategia_principal}
                  tipoFundo={tipoFundo} classeFundo={classeFundo} quota_date={reformatDate(item.quota_date)} m12={(Number(m12 * 100).toFixed(2))}
                  aplicacaoMinima={moneyFormatter(Number(aplicacaoMinima).toFixed())} cotizacaoAplicacaoSigla={cotizacaoAplicacaoSigla} />


                <DisplayDataDesktop simple_name={item.simple_name} corPerfilRisco={Number(corPerfilRiscoFundo)} estrategia_principal={estrategia_principal}
                  tipoFundo={tipoFundo} classeFundo={classeFundo} quota_date={reformatDate(item.quota_date)} m12={(Number(m12 * 100).toFixed(2))}
                  aplicacaoMinima={moneyFormatter(Number(aplicacaoMinima).toFixed())} cotizacaoAplicacaoSigla={cotizacaoAplicacaoSigla} lucroMes={Number(lucroMes * 100).toFixed(2)}
                  lucroAno={Number(lucroAno * 100).toFixed(2)} cotizacaoAplicacao={cotizacaoAplicacao} cotizacaoResgate={cotizacaoResgate} liquidacaoResgate={liquidacaoResgate}
                  taxaAdministracao={taxaAdministracao} cnpj={item.cnpj} />
              
              </>

            );
          }) :
            <div className="box-mensagem-no-item">
              <p>O fundo buscado não está disponível nesta lista. Verifique nas demais abas.</p>
            </div>
          )}</div>

        </div>

        <div className="column large-3 box-left-wrap-all">
          <div className="item-sideBarFiltros">
            <h1>Filtrar por estratégias:</h1>

            <>
              <input type="checkbox" id="input-valor-rendaFixa" className="inside-btn" defaultChecked={isCheckedRendaFixa} onChange={() => setIsCheckedRendaFixa(!isCheckedRendaFixa)} />
              <Button onClick={() => setOpenRendaFixa(!openRendaFixa)} aria-controls="btn-collapse-renda-fixa" aria-expanded={openRendaFixa} className="bg-light btn-collapse-renda-fixa"><p>Renda Fixa </p> <RiArrowDownSFill className="icone-dropdown" /></Button>
              <Collapse in={openRendaFixa}>


                <div id="btn-collapse-renda-fixa">
                  <div class="card card-body bg-white p-0 body-rendaFixa">
                    <ul>
                      {uniqueNomeRendaFixa.map((item, index) => {

                        return (

                          <li><input type="checkbox" key={index} a-key={index} className="inside-btn" defaultChecked={isCheckedRendaFixa} onChange={(e) => filterDataRendaFixa(e)} /><p>{item}</p></li>
                        )
                      })}

                    </ul>

                  </div>


                </div>

              </Collapse>
            </>


            <input type="checkbox" id="input-valor-estrategiasDiferenciadas" className="inside-btn" defaultChecked={isCheckedDifereciada} onChange={() => setIsCheckedDifereciada(!isCheckedDifereciada)} />
            <Button onClick={() => setOpenDiferenciada(!openDiferenciada)} aria-controls="btn-collapse-estrategias-diferenciadas" aria-expanded={openDiferenciada} className="bg-light btn-estrategiasDiferenciadas"><p>Estratégias diferenciadas</p><RiArrowDownSFill className="icone-dropdown" /></Button>
            <Collapse in={openDiferenciada}>


              <div id="btn-collapse-estrategias-diferenciadas">
                <div class="card card-body bg-white p-0 body-Diferenciada">
                  <ul>
                    {uniqueNomeEstrategiaDiferenciada.map((item) => {

                      return (

                        <li><input type="checkbox" id="" className="inside-btn" defaultChecked={checado} /><p>{item}</p></li>
                      )
                    })}

                  </ul>

                </div>


              </div>

            </Collapse>


            <input type="checkbox" id="input-valor-rendaVariavel" className="inside-btn" defaultChecked={isCheckedRendaVariavel} onChange={() => setIsCheckedRendaVariavel(!isCheckedRendaVariavel)} />
            <Button onClick={() => setOpenVariavel(!openVariavel)} aria-controls="btn-collapse-renda-variavel" aria-expanded={openVariavel} className="bg-light btn-estrategiasRenda-variavel"><p>Estratégias variavél</p><RiArrowDownSFill className="icone-dropdown" /></Button>
            <Collapse in={openVariavel}>


              <div id="btn-collapse-renda-variavel">
                <div class="card card-body bg-white p-0 body-variavel">
                  <ul>
                    {uniqueNomeRendaVariavel.map((item) => {

                      return (

                        <li><input type="checkbox" id="" className="inside-btn" defaultChecked={checado} /><p>{item}</p></li>
                      )
                    })}

                  </ul>

                </div>


              </div>

            </Collapse>

            <h1 className="txt-filtrar-gestores">Filtrar por gestores:</h1>

            <input type="checkbox" id="input-valor-gestores" className="inside-btn" defaultChecked={checado} />
            <Button onClick={() => setOpenGestores(!openGestores)} aria-controls="btn-collapse-gestores" aria-expanded={openGestores} className="bg-light btn-gestores"><p>Gestores</p><RiArrowDownSFill className="icone-dropdown" /></Button>
            <Collapse in={openGestores}>


              <div id="btn-collapse-gestores">
                <div class="card card-body bg-white p-0 body-gestores">
                  <ul>

                    {uniqueNomeGestores.map((item) => {

                      return (

                        <li><input type="checkbox" id="" className="inside-btn" defaultChecked={checado} /><p>{item}</p></li>
                      )
                    })}

                  </ul>

                </div>


              </div>

            </Collapse>

            <h1 className=" txt-filtrar-gestores txt-outros-filtros">Outros filtros:</h1>

            <div className="box-outros-filtros style-box-top">
              <div>
                <input type="checkbox" id="input-outros-filtros-esg" className="inside-btn" defaultChecked={false} onChange={() => setIsCheckedESG(!isCheckedESG)} />
                <p className="style-esg">Somente fundos ESG (Environmental, Social & Governance)</p>
              </div>
            </div>

            <div className="box-outros-filtros">
              <div>
                <input type="checkbox" id="input-outros-filtros-qualificados" className="inside-btn" defaultChecked={false} onChange={() => setIsCheckedQualificado(!isCheckedQualificado)} />
                <p>Somente fundos para investidores qualificados</p>
              </div>
            </div>


          </div >



        </div>
      </div>
    </>


  );
}
