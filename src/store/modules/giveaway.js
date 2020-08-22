import {
    getDashboardGiveaways, removeGiveaway, removeGiveawayImage, removeGiveawayVideo, getGiveawaysTypes,
    getGiveawaysCoverTypes, getGiveawaysQuestionTypes, removeGiveawayQuestion, getWebsiteGiveaways, getGiveaway, getGiveawayTournaments, isRegisterAvailableInGiveaway, getGiveawaysRegisters, amIRegisteredInGiveawayInGiveaway
} from '../../website/helpers/APIsHelper';
import types from '../types';

const state = {
    giveawaysData: [],
    offersData: [],
    giveawaysTypes: [],
    giveawayCoverTypes: [],
    giveawayQuestionTypes: [],
    giveawayDetails: {},
    giveawaysList: [],
    giveawaysTournaments: [],
    giveawaysRegisters: [],
    isRegisterAvailableInGiveawayFlag: false,
    amIRegisteredInGiveawayFlag: false,
    isGiveawaysFetched: false,
    isOffersFetched: false,
    isGiveawaysListFetched: false,
    isGiveawayTypeFetched: false,
    isGiveawayCoverTypesFetched: false,
    isGiveawayQuestionTypesFetched: false,
    isGiveawayDetailsFetched: false,
    isGiveawayTournamentsFetched: false,
    isRegisterAvailableInGiveawayFetched: false,
    isAmIRegisteredInGiveawayFetched: false,
    isGiveawaysRegistersFetched: false,
};

const mutations = {
    [types.giveaways.mutations.SET_GIVEAWAYS_DATA]: (currentState, payload) => {
        currentState.giveawaysData = payload;
    },
    [types.giveaways.mutations.SET_OFFERS_DATA]: (currentState, payload) => {
        currentState.offersData = payload;
    },
    [types.giveaways.mutations.SET_GIVEAWAY_TOURNAMENTS]: (currentState, payload) => {
        currentState.giveawaysTournaments = payload;
    },
    [types.giveaways.mutations.SET_GIVEAWAYS_LIST]: (currentState, payload) => {
        currentState.giveawaysList = payload;
    },
    [types.giveaways.mutations.SET_IS_REGISTER_AVAILABLE_IN_GIVEAWAY]: (currentState, payload) => {
        currentState.isRegisterAvailableInGiveawayFlag = payload;
    },
    [types.giveaways.mutations.SET_AM_I_REGISTERED_IN_GIVEAWAY]: (currentState, payload) => {
        currentState.amIRegisteredInGiveawayFlag = payload;
    },
    [types.giveaways.mutations.SET_GIVEAWAY_TYPE_DATA]: (currentState, payload) => {
        currentState.giveawaysTypes = payload;
    },
    [types.giveaways.mutations.SET_GIVEAWAY_COVER_TYPES]: (currentState, payload) => {
        currentState.giveawayCoverTypes = payload;
    },
    [types.giveaways.mutations.SET_GIVEAWAY_QUESTION_TYPES]: (currentState, payload) => {
        currentState.giveawayQuestionTypes = payload;
    },
    [types.giveaways.mutations.SET_GIVEAWAY_DETAILS]: (currentState, payload) => {
        currentState.giveawayDetails = payload;
    },
    [types.giveaways.mutations.SET_GIVEAWAY_REGISTERS]: (currentState, payload) => {
        currentState.giveawaysRegisters = payload;
    },
    [types.giveaways.mutations.SET_IS_GIVEAWAYS_FETCHED]: (currentState, payload) => {
        currentState.isGiveawaysFetched = payload;
    },
    [types.giveaways.mutations.SET_IS_OFFERS_FETCHED]: (currentState, payload) => {
        currentState.isOffersFetched = payload;
    },
    [types.giveaways.mutations.SET_IS_GIVEAWAYS_LIST_FETCHED]: (currentState, payload) => {
        currentState.isGiveawaysListFetched = payload;
    },
    [types.giveaways.mutations.SET_IS_GIVEAWAY_TYPE_FETCHED]: (currentState, payload) => {
        currentState.isGiveawayTypeFetched = payload;
    },
    [types.giveaways.mutations.SET_IS_GIVEAWAY_TOURNAMENTS_FETCHED]: (currentState, payload) => {
        currentState.isGiveawayTournamentsFetched = payload;
    },
    [types.giveaways.mutations.SET_IS_GIVEAWAY_COVER_TYPES_FETCHED]: (currentState, payload) => {
        currentState.isGiveawayCoverTypesFetched = payload;
    },
    [types.giveaways.mutations.SET_IS_GIVEAWAY_QUESTION_TYPES_FETCHED]: (currentState, payload) => {
        currentState.isGiveawayQuestionTypesFetched = payload;
    },
    [types.giveaways.mutations.SET_IS_GIVEAWAY_DETAILS_FETCHED]: (currentState, payload) => {
        currentState.isGiveawayDetailsFetched = payload;
    },
    [types.giveaways.mutations.SET_IS_REGISTER_AVAILABLE_IN_GIVEAWAY_FETCHED]: (currentState, payload) => {
        currentState.isRegisterAvailableInGiveawayFetched = payload;
    },
    [types.giveaways.mutations.SET_AM_I_REGISTERED_IN_GIVEAWAY_FETCHED]: (currentState, payload) => {
        currentState.isAmIRegisteredInGiveawayFetched = payload;
    },
    [types.giveaways.mutations.SET_IS_GIVEAWAY_REGISTERS_FETCHED]: (currentState, payload) => {
        currentState.isGiveawaysRegistersFetched = payload;
    },
    [types.giveaways.mutations.REMOVE_DELETED_GIVEAWAY]: (currentState, index) => {
        currentState.giveawaysList.splice(index, 1);
    },
};

const getGiveawaysData = async ({ commit }) => {
    const params = { type: 'giveaway' }
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getWebsiteGiveaways(params).then((response) => {
        commit(types.giveaways.mutations.SET_GIVEAWAYS_DATA, response.data.giveaways);
        commit(types.giveaways.mutations.SET_IS_GIVEAWAYS_FETCHED, true);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const getOffersData = async ({ commit }) => {
    const params = { type: 'offer' }
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getWebsiteGiveaways(params).then((response) => {
        commit(types.giveaways.mutations.SET_OFFERS_DATA, response.data.giveaways);
        commit(types.giveaways.mutations.SET_IS_OFFERS_FETCHED, true);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const getGiveawayTypes = async ({ commit }) => {
    const response = await getGiveawaysTypes().then((response) => {
        commit(types.giveaways.mutations.SET_GIVEAWAY_TYPE_DATA, response.data.types);
        commit(types.giveaways.mutations.SET_IS_GIVEAWAY_TYPE_FETCHED, true);
        return true
    }).catch(() => false);
    return response
};

const getGiveawayCoverTypesData = async ({ commit }) => {
    const response = await getGiveawaysCoverTypes().then((response) => {
        commit(types.giveaways.mutations.SET_GIVEAWAY_COVER_TYPES, response.data.types);
        commit(types.giveaways.mutations.SET_IS_GIVEAWAY_COVER_TYPES_FETCHED, true);
        return true
    }).catch(() => false);
    return response
};

const getGiveawayQuestionTypesData = async ({ commit }) => {
    const response = await getGiveawaysQuestionTypes().then((response) => {
        commit(types.giveaways.mutations.SET_GIVEAWAY_QUESTION_TYPES, response.data.types);
        commit(types.giveaways.mutations.SET_IS_GIVEAWAY_QUESTION_TYPES_FETCHED, true);
        return true
    }).catch(() => false);
    return response
};

const getGiveawayDetails = async ({ commit }, giveawayId) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getGiveaway(giveawayId).then((response) => {
        commit(types.giveaways.mutations.SET_GIVEAWAY_DETAILS, response.data.giveaway);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        commit(types.giveaways.mutations.SET_IS_GIVEAWAY_DETAILS_FETCHED, true);
        return true
    }).catch(() => false);
    return response
};

const getGiveawayTournamentsData = async ({ commit }, giveawayId) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getGiveawayTournaments(giveawayId).then((response) => {
        commit(types.giveaways.mutations.SET_GIVEAWAY_TOURNAMENTS, response.data.tournaments);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        commit(types.giveaways.mutations.SET_IS_GIVEAWAY_TOURNAMENTS_FETCHED, true);
        return true
    }).catch(() => false);
    return response
};

const getIsRegisterAvailableInGiveaway = async ({ commit }, giveawayId) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await isRegisterAvailableInGiveaway(giveawayId).then((response) => {
        commit(types.giveaways.mutations.SET_IS_REGISTER_AVAILABLE_IN_GIVEAWAY, response.data.isRegisterAvailable);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        commit(types.giveaways.mutations.SET_IS_REGISTER_AVAILABLE_IN_GIVEAWAY_FETCHED, true);
        return true
    }).catch(() => false);
    return response
};

const getAmIRegisteredInGiveawayInGiveaway = async ({ commit }, giveawayId) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await amIRegisteredInGiveawayInGiveaway(giveawayId).then((response) => {
        commit(types.giveaways.mutations.SET_AM_I_REGISTERED_IN_GIVEAWAY, response.data.is_registered);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        commit(types.giveaways.mutations.SET_AM_I_REGISTERED_IN_GIVEAWAY_FETCHED, true);
        return true
    }).catch(() => false);
    return response
};

const getGiveawayRegistersData = async ({ commit }, giveawayId) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getGiveawaysRegisters(giveawayId).then((response) => {
        commit(types.giveaways.mutations.SET_GIVEAWAY_REGISTERS, response.data.registers);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        commit(types.giveaways.mutations.SET_IS_GIVEAWAY_REGISTERS_FETCHED, true);
        return true
    }).catch(() => false);
    return response
};

const getGiveawaysListForDashboard = async ({ commit }) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getDashboardGiveaways().then((response) => {
        commit(types.giveaways.mutations.SET_GIVEAWAYS_LIST, response.data.giveaways);
        commit(types.giveaways.mutations.SET_IS_GIVEAWAYS_LIST_FETCHED, true);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const deleteGiveaway = async ({ commit }, payload) => {
    const { giveawayId, locationInDataArray } = payload
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await removeGiveaway(giveawayId).then(() => {
        commit(types.giveaways.mutations.REMOVE_DELETED_GIVEAWAY, locationInDataArray);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const deleteGiveawayImage = async ({ commit }, payload) => {
    const { giveawayId, imageId } = payload
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await removeGiveawayImage(giveawayId, imageId).then(() => {
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const deleteGiveawayVideo = async ({ commit }, payload) => {
    const { giveawayId, videoId } = payload
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await removeGiveawayVideo(giveawayId, videoId).then(() => {
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const deleteGiveawayQuestion = async ({ commit }, questionId) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await removeGiveawayQuestion(questionId).then(() => {
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const actions = {
    [types.giveaways.actions.FETCH_GIVEAWAYS]: getGiveawaysData,
    [types.giveaways.actions.FETCH_OFFERS]: getOffersData,
    [types.giveaways.actions.FETCH_GIVEAWAY_TYPE]: getGiveawayTypes,
    [types.giveaways.actions.FETCH_GIVEAWAY_COVER_TYPES]: getGiveawayCoverTypesData,
    [types.giveaways.actions.FETCH_GIVEAWAY_DETAILS]: getGiveawayDetails,
    [types.giveaways.actions.FETCH_GIVEAWAY_TOURNAMENTS]: getGiveawayTournamentsData,
    [types.giveaways.actions.FETCH_IS_REGISTER_AVAILABLE_IN_GIVEAWAY]: getIsRegisterAvailableInGiveaway,
    [types.giveaways.actions.FETCH_AM_I_REGISTERED_IN_GIVEAWAY]: getAmIRegisteredInGiveawayInGiveaway,
    [types.giveaways.actions.FETCH_GIVEAWAY_LIST]: getGiveawaysListForDashboard,
    [types.giveaways.actions.FETCH_GIVEAWAY_QUESTION_TYPES]: getGiveawayQuestionTypesData,
    [types.giveaways.actions.FETCH_GIVEAWAY_REGISTERS]: getGiveawayRegistersData,
    [types.giveaways.actions.DELETE_GIVEAWAY]: deleteGiveaway,
    [types.giveaways.actions.DELETE_GIVEAWAY_IMAGE]: deleteGiveawayImage,
    [types.giveaways.actions.DELETE_GIVEAWAY_VIDEO]: deleteGiveawayVideo,
    [types.giveaways.actions.DELETE_GIVEAWAY_QUESTION]: deleteGiveawayQuestion,
};

export default {
    state,
    mutations,
    actions
};
