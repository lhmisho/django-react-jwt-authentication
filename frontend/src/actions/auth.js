import {
    LOGIN_FAILED,
    USER_LOADED_FAILED,
    USER_LOADED_SUCCESS,
    LOGIN_SUCCESS,
    LOGOUT,
    AUTHENTICATED_FAILED, AUTHENTICATED_SUCCESS
} from "./types";
import axios from "axios";

export const checkAuthenticated = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        const body = JSON.stringify({token: localStorage.getItem('access')})
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/verify/`, body, config)
            if (res.data.code !== 'token_not_valid') {
                dispatch({
                    type: AUTHENTICATED_SUCCESS
                })
            } else {
                dispatch({
                    type: AUTHENTICATED_FAILED
                })
            }
            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: USER_LOADED_FAILED
            })
            console.log(err)
        }
    } else {
        dispatch({
            type: AUTHENTICATED_FAILED
        })
    }
}

export const load_user = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/users/me`, config)
            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: USER_LOADED_FAILED
            })
            console.log(err)
        }
    } else {
        dispatch({
            type: USER_LOADED_FAILED
        })
    }
}

export const login = (username, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({username, password})
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create`, body, config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch(load_user())
    } catch (err) {
        dispatch({
            type: LOGIN_FAILED
        })
        console.log(err)
    }
}

export const logout = () => dispatch => {
    console.log("log out clicked")
    dispatch({
        type: LOGOUT
    })
}