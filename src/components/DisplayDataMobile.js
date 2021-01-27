import React from 'react'

export function DisplayDataMobile({simple_name, corPerfilRisco, estrategia_principal, tipoFundo, classeFundo, quota_date, m12, aplicacaoMinima, cotizacaoAplicacaoSigla  }) {
    return (
            <div class="box-display-fundos">

                <div class="box-item-fundo">
                    <div class="wrap-titulo">
                        <h6 class="titulo-fundo">{simple_name}</h6>
                        <div class='box-status-fundo'><span style={{ backgroundColor: {corPerfilRisco} }}></span></div>
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
