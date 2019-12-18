import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

import './Header.css';

class Header extends Component {

    handleClick = (e) => {
        const con = document.getElementById("Header-Menu");
        const img = document.getElementById("Header-Btn-img");

        con.style.transitionProperty = 'opacity';
        con.style.transitionDuration = '0.5s';

        if (con.style.opacity === '0') {
            img.src = 'list_close.svg';

            con.style.opacity = '1';
        }
        else {
            img.src = 'list.svg';

            con.style.opacity = '0';
        }
    };

    render() {
        const defaultMenuStyle = {
            opacity: "0"
        };

        const loginButton = (
            <li>
                <Link className="Header-Link" to="/Login">
                    LOGIN
                </Link>
            </li>
        );

        const logoutButton = (
            <li>
                <Link className="Header-Link" to="/" onClick={this.props.onLogout}>
                    LOGOUT
                </Link>
            </li>
        );

        const registerButton = (
            <li>
                <Link className="Header-Link" to="/Register">
                    REGISTER
                </Link>
            </li>
        )

        const dashboardButton = (
            <li>
                <Link className="Header-Link" to="/Dashboard">
                    LOGS
                </Link>
            </li>
        )

        return (
            <div className="Header">
                <img src='logo.png' width='80px'alt="" className="Header-logo"/>
                <button className="Header-btn" type="button" onClick={this.handleClick}>
                    <img id="Header-Btn-img" src='list.svg' width='30px' height='30px' alt=""/>
                    <ul id="Header-Menu" style={defaultMenuStyle}>
                        <li><Link className="Header-Link" to="/">HOME</Link></li>
                        { this.props.isLogined ? dashboardButton : loginButton}
                        { this.props.isLogined ? registerButton : undefined}
                        { this.props.isLogined ? logoutButton : undefined}
                    </ul>
                </button>
            </div>
        );
    }
}

Header.propTypes = {
    isLogined: PropTypes.bool,
    onLogout: PropTypes.func
}

Header.defaultProps = {
    isLogined: false,
    onLogout: () => {console.error("logout function not defined");}
}

export default Header;
