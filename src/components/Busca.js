import React from 'react';


export const Busca = () => {

    function changeValueMinimo() { // função chamada sempre que houve rmudança no input range aplicação mínima
        var inputAplicacaoMinima = document.querySelector("#aplicacaoMinima"); // seleciona o input range (Aplicação minima) e armazena na variávél
        var outputAplicacaoMinima = document.querySelector("#valueAplicacaoMinima"); // seleciona o label e armazena na variavél


        outputAplicacaoMinima.innerHTML = moneyFormatter(inputAplicacaoMinima.value); // atribui a variavel label o valor atualizado do input range, formatado R$ (moneyFormatter)  

        inputAplicacaoMinima.oninput = function () { // na mudança de valor do range 
            const valor = this.value;        //armazena o valor atualizado do range
            outputAplicacaoMinima.innerHTML = valor; //armazena na variavel label
        }
    }


    function changeValuePerfilRisco() { // função chamada sempre que houve rmudança no input range perfil de risco
        var inputPerfilRisco = document.querySelector("#perfilRisco"); // seleciona o input range (perfil de risco) e armazena na variávél
        var outputPerfilRisco = document.querySelector("#valuePerfilRisco"); // seleciona o label e armazena na variavél

        outputPerfilRisco.innerHTML = inputPerfilRisco.value; // atribui a variavel label o valor atualizado do input range


        inputPerfilRisco.oninput = function () { // na mudança de valor do range 
            outputPerfilRisco.innerHTML = this.value; // armazena na variavel label
        }
    }

    function changeValuePrazoResgate() { // função chamada sempre que houve rmudança no input range prazo de resgate
        var inputPrazoResgate = document.querySelector("#prazoResgate");  // seleciona o input range (prazo resgate) e armazena na variávél
        var outputPrazoResgate = document.querySelector("#valuePrazoResgate"); // seleciona o label e armazena na variavél

        outputPrazoResgate.innerHTML = inputPrazoResgate.value; // atribui a variavel label o valor atualizado do input range


        inputPrazoResgate.oninput = function () { // na mudança de valor do range 
            outputPrazoResgate.innerHTML = this.value; // armazena na variavel label
        }
    }


function moneyFormatter(money) { 
    const valor = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(money);

    return valor;

    // função formata valor numérico para R$ (moeda brasileira) e retorna valor formatado
}



return (

    <div className="container-busca">

        <div className="box-busca">

            <input type="search" name="busca-fundo" id="buscaFundo" placeholder="Buscar fundo por nome" /> {/* input (busca fundos) */}
            <label htmlFor="busca-fundo" className="label-input-search">*Selecione o fundo para saber o horário limite de aplicação.</label> {/* descrição - label - (busca fundos) */}

            <div className="box-filtros">

                <div className="aplicacao-minima item-filtro">
                    <p>Aplicação mínima</p>
                    <input type="range" min="0" max="20000" id="aplicacaoMinima" defaultValue="20000" onChange={changeValueMinimo} />  {/* input (aplicação minima) */}
                    <label htmlFor="aplicacao-minima">Até <span id="valueAplicacaoMinima">R$ 20.000,00</span></label>  {/* descrição - label - (aplicação minima) */}
                </div>

                <div className="perfilRiscoFundo item-filtro perfilRisco">  {/* img (perfil risco) */}
                    <p className="style">Perfil de risco de fundo</p>
                    <label htmlFor="aplicacao-minima">
                        <ul>
                            <li><span className="item-filter-risco"></span></li>   {/* item - score (perfil risco) */}
                            <li><span className="item-filter-risco"></span></li>
                            <li><span className="item-filter-risco"></span></li>
                            <li><span className="item-filter-risco"></span></li>
                            <li><span className="item-filter-risco"></span></li>
                            <li><span className="item-filter-risco"></span></li>
                            <li><span className="item-filter-risco"></span></li>    {/* ..............................*/}
                            <li><span className="item-filter-risco"></span></li>
                            <li><span className="item-filter-risco"></span></li>
                            <li><span className="item-filter-risco"></span></li>
                            <li><span className="item-filter-risco"></span></li>
                            <li><span className="item-filter-risco"></span></li> {/* item - score (perfil risco) */}
                        </ul>
                    </label>
                    <input type="range" min="1" max="12" defaultValue="12" id="perfilRisco" onChange={changeValuePerfilRisco} /> {/* input (perfil risco) */}
                   
                </div>

                <div className="prazoResgate item-filtro"> 
                    <p>Prazo de resgate</p>
                    <input type="range" min="0" max="30" defaultValue="30" id="prazoResgate" onChange={changeValuePrazoResgate} /> {/* input (prazo resgate) */}
                    <label htmlFor="prazoResgate">Até <span id="valuePrazoResgate">30</span> dias utéis</label> {/* descrição - label - (prazo resgate) */}
                </div>

            </div>

            <p className="label-filtros">Horário limite de aplicação: 12:00</p>  {/* descrição - label - (container busca) */}

        </div>


    </div>
);
}

