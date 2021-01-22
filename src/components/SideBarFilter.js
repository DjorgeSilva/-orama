import React, { useState, useEffect } from 'react';
import { Button, Collapse } from "react-bootstrap"

export function SideBarFilter(isCheckedRendaFixa, isCheckedDifereciada, isCheckedRendaVariavel, setIsCheckedRendaFixa, setIsCheckedDifereciada, setIsCheckedRendaVariavel) {

    const [openRendaFixa, setOpenRendaFixa] = useState(false);
    const [openDiferenciada, setOpenDiferenciada] = useState(false);
    const [openGestores, setOpenGestores] = useState(false);
    const [openVariavel, setOpenVariavel] = useState(false);
    const [data, setData] = useState([]);
    const [rendaFixa, setRendaFixa] = useState([]);
    const [diferenciada, setDiferenciada] = useState([]);
    const [rendaVariavel, setRendaVariavel] = useState([]);
    const [checado, setChecado] = useState(true);
    const rendaFixaID = "1";
    const diferenciadaID = "2";
    const varivelID = "3";
    var filtraNomeEstrategiaRendaFixa = []; 
    var uniqueNomeEstrategiaRendaFixa = [];
    var filtraNomeEstrategiaDiferenciada = []; 
    var uniqueNomeEstrategiaDiferenciada = [];
    var filtraNomeRendaVariavel = []; 
    var uniqueNomeRendaVariavel = [];
    var filtraNomeGestores = []; 
    var uniqueNomeGestores = [];


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

      useEffect(() => {
        setRendaVariavel(
          data.filter(item => {
           return JSON.stringify(item.specification.fund_macro_strategy.id).toLowerCase().includes(varivelID.toLowerCase())
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

    rendaVariavel.map((item)=>{
        filtraNomeRendaVariavel.push(item.specification.fund_main_strategy.name);
      })

      uniqueNomeRendaVariavel = filtraNomeRendaVariavel.filter(function(item, pos) {
        return filtraNomeRendaVariavel.indexOf(item) == pos;
    })

    data.map((item)=>{
        filtraNomeGestores.push(item.fund_manager.name);
      })

      uniqueNomeGestores = filtraNomeGestores.filter(function(item, pos) {
        return filtraNomeGestores.indexOf(item) == pos;
    })

    uniqueNomeGestores.sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0))

    return (

        <div className="item-sideBarFiltros">
            <h1>Filtrar por estratégias:</h1>

            <>
            <Button onClick={() => setOpenRendaFixa(!openRendaFixa)} aria-controls="btn-collapse-renda-fixa" aria-expanded={openRendaFixa} className="bg-light btn-collapse-renda-fixa"><input type="checkbox" id="input-valor-rendaFixa" className="inside-btn" defaultChecked={isCheckedRendaFixa} onChange={()=>setIsCheckedRendaFixa(!isCheckedRendaFixa)}/>Renda Fixa</Button>
            <Collapse in={openRendaFixa}>


                <div id="btn-collapse-renda-fixa">
                    <div class="card card-body bg-white p-0 body-rendaFixa">
                        <ul>
                            {uniqueNomeEstrategiaRendaFixa.map((item) => {
                            
                                return (
                                
                                    <li><input type="checkbox" id="" className="inside-btn" defaultChecked={checado} /><p>{item}</p></li>
                                )
                            })}

                        </ul>

                    </div>


                </div>

            </Collapse>
            </>


            <Button onClick={() => setOpenDiferenciada(!openDiferenciada)} aria-controls="btn-collapse-estrategias-diferenciadas" aria-expanded={openDiferenciada} className="bg-light btn-estrategiasDiferenciadas"><input type="checkbox" id="input-valor-estrategiasDiferenciadas" className="inside-btn" defaultChecked={isCheckedDifereciada} />Estratégias diferenciadas</Button>
            <Collapse in={openDiferenciada}>


                <div id="btn-collapse-estrategias-diferenciadas">
                    <div class="card card-body bg-white p-0 body-Diferenciada">
                        <ul>
                            {uniqueNomeEstrategiaDiferenciada.map((item) => {
                            
                                return (
                                
                                    <li><input type="checkbox" id="" className="inside-btn" defaultChecked={checado} /><p>{item}</p></li>
                                )
                            })}

                        </ul>

                    </div>


                </div>

            </Collapse>

            <Button onClick={() => setOpenVariavel(!openVariavel)} aria-controls="btn-collapse-renda-variavel" aria-expanded={openVariavel} className="bg-light btn-estrategiasRenda-variavel"><input type="checkbox" id="input-valor-rendaVariavel" className="inside-btn" defaultChecked={isCheckedRendaVariavel} />Estratégias variavél</Button>
            <Collapse in={openVariavel}>


                <div id="btn-collapse-renda-variavel">
                    <div class="card card-body bg-white p-0 body-variavel">
                        <ul>
                            {uniqueNomeRendaVariavel.map((item) => {
                            
                                return (
                                
                                    <li><input type="checkbox" id="" className="inside-btn" defaultChecked={checado} /><p>{item}</p></li>
                                )
                            })}

                        </ul>

                    </div>


                </div>

            </Collapse>

            <h1 className="txt-filtrar-gestores">Filtrar por gestores:</h1>
            
            <Button onClick={() => setOpenGestores(!openGestores)} aria-controls="btn-collapse-gestores" aria-expanded={openGestores} className="bg-light btn-gestores"><input type="checkbox" id="input-valor-gestores" className="inside-btn" defaultChecked={checado} />Gestores</Button>
            <Collapse in={openGestores}>


                <div id="btn-collapse-gestores">
                    <div class="card card-body bg-white p-0 body-gestores">
                        <ul>
                        
                            {uniqueNomeGestores.map((item) => {
                            
                                return (
                                
                                    <li><input type="checkbox" id="" className="inside-btn" defaultChecked={checado} /><p>{item}</p></li>
                                )
                            })}

                        </ul>

                    </div>


                </div>

            </Collapse>

            

            


        </div >
    )
}
