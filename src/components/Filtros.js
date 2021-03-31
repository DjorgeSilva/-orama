

import "../css/index.css";
import React, { useState, useEffect } from 'react';
import { NavTabDestaqueTodos } from "./NavTabDestaqueTodos.js";
import { HeaderInfoFundos } from "./HeaderInfoFundos.jsx";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { LegendaDesktop } from "./LegendaDesktop.js";
import { DisplayDataDesktop } from "./DisplayDataDesktop.js";
import { Button, Collapse, Spinner } from "react-bootstrap"


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
  const [dadosFiltradosRendaFixa, setDadosFiltradosRendaFixa] = useState(false);
  const [dadosFiltradosDifereciada, setDadosFiltradosDifereciada] = useState(false);
  const [dadosFiltradosVariavel, setDadosFiltradosVariavel] = useState(false);
  const [dadosFiltradosGestores, setDadosFiltradosGestores] = useState(false);
  const [iconeDropDownRendaFixa, setIconeDropDownRendaFixa] = useState(false)
  const [iconeDropDiferenciada, setIconeDropDownDiferenciada] = useState(false)
  const [iconeDropDownVariavel, setIconeDropDownVariavel] = useState(false)
  const [iconeDropDownGestores, setIconeDropDownGestores] = useState(false)
  var filtraNomeRendaFixa = [];
  var uniqueNomeRendaFixa = [];
  var filtraNomeEstrategiaDiferenciada = [];
  var uniqueNomeEstrategiaDiferenciada = [];
  var filtraNomeRendaVariavel = [];
  var uniqueNomeRendaVariavel = [];
  const [loading, setLoading] = useState(false)
  var rendaFixaDestaque = [];
  var nameItem = [];
  var recebePosicao;
  var posicao = []
  var titleDiferenciada = []
  const [openRendaFixa, setOpenRendaFixa] = useState(false);
  const [openDiferenciada, setOpenDiferenciada] = useState(false);
  const [openGestores, setOpenGestores] = useState(false);
  const [openVariavel, setOpenVariavel] = useState(false);
  var filtraNomeGestores = [];
  var uniqueNomeGestores = [];



  useEffect(() => {
    setLoading(true)
    fetch("https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full")
      .then((response) => response.json())
      .then((json) => {
        setData(json)
        setLoading(false)
      })
  }, []) // acessa a url e armazena a resposta no variavel state (data)


  useEffect(() => {

    let filtroRendaFixa, filtroDiferenciada, filtroRendaVariavel = ""; //(começa) parte utilizada para filtragem de acordo com a marcação do checkbox
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
      filtroRendaVariavel = varivelID; //(termina) parte utilizada para filtragem de acordo com a marcação do checkbox
    }


    setFilteredData( // filtra todos os dados de acordo com as condições dos inputs da variavél (data) - filtros (busca, aplicação mínima, perfil de risco, prazo resgate e macro_estrategy) 
      data.filter(item => { //armazena cada item na variável - state (FilteredData)
        return item.simple_name.toString().toLowerCase().indexOf(valorDigitado.toLowerCase()) > -1 &&
          Number(item.operability.minimum_initial_application_amount <= aplicacaoMinima) &&
          Number(item.specification.fund_risk_profile.score_range_order <= perfilRisco) &&
          Number(item.operability.retrieval_quotation_days <= prazoResgate) &&
          JSON.stringify(item.specification.fund_macro_strategy.id).toLowerCase() === filtroRendaFixa ||

          item.simple_name.toString().toLowerCase().indexOf(valorDigitado.toLowerCase()) > -1 &&
          Number(item.operability.minimum_initial_application_amount <= aplicacaoMinima) &&
          Number(item.specification.fund_risk_profile.score_range_order <= perfilRisco) &&
          Number(item.operability.retrieval_quotation_days <= prazoResgate) &&
          JSON.stringify(item.specification.fund_macro_strategy.id).toLowerCase() === filtroDiferenciada ||

          item.simple_name.toString().toLowerCase().indexOf(valorDigitado.toLowerCase()) > -1 &&
          Number(item.operability.minimum_initial_application_amount <= aplicacaoMinima) &&
          Number(item.specification.fund_risk_profile.score_range_order <= perfilRisco) &&
          Number(item.operability.retrieval_quotation_days <= prazoResgate) &&
          JSON.stringify(item.specification.fund_macro_strategy.id).toLowerCase() === filtroRendaVariavel
      })
    )


  }, [valorDigitado, data, aplicacaoMinima, perfilRisco, prazoResgate]) // executa toda vez que algum dos <= states é alterado 


  useEffect(() => {
    setRendaFixa( // armazena no state rendaFixa apenas o itens filtrados do (data) que tem contém macro_estrategic id ===1 (Renda Fixa)
      data.filter(item => {
        return JSON.stringify(item.specification.fund_macro_strategy.id).toLowerCase().includes(rendaFixaID.toLowerCase())
      })
    )
  }, [data]) //executa toda vez que state (data) é alterado

  useEffect(() => {
    setDiferenciada( // armazena no state rendaFixa apenas o itens filtrados do (data) que tem contém macro_estrategic id ===2 (Estrategia Diferenciada)
      data.filter(item => {
        return JSON.stringify(item.specification.fund_macro_strategy.id).toLowerCase().includes(diferenciadaID.toLowerCase())
      })
    )
  }, [data]) //executa toda vez que state (data) é alterado

  useEffect(() => {
    setRendaVariavel( // armazena no state rendaFixa apenas o itens filtrados do (data) que tem contém macro_estrategic id ===3 (Renda Variavel)
      data.filter(item => {
        return JSON.stringify(item.specification.fund_macro_strategy.id).toLowerCase().includes(varivelID.toLowerCase())
      })
    )
  }, [data]) //executa toda vez que state (data) é alterado

  rendaFixa.map((item) => { // mapeando o state com os itens com macro renda fixa
    filtraNomeRendaFixa.push(item.specification.fund_main_strategy.name);  // e armazena no array filtraNomeRendaFixa apenas o nome da estratégia
  })

  uniqueNomeRendaFixa = filtraNomeRendaFixa.filter(function (item, pos) { //cria um novo array com todos os os itens de rendaFixa que passarem na condição
    return filtraNomeRendaFixa.indexOf(item) == pos; //retorna cada item apenas uma vez armazenando no array uniqueRendaFixa (forma automatizada para exibição)                    
  })

  diferenciada.map((item) => { //mapeando o state com os itens com macro estrategia diferenciada
    filtraNomeEstrategiaDiferenciada.push(item.specification.fund_main_strategy.name); // e armazena no array filtraNomeEstrategiaDiferenciada apenas o nome da estratégia 
  })

  uniqueNomeEstrategiaDiferenciada = filtraNomeEstrategiaDiferenciada.filter(function (item, pos) { //cria um novo array com todos os itens estrategia diferenciada que passarem na condição
    return filtraNomeEstrategiaDiferenciada.indexOf(item) == pos; //retorna cada item apenas uma vez armazenando no uniqueNomeEstrategiaDiferenciada  (forma automatizada para exibição)
  })

  rendaVariavel.map((item) => { // mapeando o state com os itens com macro renda variavel
    filtraNomeRendaVariavel.push(item.specification.fund_main_strategy.name); // e armazena no array filtraNomeRendaVariavel apenas o nome da estratégia
  })


  uniqueNomeRendaVariavel = filtraNomeRendaVariavel.filter(function (item, pos) { //cria um novo array com todos os itens renda variavel que passarem na condição
    return filtraNomeRendaVariavel.indexOf(item) == pos; //retorna cada item apenas uma vez armazenando no uniqueNomeRendaVariavel   (forma automatizada para exibição)
  })

  uniqueNomeRendaFixa.map(item => { // mapeia cada item das estrategias de( renda fixa) 
    FilteredData.map(function (itemRendaFixa, index) { // mapeia todos os itens 
      if (item.toString().trim() === itemRendaFixa.specification.fund_main_strategy.name.toString().trim()) { // ordena todos os itens de renda fixa por ordem  item.specification.fund_main_strategy.name de acordo com a condição 
        rendaFixaDestaque.push(itemRendaFixa) // armazena de forma ordenada cada item de acordo com a condição (utilização na exibição de itens em destaque)
        nameItem.push((item.toString())) // armazena o apenas o nome de cada item 

      }
    })
  })

  uniqueNomeRendaFixa.map(item => { // mapeia cada item  de renda fixa 
    recebePosicao = nameItem.lastIndexOf(item) // armazena a posição do ultimo dado de renda fixa para colocar o titulo da estratégia na exibição em (destaque)
    posicao.push(recebePosicao + 1) //armazena quando o subitulo vai aparecer (exemplo: renda fixa global)
  })

  titleDiferenciada.push(rendaFixaDestaque.length) // armazena quando o titulo Estrategia diferenciada vai aparecer no caso no fim de todos os itens renda Fixa em destaque

  uniqueNomeEstrategiaDiferenciada.map(item => {  // mapeia cada item das estrategias de (estrategia diferenciada)
    FilteredData.map(function (itemEstrategia, index) {  // mapeia todos os itens
      if (item.toString().trim() === itemEstrategia.specification.fund_main_strategy.name.toString().trim()) { // ordena todos os itens de estrategia Diferenciada por ordem  item.specification.fund_main_strategy.name de acordo com a condição 
        rendaFixaDestaque.push(itemEstrategia)  // armazena de forma ordenada cada item de acordo com a condição (utilização na exibição de itens em destaque)
        nameItem.push((item.toString()))  // armazena o apenas o nome de cada item 

      }
    })
  })

  uniqueNomeEstrategiaDiferenciada.map(item => {  //mapeia cada item  estrategia diferenciada 
    recebePosicao = nameItem.lastIndexOf(item) // armazena a posição do ultimo dado de renda fixa para colocar o titulo da estratégia na exibição em (destaque)
    posicao.push(recebePosicao + 1) //armazena quando o subitulo vai aparecer (exemplo: criptoativos)
  })



  titleDiferenciada.push(rendaFixaDestaque.length)  // armazena quando os titulos de  estrategias de  renda varivael vai aparecer no caso no fim de todos os itens renda Fixa em destaque
  titleDiferenciada.push(0)

  uniqueNomeRendaVariavel.map(item => {  // mapeia cada item das estrategias de (renda variavel)
    FilteredData.map(function (itemVariavel, index) { // mapeia todos os itens
      if (item.toString().trim() === itemVariavel.specification.fund_main_strategy.name.toString().trim()) {  // ordena todos os itens de renda variavel por ordem  item.specification.fund_main_strategy.name de acordo com a condição 
        rendaFixaDestaque.push(itemVariavel)  // armazena de forma ordenada cada item de acordo com a condição (utilização na exibição de itens em destaque)
        nameItem.push((item.toString())) // armazena o apenas o nome de cada item 

      }
    })
  })

  uniqueNomeRendaVariavel.map(item => { //mapeia cada item renda variavel 
    recebePosicao = nameItem.lastIndexOf(item)  // armazena a posição do ultimo dado de renda fixa para colocar o titulo da estratégia na exibição em (destaque)
    posicao.push(recebePosicao + 1)  //armazena quando o subitulo vai aparecer (exemplo: valor plus)
  })

  data.map((item) => { //mapeia cada item 
    filtraNomeGestores.push(item.fund_manager.name); //armazenando apenas o nome dos gestores
  })

  uniqueNomeGestores = filtraNomeGestores.filter(function (item, pos) { //filtrando todos os nomes de gestores que aparecem para cada item 
    return filtraNomeGestores.indexOf(item) == pos; // e retornando apenas um item de cada (nome gestor) para exibição como item no filtro gestores
  })

  uniqueNomeGestores.sort((a, b) => (a > b) ? 1 : ((b > a) ? -1 : 0)) // ordena os dados do filtro gestores em ordem alfabética 


  function checkItemsAutoRendaFixa() {
    const element = document.getElementsByClassName("inside-btn-rendaFixa"); // armazena todos os itens de renda fixa (menu-lateral)

    setDadosFiltradosRendaFixa(!dadosFiltradosRendaFixa); //modifica o state
    for (let i = 0; i < element.length; i++) { //para todos os itens vai alterando o check de acordo com o state
      element[i].checked = dadosFiltradosRendaFixa;
    }
  }

  function checkItemsAutoDiferenciada() {
    const element = document.getElementsByClassName("inside-btn-diferenciada"); // armazena todos os itens de renda fixa (menu-lateral)

    setDadosFiltradosDifereciada(!dadosFiltradosDifereciada); //modifica o state
    for (let i = 0; i < element.length; i++) { //para todos os itens vai alterando o check de acordo com o state
      element[i].checked = dadosFiltradosDifereciada;
    }
  }

  function checkItemsAutoVariavel() {
    const element = document.getElementsByClassName("inside-btn-variavel"); // armazena todos os itens de renda fixa (menu-lateral)

    setDadosFiltradosVariavel(!dadosFiltradosVariavel); //modifica o state
    for (let i = 0; i < element.length; i++) { //para todos os itens vai alterando o check de acordo com o state
      element[i].checked = dadosFiltradosVariavel;
    }
  }

  function checkItemsAutoGestores() {
    const element = document.getElementsByClassName("inside-btn-gestores"); // armazena todos os itens de renda fixa (menu-lateral)

    setDadosFiltradosGestores(!dadosFiltradosGestores); //modifica o state
    for (let i = 0; i < element.length; i++) { //para todos os itens vai alterando o check de acordo com o state
      element[i].checked = dadosFiltradosGestores;
    }
  }


  function changeValueMinimo() { // função chamada sempre que houve rmudança no input range aplicação mínima
    var inputAplicacaoMinima = document.querySelector("#aplicacaoMinima"); // seleciona o input range (Aplicação minima) e armazena na variávél
    var outputAplicacaoMinima = document.querySelector("#valueAplicacaoMinima"); // seleciona o label e armazena na variavél


    outputAplicacaoMinima.innerHTML = moneyFormatter(inputAplicacaoMinima.value); // atribui a variavel label o valor atualizado do input range, formatado R$ (moneyFormatter)  
    setAplicacaoMinima(Number(inputAplicacaoMinima.value));  //armazena no state aplicacaoMinima o valor de entrada do input quando alterado

    inputAplicacaoMinima.oninput = function () { // na mudança de valor do range 
      const valor = this.value; //armazena o valor atualizado do range
      outputAplicacaoMinima.innerHTML = valor; //no elemento variavel label
    }
  }

  function changeValuePerfilRisco(valor) { // função chamada sempre que houve rmudança no input range perfil de risco
    var inputPerfilRisco = document.querySelector("#perfilRisco"); // seleciona o input range (perfil de risco) e armazena na variávél

    if (valor || valor.value) { // se não for null o valor do input - chamadas - (hover() ou change())
      inputPerfilRisco.value = valor; //atualiza o valor do input 
    }

    setPerfilRisco(Number(inputPerfilRisco.value));  //armazena no state perfilRisco o valor de entrada do input quando alterado
  }


  function changeValuePrazoResgate() { // função chamada sempre que houve rmudança no input range prazo de resgate
    var inputPrazoResgate = document.querySelector("#prazoResgate"); // seleciona o input range (prazo resgate) e armazena na variávél
    var outputPrazoResgate = document.querySelector("#valuePrazoResgate"); // seleciona o label e armazena na variavél

    outputPrazoResgate.innerHTML = inputPrazoResgate.value; // atribui no elemento label o valor atualizado do input range
    setPrazoResgate(Number(inputPrazoResgate.value)) //armazena no state prazoResgate o valor de entrada do input quando alterado


    inputPrazoResgate.oninput = function () { // na mudança de valor do range 
      outputPrazoResgate.innerHTML = this.value; // armazena no elemento label 
    }
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  FilteredData.sort((a, b) => (a.profitabilities.m12 < b.profitabilities.m12) ? 1 : ((b.profitabilities.m12 < a.profitabilities.m12) ? -1 : 0));

  //ordena do maior para o menor de acordo com o campo profitabilities

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function moneyFormatter(money) {
    const valor = new Intl.NumberFormat('pt-BR',
      { style: 'currency', currency: 'BRL' }
    ).format(money);

    return valor;

    // função formata valor numérico para R$ (moeda brasileira) e retorna valor formatado
  }


  function reformatDate(dateStr) {
    if (dateStr) {
      var dArr = dateStr.split("-");  // ex input "2010-01-18"
      return dArr[2] + "/" + dArr[1] + "/" + dArr[0].substring(2); //ex out: "18/01/10"
    }

    // função formata data para formato shortDate dd-mm-yy
  }

  function dropdown(valor) { //controla a transição do dropdown do icone dos filtros laterais

    switch (valor) {
      case "openRendaFixa":
        setOpenRendaFixa(!openRendaFixa);
        setTimeout(() => {
          setIconeDropDownRendaFixa(!iconeDropDownRendaFixa)
        }, 200)
        break;
      case "openDiferenciada":
        setOpenDiferenciada(!openDiferenciada);
        setTimeout(() => {
          setIconeDropDownDiferenciada(!iconeDropDiferenciada)
        }, 200)
        break;
      case "openVariavel":
        setOpenVariavel(!openVariavel);
        setTimeout(() => {
          setIconeDropDownVariavel(!iconeDropDownVariavel)
        }, 200)
        break;
      case "openGestores":
        setOpenGestores(!openGestores);
        setTimeout(() => {
          setIconeDropDownGestores(!iconeDropDownGestores)
        }, 200)
        break;
      default: return null
    }

  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  return (
    <>
      <div className="grid-x box-wrap-all-filters"> {/* container busca com filtros (aplicação minima - perfil de risco de fundo - prazo de resgate)*/}
        <div className="column large-12 box-right-wrap-all">

          <div className="container-busca">
            <div className="box-busca">

              <input type="text" id="buscaFundo" placeholder="Buscar fundo por nome" value={valorDigitado} onChange={((e) => setValorDigitado(e.target.value))} />
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
                      <li><span className="item-filter-risco" onClick={() => changeValuePerfilRisco(1)}></span></li>
                      <li><span className="item-filter-risco" onClick={() => changeValuePerfilRisco(2)}></span></li>
                      <li><span className="item-filter-risco" onClick={() => changeValuePerfilRisco(3)}></span></li>
                      <li><span className="item-filter-risco" onClick={() => changeValuePerfilRisco(4)}></span></li>
                      <li><span className="item-filter-risco" onClick={() => changeValuePerfilRisco(5)}></span></li>
                      <li><span className="item-filter-risco" onClick={() => changeValuePerfilRisco(6)}></span></li>
                      <li><span className="item-filter-risco" onClick={() => changeValuePerfilRisco(7)}></span></li>
                      <li><span className="item-filter-risco" onClick={() => changeValuePerfilRisco(8)}></span></li>
                      <li><span className="item-filter-risco" onClick={() => changeValuePerfilRisco(9)}></span></li>
                      <li><span className="item-filter-risco" onClick={() => changeValuePerfilRisco(10)}></span></li>
                      <li><span className="item-filter-risco" onClick={() => changeValuePerfilRisco(11)}></span></li>
                      <li><span className="item-filter-risco" onClick={() => changeValuePerfilRisco(12)}></span></li>
                    </ul>
                  </label>
                  <p className="style-p style-p-menor">menor</p>
                  <input type="range" min="1" max="12" defaultValue="12" id="perfilRisco" onChange={(e) => changeValuePerfilRisco(e.target.value)} />
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

          <NavTabDestaqueTodos FilteredData={FilteredData} rendaFixaDestaque={rendaFixaDestaque} posicao={posicao} titleDiferenciada={titleDiferenciada} />
          {/* exibição componente nav tabs (destaque - todos) apenas mobile passando com props 
             (FilteredData = todos os itens (TODOS)) (rendaFixaDestaque = todos os itens organizados por estartégias (DESTAQUES))
             posicao={posicao} = determinar quando o subtitulo da estrategia vai aparecer (Debêntures Isentas, Cotas de FIDCs Próprios) ou qualquer outra
             titleDiferenciada={titleDiferenciada} = quando o titulo Renda Fixa, Estrategia Diferenciada e Renda Variavel vai aparecer 
          */}
          <HeaderInfoFundos className="column medium-9" />
          {/* exibição component Header info fundos - apenas em desktop*/}


          <div className='data-mobile'>{(rendaFixaDestaque.length >= 1 ? rendaFixaDestaque.slice(0,100).map((item, index) => {
            {/* se houver dados no array destaque ele mapeia cada item e executa o componente DisplayDataDesktop para cada um, se não houver executa mensagem "não há itens" */ }

            const { specification: { fund_type: tipoFundo, fund_class: classeFundo, fund_risk_profile: { score_range_order: corPerfilRiscoFundo } } } = item;
            const { specification: { fund_main_strategy: { name: estrategia_principal } } } = item;
            const { specification: { fund_macro_strategy: { name: estrategia_macro } } } = item;
            const { profitabilities: { month: lucroMes, m12, year: lucroAno } } = item;
            const { operability: { minimum_initial_application_amount: aplicacaoMinima, application_quotation_days_str: cotizacaoAplicacao, retrieval_quotation_days: cotizacaoAplicacaoSigla, retrieval_quotation_days_str: cotizacaoResgate,
              retrieval_liquidation_days_str: liquidacaoResgate, application_time_limit: horarioLimiteAplicacao } } = item;
            const { fees: { administration_fee: taxaAdministracao } } = item;
            const { description: { target_audience: icone_qualificado } } = item;

            {/* desestruturando objeto para estração de dados */ }



            return (

              <>
                {/* retorna para cada item do array rendaFixaDestaque este componente DisplayDataDesktop 
              passando como props dados extraido de cada item do array para exibição*/}

                <DisplayDataDesktop simple_name={item.simple_name} index={index} posicao={posicao} titleDiferenciada={titleDiferenciada} corPerfilRisco={Number(corPerfilRiscoFundo)} estrategia_macro={estrategia_macro} estrategia_principal={estrategia_principal}
                  tipoFundo={tipoFundo} classeFundo={classeFundo} quota_date={reformatDate(item.quota_date)} m12={(Number(m12 * 100).toFixed(2))}
                  aplicacaoMinima={moneyFormatter(Number(aplicacaoMinima).toFixed())} cotizacaoAplicacaoSigla={cotizacaoAplicacaoSigla} lucroMes={Number(lucroMes * 100).toFixed(2)}
                  lucroAno={Number(lucroAno * 100).toFixed(2)} cotizacaoAplicacao={cotizacaoAplicacao} cotizacaoResgate={cotizacaoResgate} liquidacaoResgate={liquidacaoResgate}
                  taxaAdministracao={taxaAdministracao} cnpj={item.cnpj} icone_qualificado={icone_qualificado} icone_esg={item.esg_seal} close_aplicar={JSON.stringify(item.is_closed_to_capture)} />

              </>

            );
          }) :
            <div className="box-mensagem-no-item">
              {/* se tamanho de array iqual a zero executa mensagem nenhum item disponivel*/}
              {/* <p>O fundo buscado não está disponível nesta lista. Verifique nas demais abas.</p> */}
              {
                loading ? <Spinner animation="border" variant="info"></Spinner> : (<p>O fundo buscado não está disponível nesta lista. Verifique nas demais abas.</p>)}



            </div>
          )}</div>

          <LegendaDesktop/>



        </div>
        {/* exibição dos filtros laterais
        <div className="column large-2 box-left-wrap-all">

          <div className="item-sideBarFiltros">
            <>
              <input type="checkbox" id="input-valor-rendaFixa" className="inside-btn-main" defaultChecked={true} onChange={() => checkItemsAutoRendaFixa()} />
              <i class="for_firefox"></i>
              <Button onClick={() => dropdown("openRendaFixa")} aria-controls="btn-collapse-renda-fixa" aria-expanded={openRendaFixa} className="bg-light btn-collapse-renda-fixa"><p>Renda Fixa </p> {(iconeDropDownRendaFixa ? <AiOutlineMinus className="icone-dropdown" /> : <AiOutlinePlus className="icone-dropdown" />)}</Button>
              <Collapse in={openRendaFixa}>


                <div id="btn-collapse-renda-fixa">
                  <div className="card card-body bg-white p-0 body-rendaFixa">
                    <ul>
                      <li><input type="checkbox" className="inside-btn inside-btn-rendaFixa" defaultChecked={true} /><p>Indexado Soberano</p></li>
                      <li><input type="checkbox" className="inside-btn inside-btn-rendaFixa" defaultChecked={true} /><p>Renda Fixa</p></li>
                      <li className="sub-item"><p>Renda Fixa Crédito Privado</p></li>
                      <li className="sub-item"><p>Crédito Privado High Yield</p></li>
                      <li className="sub-item big-item-soberano"><input type="checkbox" className="inside-btn big-item-input inside-btn-rendaFixa" defaultChecked={true} /><p className="big-item">Renda Fixa Inflação Soberano</p></li>
                      <li className="sub-item big-item-privado-li"><input type="checkbox" className="inside-btn  big-item-privado inside-btn-rendaFixa" defaultChecked={true} /><p className="big-itemm ">Inflação Crédito Privado</p></li>
                    </ul>

                  </div>


                </div>

              </Collapse>

              <input type="checkbox" id="input-valor-estrategiasDiferenciadas" className="inside-btn-main" defaultChecked={true} onChange={() => checkItemsAutoDiferenciada()} />
              <Button onClick={() => dropdown("openDiferenciada")} aria-controls="btn-collapse-estrategias-diferenciadas" aria-expanded={openDiferenciada} className="bg-light btn-estrategiasDiferenciadas"><p className="style-p-diferenciada">Estratégias diferenciadas</p> {(iconeDropDiferenciada ? <AiOutlineMinus className="icone-dropdown icone-dropdown-top" /> : <AiOutlinePlus className="icone-dropdown icone-dropdown-top" />)}</Button>
              <Collapse in={openDiferenciada}>


                <div id="btn-collapse-estrategias-diferenciadas">
                  <div class="card card-body bg-white p-0 body-Diferenciada">
                    <ul>
                      {uniqueNomeEstrategiaDiferenciada.map((item) => {

                        return (

                          <li><input type="checkbox" id="" className="inside-btn inside-btn-diferenciada" defaultChecked={true} /><p>{item}</p></li>
                        )
                      })}

                    </ul>

                  </div>


                </div>

              </Collapse>


              <input type="checkbox" id="input-valor-rendaVariavel" className="inside-btn-main" defaultChecked={true} onChange={() => checkItemsAutoVariavel()} />
              <Button onClick={() => dropdown("openVariavel")} aria-controls="btn-collapse-renda-variavel" aria-expanded={openVariavel} className="bg-light btn-estrategiasRenda-variavel"><p>Renda variável</p>{(iconeDropDownVariavel ? <AiOutlineMinus className="icone-dropdown icone-dropdown-variavel" /> : <AiOutlinePlus className="icone-dropdown icone-dropdown-variavel" />)}</Button>
              <Collapse in={openVariavel}>


                <div id="btn-collapse-renda-variavel">
                  <div class="card card-body bg-white p-0 body-variavel">
                    <ul>
                      {uniqueNomeRendaVariavel.map((item) => {

                        return (

                          <li><input type="checkbox" id="" className="inside-btn inside-btn-variavel" defaultChecked={true} /><p>{item}</p></li>
                        )
                      })}

                    </ul>

                  </div>


                </div>

              </Collapse>

              <h1 className="txt-filtrar-gestores">Filtrar por gestores:</h1>

              <input type="checkbox" id="input-valor-gestores" className="inside-btn-main" defaultChecked={true} onChange={() => checkItemsAutoGestores()} />
              <Button onClick={() => dropdown("openGestores")} aria-controls="btn-collapse-gestores" aria-expanded={openGestores} className="bg-light btn-gestores"><p>Gestores</p>{(iconeDropDownGestores ? <AiOutlineMinus className="icone-dropdown" /> : <AiOutlinePlus className="icone-dropdown" />)}</Button>
              <Collapse in={openGestores}>


                <div id="btn-collapse-gestores">
                  <div class="card card-body bg-white p-0 body-gestores">
                    <ul>

                      {uniqueNomeGestores.map((item) => {

                        return (

                          <li><input type="checkbox" id="" className="inside-btn inside-btn-gestores" defaultChecked={true} /><p>{item}</p></li>
                        )
                      })}

                    </ul>

                  </div>


                </div>

              </Collapse>

              <h1 className=" txt-filtrar-gestores txt-outros-filtros">Outros filtros:</h1>

              <div className="box-outros-filtros">
                <input type="checkbox" id="input-outros-filtros-esg" className="inside-btn" defaultChecked={true} />
                <p className="style-esg">Somente fundos ESG (Environmental, Social & Governance)</p>
              </div>

              <div className="box-outros-filtros box-outros-last">
                <input type="checkbox" id="input-outros-filtros-qualificados" className="inside-btn" defaultChecked={true} />
                <p className="style-esg">Somente fundos para investidores qualificados</p>
              </div>


            </>




          </div >



        </div>*/}
      </div> 
    </>


  );
}
