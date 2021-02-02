import React from 'react'
import { MdStars } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FcCancel } from "react-icons/fc";
import { IoArrowRedoCircle } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";

export function DisplayDataMobile({ simple_name, icone_qualificado, icone_esg, corPerfilRisco, estrategia_principal,
  tipoFundo, classeFundo, quota_date, m12, aplicacaoMinima, cotizacaoAplicacaoSigla, posicao, index, estrategia_macro, titleDiferenciada }) {

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
    
      <div className='title-box'>{titleDiferenciada &&((titleDiferenciada.includes(index) ? estrategia_macro : null))}</div>
      <div className='subtitle-box'>{posicao && ((posicao.includes(index) ? estrategia_principal : null))}</div>
      <div className="box-display-fundos">
        {/* {(data.includes(index)?estrategia_principal:null)} */}

        <div className="box-item-fundo">
          <div className="wrap-titulo">
            <h6 className="titulo-fundo">{simple_name}
              {(icone_qualificado.toLowerCase() === "investidores qualificados") ? <MdStars className="icon-legenda icon-legenda-star" /> : ""}
              {(icone_esg === true) ? <FaGlobeAmericas className="icon-legenda icon-legenda-globe" /> : ""}
            </h6>
            <div className='box-status-fundo'><span style={{ backgroundColor: cor(corPerfilRisco) }}></span></div>
          </div>

          {/* <p className="subtitulo-fundo">{estrategia_principal}</p> */}
          <p className="subtitulo-fundo">{tipoFundo} | {classeFundo}</p>

          <div className="box-item-info-fundos first-box-item">
            <p className="right-row">Data da cota:</p>
            <p className="left-row">{quota_date}</p>
          </div>

          <div className="box-item-info-fundos">
            <p className="right-row">rentabilidade 12 Meses:</p>
            <p className="left-row">{m12}</p>
          </div>

          <div className="box-item-info-fundos">
            <p className="right-row">Aplicação Mínima:</p>
            <p className="left-row">{aplicacaoMinima}</p>
          </div>

          <div className="box-item-info-fundos">
            <p className="right-row">Cotização do Resgate:</p>
            <p className="left-row">D+{cotizacaoAplicacaoSigla}</p>
          </div>

          <div className="box-info-button">
            <button type="button">Mais detalhes</button>
            <button type="button">Aplicar</button>
          </div>
        </div>

      </div>
    </>
  )
}
