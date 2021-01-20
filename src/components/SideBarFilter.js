import React, { useState, useEffect } from 'react';
import { Button, Collapse } from "react-bootstrap"

export function SideBarFilter() {

    const [openRendaFixa, setOpenRendaFixa] = useState(false);
    const [openDiferenciada, setOpenDiferenciada] = useState(false);
    const [data, setData] = useState([]);
    const [rendaFixa, setRendaFixa] = useState([]);
    const [diferenciada, setDiferenciada] = useState([]);
    const rendaFixaID = "1";
    const diferenciadaID = "2";
    var filtraNomeEstrategiaRendaFixa = []; 
    var uniqueNomeEstrategiaRendaFixa = [];
    var filtraNomeEstrategiaDiferenciada = []; 
    var uniqueNomeEstrategiaDiferenciada = [];


    useEffect(() => {
        fetch("https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full")
            .then((response) => response.json())
            .then((json) => setData(json));
    }, [])

    useEffect(() => {
        setRendaFixa(
          data.filter(item => {
           return JSON.stringify(item.specification.fund_macro_strategy.id).toLowerCase().includes(rendaFixaID.toLowerCase())
          })
        )
      }, [data])

      useEffect(() => {
        setDiferenciada(
          data.filter(item => {
           return JSON.stringify(item.specification.fund_macro_strategy.id).toLowerCase().includes(diferenciadaID.toLowerCase())
          })
        )
      }, [data])
    

      rendaFixa.map((item)=>{
        filtraNomeEstrategiaRendaFixa.push(item.specification.fund_main_strategy.name);
      })

      uniqueNomeEstrategiaRendaFixa = filtraNomeEstrategiaRendaFixa.filter(function(item, pos) {
        return filtraNomeEstrategiaRendaFixa.indexOf(item) == pos;
    })

    diferenciada.map((item)=>{
        filtraNomeEstrategiaDiferenciada.push(item.specification.fund_main_strategy.name);
      })

      uniqueNomeEstrategiaDiferenciada = filtraNomeEstrategiaDiferenciada.filter(function(item, pos) {
        return filtraNomeEstrategiaDiferenciada.indexOf(item) == pos;
    })

    return (

        <div className="item-sideBarFiltros">
            <h1>Filtrar por estratégias:</h1>

            <>
            <Button onClick={() => setOpenRendaFixa(!openRendaFixa)} aria-controls="btn-collapse-renda-fixa" aria-expanded={openRendaFixa} className="bg-light btn-collapse-renda-fixa">Renda Fixa</Button>
            <Collapse in={openRendaFixa}>


                <div id="btn-collapse-renda-fixa">
                    <div class="card card-body bg-white p-0 body-rendaFixa">
                        <ul>
                            {uniqueNomeEstrategiaRendaFixa.map((item) => {
                            
                                return (
                                
                                    <li><input type="checkbox" id="" className="inside-btn" /><p>{item}</p></li>
                                )
                            })}

                        </ul>

                    </div>


                </div>

            </Collapse>
            </>


            <Button onClick={() => setOpenDiferenciada(!openDiferenciada)} aria-controls="btn-collapse-estrategias-diferenciadas" aria-expanded={openDiferenciada} className="bg-light btn-estrategiasDiferenciadas">Estratégias diferenciadas</Button>
            <Collapse in={openDiferenciada}>


                <div id="btn-collapse-estrategias-diferenciadas">
                    <div class="card card-body bg-white p-0 body-Diferenciada">
                        <ul>
                            {uniqueNomeEstrategiaDiferenciada.map((item) => {
                            
                                return (
                                
                                    <li><input type="checkbox" id="" className="inside-btn" /><p>{item}</p></li>
                                )
                            })}

                        </ul>

                    </div>


                </div>

            </Collapse>
        </div >
    )
}
