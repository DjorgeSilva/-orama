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
            </React.Fragment> 
        </div>
    );
}


