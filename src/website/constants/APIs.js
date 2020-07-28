const API_URL = process.env.VUE_APP_API;

// Auth
const REGISTER_WEBSITE_USER = `${API_URL}/register`
const LOGIN_WEBSITE_USER = `${API_URL}/login`

// Summit
const CREATE_SUMMIT = `${API_URL}/admin/summits`
const GET_SUMMITS = `${API_URL}/admin/summits`
const GET_SUMMITS_LIST = `${API_URL}/admin/summits/list`
const GET_WEBSITE_STORY = `${API_URL}/summits/story`
const DELETE_SUMMIT = `${API_URL}/admin/summits`
const DELETE_IMAGE_IN_SUMMIT = `${API_URL}/admin/summits`
const EDIT_SUMMIT = `${API_URL}/admin/summits`

// Events
const GET_EVENTS = `${API_URL}/admin/events`
const CREATE_EVENT = `${API_URL}/admin/events`
const GET_EVENT_TYPES = `${API_URL}/admin/events/constants/types`
const GET_EVENT_COVER_TYPES = `${API_URL}/admin/events/constants/cover-types`
const GET_LIST_WEBSITE_EVENTS = `${API_URL}/admin/events/list`
const GET_WEBSITE_MAIN_EVENTS = `${API_URL}/events/main`
const GET_WEBSITE_SUB_EVENTS = `${API_URL}/events/sub`
const GET_WEBSITE_EVENT_DETAILS = `${API_URL}/events`
const DELETE_EVENT = `${API_URL}/admin/events`
const DELETE_IMAGE_IN_EVENT = `${API_URL}/admin/events`
const EDIT_EVENT = `${API_URL}/admin/events`

// SPONSORS
const GET_SPONSORS = `${API_URL}/admin/sponsors`
const CREATE_SPONSOR = `${API_URL}/admin/sponsors`
const GET_LIST_SPONSORS = `${API_URL}/admin/sponsors/list`
const DELETE_SPONSOR = `${API_URL}/admin/sponsors`
const EDIT_SPONSOR = `${API_URL}/admin/sponsors`
const DELETE_IMAGE_IN_SPONSOR = `${API_URL}/admin/sponsors`

// GAMES
const GET_GAMES = `${API_URL}/admin/games`
const CREATE_GAME = `${API_URL}/admin/games`
const GET_LIST_GAMES = `${API_URL}/admin/games/list`    // used for both dashboard and website
const GET_LIST_WEBSITE_GAMES = `${API_URL}/games/view`
const GET_WEBSITE_GAME_DETAILS = `${API_URL}/games`
const DELETE_GAME = `${API_URL}/admin/games`
const EDIT_GAME = `${API_URL}/admin/games`
const DELETE_IMAGE_IN_GAME = `${API_URL}/admin/games`

// TOURNAMENTS
const GET_TOURNAMENTS = `${API_URL}/admin/tournaments`
const CREATE_TOURNAMENT = `${API_URL}/admin/tournaments`
const GET_LIST_WEBSITE_TOURNAMENTS = `${API_URL}/tournaments/view`
const GET_WEBSITE_TOURNAMENT_DETAILS = `${API_URL}/tournaments`
const DELETE_TOURNAMENT = `${API_URL}/admin/tournaments`
const EDIT_TOURNAMENT = `${API_URL}/admin/tournaments`
const DELETE_IMAGE_IN_TOURNAMENT = `${API_URL}/admin/tournaments`

// PLATFORM
const GET_PLATFORMS = `${API_URL}/admin/platforms`
const CREATE_PLATFORM = `${API_URL}/admin/platforms`
const GET_LIST_WEBSITE_PLATFORMS = `${API_URL}/admin/platforms/list`
const DELETE_PLATFORM = `${API_URL}/admin/platforms`
const EDIT_PLATFORM = `${API_URL}/admin/platforms`

// REGION
const GET_REGIONS = `${API_URL}/admin/regions`
const CREATE_REGION = `${API_URL}/admin/regions`
const GET_LIST_REGIONS = `${API_URL}/admin/regions/list`    // used for both dashboard and website
const DELETE_REGION = `${API_URL}/admin/regions`
// const GET_LIST_WEBSITE_GAMES = `${API_URL}/games/view`
const EDIT_REGION = `${API_URL}/admin/regions`

export {
    API_URL,
    REGISTER_WEBSITE_USER,
    LOGIN_WEBSITE_USER,
    CREATE_SUMMIT,
    GET_WEBSITE_STORY,
    GET_SUMMITS,
    GET_EVENTS,
    CREATE_EVENT,
    GET_EVENT_TYPES,
    GET_SUMMITS_LIST,
    GET_LIST_WEBSITE_EVENTS,
    GET_WEBSITE_MAIN_EVENTS,
    GET_WEBSITE_SUB_EVENTS,
    GET_EVENT_COVER_TYPES,
    GET_WEBSITE_EVENT_DETAILS,
    GET_SPONSORS,
    CREATE_SPONSOR,
    GET_LIST_SPONSORS,
    GET_GAMES,
    GET_WEBSITE_GAME_DETAILS,
    CREATE_GAME,
    GET_LIST_GAMES,
    GET_LIST_WEBSITE_GAMES,
    GET_TOURNAMENTS,
    CREATE_TOURNAMENT,
    GET_WEBSITE_TOURNAMENT_DETAILS,
    GET_LIST_WEBSITE_TOURNAMENTS,
    GET_PLATFORMS,
    CREATE_PLATFORM,
    GET_LIST_WEBSITE_PLATFORMS,
    DELETE_PLATFORM,
    GET_REGIONS,
    CREATE_REGION,
    GET_LIST_REGIONS,
    DELETE_REGION,
    DELETE_EVENT,
    DELETE_TOURNAMENT,
    DELETE_SPONSOR,
    DELETE_SUMMIT,
    DELETE_GAME,
    DELETE_IMAGE_IN_EVENT,
    DELETE_IMAGE_IN_GAME,
    DELETE_IMAGE_IN_SPONSOR,
    DELETE_IMAGE_IN_TOURNAMENT,
    DELETE_IMAGE_IN_SUMMIT,
    EDIT_GAME,
    EDIT_PLATFORM,
    EDIT_EVENT,
    EDIT_SPONSOR,
    EDIT_TOURNAMENT,
    EDIT_SUMMIT,
    EDIT_REGION
};
