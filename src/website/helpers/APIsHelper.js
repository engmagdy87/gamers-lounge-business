import axios from 'axios';
import { LOGIN_USER, REGISTER_USER, CREATE_SUMMIT, GET_STORY, GET_SUMMITS } from '../constants/APIs';
import { getUserCookie } from '../helpers/CookieHelper';

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

async function createSummit(payload) {
    const response = await postMultipart(
        payload,
        CREATE_SUMMIT
    );

    return response.data;
}

async function getStory() {
    const response = await get(
        GET_STORY
    );

    return response.data;
}

async function getSummits() {
    const response = await getDashboardData(
        GET_SUMMITS
    );

    return response.data;
}

export {
    loadUserPersona,
    setUserPersona,
    createSummit,
    getStory,
    getSummits
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

async function postMultipart(data, url) {
    const adminToken = getUserCookie()
    const response = await axios.post(url, data, {
        headers: {
            'Authorization': `Bearer ${adminToken.access_token}`
        }
    });
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

async function get(url) {
    const response = await axios.get(url);
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

async function getDashboardData(url) {
    const adminToken = getUserCookie()
    const response = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${adminToken.access_token}`
        }
    });
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