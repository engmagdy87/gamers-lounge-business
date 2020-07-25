const API_URL = process.env.VUE_APP_API;

// Auth
const REGISTER_USER = `${API_URL}/register`
const LOGIN_USER = `${API_URL}/login`

// Summit
const CREATE_SUMMIT = `${API_URL}/summits`
const GET_SUMMITS = `${API_URL}/summits`
const GET_SUMMITS_LIST = `${API_URL}/summits/list`
const GET_STORY = `${API_URL}/summits/story`

// Events
const CREATE_EVENT = `${API_URL}/admin/events`
const GET_EVENT_TYPES = `${API_URL}/events/constants/types`
const GET_EVENT_COVER_TYPES = `${API_URL}/events/constants/cover-types`
const GET_EVENTS = `${API_URL}/events`
const GET_MAIN_EVENTS = `${API_URL}/events/main`
const GET_SUB_EVENTS = `${API_URL}/events/sub`
const GET_EVENT_DETAILS = `${API_URL}/events`

export {
    API_URL,
    REGISTER_USER,
    LOGIN_USER,
    CREATE_SUMMIT,
    GET_STORY,
    GET_SUMMITS,
    GET_EVENTS,
    CREATE_EVENT,
    GET_EVENT_TYPES,
    GET_SUMMITS_LIST,
    GET_MAIN_EVENTS,
    GET_SUB_EVENTS,
    GET_EVENT_COVER_TYPES,
    GET_EVENT_DETAILS
};
