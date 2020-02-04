// ACTIONS index.js
// name will change, and more actions files added later maybe

import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const addUser = (props, data) => dispatch => {
    dispatch({ type: "ADDING_USER_START" });
    axios
        .post('https://issw.herokuapp.com/api/auth/register', data)
        .then(res => {
            console.log("CreateUser register: ", res);
            localStorage.setItem("token", res.data.token);
            dispatch({ type: "ADDING_USER_SUCCESS", payload: res.data })
            props.history.push("/main");
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: "ADDING_USER_ERROR", payload: err.message })
    })
}

export const loginUser = (props, data) => dispatch => {
    dispatch( { type: "LOGIN_USER_START" });
    console.log("Login User Data: ", data);
    axios
        .post('https://issw.herokuapp.com/api/auth/login', data)
        .then(res => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("currentUser", JSON.stringify(res.data));
            dispatch({ type: "LOGIN_USER_SUCCESS", payload: res.data })
            props.history.push("/main");
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: "LOGIN_USER_ERROR", payload: err.message })
        })
}

export const getStudents = (props, data) => dispatch => {
    dispatch({ type: "GET_STUDENTS_START" });
    axiosWithAuth()
        .get('https://issw.herokuapp.com/api/students')
        .then(res => {
            console.log("GetStudents: ", res);
            dispatch({ type: "GET_STUDENTS_SUCCESS", payload: res.data })
        })
        .catch(err => {
            console.log(err);
        })
}

export const getOneStudent = (props, data) => dispatch => {
    dispatch({ type: "GET_ONE_STUDENT_START" });
    axiosWithAuth()
        .get(`https://issw.herokuapp.com/api/students/${data.student.id}`)
        .then(res => {
            console.log("GetOneStudent: ", res);
        })
        .catch(err => {
            console.log(err);
        })
}