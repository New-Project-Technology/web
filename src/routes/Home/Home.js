import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getStatusRequest, logoutRequest} from '../../redux/actions/authentication';

import './Home.css'

import Header from '../../components/Header/Header';

import M from 'materialize-css';

class Home extends Component {

    componentDidMount() {
        function getCookie(name) {
            let value = "; " + document.cookie;
            let parts = value.split("; " + name + "=");
            if (parts.length === 2) return parts.pop().split(";").shift();
        }

        let loginData = getCookie('key');

        if (typeof loginData ==="undefined") return;

        loginData = JSON.parse(atob(loginData));

        if (!loginData.isLogined) return;

        this.props.getStatusRequest().then(
            () => {
                if (!this.props.status.valid) {
                    loginData = {
                        isLogined: false,
                        userId: ''
                    };

                    document.cookie = 'key= ' + btoa(JSON.stringify(loginData));

                    let toastContent = '<span style="color: #FFB4BA">Your session is expired, please log in again</span>';
                    M.toast(toastContent, 4000);
                }
            }
        );
    }

    handleLogout = () => {
        this.props.logoutRequest().then(
            () => {
                M.toast({html:'Good Bye!'}, 2000);

                let loginData = {
                    isLogined: false,
                    userId: ''
                };

                document.cookie = 'key=' + btoa(JSON.stringify(loginData));
            }
        );
    }

    render() {
        return (
            <div className="Home">
                <Header isLogined={this.props.status.isLogined} onLogout={this.handleLogout}/>
                <div className="Home-text">
                    <p>Welcome !</p>
                    <img src="logo.png" width="400px" alt="logo"/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getStatusRequest: () => {
            return dispatch(getStatusRequest());
        },
        logoutRequest: () => {
            return dispatch(logoutRequest());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
