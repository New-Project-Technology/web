import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './Authentication.css'

class Authentication extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: '',
            userPW: '',
            userName: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleLogin() {
        let userId = this.state.userId;
        let userPW = this.state.userPW;

        this.props.onLogin(userId, userPW).then(
            (success) => {
                if (!success) {
                    this.setState({
                        userId: '',
                        userPW: ''
                    });
                }
            }
        );
    }

    handleRegister() {
        let userId = this.state.userId;
        let userPW = this.state.password;

        this.props.onRegister(userId, userPW).then(
            (result) => {
                if(!result) {
                    this.setState({
                        userId: '',
                        userPW: ''
                    })
                }
            }
        )
    }

    handleKeyPress = (e) => {
        if (e.charCode==13) {
            if (this.props.mode) {
                this.handleLogin();
            }
            else {
                this.handleRegister();
            }
        }
    }

    render() {
        const loginView = (
            <div>
                <div className="card-content">
                    <div className="row">
                        <div>
                            <div className="input-field col s12 userId">
                                <label >ID </label>
                                <input className="validate" type="text" name="userId" onChange={this.handleChange} value={this.state.userId} required/>
                            </div>
                            <div className="input-field col s12">
                                <label>Password </label>
                                <input className="validate" type="password" name="userPW" onChange={this.handleChange} value={this.state.userPW} onKeyPress={this.handleKeyPress}  required/>
                            </div>
                        </div>
                        <a className="waves-effect waves-light btn" onClick={this.handleLogin}>LOGIN</a>
                    </div>
                </div>
            </div>


        );

        const registerView = (
            <div className="card-content">
                <div className="row">
                    <div>
                        <div className="input-field col s12 userId">
                            <label >ID </label>
                            <input className="validate" type="text" name="userId" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field col s12">
                            <label>Password </label>
                            <input className="validate" type="password" name="userPW" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field col s12">
                            <label>Name </label>
                            <input className="validate" type="text" name="userPW" onChange={this.handleChange} required/>
                        </div>
                    </div>
                    <a className="waves-effect waves-light btn" onClick={this.handleRegister}>CREATE</a>
                </div>
            </div>
        );

        return (
            <div className="container auth">
                <Link className="logo" to="#">FAVE</Link>
                <div className="card">
                    <div className="header blue white-text center">
                        <div className="card-content">{this.props.mode ? "LOGIN" : "REGISTER"}</div>
                    </div>
                    {this.props.mode ? loginView : registerView}
                </div>

            </div>
        );
    }
}

Authentication.propTypes = {
    mode: PropTypes.bool,
    onLogin: PropTypes.func,
    onRegister: PropTypes.func
};

Authentication.defaultProps = {
    mode: true,
    onLogin: (id, pw) => { console.error("login function not defined"); },
    onRegister: (id, pw) => { console.error("register function not defined"); }
};

export default Authentication;
