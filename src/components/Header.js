import React from 'react';
import {
    Link, useLocation
  } from "react-router-dom";

const Header = (props) => {

    const location  = useLocation().pathname;
    
    return(
        <header>
            <img src ="images/Logo.png" alt="Travix" />
            <div className="right-header">
            <ul className="header-ul">
                <li><Link className={location === "/" ?"current-li":"" } to="/">Dashboard</Link></li>
                <li><Link className={location === "/clients" ?"current-li":"" }  to="/clients">Clients</Link></li>
                <li><Link className={location === "/calendar" ?"current-li":"" }  to="/calendar">Calendar</Link></li>
            </ul>
            <div className="profile-area">
                <div className="Profilebulb">{props.username.toUpperCase().substring(0,1)}</div>
                <div className="ProfileName"><a>{props.username}</a></div>
            </div>
            </div>

        </header>
    );


}

export default Header;