import { Tab, Tabs } from 'react-bootstrap';
import { DisplayDataMobile } from "./DisplayDataMobile.js"
import React from 'react';


{/* componente que exibe as tabs (DESTAQUE, TODOS) - apenas mobile*/ }


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

      // função formata valor numérico para R$ (moeda brasileira) e retorna valor formatado
    }


    function reformatDate(dateStr) {
      if(dateStr){
        var dArr = dateStr.split("-");  // ex input "2010-01-18"
        return dArr[2] + "/" + dArr[1] + "/" + dArr[0].substring(2); //ex out: "18/01/10"
      }

      // função formata data para formato shortDate dd-mm-yy
    }

    function cor(idCor) { // função muda cor de status do perfil de risco de acordo com a entrada
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
          <Tab eventKey={1} title="DESTAQUES"> {/* tab ativa - DESTAQUE*/}


            <div className='data-mobile'>{(this.props.rendaFixaDestaque.length > 1 ? this.props.rendaFixaDestaque.map((item, index) => {
              {/* se houver dados no array destaque ele mapeia cada item e executa o componente DisplayDataMobile para cada um, se não houver executa mensagem "não há itens" */ }

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
                  {/* retorna para cada item do array rendaFixaDestaque este componente DisplayDataMobile 
              passando como props dados extraido de cada item do array para exibição - exibe epasn itens em destaque*/}

                  <DisplayDataMobile key={index} simple_name={item.simple_name} index={index} posicao={this.props.posicao} titleDiferenciada={this.props.titleDiferenciada} estrategia_macro={estrategia_macro} estrategia_principal={estrategia_principal} corPerfilRisco={Number(corPerfilRiscoFundo)} estrategia_principal={estrategia_principal}
                    tipoFundo={tipoFundo} classeFundo={classeFundo} quota_date={reformatDate(item.quota_date)} m12={(Number(m12 * 100).toFixed(2))}
                    aplicacaoMinima={moneyFormatter(Number(aplicacaoMinima).toFixed())} cotizacaoAplicacaoSigla={cotizacaoAplicacaoSigla} icone_qualificado={icone_qualificado}
                    icone_esg={item.esg_seal} close_aplicar={JSON.stringify(item.is_closed_to_capture)} />

                </>

              );
            }) :
              <div className="box-mensagem-no-item">
                {/* se tamanho de array iqual a zero executa mensagem nenhum item disponivel*/}
                <p>O fundo buscado não está disponível nesta lista. Verifique nas demais abas.</p>
              </div>
            )}</div>


          </Tab>
          <Tab eventKey={2} title="TODOS">  {/* tab TODOS */}

            <div className='data-mobile'>{(this.props.FilteredData.length > 1 ? this.props.FilteredData.map((item, index) => {
              {/* se houver dados no array destaque ele mapeia cada item e executa o componente DisplayDataMobile para cada um, se não houver executa mensagem "não há itens" */ }

              const { specification: { fund_type: tipoFundo, fund_class: classeFundo, fund_risk_profile: { score_range_order: corPerfilRiscoFundo } } } = item;
              const { specification: { fund_main_strategy: { name: estrategia_principal } } } = item;
              const { profitabilities: { month: lucroMes, m12, year: lucroAno } } = item;
              const { operability: { minimum_initial_application_amount: aplicacaoMinima, application_quotation_days_str: cotizacaoAplicacao, retrieval_quotation_days: cotizacaoAplicacaoSigla, retrieval_quotation_days_str: cotizacaoResgate,
                retrieval_liquidation_days_str: liquidacaoResgate, application_time_limit: horarioLimiteAplicacao } } = item;
              const { fees: { administration_fee: taxaAdministracao } } = item;
              const { description: { target_audience: icone_qualificado } } = item;
              {/* desestruturando objeto para estração de dados */ }


              return (

                <>
                  <DisplayDataMobile key={index} simple_name={item.simple_name} corPerfilRisco={Number(corPerfilRiscoFundo)} estrategia_principal={estrategia_principal}
                    tipoFundo={tipoFundo} classeFundo={classeFundo} quota_date={reformatDate(item.quota_date)} m12={(Number(m12 * 100).toFixed(2))}
                    aplicacaoMinima={moneyFormatter(Number(aplicacaoMinima).toFixed())} cotizacaoAplicacaoSigla={cotizacaoAplicacaoSigla} icone_qualificado={icone_qualificado}
                    icone_esg={item.esg_seal} close_aplicar={JSON.stringify(item.is_closed_to_capture)} />
                  {/* retorna para cada item do array FilteredData este componente DisplayDataMobile 
              passando como props dados extraido de cada item do array para exibição - exibe todos os itens */}
                </>

              );
            }) :
              <div className="box-mensagem-no-item">
                {/* se tamanho de array iqual a zero executa mensagem nenhum item disponivel*/}
                <p>O fundo buscado não está disponível nesta lista. Verifique nas demais abas.</p>
              </div>
            )}</div>




          </Tab>
        </Tabs>
      </div >
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
