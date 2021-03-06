import React from 'react';
import * as IoIcons from "react-icons/io5";
import { MdStars } from "react-icons/md";
import { AiOutlineInfoCircle, AiFillQuestionCircle } from "react-icons/ai";
import { TiCancel } from "react-icons/ti";
import { Tooltip, OverlayTrigger, Popover } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

export class DisplayDataDesktop extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(e) {  // método que controla evento
    this.setState({ open: !this.state.open }) // state (abrir ou fechar mais informações)
  }

  render() {

    const fontSize = { // style popover
      fontSize: 12,
      backgroundColor: "#fff",
      fontWeight: "bold",
      color: "#333"

    }

    const tipMes = ( // exibe quando hovering em rentabilidade mês 
      <Popover>
        <Popover.Title style={fontSize}>
          Rentabilidade do fundo: {this.props.lucroMes}%<br />
            CDI do mês:
          </Popover.Title>
        <Popover.Content style={fontSize}>
          % sobre CDI:
          </Popover.Content>
      </Popover>
    );

    const tipAno = ( // exibe quando hovering em rentabilidade ano 
      <Popover>
        <Popover.Title style={fontSize}>
          Rentabilidade do fundo: {this.props.lucroAno}%<br />
            CDI 2021:
          </Popover.Title>
        <Popover.Content style={fontSize}>
          % sobre CDI:
          </Popover.Content >
      </Popover>
    );

    const tip12m = ( // exibe quando hovering em rentabilidade 12m
      <Popover>
        <Popover.Title style={fontSize}>
          Rentabilidade do fundo: {this.props.m12}%<br />
            CDI 12M:
          </Popover.Title>
        <Popover.Content style={fontSize}>
          % sobre CDI:
          </Popover.Content>
      </Popover>
    );

    const prazoResgate = ( // exibe quando hovering icone prazo resgate 
      <Popover>
        <Popover.Title style={fontSize}>
          Dias para a conversão do resgate
          </Popover.Title>
        <Popover.Content>
          3° dia útil anterior ao último dia útil do 2° mês calendário subsequente à solicitação de resgate
          </Popover.Content>
      </Popover>
    );

    const cotizacaoAplicacao = ( // exibe quando hovering cotizacao de aplicacão na div collapse (mais informações) 
      <Popover>
        <Popover.Content>
          Total de dias para que o valor <br />aplicado seja convertido em cotas<br /> do fundo.
          </Popover.Content>
      </Popover>
    );

    const cotizacaoResgate = ( // exibe quando hovering cotizacao de resgate na div collapse (mais informações) 
      <Popover>
        <Popover.Content>
          Total de dias para que as cotas do<br /> fundo sejam transformadas em <br /> em valor monetário.
          </Popover.Content>
      </Popover>
    );

    const liquidacaoResgate = ( // exibe quando hovering liquidacão Resgate na div collapse (mais informações) 
      <Popover>
        <Popover.Content>
          Total de dias após a conversão <br /> para que o valor do resgate esteja<br /> disponivél em sua Subconta<br /> Órama.
          </Popover.Content>
      </Popover>
    );

    const tip = ( // exibe quando hovering liquidacão Resgate na div collapse (mais informações) 
    <Popover>
      <Popover.Content>
        teste
        </Popover.Content>
    </Popover>
  );



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

    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        Simple tooltip
      </Tooltip>
    );



    return (
      <>

        
        <div className='title-box'>{(this.props.titleDiferenciada.includes(this.props.index) ? this.props.estrategia_macro : null)}</div> {/* contéudo cada item (fundo) - desktop*/}

        <div className='subtitle-box'>{(this.props.posicao.includes(this.props.index) ? this.props.estrategia_principal : null)}</div>
        <div className="box-items-fundos-mobile" onClick={(e) => this.togglePanel(e)}>

          <div className='box-status-fundo' style={{ backgroundColor: cor(this.props.corPerfilRisco) }}></div>

          <div className="grid-x row-header" style={this.props.close_aplicar === "true" ? { color: "#5f5f5fdd" } : {}}>

            <div className="cell medium-3 coluna-header coluna-header-simple-name fundo">
              <div>
                <h4 className="first-style">{this.props.simple_name}

                 
                  {(this.props.icone_qualificado.toLowerCase() === "investidores qualificados") ?
                      <MdStars className="icon-legenda icon-legenda-star"  data-tip data-for="registerTip" data-delay-show='500' style={(this.props.close_aplicar === "true" ? { color: "#5f5f5fdd" } : {})} />
                    : ""}
               
               <ReactTooltip id="registerTip" place="top" effect="solid">
                  Fundo para investidor qualificado
              </ReactTooltip>


                </h4>
                {/* <h2 className="first-h2">{this.props.estrategia_principal}</h2> */}
                <h2>{this.props.tipoFundo} | {this.props.classeFundo}</h2>
              </div>
            </div>

            <div className="columns medium-1 coluna-header dataCota">
              <h4 className="style-bottom">{this.props.quota_date}</h4>
            </div>

            <div className="columns medium-1 coluna-header mes">
              <OverlayTrigger placement="bottom" overlay={tipMes} trigger={["hover", "focus"]}>
                <h4>{this.props.lucroMes}</h4>
              </OverlayTrigger>
            </div>

            <div className="columns medium-1 coluna-header ano">
              <OverlayTrigger placement="bottom" overlay={tipAno} trigger={["hover", "focus"]}>
                <h4>{this.props.lucroAno}</h4>
              </OverlayTrigger>
            </div>

            <div className="columns medium-1 coluna-header _12m">
              <OverlayTrigger placement="bottom" overlay={tip12m} trigger={["hover", "focus"]}>
                <h4>{this.props.m12}</h4>
              </OverlayTrigger>
            </div>

            <div className="columns medium-3 coluna-header aplicacao_minima">
              <h4>{this.props.aplicacaoMinima}</h4>
            </div>

            <div className="columns medium-1 coluna-header prazoResgate">
              <h4 className="style-bottom">
                <OverlayTrigger placement="bottom" overlay={prazoResgate} trigger={["hover", "focus"]}>
                  <AiOutlineInfoCircle className="icon-legenda icon-legenda-info" />
                </OverlayTrigger>
              </h4>

            </div>

            <div className="columns medium-1 coluna-header">
              {(this.props.close_aplicar === "true" ? <TiCancel className="icon-legenda icon-legenda-fechado" /> : <IoIcons.IoArrowUndoCircleSharp className="icone-aplicar" />)}
            </div>

          </div>


        </div>

        {this.state.open ? (    /* mais informações, click collapse, só exibe se state iqual a true */
          <div className="box-more-info">
            {this.props.children}
            <div className="box-more-info-grafico">

            </div>

            <div className="box-more-info-detalhes">
              <p>Cotização da aplicação:
                <span>{this.props.cotizacaoAplicacao}
                  <OverlayTrigger trigger={["hover", "focus"]} placement="bottom" overlay={cotizacaoAplicacao}>
                    <AiFillQuestionCircle className="icone-more-info" />
                  </OverlayTrigger>
                </span>
              </p>
              <p>Cotização do resgate
                <span>{this.props.cotizacaoResgate}
                  <OverlayTrigger trigger={["hover", "focus"]} placement="bottom" overlay={cotizacaoResgate}>
                    <AiFillQuestionCircle className="icone-more-info" />
                  </OverlayTrigger>
                </span>
              </p>


              <p>Liquidação do resgate:
                <span>{this.props.liquidacaoResgate}
                  <OverlayTrigger trigger={["hover", "focus"]} placement="bottom" overlay={liquidacaoResgate}>
                    <AiFillQuestionCircle className="icone-more-info" />
                  </OverlayTrigger>
                </span>
              </p>
              <p className="last-p">Taxa de administração: <span>{this.props.taxaAdministracao}</span></p>


              <a href="#" className="link">Conheça mais informações sobre este fundo</a>

              <p className="style-bottom">CNPJ do fundo: <span>{this.props.cnpj}</span></p>
            </div>

          </div>) : null}
      </>
    )
  }
}
