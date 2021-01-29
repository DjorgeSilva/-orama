import React, {useState}from 'react';
import * as FaIcons from "react-icons/fa";
import {Link} from "react-router-dom";
import {SideBarData} from "./SideBarData.js"
import "../css/index.css"
import {IconContext} from 'react-icons';
import imgLogo from "../assets/img/orama-logo.png"

export const NavBar = () => {
    const[sidebar,setSidebar] = useState(false);

    const showSidebar = ()=> setSidebar(!sidebar);

    return (
        <div>
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
                                    <button type="button" class="btn-lateral-style">Abra sua conta</button>
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

                </IconContext.Provider>

                
                    <div className="box-menu-desktop">

                        <div className="box-menu-desktop-logo">
                            <img src={imgLogo}  alt="logomarca òrama"/>
                        </div>

                        <div className="menu-desktop">
                            <nav>
                                <ul>
                                    <li><a href="#">A empresa</a></li>
                                    <li><a href="#">Como funciona</a></li>
                                    <li><a href="#">investimentos</a></li>
                                    <li><a href="#">Atendimento</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="box-menu-desktop-btn">
                            <button type="button" className="btn-sua-conta">Sua conta</button>
                            <button type="Sua conta" className="btn-abra-sua-conta">Abra sua conta</button>
                        </div>

                    </div> 

                
            </React.Fragment> 
        </div>
    );
}


