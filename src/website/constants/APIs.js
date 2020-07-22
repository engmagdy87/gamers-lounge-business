const API_URL = process.env.VUE_APP_API;

const REGISTER_USER = `${API_URL}/register`
const LOGIN_USER = `${API_URL}/login`
const CREATE_SUMMIT = `${API_URL}/summits`
const GET_STORY = `${API_URL}/summits/story`

export {
    API_URL,
    REGISTER_USER,
    LOGIN_USER,
    CREATE_SUMMIT,
    GET_STORY
};
