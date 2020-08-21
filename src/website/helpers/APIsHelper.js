import axios from 'axios';
import * as APIs from '../constants/APIs';
import { getUserCookie } from '../helpers/CookieHelper';

// Auth
async function loadUserPersona(payload) {
    const response = await post(
        payload,
        APIs.LOGIN_WEBSITE_USER
    );

    return response.data;
}

async function setUserPersona(payload) {
    const response = await post(
        payload,
        APIs.REGISTER_WEBSITE_USER
    );

    return response.data;
}

// User
async function getProfile() {
    const response = await getDashboardData(
        APIs.GET_USER_PROFILE
    );

    return response.data;
}

async function updateProfile(payload) {
    const response = await postMultipart(
        payload,
        APIs.UPDATE_USER_PROFILE
    );

    return response.data;
}

async function sendMail(payload) {
    const response = await post(
        payload,
        APIs.SEND_MAIL
    );

    return response.data;
}

async function resetPassword(payload) {
    const response = await post(
        payload,
        APIs.RESET_PASSWORD
    );

    return response.data;
}

async function resendVerificationEmail(payload) {
    const response = await post(
        payload,
        APIs.RESEND_VERIFICATION_EMAIL
    );
    return response.data;
}

async function removeUserImage(imageId) {
    const response = await deleteData(
        `${APIs.DELETE_IMAGE_IN_PROFILE}/${imageId}`
    );

    return response;
}


// Contact
async function sendMessage(payload) {
    const response = await post(
        payload,
        APIs.POST_MESSAGE
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
        APIs.GET_WEBSITE_STORY
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

async function removeSummit(id) {
    const response = await deleteData(
        `${APIs.DELETE_SUMMIT}/${id}`
    );

    return response;
}


async function editSummit(id, data) {
    const response = await postMultipart(
        data,
        `${APIs.EDIT_SUMMIT}/${id}`
    );

    return response;
}

async function removeSummitImage(id, imageId) {
    const response = await deleteData(
        `${APIs.DELETE_MEDIA_IN_SUMMIT}/${id}/images/${imageId}`
    );

    return response;
}

async function removeSummitVideo(id, videoId) {
    const response = await deleteData(
        `${APIs.DELETE_MEDIA_IN_SUMMIT}/${id}/videos/${videoId}`
    );

    return response;
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

async function getCoverHomeEventsImage() {
    const response = await get(
        APIs.GET_COVER_HOME_EVENTS_IMAGE
    );

    return response.data;
}

async function getCoverContactUsImage() {
    const response = await get(
        APIs.GET_COVER_CONTACT_US_IMAGE
    );

    return response.data;
}

async function getEventsList() {
    const response = await getDashboardData(
        APIs.GET_LIST_WEBSITE_EVENTS
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
    const response = await get(
        APIs.GET_WEBSITE_MAIN_EVENTS
    );

    return response.data;
}

async function getSubEvents() {
    const response = await get(
        APIs.GET_WEBSITE_SUB_EVENTS
    );

    return response.data;
}

async function getEvent(eventId) {
    const response = await get(
        `${APIs.GET_WEBSITE_EVENT_DETAILS}/${eventId}`
    );

    return response.data;
}

async function getEventCoverTypes() {
    const response = await getDashboardData(
        APIs.GET_EVENT_COVER_TYPES
    );

    return response.data;
}

async function removeEvent(id) {
    const response = await deleteData(
        `${APIs.DELETE_EVENT}/${id}`
    );

    return response;
}

async function editEvent(id, data) {
    const response = await postMultipart(
        data,
        `${APIs.EDIT_EVENT}/${id}`
    );

    return response;
}

async function removeEventImage(id, imageId) {
    const response = await deleteData(
        `${APIs.DELETE_MEDIA_IN_EVENT}/${id}/images/${imageId}`
    );

    return response;
}

async function removeEventVideo(id, videoId) {
    const response = await deleteData(
        `${APIs.DELETE_MEDIA_IN_EVENT}/${id}/videos/${videoId}`
    );

    return response;
}

//Giveaways
async function createGiveaway(payload) {
    const response = await postMultipart(
        payload,
        APIs.CREATE_GIVEAWAY
    );

    return response.data;
}

async function getDashboardGiveaways() {
    const response = await getDashboardData(
        APIs.GET_GIVEAWAYS
    );

    return response.data;
}

async function removeGiveaway(id) {
    const response = await deleteData(
        `${APIs.DELETE_GIVEAWAY}/${id}`
    );

    return response;
}

async function editGiveaway(id, data) {
    const response = await postMultipart(
        data,
        `${APIs.EDIT_GIVEAWAY}/${id}`
    );

    return response;
}

async function removeGiveawayImage(id, imageId) {
    const response = await deleteData(
        `${APIs.DELETE_MEDIA_IN_GIVEAWAY}/${id}/images/${imageId}`
    );

    return response;
}

async function removeGiveawayVideo(id, videoId) {
    const response = await deleteData(
        `${APIs.DELETE_MEDIA_IN_GIVEAWAY}/${id}/videos/${videoId}`
    );

    return response;
}

async function removeGiveawayQuestion(id) {
    const response = await deleteData(
        `${APIs.DELETE_GIVEAWAY_REGISTER_QUESTION}/${id}`
    );

    return response;
}

async function getGiveawaysTypes() {
    const response = await getDashboardData(
        APIs.GET_GIVEAWAY_TYPES
    );

    return response.data;
}

async function getGiveawaysCoverTypes() {
    const response = await getDashboardData(
        APIs.GET_GIVEAWAY_COVER_TYPES
    );

    return response.data;
}

async function getGiveawaysQuestionTypes() {
    const response = await getDashboardData(
        APIs.GET_GIVEAWAY_REGISTERS_QUESTIONS_TYPES
    );

    return response.data;
}

//Sponsors
async function getSponsorsForDashboard() {
    const response = await getDashboardData(
        APIs.GET_LIST_SPONSORS
    );

    return response.data;
}

async function getSponsorsForFooter() {
    const response = await get(
        APIs.GET_FOOTER_SPONSORS
    );

    return response.data;
}

async function getSponsors() {
    const response = await getDashboardData(
        APIs.GET_SPONSORS
    );

    return response.data;
}

async function createSponsor(payload) {
    const response = await postMultipart(
        payload,
        APIs.CREATE_SPONSOR
    );

    return response.data;
}

async function removeSponsor(id) {
    const response = await deleteData(
        `${APIs.DELETE_SPONSOR}/${id}`
    );

    return response;
}

async function editSponsor(id, data) {
    const response = await postMultipart(
        data,
        `${APIs.EDIT_SPONSOR}/${id}`
    );

    return response;
}


async function removeSponsorImage(id, imageId) {
    const response = await deleteData(
        `${APIs.DELETE_IMAGE_IN_SPONSOR}/${id}/images/${imageId}`
    );

    return response;
}

//Games
async function getGamesForDashboard() {
    const response = await get(
        APIs.GET_LIST_GAMES
    );

    return response.data;
}

async function getGamesCardsView() {
    const response = await get(
        APIs.GET_LIST_WEBSITE_GAMES
    );

    return response.data;
}

async function getGames() {
    const response = await getDashboardData(
        APIs.GET_GAMES
    );

    return response.data;
}

async function getGameDetails(gameId) {
    const response = await get(
        `${APIs.GET_WEBSITE_GAME_DETAILS}/${gameId}`
    );

    return response.data;
}

async function createGame(payload) {
    const response = await postMultipart(
        payload,
        APIs.CREATE_GAME
    );

    return response.data;
}

async function removeGame(id) {
    const response = await deleteData(
        `${APIs.DELETE_GAME}/${id}`
    );

    return response;
}

async function removeGameImage(id, imageId) {
    const response = await deleteData(
        `${APIs.DELETE_IMAGE_IN_GAME}/${id}/images/${imageId}`
    );

    return response;
}

async function editGame(id, data) {
    const response = await postMultipart(
        data,
        `${APIs.EDIT_GAME}/${id}`
    );

    return response;
}

//Platforms
async function getPlatformsForDashboard() {
    const response = await getDashboardData(
        APIs.GET_LIST_WEBSITE_PLATFORMS
    );

    return response.data;
}

async function getPlatforms() {
    const response = await getDashboardData(
        APIs.GET_PLATFORMS
    );

    return response.data;
}

async function createPlatform(payload) {
    const response = await postMultipart(
        payload,
        APIs.CREATE_PLATFORM
    );

    return response.data;
}

async function removePlatform(id) {
    const response = await deleteData(
        `${APIs.DELETE_PLATFORM}/${id}`
    );

    return response;
}

async function editPlatform(id, data) {
    const response = await postMultipart(
        data,
        `${APIs.EDIT_PLATFORM}/${id}`
    );

    return response;
}

//Regions
async function getRegionsForDashboard() {
    const response = await get(
        APIs.GET_LIST_REGIONS
    );

    return response.data;
}

async function getRegions() {
    const response = await getDashboardData(
        APIs.GET_REGIONS
    );

    return response.data;
}

async function createRegion(payload) {
    const response = await postMultipart(
        payload,
        APIs.CREATE_REGION
    );

    return response.data;
}
async function removeRegion(id) {
    const response = await deleteData(
        `${APIs.DELETE_REGION}/${id}`
    );

    return response;
}

async function editRegion(id, data) {
    const response = await postMultipart(
        data,
        `${APIs.EDIT_REGION}/${id}`
    );

    return response;
}

//Tournaments
async function getTournamentsForDashboard() {
    const response = await getDashboardData(
        APIs.GET_TOURNAMENTS
    );

    return response.data;
}

async function getTournaments() {
    const response = await get(
        APIs.GET_LIST_WEBSITE_TOURNAMENTS
    );

    return response.data;
}

async function getFilteredTournaments(data) {
    const response = await get(
        APIs.GET_LIST_WEBSITE_TOURNAMENTS,
        {
            params: {
                ...data
            }
        }
    );

    return response.data;
}

async function createTournament(payload) {
    const response = await postMultipart(
        payload,
        APIs.CREATE_TOURNAMENT
    );

    return response.data;
}

async function getTournamentDetails(tournamentId) {
    const response = await get(
        `${APIs.GET_WEBSITE_TOURNAMENT_DETAILS}/${tournamentId}`
    );

    return response.data;
}

async function getTournamentRegisterLink(tournamentId) {
    // const response = await getDashboardData(
    //     `${APIs.GET_REGISTER_LINK}/${tournamentId}/register-link`
    // );
    //
    // return response.data;

    // Temp: Allowing guests to register
    const response = await get(
        `${APIs.GET_REGISTER_LINK}/${tournamentId}/register-link`
    );

    return response.data;
}

async function removeTournament(id) {
    const response = await deleteData(
        `${APIs.DELETE_TOURNAMENT}/${id}`
    );

    return response;
}


async function editTournament(id, data) {
    const response = await postMultipart(
        data,
        `${APIs.EDIT_TOURNAMENT}/${id}`
    );

    return response;
}

async function removeTournamentImage(id, imageId) {
    const response = await deleteData(
        `${APIs.DELETE_MEDIA_IN_TOURNAMENT}/${id}/images/${imageId}`
    );

    return response;
}

async function removeTournamentVideo(id, videoId) {
    const response = await deleteData(
        `${APIs.DELETE_MEDIA_IN_TOURNAMENT}/${id}/videos/${videoId}`
    );

    return response;
}

// Sponsor Category

async function getSponsorCategories() {
    const response = await getDashboardData(
        APIs.GET_SPONSOR_CATEGORIES
    );

    return response.data;
}

async function getSponsorCategoriesList() {
    const response = await getDashboardData(
        APIs.GET_LIST_SPONSOR_CATEGORIES
    );

    return response.data;
}

async function editSponsorCategories(id, data) {
    const response = await postMultipart(
        data,
        `${APIs.EDIT_SPONSOR_CATEGORY}/${id}`
    );

    return response.data;
}

async function removeSponsorCategory(id) {
    const response = await deleteData(
        `${APIs.DELETE_SPONSOR_CATEGORY}/${id}`
    );

    return response.data;
}

async function createSponsorCategory(payload) {
    const response = await postMultipart(
        payload,
        APIs.CREATE_SPONSOR_CATEGORY
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
    getEvent,
    getEventsList,
    getSponsorsForDashboard,
    getSponsors,
    createSponsor,
    getGamesForDashboard,
    getGameDetails,
    getGames,
    getGamesCardsView,
    createGame,
    getPlatformsForDashboard,
    getPlatforms,
    createPlatform,
    getRegionsForDashboard,
    getRegions,
    createRegion,
    getTournamentsForDashboard,
    getFilteredTournaments,
    getTournamentDetails,
    getTournaments,
    createTournament,
    removeEvent,
    removeGame,
    removeTournament,
    removeSummit,
    removeSponsor,
    removeRegion,
    removePlatform,
    removeGameImage,
    removeSponsorImage,
    removeEventImage,
    removeEventVideo,
    removeSummitImage,
    removeSummitVideo,
    removeTournamentImage,
    removeTournamentVideo,
    removeUserImage,
    editGame,
    editPlatform,
    editEvent,
    editSponsor,
    editSummit,
    editRegion,
    editTournament,
    getSponsorsForFooter,
    sendMessage,
    getProfile,
    updateProfile,
    sendMail,
    resetPassword,
    resendVerificationEmail,
    getTournamentRegisterLink,
    getCoverHomeEventsImage,
    getCoverContactUsImage,
    getSponsorCategories,
    getSponsorCategoriesList,
    editSponsorCategories,
    removeSponsorCategory,
    createSponsorCategory,
    createGiveaway,
    editGiveaway,
    getDashboardGiveaways,
    removeGiveaway,
    removeGiveawayImage,
    removeGiveawayVideo,
    removeGiveawayQuestion,
    getGiveawaysTypes,
    getGiveawaysCoverTypes,
    getGiveawaysQuestionTypes
};

async function post(data, url) {
    try {
        const response = await axios.post(url, data);
        return response
    } catch (error) {
        throw error.response
    }
}

async function postMultipart(data, url) {
    const adminToken = getUserCookie()
    try {
        const response = await axios.post(url, data, {
            headers: {
                'Authorization': `Bearer ${adminToken.access_token}`
            }
        })
        return response
    } catch (error) {
        throw error.response
    }
}

async function get(url, params) {
    const response = await axios.get(url, params);
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

async function deleteData(url) {
    const adminToken = getUserCookie()
    const response = await axios.delete(url, {
        headers: {
            'Authorization': `Bearer ${adminToken.access_token}`
        }
    });
    if (
        (response.status !== 200 && response.status !== 202 && response.status !== 304) ||
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
