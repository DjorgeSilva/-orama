import React from 'react'
import "../css/index.css";
import { MdStars } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoArrowUndoCircle } from "react-icons/io5";
import { TiCancel} from "react-icons/ti";
import { AiFillCheckCircle } from "react-icons/ai";

export function LegendaDesktop() {
    return (
        <div>
        <div className="box-legenda-desktop">
            <h6>Legenda</h6>
            <ul>
                <li className="mb-first-li">
                    <MdStars className="icon-legenda icon-legenda-star" />
                    <p>Fundo para investidor qualificado</p>
                </li>
                <li>
                    <AiFillCheckCircle className="icon-legenda icon-legenda-affirmative" />
                    <p>Você já investe neste fundo</p>
                </li>
                <li>
                    <AiOutlineInfoCircle className="icon-legenda icon-legenda-info" />
                    <p>Entenda o resgate deste fundo</p>
                </li>
                <li>
                    <TiCancel className="icon-legenda icon-legenda-fechado" />
                    <p className="legenda-fechado">Fundo fechado para aplicação</p>
                </li>
                <li className="mb-last-li">
                    <IoArrowUndoCircle className="icon-legenda icon-legenda-aplicar" />
                    <p>Aplicar neste fundo</p>

                </li>
            </ul>

        </div>
    </div>
    )
}
