import React from 'react';
import "../css/index.css";

export const InfoFundos = () => {
    return (
        <div class="box-display-fundos">
                <div class="box-item-fundo">
                    <div class="wrap-titulo">
                        <h6 class="titulo-fundo">Avbor Global Equities BRL FIC FIA - BDR Nível I</h6>
                        <span class='status-fundo'></span>
                    </div>
                    <p class="subtitulo-fundo">Ações | Ações Livre</p>
                    <div class="box-item-info-fundos">
                        <p class="right-row">Data da cota:</p>
                        <p class="left-row">07/01/2021</p>
                    </div>
                    <div class="box-item-info-fundos">
                        <p class="right-row">rantabilidade 12 Meses:</p>
                        <p class="left-row">119,61</p>
                    </div>
                    <div class="box-item-info-fundos">
                        <p class="right-row">Aplicação Mínima:</p>
                        <p class="left-row">1.000,00</p>
                    </div>
                    <div class="box-item-info-fundos">
                        <p class="right-row">Cotização do Resgate:</p>
                        <p class="left-row">D+1</p>
                    </div>
                    <div class="box-info-button">
                        <button type="button">Mais detalhes</button>
                        <button type="button">Aplicar</button>
                    </div>
                </div>
        </div>
    );
}
;
