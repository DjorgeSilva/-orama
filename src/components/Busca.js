import React from 'react';
import { AiOutlinePullRequest } from 'react-icons/ai';
import "../css/index.css";
import imgPerfilRisco from "../assets/img/perfil.png"


export const Busca = () => {



    function changeValueMinimo(){
        var inputAplicacaoMinima = document.querySelector("#aplicacaoMinima");
        var outputAplicacaoMinima = document.querySelector("#valueAplicacaoMinima");


        outputAplicacaoMinima.innerHTML = moneyFormatter(inputAplicacaoMinima.value);

        inputAplicacaoMinima.oninput = function() {
            const valor = this.value;
            outputAplicacaoMinima.innerHTML = valor;
        }
    }

    function changeValuePrazoResgate(){
        var inputPrazoResgate = document.querySelector("#prazoResgate");
        var outputPrazoResgate = document.querySelector("#valuePrazoResgate");

        outputPrazoResgate.innerHTML = inputPrazoResgate.value;


        inputPrazoResgate.oninput = function() {
            outputPrazoResgate.innerHTML = this.value;
        }
    }

    function changeValuePerfilRisco(){
        var inputPerfilRisco = document.querySelector("#perfilRisco");
        var outputPerfilRisco = document.querySelector("#valuePerfilRisco");

        outputPerfilRisco.innerHTML = inputPerfilRisco.value;


        inputPerfilRisco.oninput = function() {
            outputPerfilRisco.innerHTML = this.value;
        }
    }

    function moneyFormatter(money) {
        const valor = new Intl.NumberFormat('pt-BR',
             { style: 'currency', currency: 'BRL' }
         ).format(money);
 
         return valor;
     }



    return (
        
        <div className="container-busca">
            <div className="box-busca">
                <input type="search" name="busca-fundo" id="buscaFundo" placeholder="Buscar fundo por nome"/>
                <label htmlFor="busca-fundo" className="label-input-search">*Selecione o fundo para saber o horário limite de aplicação.</label>
           
                <div className="box-filtros">

                    <div className="aplicacao-minima item-filtro">
                        <p>Aplicação mínima</p>
                        <input type="range" min="0" max="20000" id="aplicacaoMinima" defaultValue="20000" onChange={changeValueMinimo}/>
                        <label htmlFor="aplicacao-minima">Até <span id="valueAplicacaoMinima">R$ 20.000,00</span></label>
                    </div>

                    <div className="perfilRiscoFundo item-filtro perfilRisco">
                        <p className="style">Perfil de risco de fundo</p>
                        <label htmlFor="aplicacao-minima">
                            <ul>
                                <li><span className="item-filter-risco" onHoverT></span></li>
                                <li><span className="item-filter-risco"></span></li>
                                <li><span className="item-filter-risco"></span></li>
                                <li><span className="item-filter-risco"></span></li>
                                <li><span className="item-filter-risco"></span></li>
                                <li><span className="item-filter-risco"></span></li>
                                <li><span className="item-filter-risco"></span></li>
                                <li><span className="item-filter-risco"></span></li>
                                <li><span className="item-filter-risco"></span></li>
                                <li><span className="item-filter-risco"></span></li>
                                <li><span className="item-filter-risco"></span></li>
                                <li><span className="item-filter-risco"></span></li>
                            </ul>
                        </label>
                        <input type="range" min="1" max="12" defaultValue="12" id="perfilRisco" onChange={changeValuePerfilRisco}/>
                        <span id="valuePerfilRisco"></span>
                    </div>

                    <div className="prazoResgate item-filtro">
                        <p>Prazo de resgate</p>
                        <input type="range" min="0" max="30" defaultValue="30" id="prazoResgate" onChange={changeValuePrazoResgate}/>
                        <label htmlFor="prazoResgate">Até <span id="valuePrazoResgate">30</span> dias utéis</label>
                    </div>
                    
                </div>

                <p className="label-filtros">Horário limite de aplicação: 12:00</p>
            
            </div>
            
           
        </div>
    );
}

