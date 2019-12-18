import React, {Component} from 'react';
import { connect } from 'react-redux';

import './Register.css';

import Authentication from "../../components/Authentication/Authentication";
import {registerRequest} from "../../redux/actions/authentication";

import M from 'materialize-css';

class Register extends Component {

    constructor(props) {
        super(props);

        this.handleRegister = this.handleRegister.bind(this);
    }

    handleRegister(name, age, files) {
        return this.props.registerRequest(name, age, files).then(
            () => {
                if(this.props.status === 'SUCCESS') {

                    M.toast({html:'User "' + name + '" has been registered!'}, 2000);

                    this.props.history.push('/');
                    return true;
                }
                else {
                    /*
                        ERROR CODES:
                            1: BAD USERNAME
                            2: BAD PASSWORD
                            3: USERNAME EXISTS
                     */

                    /*
                    let errorMessage = [
                        'Invalid Username',
                        'Password is too short',
                        'Username already exists'
                    ];
                    */

                    let toastContent = '<span style="color: #FFB4BA">Register Failed...</span>';
                    M.toast({html: toastContent}, 2000);

                    return false;
                }
            }
        );
    }

    render() {
        return (
            <div className="Authentication-container">
                <Authentication mode={false} onRegister={this.handleRegister}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.register.status,
        errorCode: state.authentication.register.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerRequest: (name, age, files) => {
            return dispatch(registerRequest(name, age, files));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
