// To set up the axiosWithAuth

import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://issw.herokuapp.com/api',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    });
};