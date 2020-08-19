import {
    getDashboardGiveaways, removeGiveaway, removeGiveawayImage, removeGiveawayVideo, getGiveawaysTypes,
    getGiveawaysCoverTypes
} from '../../website/helpers/APIsHelper';
import types from '../types';

const state = {
    // giveawaysData: [],
    giveawaysTypes: [],
    giveawayCoverTypes: [],
    // giveawayDetails: {},
    giveawaysList: [],
    // isGiveawaysFetched: false,
    isGiveawaysListFetched: false,
    isGiveawayTypeFetched: false,
    isGiveawayCoverTypesFetched: false,
    // isGiveawayDetailsFetched: false,
};

const mutations = {
    // [types.giveaways.mutations.SET_GIVEAWAYS_DATA]: (currentState, payload) => {
    //     currentState.giveawaysData = payload;
    // },
    [types.giveaways.mutations.SET_GIVEAWAYS_LIST]: (currentState, payload) => {
        currentState.giveawaysList = payload;
    },
    [types.giveaways.mutations.SET_GIVEAWAY_TYPE_DATA]: (currentState, payload) => {
        currentState.giveawaysTypes = payload;
    },
    [types.giveaways.mutations.SET_GIVEAWAY_COVER_TYPES]: (currentState, payload) => {
        currentState.giveawayCoverTypes = payload;
    },
    // [types.giveaways.mutations.SET_GIVEAWAY_DETAILS]: (currentState, payload) => {
    //     currentState.giveawayDetails = payload;
    // },
    // [types.giveaways.mutations.SET_IS_GIVEAWAYS_FETCHED]: (currentState, payload) => {
    //     currentState.isGiveawaysFetched = payload;
    // },
    [types.giveaways.mutations.SET_IS_GIVEAWAYS_LIST_FETCHED]: (currentState, payload) => {
        currentState.isGiveawaysListFetched = payload;
    },
    [types.giveaways.mutations.SET_IS_GIVEAWAY_TYPE_FETCHED]: (currentState, payload) => {
        currentState.isGiveawayTypeFetched = payload;
    },
    [types.giveaways.mutations.SET_IS_GIVEAWAY_COVER_TYPES_FETCHED]: (currentState, payload) => {
        currentState.isGiveawayCoverTypesFetched = payload;
    },
    // [types.giveaways.mutations.SET_IS_GIVEAWAY_DETAILS_FETCHED]: (currentState, payload) => {
    //     currentState.isGiveawayDetailsFetched = payload;
    // },
    [types.giveaways.mutations.REMOVE_DELETED_GIVEAWAY]: (currentState, index) => {
        currentState.giveawaysData.splice(index, 1);
    },
};

// const getGiveawaysData = async ({ commit }) => {
//     commit(types.home.mutations.SET_SPINNER_FLAG, true);
//     const response = await getGiveaways().then((response) => {
//         commit(types.giveaways.mutations.SET_GIVEAWAYS_DATA, response.data.giveaways);
//         commit(types.giveaways.mutations.SET_IS_GIVEAWAYS_FETCHED, true);
//         commit(types.home.mutations.SET_SPINNER_FLAG, false);
//         return true
//     }).catch(() => false);
//     return response
// };

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

// const getGiveawayDetails = async ({ commit }, giveawayId) => {
//     commit(types.home.mutations.SET_SPINNER_FLAG, true);
//     const response = await getGiveaway(giveawayId).then((response) => {
//         commit(types.giveaways.mutations.SET_GIVEAWAY_DETAILS, response.data.giveaway);
//         commit(types.home.mutations.SET_SPINNER_FLAG, false);
//         commit(types.giveaways.mutations.SET_IS_GIVEAWAY_DETAILS_FETCHED, true);
//         return true
//     }).catch(() => false);
//     return response
// };

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

const actions = {
    // [types.giveaways.actions.FETCH_GIVEAWAYS]: getGiveawaysData,
    [types.giveaways.actions.FETCH_GIVEAWAY_TYPE]: getGiveawayTypes,
    [types.giveaways.actions.FETCH_GIVEAWAY_COVER_TYPES]: getGiveawayCoverTypesData,
    // [types.giveaways.actions.FETCH_GIVEAWAY_DETAILS]: getGiveawayDetails,
    [types.giveaways.actions.FETCH_GIVEAWAY_LIST]: getGiveawaysListForDashboard,
    [types.giveaways.actions.DELETE_GIVEAWAY]: deleteGiveaway,
    [types.giveaways.actions.DELETE_GIVEAWAY_IMAGE]: deleteGiveawayImage,
    [types.giveaways.actions.DELETE_GIVEAWAY_VIDEO]: deleteGiveawayVideo,
};

export default {
    state,
    mutations,
    actions
};
