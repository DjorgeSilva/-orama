import React from 'react';

    {/*componente header dos fundos - exibição apenas desktop */}

export const HeaderInfoFundos = () => {
    return (
                <div className="box-header-fundos-mobile">
                    <div className="grid-x row-header">
                        <div className="cell medium-3 coluna-header">
                            <h4 className="first-style">Fundo</h4>
                        </div>
                        <div className="cell medium-1 coluna-header">
                            <h4 className="style-bottom">Data da cota</h4>
                        </div>
                        <div className=" cell medium-1 coluna-header ">
                            <h4>Mês (%)</h4>
                        </div>
                        <div className="cell medium-1  coluna-header">
                            <h4>2020 (%)</h4>
                        </div>
                        <div className="cell medium-1 coluna-header">
                            <h4>12M (%)</h4>
                        </div>
                        <div className="cell medium-3 coluna-header">
                            <h4>Aplicação mínima (R$)</h4>
                        </div>
                        <div className="cell medium-1 coluna-header">
                            <h4 className="style-bottom style-top">Prazo do resgate</h4>
                        </div>
                        <div className="cell medium-1 coluna-header">
                            <h4>Aplicar</h4>
                        </div>
                    </div>

                    
                </div>
    );
}

