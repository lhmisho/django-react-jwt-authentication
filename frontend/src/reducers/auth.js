import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    USER_LOADED_FAILED,
    USER_LOADED_SUCCESS,
    AUTHENTICATED_SUCCESS, LOGOUT
} from "../actions/types";

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null
}

export default (state=initialState, action) => {
    const {type, payload} = action;

    switch (type){
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access)
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh
            }
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: payload
            }
        case USER_LOADED_FAILED:
            return {
                ...state,
                user: null
            }
        case LOGIN_FAILED:
        case LOGOUT:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null
            }
        default:
            return state
    }
}