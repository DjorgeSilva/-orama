import React from 'react';
import "../css/index.css";
import { MdStars } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FcCancel } from "react-icons/fc";
import { IoArrowRedoCircle } from "react-icons/io5";
import { FaGlobeAmericas} from "react-icons/fa";



export const Legenda = () => {
    return (
        <div>
            <div class="box-legenda">
                <h6>Legenda</h6>
                <ul>
                    <li>
                        <MdStars className="icon-legenda icon-legenda-star"/>
                        <p>Fundo para investidor qualificado</p>
                    </li>
                    <li>
                        <AiOutlineInfoCircle className="icon-legenda icon-legenda-info"/>
                        <p>Entenda o resgate deste fundo</p>
                    </li>
                    <li>
                        <FcCancel className="icon-legenda icon-legenda-fechado"/>
                        <p>Fundo fechado para aplicação</p>
                    </li>
                    <li>
                       <IoArrowRedoCircle className="icon-legenda icon-legenda-aplicar"/>
                        <p>Aplicar neste fundo</p>
                    </li>
                    <li>
                        <FaGlobeAmericas className="icon-legenda icon-legenda-globe"/>
                        <p>Investimento ESG (Environmental, Social and Governance)</p>

                    </li>
                </ul>

            </div>
        </div>
    );
}

