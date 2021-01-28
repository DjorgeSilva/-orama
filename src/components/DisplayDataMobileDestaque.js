import React from 'react'
import { DisplayDataMobile } from "./DisplayDataMobile.js"

export function DisplayDataMobileDestaque({ FilteredData }) {

    function moneyFormatter(money) {
        const valor = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }
        ).format(money);

        return valor;
    }

    function reformatDate(dateStr) {
        const dArr = dateStr.split("-");
        return dArr[2] + "/" + dArr[1] + "/" + dArr[0].substring(2);
    }

    return (
        <div>
            <div classNames='data-mobile'>{(FilteredData.length > 1 ? FilteredData.map((item, index) => {

                const { specification: { fund_type: tipoFundo, fund_class: classeFundo, fund_risk_profile: { score_range_order: corPerfilRiscoFundo } } } = item;
                const { specification: { fund_main_strategy: { name: estrategia_principal } } } = item;
                const { profitabilities: { month: lucroMes, m12, year: lucroAno } } = item;
                const { operability: { minimum_initial_application_amount: aplicacaoMinima, application_quotation_days_str: cotizacaoAplicacao, retrieval_quotation_days: cotizacaoAplicacaoSigla, retrieval_quotation_days_str: cotizacaoResgate,
                    retrieval_liquidation_days_str: liquidacaoResgate, application_time_limit: horarioLimiteAplicacao } } = item;
                const { fees: { administration_fee: taxaAdministracao } } = item;



                return (

                    <>
                        <div className="wrap-title-destaque">
                            <div className="box-title-destaque">
                                <h1>Renda Fixa</h1>
                                <h2>Tessouro Inflação + Juros</h2>
                            </div>

                            <DisplayDataMobile simple_name={item.simple_name} corPerfilRisco={Number(corPerfilRiscoFundo)} estrategia_principal={estrategia_principal}
                                tipoFundo={tipoFundo} classeFundo={classeFundo} quota_date={reformatDate(item.quota_date)} m12={(Number(m12 * 100).toFixed(2))}
                                aplicacaoMinima={moneyFormatter(Number(aplicacaoMinima).toFixed())} cotizacaoAplicacaoSigla={cotizacaoAplicacaoSigla} />

                        </div>


                    </>

                );
            }) :
                <div className="box-mensagem-no-item">
                    <p>O fundo buscado não está disponível nesta lista. Verifique nas demais abas.</p>
                </div>
            )}</div>

        </div>
    )
}
