import React, {useState}from 'react';
import * as FaIcons from "react-icons/fa";
import {Link} from "react-router-dom";
import {SideBarData} from "./SideBarData.js"
import "../css/index.css"
import {IconContext} from 'react-icons';
import imgLogo from "../assets/img/orama-logo.png"

{/* exibição do menu lateral (mobile) e meu principal da página (desktop)
*/}

export const NavBar = () => {
    const[sidebar,setSidebar] = useState(false); // controla quando abre e fecha menu lateral

    const showSidebar = ()=> setSidebar(!sidebar); // controla quando abre e fecha menu lateral

    return (
        <div> {/* exibição do menu lateral - começa aqui*/}
            <React.Fragment>
                <IconContext.Provider value={{color:'#fff'}}>

                    <div className="navbar">

                        <div className="box-nav-bar">
                            <Link to="#" className="icone-nav-bar">
                                <FaIcons.FaBars onClick={showSidebar}/>
                            </Link>

                            <nav className={sidebar?'nav-menu active':'nav-menu'}>
                                <ul className="nav-menu-items">
                                    {SideBarData.map((item, index)=> {
                                        return(
                                            <li key={index} className={item.cName}>
                                                <Link to={item.path} onClick={showSidebar}>
                                                    <span>{item.title}</span>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>

                                <div className="nav-menu-button">
                                    <button type="button">Sua conta</button>
                                    <button type="button" className="btn-lateral-style">Abra sua conta</button>
                                </div>
                            </nav>
                        </div>

                        <div className="nav-icon-logo">
                            <img src={imgLogo} alt="logomarca òrama"/>
                        </div>

                        <div className="nav-button">
                            <button type="button">Abra sua conta</button>
                        </div>

                    </div>
                {/* exibição do menu lateral - termina aqui (mobile)*/}
                </IconContext.Provider>

                {/* exibição do menu principal - começa aqui (desktop)*/}
                    <div className="box-menu-desktop">

                        <div className="box-menu-desktop-logo">
                            <img src={imgLogo}  alt="logomarca òrama"/>
                        </div>

                        <div className="menu-desktop">
                            <nav>
                                <ul>
                                    <li><a href="https://www.orama.com.br/empresa">A empresa</a></li>
                                    <li><a href="https://www.orama.com.br/como-funciona">Como funciona</a></li>
                                    <li><a href="https://www.orama.com.br/investimentos">investimentos</a></li>
                                    <li><a href="https://www.orama.com.br/atendimento">Atendimento</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="box-menu-desktop-btn">
                            <button type="button" className="btn-sua-conta">Sua conta</button>
                            <button type="Sua conta" className="btn-abra-sua-conta">Abra sua conta</button>
                        </div>

                    </div> 

                 {/* exibição do menu principal - termina aqui (desktop)*/}
            </React.Fragment> 
        </div>
    );
}


