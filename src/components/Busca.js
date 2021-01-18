import React from 'react';
import { AiOutlinePullRequest } from 'react-icons/ai';
import "../css/index.css";
import imgPerfilRisco from "../assets/img/perfil.png"


export const Busca = () => {



    function changeValueMinimo(){
        var inputAplicacaoMinima = document.querySelector("#aplicacaoMinima");
        var outputAplicacaoMinima = document.querySelector("#valueAplicacaoMinima");


        outputAplicacaoMinima.innerHTML = inputAplicacaoMinima.value;

        inputAplicacaoMinima.oninput = function() {
            outputAplicacaoMinima.innerHTML = this.value;
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



    return (
        
        <div className="container-busca">
            <div class="box-busca">
                <input type="search" name="busca-fundo" id="buscaFundo" placeholder="Buscar fundo por nome"/>
                <label for="busca-fundo" className="label-input-search">*Selecione o fundo para saber o horário limite de aplicação.</label>
           
                <div className="box-filtros">

                    <div className="aplicacao-minima item-filtro">
                        <p>Aplicação mínima</p>
                        <input type="range" min="0" max="20000" id="aplicacaoMinima" onChange={changeValueMinimo}/>
                        <label htmlFor="aplicacao-minima">Até R$ <span id="valueAplicacaoMinima"></span></label>
                    </div>

                    <div className="perfilRiscoFundo item-filtro perfilRisco">
                        <p className="style">Perfil de risco de fundo</p>
                        <img src={imgPerfilRisco} alt=""/>
                        <input type="range" name="aplicacao-minima" id="perfilRisco"/>
                    </div>

                    <div className="prazoResgate item-filtro">
                        <p>Prazo de resgate</p>
                        <input type="range" min="0" max="30" id="prazoResgate" onChange={changeValuePrazoResgate}/>
                        <label htmlFor="prazoResgate">Até <span id="valuePrazoResgate"></span> dias utéis</label>
                    </div>
                    
                </div>

                <p className="label-filtros">Horário limite de aplicação: 12:00</p>
            
            </div>
            
           
        </div>
    );
}

