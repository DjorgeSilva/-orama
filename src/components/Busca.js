import React from 'react';
import "../css/index.css";

export const Busca = () => {
    return (
        <div className="container-busca">
            <div class="box-busca">
                <input type="search" name="busca-fundo" id="buscaFundo" placeholder="Buscar fundo por nome"/>
                <label for="busca-fundo" className="label-input-search">*Selecione o fundo para saber o horário limite de aplicação.</label>
           
                <div className="box-filtros">

                    <div className="aplicacao-minima item-filtro">
                        <p>Aplicação mínima</p>
                        <input type="range" name="aplicacao-minima" id=""/>
                        <label htmlFor="aplicacao-minima">Até R$ 20.000,00</label>
                    </div>

                    <div className="aplicacao-minima item-filtro">
                        <p>Perfil de risco de fundo</p>
                        <input type="range" name="aplicacao-minima" id=""/>
                    </div>

                    <div className="aplicacao-minima item-filtro">
                        <p>Aplicação mínima</p>
                        <input type="range" name="aplicacao-minima" id=""/>
                        <label htmlFor="aplicacao-minima">Até R$ 20.000,00</label>
                    </div>
                    
                </div>

                <p className="label-filtros">Horário limite de aplicação: 12:00</p>
            
            </div>
            
           
        </div>
    );
}

