// ACTIONS index.js
// name will change, and more actions files added later maybe

import axios from 'axios';

export const addUser = data => dispatch => {
    dispatch({ type: "ADDING_USER_START" });
    axios
        .post('https://issw.herokuapp.com/api/auth/register', data)
        .then(res => {
            console.log("CreateUser register: ", res);
            dispatch({ type: "ADDING_USER_SUCCESS", payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: "ADDING_USER_ERROR", payload: err.message })
    })
}

export const loginUser = data => dispatch => {
    dispatch( { type: "LOGIN_USER_START" });
    axios
        .post('https://issw.herokuapp.com/api/auth/login', data)
        .then(res => {
            console.log("LoginUser: ", res.data);
            localStorage.setItem("token", res.data.token);
            dispatch({ type: "LOGIN_USER_SUCCESS" });

        })
        .catch(err => {
            console.log(err);
            
        })
}