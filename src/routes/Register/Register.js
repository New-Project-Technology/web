import React, {Component} from 'react';
import { connect } from 'react-redux';

import './Register.css';

import Authentication from "../../components/Authentication/Authentication";
import {registerRequest} from "../../redux/actions/authentication";

class Register extends Component {

    constructor(props) {
        super(props);

        this.handleRegister = this.handleRegister.bind(this);
    }

    handleRegister(id, pw) {
        return this.props.registerRequest(id, pw).then(
            () => {
                if(this.props.status === 'SUCCESS') {
                    this.props.history.push('/login');
                    return true;
                }
                else {
                    /*
                        ERROR CODES:
                            1: BAD USERNAME
                            2: BAD PASSWORD
                            3: USERNAME EXISTS
                     */
                    let errorMessage = [
                        'Invalid Username',
                        'Password is too short',
                        'Username already exists'
                    ];

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
        registerRequest: (id, pw) => {
            return dispatch(registerRequest(id, pw));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
