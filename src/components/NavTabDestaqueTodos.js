import { Tab, Tabs } from 'react-bootstrap';
import { DisplayDataMobile } from "./DisplayDataMobile.js"
import React from 'react';
import { DisplayDataDesktop } from "./DisplayDataDesktop.js";
import {DisplayDataMobileDestaque} from "./DisplayDataMobileDestaque.js"

export class NavTabDestaqueTodos extends React.Component {
  constructor(props) {
    super();
    this.state = {
      // define a tab ativa apartir do props se definido
      activeTab: props.activeTab || 1
    };

    // função de seleção aqui (não no render)
    this.handleSelect = this.handleSelect.bind(this);
  }


  render() {

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
      <div className="box-info-fundos-tabs">
        <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
          <Tab eventKey={1} title="DESTAQUES">

          {/* <DisplayDataMobileDestaque FilteredData= {this.props.FilteredData}/> */}

          </Tab>
          <Tab eventKey={2} title="TODOS">

            <div className='data-mobile'>{(this.props.FilteredData.length > 1 ? this.props.FilteredData.map((item, index) => {

              const { specification: { fund_type: tipoFundo, fund_class: classeFundo, fund_risk_profile: { score_range_order: corPerfilRiscoFundo } } } = item;
              const { specification: { fund_main_strategy: { name: estrategia_principal } } } = item;
              const { profitabilities: { month: lucroMes, m12, year: lucroAno } } = item;
              const { operability: { minimum_initial_application_amount: aplicacaoMinima, application_quotation_days_str: cotizacaoAplicacao, retrieval_quotation_days: cotizacaoAplicacaoSigla, retrieval_quotation_days_str: cotizacaoResgate,
                retrieval_liquidation_days_str: liquidacaoResgate, application_time_limit: horarioLimiteAplicacao } } = item;
              const { fees: { administration_fee: taxaAdministracao } } = item;
              const {description:{target_audience:icone_qualificado}} = item;



              return (

                <>
                  <DisplayDataMobile key={index} simple_name={item.simple_name} corPerfilRisco={Number(corPerfilRiscoFundo)} estrategia_principal={estrategia_principal}
                    tipoFundo={tipoFundo} classeFundo={classeFundo} quota_date={reformatDate(item.quota_date)} m12={(Number(m12 * 100).toFixed(2))}
                    aplicacaoMinima={moneyFormatter(Number(aplicacaoMinima).toFixed())} cotizacaoAplicacaoSigla={cotizacaoAplicacaoSigla} icone_qualificado={icone_qualificado} 
                    icone_esg={item.esg_seal} close_aplicar={item.is_closed_to_capture}/>

                </>

              );
            }) :
              <div className="box-mensagem-no-item">
                <p>O fundo buscado não está disponível nesta lista. Verifique nas demais abas.</p>
              </div>
            )}</div>




          </Tab>
        </Tabs>
      </div>
    );
  }

  handleSelect(selectedTab) {
    // a tab ativa tem que ser definida no state
    // para o tabs component ver a mudança e renderizar
    this.setState({
      activeTab: selectedTab
    });
  }
}
