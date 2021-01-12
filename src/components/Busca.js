import React from 'react';
import "../css/index.css";

export const Busca = () => {
    return (
        <div class="box-busca">
            <input type="search" name="busca-fundo" id="buscaFundo"/>
            <label for="busca-fundo">*Selecione o fundo para saber o horário limite de aplicação.</label>
        </div>
    );
}

