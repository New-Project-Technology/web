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
            userName: '',
            userAge: 0,
            files: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleFiles = this.handleFiles.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleFiles(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.files;
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
        let userName = this.state.userName;
        let userAge = this.state.userAge;
        let files = this.state.files;

        this.props.onRegister(userName, userAge, files).then(
            (result) => {
                this.setState({
                    userName: '',
                    userAge: 0,
                    files: null
                });
            }
        )
    }

    handleKeyPress = (e) => {
        if (e.charCode===13) {
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
                        <p className="waves-effect waves-light btn" onClick={this.handleLogin}>LOGIN</p>
                    </div>
                </div>
            </div>


        );

        const registerView = (
            <div className="card-content">
                <div className="row">
                    <div>
                        <div className="input-field col s12 userName">
                            <label >Name </label>
                            <input className="validate" type="text" name="userName" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field col s12">
                            <label>Age </label>
                            <input className="validate" type="text" name="userAge" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field col s12">
                            <div className="file-field input-field files">
                                <div className="waves-effect waves-teal btn-flat btn">
                                    <span>File</span>
                                    <input type="file" name="files" multiple onChange={this.handleFiles}/>
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" placeholder="Upload 20 photos of your face" required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="waves-effect waves-light btn" onClick={this.handleRegister}>REGISTER</p>
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
