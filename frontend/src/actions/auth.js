import {LOGIN_FAILED, USER_LOADED_FAILED, USER_LOADED_SUCCESS, LOGIN_SUCCESS} from "./types";
import axios from "axios";

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