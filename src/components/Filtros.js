

import "../css/index.css";
import React, { useState, useEffect } from 'react';
import { NavTabDestaqueTodos } from "./NavTabDestaqueTodos.js";
import { HeaderInfoFundos } from "./HeaderInfoFundos.jsx";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { Legenda } from "./Legenda.js"
import { DisplayDataDesktop } from "./DisplayDataDesktop.js";
import { Button, Collapse, Tooltip, OverlayTrigger, Popover } from "react-bootstrap"
import { brown100 } from "material-ui/styles/colors";
import { FaSearch } from "react-icons/fa";
import { IoThermometer } from "react-icons/io5";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export const Filtros = () => {

  const [data, setData] = useState([]);
  const [valorDigitado, setValorDigitado] = useState("");
  const [aplicacaoMinima, setAplicacaoMinima] = useState(20000);
  const [perfilRisco, setPerfilRisco] = useState(12);
  const [prazoResgate, setPrazoResgate] = useState(30);
  let [FilteredData, setFilteredData] = useState([]);
  const [rendaFixa, setRendaFixa] = useState([]);
  const [diferenciada, setDiferenciada] = useState([]);
  const [rendaVariavel, setRendaVariavel] = useState([]);
  const rendaFixaID = "1";
  const diferenciadaID = "2";
  const varivelID = "3";
  const [openRendaFixa, setOpenRendaFixa] = useState(false);
  const [dadosFiltradosRendaFixa, setDadosFiltradosRendaFixa] = useState(false);
  const [iconeDropDown, setIconeDropDown] = useState(false)
  var filtraNomeRendaFixa = [];
  var uniqueNomeRendaFixa = [];
  var filtraNomeEstrategiaDiferenciada = [];
  var uniqueNomeEstrategiaDiferenciada = [];
  var filtraNomeRendaVariavel = [];
  var uniqueNomeRendaVariavel = [];
  var [itemSearch, setItemSearch] = useState([])



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

  function changeValuePerfilRisco(valor) {
    var inputPerfilRisco = document.querySelector("#perfilRisco");

    if(valor||valor.value){
      inputPerfilRisco.value = valor;
    }

    setPerfilRisco(Number(inputPerfilRisco.value));
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
    const checkRendaFixa = true;
    const checkDiferenciada = true;
    const isCheckedRendaVariavel = true;

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
        return item.simple_name.toString().toLowerCase().indexOf(valorDigitado.toLowerCase()) >-1 &&
          Number(item.specification.fund_risk_profile.score_range_order <= perfilRisco) &&
          Number(item.operability.retrieval_quotation_days <= prazoResgate) &&
          JSON.stringify(item.specification.fund_macro_strategy.id).toLowerCase() === filtroRendaFixa ||

          
          Number(item.operability.minimum_initial_application_amount <= aplicacaoMinima) &&
          Number(item.specification.fund_risk_profile.score_range_order <= perfilRisco) &&
          Number(item.operability.retrieval_quotation_days <= prazoResgate) &&
          JSON.stringify(item.specification.fund_macro_strategy.id).toLowerCase() === filtroDiferenciada ||

 
          Number(item.operability.minimum_initial_application_amount <= aplicacaoMinima) &&
          Number(item.specification.fund_risk_profile.score_range_order <= perfilRisco) &&
          Number(item.operability.retrieval_quotation_days <= prazoResgate) &&
          JSON.stringify(item.specification.fund_macro_strategy.id).toLowerCase() === filtroRendaVariavel
      })
    )

      
  }, [valorDigitado, data, aplicacaoMinima, perfilRisco, prazoResgate])



  // useEffect(() => {
  //   setFilteredData(
  //     data.filter(item => {
  //       return item.simple_name.toString().toLowerCase().trim().includes(valorDigitado.toLowerCase().trim())

  //     })
  //   )
  // }, [valorDigitado])



  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  FilteredData.sort((a, b) => (a.profitabilities.m12 < b.profitabilities.m12) ? 1 : ((b.profitabilities.m12 < a.profitabilities.m12) ? -1 : 0));

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

  function dropdown() {
    setOpenRendaFixa(!openRendaFixa)

    setTimeout(() => {
      setIconeDropDown(!iconeDropDown)
    }, 200)


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

  uniqueNomeRendaFixa = filtraNomeRendaFixa.filter(function (item, pos) { //cria um novo array com todos os os itens de rendaFixa que passarem na condição
    return filtraNomeRendaFixa.indexOf(item) == pos; //retorna cada item apenas uma vez armazenando no array uniqueRendaFixa                           
  })

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

  var rendaFixaDestaque = [];
  var nameItem = [];
  var recebePosicao;
  var posicao = []

  uniqueNomeRendaFixa.map(item => { 
    FilteredData.map(function (itemRendaFixa, index) {
      if (item.toString().trim() === itemRendaFixa.specification.fund_main_strategy.name.toString().trim()) {
        rendaFixaDestaque.push(itemRendaFixa)
        nameItem.push((item.toString()))

      }
    })
  })

  uniqueNomeRendaFixa.map(item => {
    recebePosicao =nameItem.lastIndexOf(item)
    posicao.push(recebePosicao + 1)
  })

  var titleDiferenciada = []
  titleDiferenciada.push(rendaFixaDestaque.length)

  uniqueNomeEstrategiaDiferenciada.map(item => { 
    FilteredData.map(function (itemEstrategia, index) {
      if (item.toString().trim() === itemEstrategia.specification.fund_main_strategy.name.toString().trim()) {
        rendaFixaDestaque.push(itemEstrategia)
        nameItem.push((item.toString()))

      }
    })
  })

  uniqueNomeEstrategiaDiferenciada.map(item => {
    recebePosicao =nameItem.lastIndexOf(item)
    posicao.push(recebePosicao + 1)
  })


  titleDiferenciada.push(rendaFixaDestaque.length)
  titleDiferenciada.push(0)

    uniqueNomeRendaVariavel.map(item => { 
    FilteredData.map(function (itemVariavel, index) {
      if (item.toString().trim() === itemVariavel.specification.fund_main_strategy.name.toString().trim()) {
        rendaFixaDestaque.push(itemVariavel)
        nameItem.push((item.toString()))

      }
    })
  })

  uniqueNomeRendaVariavel.map(item => {
    recebePosicao =nameItem.lastIndexOf(item)
    posicao.push(recebePosicao + 1)
  })

  console.log(titleDiferenciada)

  function checkItemsAuto(){
    const element = document.getElementsByClassName("inside-btn");

    setDadosFiltradosRendaFixa(!dadosFiltradosRendaFixa);
    for(let i = 0; i< element.length;i++){
      element[i].checked = dadosFiltradosRendaFixa;
    }
  }





  return (
    <>
      <div className="grid-x box-wrap-all-filters">
        <div className="column large-10 box-right-wrap-all">

          <div className="container-busca">
            <div className="box-busca">
              
              <input type="text" id="buscaFundo" placeholder="Buscar fundo por nome" value={valorDigitado} onChange={((e) => setValorDigitado(e.target.value))}/>
              <button type="submit" className="icone-busca-btn"><i class="fa fa-search icone-busca"></i></button>
              <label htmlFor="busca-fundo" className="label-input-search">*Selecione o fundo para saber o horário limite de aplicação.</label>

              <div className="box-filtros">

                <div className="aplicacao-minima item-filtro">
                  <p>Aplicação mínima</p>
                  <input type="range" min="0" max="500000" id="aplicacaoMinima" defaultValue="500000" onChange={changeValueMinimo} step="200" />
                  <label htmlFor="aplicacao-minima">Até <span id="valueAplicacaoMinima">R$ 500.000,00</span></label>
                </div>

                <div className="perfilRiscoFundo item-filtro perfilRisco">
                  <p className="style">Perfil de risco de fundo</p>
                  <label htmlFor="aplicacao-minima">
                    <ul>
                      <li><span className="item-filter-risco" onClick={()=>changeValuePerfilRisco(1)}></span></li>
                      <li><span className="item-filter-risco" onClick={()=>changeValuePerfilRisco(2)}></span></li>
                      <li><span className="item-filter-risco" onClick={()=>changeValuePerfilRisco(3)}></span></li>
                      <li><span className="item-filter-risco" onClick={()=>changeValuePerfilRisco(4)}></span></li>
                      <li><span className="item-filter-risco" onClick={()=>changeValuePerfilRisco(5)}></span></li>
                      <li><span className="item-filter-risco" onClick={()=>changeValuePerfilRisco(6)}></span></li>
                      <li><span className="item-filter-risco" onClick={()=>changeValuePerfilRisco(7)}></span></li>
                      <li><span className="item-filter-risco" onClick={()=>changeValuePerfilRisco(8)}></span></li>
                      <li><span className="item-filter-risco" onClick={()=>changeValuePerfilRisco(9)}></span></li>
                      <li><span className="item-filter-risco" onClick={()=>changeValuePerfilRisco(10)}></span></li>
                      <li><span className="item-filter-risco" onClick={()=>changeValuePerfilRisco(11)}></span></li>
                      <li><span className="item-filter-risco" onClick={()=>changeValuePerfilRisco(12)}></span></li>
                    </ul>
                  </label>
                  <p className="style-p style-p-menor">menor</p>
                  <input type="range" min="1" max="12" defaultValue="12" id="perfilRisco" onChange={(e)=>changeValuePerfilRisco(e.target.value)} />
                  <p className="style-p style-p-maior">maior</p>
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

          <NavTabDestaqueTodos FilteredData={FilteredData} rendaFixaDestaque={rendaFixaDestaque} posicao={posicao} titleDiferenciada={titleDiferenciada}/>
          <HeaderInfoFundos className="column medium-9" />


          <div className='data-mobile'>{(rendaFixaDestaque.length > 1 ? rendaFixaDestaque.map((item, index) => {
            
            const { specification: { fund_type: tipoFundo, fund_class: classeFundo, fund_risk_profile: { score_range_order: corPerfilRiscoFundo } } } = item;
            const { specification: { fund_main_strategy: { name: estrategia_principal } } } = item;
            const { specification: { fund_macro_strategy: { name: estrategia_macro } } } = item;
            const { profitabilities: { month: lucroMes, m12, year: lucroAno } } = item;
            const { operability: { minimum_initial_application_amount: aplicacaoMinima, application_quotation_days_str: cotizacaoAplicacao, retrieval_quotation_days: cotizacaoAplicacaoSigla, retrieval_quotation_days_str: cotizacaoResgate,
              retrieval_liquidation_days_str: liquidacaoResgate, application_time_limit: horarioLimiteAplicacao } } = item;
            const { fees: { administration_fee: taxaAdministracao } } = item;
            const { description: { target_audience: icone_qualificado } } = item;


            return (

              <>
                <DisplayDataDesktop simple_name={item.simple_name} index={index} posicao={posicao} titleDiferenciada={titleDiferenciada} corPerfilRisco={Number(corPerfilRiscoFundo)} estrategia_macro ={estrategia_macro} estrategia_principal={estrategia_principal}
                  tipoFundo={tipoFundo} classeFundo={classeFundo} quota_date={(item.quota_date)} m12={(Number(m12 * 100).toFixed(2))}
                  aplicacaoMinima={moneyFormatter(Number(aplicacaoMinima).toFixed())} cotizacaoAplicacaoSigla={cotizacaoAplicacaoSigla} lucroMes={Number(lucroMes * 100).toFixed(2)}
                  lucroAno={Number(lucroAno * 100).toFixed(2)} cotizacaoAplicacao={cotizacaoAplicacao} cotizacaoResgate={cotizacaoResgate} liquidacaoResgate={liquidacaoResgate}
                  taxaAdministracao={taxaAdministracao} cnpj={item.cnpj} icone_qualificado={icone_qualificado} icone_esg={item.esg_seal} close_aplicar={JSON.stringify(item.is_closed_to_capture)} />

              </>

            );
          }) :
            <div className="box-mensagem-no-item">
              <p>O fundo buscado não está disponível nesta lista. Verifique nas demais abas.</p>
            </div>
          )}</div>



        </div>

        <div className="column large-2 box-left-wrap-all">
          <Legenda />

          <div className="item-sideBarFiltros">
            <>
              <input type="checkbox" id="input-valor-rendaFixa" className="inside-btn-main" defaultChecked={true} onChange={() => checkItemsAuto()} />
              <Button onClick={() => dropdown()} aria-controls="btn-collapse-renda-fixa" aria-expanded={openRendaFixa} className="bg-light btn-collapse-renda-fixa"><p>Renda Fixa </p> {(iconeDropDown ? <AiOutlineMinus className="icone-dropdown" onClick={dropdown} /> : <AiOutlinePlus className="icone-dropdown" onClick={dropdown} />)}</Button>
              <Collapse in={openRendaFixa}>


                <div id="btn-collapse-renda-fixa">
                  <div className="card card-body bg-white p-0 body-rendaFixa">
                    <ul>
                      <li><input type="checkbox" className="inside-btn" defaultChecked={true} /><p>Indexado Soberano</p></li>
                      <li><input type="checkbox" className="inside-btn" defaultChecked={true} /><p>Renda Fixa</p></li>
                      <li className="sub-item"><p>Renda Fixa Crédito Privado</p></li>
                      <li className="sub-item"><p>Crédito Privado High Yield</p></li>
                      <li className="sub-item big-item-soberano"><input type="checkbox" className="inside-btn big-item-input" defaultChecked={true} /><p className="big-item">Renda Fixa Inflação Soberano</p></li>
                      <li className="sub-item"><input type="checkbox" className="inside-btn  big-item-privado" defaultChecked={true} /><p className="big-item">Inflação Crédito Privado</p></li>
                    </ul>

                  </div>


                </div>

              </Collapse>
            </>




          </div >



        </div>
      </div>
    </>


  );
}
