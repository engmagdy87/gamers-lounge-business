import axios from 'axios';
import * as APIs from '../constants/APIs';
import { getUserCookie } from '../helpers/CookieHelper';

// Auth
async function loadUserPersona(payload) {
    const response = await post(
        payload,
        APIs.LOGIN_USER
    );

    return response.data;
}

async function setUserPersona(payload) {
    const response = await post(
        payload,
        APIs.REGISTER_USER
    );

    return response.data;
}

// Summit
async function createSummit(payload) {
    const response = await postMultipart(
        payload,
        APIs.CREATE_SUMMIT
    );

    return response.data;
}

async function getStory() {
    const response = await get(
        APIs.GET_STORY
    );

    return response.data;
}

async function getSummits() {
    const response = await getDashboardData(
        APIs.GET_SUMMITS
    );

    return response.data;
}

async function getSummitsList() {
    const response = await getDashboardData(
        APIs.GET_SUMMITS_LIST
    );

    return response.data;
}

// Events
async function createEvent(payload) {
    const response = await postMultipart(
        payload,
        APIs.CREATE_EVENT
    );

    return response.data;
}

async function getEvents() {
    const response = await getDashboardData(
        APIs.GET_EVENTS
    );

    return response.data;
}

async function getEventsTypes() {
    const response = await getDashboardData(
        APIs.GET_EVENT_TYPES
    );

    return response.data;
}

async function getMainEvents() {
    const response = await getDashboardData(
        APIs.GET_MAIN_EVENTS
    );

    return response.data;
}

async function getSubEvents() {
    const response = await getDashboardData(
        APIs.GET_SUB_EVENTS
    );

    return response.data;
}

async function getEventCoverTypes() {
    const response = await getDashboardData(
        APIs.GET_EVENT_COVER_TYPES
    );

    return response.data;
}

async function getEvent(eventId) {
    const response = await getDashboardData(
        `${APIs.GET_EVENT_DETAILS}/${eventId}`
    );

    return response.data;
}

export {
    loadUserPersona,
    setUserPersona,
    createSummit,
    createEvent,
    getStory,
    getSummits,
    getEvents,
    getEventsTypes,
    getSummitsList,
    getMainEvents,
    getSubEvents,
    getEventCoverTypes,
    getEvent
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