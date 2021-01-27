import React, {useState} from 'react';
import * as IoIcons from "react-icons/io5";
import { Button, Collapse, Tooltip, OverlayTrigger, Popover } from "react-bootstrap";

export function DisplayDataDesktop({simple_name, corPerfilRisco, estrategia_principal, tipoFundo, classeFundo, quota_date, m12, aplicacaoMinima, cotizacaoAplicacaoSigla, 
    lucroMes, lucroAno, cotizacaoAplicacao, cotizacaoResgate, liquidacaoResgate, taxaAdministracao, cnpj}) {

    const [isOpen, setIsOpen] = useState(false);

    function collapse(key) {
        setIsOpen(!isOpen);

        console.log(key)

    }

    var fontSize = {
        fontSize: 12,
        backgroundColor: "#fff",
        fontWeight: "bold",
        color: "#333"

      }

      const tipMes = (
        <Popover>
          <Popover.Title style={fontSize}>
            Rentabilidade do fundo: {(Number(lucroMes * 100).toFixed(2)) + "%"}<br />
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
            Rentabilidade do fundo: {(Number(lucroAno * 100).toFixed(2)) + "%"}<br />
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
            Rentabilidade do fundo: {(Number(m12 * 100).toFixed(2)) + "%"}<br />
            CDI 12M:
          </Popover.Title>
          <Popover.Content style={fontSize}>
            % sobre CDI:
          </Popover.Content>
        </Popover>
      );



    return (
        <>
            <div className="box-items-fundos-mobile" onClick={collapse.bind(this)}>

                <div class='box-status-fundo' style={corPerfilRisco}><span></span></div>

                <div className="grid-x row-header">

                    <div className="cell medium-3 coluna-header fundo">
                        <h4 className="first-style">{simple_name}</h4>
                        <h2 className="first-h2">{estrategia_principal}</h2>
                        <h2>{tipoFundo} | {classeFundo}</h2>
                    </div>

                    <div className="cell medium-1 coluna-header dataCota">
                        <h4 className="style-bottom">{quota_date}</h4>
                    </div>

                    <div className="cell medium-1 coluna-header mes">
                        <OverlayTrigger trigger="hover" placement="bottom" overlay={tipMes}>
                            <h4>{lucroMes}</h4>
                        </OverlayTrigger>
                    </div>

                    <div className="cell medium-1 coluna-header ano">
                        <OverlayTrigger trigger="hover" placement="bottom" overlay={tipAno}>
                            <h4>{lucroAno}</h4>
                        </OverlayTrigger>
                    </div>

                    <div className="cell medium-1 coluna-header _12m">
                        <OverlayTrigger trigger="hover" placement="bottom" overlay={tip12m}>
                            <h4>{m12}</h4>
                        </OverlayTrigger>
                    </div>

                    <div className="cell medium-3 coluna-header aplicacao_minima">
                        <h4>{aplicacaoMinima}</h4>
                    </div>

                    <div className="cell medium-1 coluna-header prazoResgate">
                        <h4 className="style-bottom">D+{cotizacaoAplicacaoSigla}</h4>
                    </div>

                    <div className="cell medium-1 coluna-header">
                        <IoIcons.IoArrowUndoCircleSharp className="icone-aplicar" />

                    </div>

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

                        <p className="style-bottom">CNPJ do fundo: <span>{cnpj}</span></p>
                    </div>

                </div>
            )}
        </>
    )
}
