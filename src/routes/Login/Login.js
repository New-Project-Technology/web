import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginRequest} from "../../redux/actions/authentication";
import M from 'materialize-css';

import './Login.css';

import Authentication from "../../components/Authentication/Authentication";

class Login extends Component {

    constructor(props) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(userId, userPW) {
        return this.props.loginRequest(userId, userPW).then(
            () => {
                if(this.props.status === "SUCCESS") {
                    let loginData = {
                        isLogined: true,
                        userId: userId
                    };

                   document.cookie = 'key=' + btoa(JSON.stringify(loginData));

                    M.toast({html:'Welcome, ' + userId + '!'}, 2000);
                    this.props.history.push('/');

                    return true;
                }
                else {
                    let toastContent = '<span style="color: #FFB4BA">Incorrect id or password</span>';
                    M.toast({html: toastContent}, 2000);
                    return false;
                }
            }
        )
    }

    render() {
        return (
            <div className="Authentication-container">
                <Authentication mode={true} onLogin={this.handleLogin}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.login.status
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest: (userId, userPW) => {
            return dispatch(loginRequest(userId, userPW));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
