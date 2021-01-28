import React, { useState } from 'react';
import * as IoIcons from "react-icons/io5";
import { MdStars } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FcCancel } from "react-icons/fc";
import { IoArrowRedoCircle } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";
import { Button, Collapse, Tooltip, OverlayTrigger, Popover } from "react-bootstrap";

export class DisplayDataDesktop extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(e) {
    this.setState({ open: !this.state.open })
  }

  render() {

    const fontSize = {
      fontSize: 12,
      backgroundColor: "#fff",
      fontWeight: "bold",
      color: "#333"

    }

    const fontClosedToCapture = {
      fontWeight: "bold",
      color: "red"
    }

    const tipMes = (
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

    const tipAno = (
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

    const tip12m = (
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

        <div className="box-items-fundos-mobile" onClick={(e) => this.togglePanel(e)}>

          <div class='box-status-fundo' style={{ backgroundColor: cor(this.props.corPerfilRisco) }}></div>

          <div className="grid-x row-header">

            <div className="cell medium-3 coluna-header coluna-header-simple-name fundo">
              <div>
                <h4 className="first-style">{this.props.simple_name}
                  {(this.props.icone_qualificado.toLowerCase() === "investidores qualificados") ? <MdStars className="icon-legenda icon-legenda-star" /> : ""}
                  {(this.props.icone_esg === true) ? <FaGlobeAmericas className="icon-legenda icon-legenda-globe" /> : ""}
                </h4>
                <h2 className="first-h2">{this.props.estrategia_principal}</h2>
                <h2>{this.props.tipoFundo} | {this.props.classeFundo}</h2>
              </div>
            </div>

            <div className="cell medium-1 coluna-header dataCota">
              <h4 className="style-bottom">{this.props.quota_date}</h4>
            </div>

            <div className="cell medium-1 coluna-header mes">
              <OverlayTrigger trigger="hover" placement="bottom" overlay={tipMes}>
                <h4>{this.props.lucroMes}</h4>
              </OverlayTrigger>
            </div>

            <div className="cell medium-1 coluna-header ano">
              <OverlayTrigger trigger="hover" placement="bottom" overlay={tipAno}>
                <h4>{this.props.lucroAno}</h4>
              </OverlayTrigger>
            </div>

            <div className="cell medium-1 coluna-header _12m">
              <OverlayTrigger trigger="hover" placement="bottom" overlay={tip12m}>
                <h4>{this.props.m12}</h4>
              </OverlayTrigger>
            </div>

            <div className="cell medium-3 coluna-header aplicacao_minima">
              <h4>{this.props.aplicacaoMinima}</h4>
            </div>

            <div className="cell medium-1 coluna-header prazoResgate">
              <h4 className="style-bottom">D+{this.props.cotizacaoAplicacaoSigla}</h4>
            </div>

            <div className="cell medium-1 coluna-header">
              <IoIcons.IoArrowUndoCircleSharp className="icone-aplicar" />

            </div>

          </div>


        </div>

        {this.state.open ? (
          <div className="box-more-info">
            {this.props.children}
            <div className="box-more-info-grafico">

            </div>

            <div className="box-more-info-detalhes">
              <p>Cotização da aplicação: <span>{this.props.cotizacaoAplicacao}</span></p>
              <p>Cotização do resgate <span>{this.props.cotizacaoResgate}</span></p>
              <p>Liquidação do resgate: <span>{this.props.liquidacaoResgate}</span></p>
              <p className="last-p">Taxa de administração: <span>{this.props.taxaAdministracao}</span></p>


              <a href="#" className="link">Conheça mais informações sobre este fundo</a>

              <p className="style-bottom">CNPJ do fundo: <span>{this.props.cnpj}</span></p>
            </div>

          </div>) : null}
      </>
    )
  }
}
