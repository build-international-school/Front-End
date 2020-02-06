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

export const getStudents = () => dispatch => {
    dispatch({ type: "GET_STUDENTS_START" });
    axiosWithAuth()
        .get('https://issw.herokuapp.com/api/students')
        .then(res => {
            console.log("GetStudents: ", res);
            localStorage.setItem("allStudents", JSON.stringify(res.data));
            dispatch({ type: "GET_STUDENTS_SUCCESS", payload: res.data })
        })
        .catch(err => {
            console.log(err);
        })
}

export const getOneStudent = (id) => dispatch => {
    dispatch({ type: "GET_ONE_STUDENT_START" });
    return axiosWithAuth()
        .get(`https://issw.herokuapp.com/api/students/${id}`)
        .then(res => {
            console.log("GetOneStudent: ", res.data);
            localStorage.setItem("currentStudent", JSON.stringify(res.data));
            dispatch({ type: "GET_ONE_STUDENT_SUCCESS", payload: res.data })
        })
        .catch(err => {
            console.log(err);
        })
}

export const addStudent = (data, id) => dispatch => {
    dispatch({ type: "ADD_STUDENT_START" });
    return axiosWithAuth()
        .post(`https://issw.herokuapp.com/api/admins/${id}/students`, data)
        .then(res => {
            console.log("AddStudent res: ", res.data)
            // dispatch({ type: "ADD_STUDENT_SUCCESS", payload: res.data})
        })
        .catch(err => {
            console.log(err);
        })
}

export const editStudent = (data, id) => dispatch => {
    dispatch({ type: "EDIT_STUDENT_START" });
    return axiosWithAuth()
    // .put(`https://issw.herokuapp.com/api/admins/${id}/students`, data)
    .put(`https://issw.herokuapp.com/api/students/${id}`, data)
    .then(res => {
        console.log("EditStudent res: ", res);
        dispatch({ type:"EDIT_STUDENT_SUCCESS", payload: data})
    })
    .catch(err => {
        console.log(err);
    })
}

export const deleteStudent = (id) => dispatch => {
    dispatch({ type: "DELETE_STUDENT_START" });
    return axiosWithAuth()
    .delete(`https://issw.herokuapp.com/api/students/${id}`)
    .then(res => {
        console.log("Delete Student res: ", res);
    })
    .catch(err => {
        console.log(err);
    })
}

/*
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
*/