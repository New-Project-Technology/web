import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: '',
            userPW: '',
            isLogined: false
        };
    
        this.onLogin = this.onLogin.bind(this);
        this.setID = this.setID.bind(this);
        this.setPW = this.setPW.bind(this);
    }

    onLogin = (e) => {
        e.preventDefault();

        this.props.history.push({
            pathname: '/',
            state: {
                userId: this.state.userId,
                isLogined: this.state.isLogined
            }
        })
    }
    
    setID = (event) => {
        this.setState({
            userId: event.target.value
        });
    }

    setPW = (event) => {
        this.setState({
            userPw: event.target.value
        })
    }

    render() {
        return (
            <div className="Login">
                <img className="Login-logo" src="logo.png" alt="Logo" width="400px"></img>
                <form className="Login-section">
                    <div className="Login-id">
                        <label >ID: </label>
                        <input className="Login-input" type="text" name="userId" placeholder="ID를 입력하세요." onChange={this.setID} required></input>
                    </div>
                    <div className="Login-pw">
                        <label>PW: </label>
                        <input className="Login-input" type="password" name="userPw" placeholder="PW를 입력하세요." onChange={this.setPW} required></input>
                    </div>
                    <button className="Login-btn" onClick={this.onLogin}>Login</button>
                </form>
                <Link className="Login-register" to="/">register</Link>
            </div>
        );
    }
}

export default Login;