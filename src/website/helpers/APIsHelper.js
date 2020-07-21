import axios from 'axios';
import { LOGIN_USER, REGISTER_USER } from '../constants/APIs';

async function loadUserPersona(payload) {
    const response = await post(
        payload,
        LOGIN_USER
    );

    return response.data;
}

async function setUserPersona(payload) {
    const response = await post(
        payload,
        REGISTER_USER
    );

    return response.data;
}

export {
    loadUserPersona,
    setUserPersona
};

async function post(data, url) {
    const response = await axios.post(url, data);
    if (
        (response.status !== 200 && response.status !== 304) ||
        response.data.errors !== undefined
    )
        throw new Error(
            `response status code ${
            response.status
            }`
        );

    return response;
}
