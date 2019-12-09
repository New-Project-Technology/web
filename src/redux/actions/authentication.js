import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_REGISTER,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_FAILURE,
    AUTH_GET_STATUS,
    AUTH_GET_STATUS_SUCCESS,
    AUTH_GET_STATUS_FAILURE,
    AUTH_LOGOUT
} from "./ActionTypes";

import axios from 'axios';

// Login
export function loginRequest(userId, userPW) {
    return (dispatch) => {
        dispatch(login());

        return axios.post('/auth/login', {
            userId,
            userPW
        })
            .then((response) => {
                dispatch(loginSuccess(userId));
            })
            .catch((error) => {
                dispatch(loginFailure());
            });
    };
}

export function login() {
    return {
        type: AUTH_LOGIN
    };
}

export function loginSuccess(userId) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        userId
    };
}

export function loginFailure() {
    return {
        type: AUTH_LOGIN_FAILURE
    };
}

export function registerRequest(userId, userPW) {
    return (dispatch) => {
        dispatch(register());

        return axios.post('/api/register', {userId, userPW})
            .then((response) => {
                dispatch(registerSuccess());
            })
            .catch((error) => {
                dispatch(registerFailure(error));
            })
    };
}

export function register() {
    return {
        type: AUTH_REGISTER
    };
}

export function registerSuccess() {
    return {
        type: AUTH_REGISTER_SUCCESS
    };
}

export function registerFailure(error) {
    return {
        type: AUTH_REGISTER_FAILURE,
        error
    };
}

export function getStatusRequest() {
    return (dispatch) => {
        dispatch(getStatus());

        return axios.get('/auth/getInfo')
            .then((response) => {
                dispatch(getStatusSuccess(response.data.info._id));
            })
            .catch((error) => {
                dispatch(getStatusFailure());
            });
    };
}

export function getStatus() {
    return {
        type: AUTH_GET_STATUS
    };
}

export function getStatusSuccess(userId) {
    return {
        type: AUTH_GET_STATUS_SUCCESS,
        userId
    };
}

export function getStatusFailure() {
    return {
        type: AUTH_GET_STATUS_FAILURE
    };
}

export function logoutRequest() {
    return (dispatch) => {
        return axios.post('/auth/logout')
            .then((response) => {
                dispatch(logout());
            });
    };
}

export function logout() {
    return {
        type: AUTH_LOGOUT
    };
}
