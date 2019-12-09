import * as types from '../actions/ActionTypes';

const initialState = {
    login: {
        status: 'INIT'
    },
    register: {
        status: 'INIT',
        error: -1
    },
    status: {
        isLogined: false,
        currentUser: '',
    }
};

export default function authentication(state, action) {
    if (typeof state === "undefined")
        state = initialState;

    switch (action.type) {
        case types.AUTH_LOGIN:
            return {
                ...state,
                login: {
                    status: 'WAITING'
                }
            }
        case types.AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                login: {
                    status: 'SUCCESS'
                },
                status: {
                    isLogined: true,
                    currentUser: action.userId
                }
            }
        case types.AUTH_LOGIN_FAILURE:
            return {
                ...state,
                login: {
                    status: 'FAILURE'
                }
            }
        case types.AUTH_REGISTER:
            return {
                ...state,
                register: {
                    status: 'WAITING',
                    error: -1
                }
            }
        case types.AUTH_REGISTER_SUCCESS:
            return {
                ...state,
                register: {
                    status: 'SUCCESS'
                }
            }
        case types.AUTH_REGISTER_FAILURE:
            return {
                ...state,
                register: {
                    status: 'FAILURE',
                    error: action.error
                }
            }
        case types.AUTH_GET_STATUS:
            return {
                ...state,
                status: {
                    ...state.status,
                    isLogined: true
                }
            }
        case types.AUTH_GET_STATUS_SUCCESS:
            return {
                ...state,
                status: {
                    ...state.status,
                    valid: true,
                    currentUser: action.userId
                }
            }
        case types.AUTH_GET_STATUS_FAILURE:
            return {
                ...state,
                status: {
                    ...state.status,
                    valid: false,
                    isLogined: false
                }
            }
        case types.AUTH_LOGOUT:
            return {
                ...state,
                status: {
                    ...state.status,
                    isLogined: false,
                    currentUser: ''
                }
            }
        default:
            return state;
    }
}
