import React from 'react';
import {Link} from "react-router-dom";

import './Header.css';

const Header = () => {

    const handleClick = (e) => {
        const con = document.getElementById("Header-Menu");
        const img = document.getElementById("Header-Btn-img");

        con.style.transitionProperty = 'opacity';
        con.style.transitionDuration = '0.5s';

        if (con.style.opacity === '0') {
            img.src = 'list_close.svg';
            img.style.opacity = '0.3';

            con.style.opacity = '1';
        }
        else {
            img.src = 'list.svg';
            img.style.opacity = '0.5';

            con.style.opacity = '0';
        }
    };

    const defaultMenuStyle = {
        opacity: "0"
    };

    return (
        <div className="Header">
            <img src='logo.png' width='80px'alt="" className="Header-logo"/>
            <button className="Header-btn" type="button" onClick={handleClick}>
                <img id="Header-Btn-img" src='list.svg' width='30px' height='30px' alt=""/>
                <ul id="Header-Menu" style={defaultMenuStyle}>
                    <li><Link className="Header-Link" to="/">HOME</Link></li>
                    <li><Link className="Header-Link" to="/Dashboard">DASHBOARD</Link></li>
                    <li><Link className="Header-Link" to="/Register">REGISTER</Link></li>
                    <li><Link className="Header-Link" to="/">LOGOUT</Link></li>
                </ul>
            </button>
        </div>
    );
}

export default Header;
