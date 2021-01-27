import React from 'react'

export function DisplayDataMobile({simple_name, corPerfilRisco, estrategia_principal, tipoFundo, classeFundo, quota_date, m12, aplicacaoMinima, cotizacaoAplicacaoSigla  }) {

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
            <div class="box-display-fundos">

                <div class="box-item-fundo">
                    <div class="wrap-titulo">
                        <h6 class="titulo-fundo">{simple_name}</h6>
                        <div class='box-status-fundo'><span style={{ backgroundColor: cor(corPerfilRisco) }}></span></div>
                    </div>

                    <p class="subtitulo-fundo">{estrategia_principal}</p>
                    <p class="subtitulo-fundo">{tipoFundo} | {classeFundo}</p>

                    <div class="box-item-info-fundos first-box-item">
                        <p class="right-row">Data da cota:</p>
                        <p class="left-row">{quota_date}</p>
                    </div>

                    <div class="box-item-info-fundos">
                        <p class="right-row">rentabilidade 12 Meses:</p>
                        <p class="left-row">{m12}</p>
                    </div>

                    <div class="box-item-info-fundos">
                        <p class="right-row">Aplicação Mínima:</p>
                        <p class="left-row">{aplicacaoMinima}</p>
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
    )
}
