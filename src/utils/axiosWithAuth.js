// To set up the axiosWithAuth

import axios from 'axios';

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://issw.herokuapp.com/api',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
};