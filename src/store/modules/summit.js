import {
    getSummits, getSummitsList, removeSummit, removeSummitImage, removeSummitVideo, getCoverHomeEventsImage, getCoverContactUsImage, getCoverGiveawaysImage, getSummitsHistory,
    getSummitDetails
} from '../../website/helpers/APIsHelper';
import types from '../types';

const state = {
    summitsData: [],
    summitsListData: [],
    summitsHistoryData: [],
    summitDetailsData: {},
    coverHomeEventsImage: null,
    coverContactUsImage: null,
    coverGiveawaysImage: null,
    isSummitsHistoryDataFetched: false,
    isSummitDetailsDataFetched: false,
    isSummitsFetched: false,
    isSummitsListFetched: false,
    isCoverHomeEventsImageFetched: false,
    isCoverContactUsImageFetched: false,
    isCoverGiveawaysImageFetched: false,
};

const mutations = {
    [types.summits.mutations.SET_SUMMITS_DATA]: (currentState, payload) => {
        currentState.summitsData = payload;
    },
    [types.summits.mutations.SET_SUMMITS_LIST_DATA]: (currentState, payload) => {
        currentState.summitsListData = payload;
    },
    [types.summits.mutations.SET_SUMMITS_HISTORY]: (currentState, payload) => {
        currentState.summitsHistoryData = payload;
    },
    [types.summits.mutations.SET_SUMMIT_DETAILS]: (currentState, payload) => {
        currentState.summitDetailsData = payload;
    },
    [types.summits.mutations.SET_IS_SUMMITS_HISTORY_FETCHED]: (currentState, payload) => {
        currentState.isSummitsHistoryDataFetched = payload;
    },
    [types.summits.mutations.SET_IS_SUMMIT_DETAILS_FETCHED]: (currentState, payload) => {
        currentState.isSummitDetailsDataFetched = payload;
    },
    [types.summits.mutations.SET_IS_SUMMITS_FETCHED]: (currentState, payload) => {
        currentState.isSummitsFetched = payload;
    },
    [types.summits.mutations.SET_IS_SUMMITS_LIST_FETCHED]: (currentState, payload) => {
        currentState.isSummitsListFetched = payload;
    },
    [types.summits.mutations.REMOVE_DELETED_SUMMIT]: (currentState, index) => {
        currentState.summitsData.splice(index, 1);
    },
    [types.summits.mutations.SET_COVER_HOME_EVENTS_IMAGE]: (currentState, payload) => {
        currentState.coverHomeEventsImage = payload;
    },
    [types.summits.mutations.SET_COVER_CONTACT_US_IMAGE]: (currentState, payload) => {
        currentState.coverContactUsImage = payload;
    },
    [types.summits.mutations.SET_COVER_GIVEAWAYS_IMAGE]: (currentState, payload) => {
        currentState.coverGiveawaysImage = payload;
    },
    [types.summits.mutations.IS_COVER_HOME_EVENTS_IMAGE_FETCHED]: (currentState, payload) => {
        currentState.isCoverHomeEventsImageFetched = payload;
    },
    [types.summits.mutations.IS_COVER_CONTACT_US_IMAGE_FETCHED]: (currentState, payload) => {
        currentState.isCoverContactUsImageFetched = payload;
    },
    [types.summits.mutations.IS_COVER_GIVEAWAYS_IMAGE_FETCHED]: (currentState, payload) => {
        currentState.isCoverGiveawaysImageFetched = payload;
    },
};

const getSummitsData = async ({ commit }) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getSummits().then((response) => {
        commit(types.summits.mutations.SET_SUMMITS_DATA, response.data.summits);
        commit(types.summits.mutations.SET_IS_SUMMITS_FETCHED, true);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const getSummitsListSummary = async ({ commit }) => {
    const response = await getSummitsList().then((response) => {
        commit(types.summits.mutations.SET_SUMMITS_LIST_DATA, response.data.summits);
        commit(types.summits.mutations.SET_IS_SUMMITS_LIST_FETCHED, true);
        return true
    }).catch(() => false);
    return response
};

const getSummitsHistoryData = async ({ commit }) => {
    const response = await getSummitsHistory().then((response) => {
        commit(types.summits.mutations.SET_SUMMITS_HISTORY, response.data.data.summit);
        commit(types.summits.mutations.SET_IS_SUMMITS_HISTORY_FETCHED, true);
        return true
    }).catch(() => false);
    return response
};

const getSummitDetailsData = async ({ commit }, summitId) => {
    const response = await getSummitDetails(summitId).then((response) => {
        commit(types.summits.mutations.SET_SUMMIT_DETAILS, response.data.data.summit);
        commit(types.summits.mutations.SET_IS_SUMMIT_DETAILS_FETCHED, true);
        return true
    }).catch(() => false);
    return response
};

const fetchCoverHomeEventsImage = async ({ commit }) => {
    const response = await getCoverHomeEventsImage().then((response) => {
        commit(types.summits.mutations.SET_COVER_HOME_EVENTS_IMAGE, response.data.cover);
        commit(types.summits.mutations.IS_COVER_HOME_EVENTS_IMAGE_FETCHED, true);
    }).catch(() => false);
    return response
};

const fetchCoverContactUsImage = async ({ commit }) => {
    const response = await getCoverContactUsImage().then((response) => {
        commit(types.summits.mutations.SET_COVER_CONTACT_US_IMAGE, response.data.cover);
        commit(types.summits.mutations.IS_COVER_CONTACT_US_IMAGE_FETCHED, true);
    }).catch(() => false);
    return response
};

const fetchCoverGiveawaysImage = async ({ commit }) => {
    const response = await getCoverGiveawaysImage().then((response) => {
        commit(types.summits.mutations.SET_COVER_GIVEAWAYS_IMAGE, response.data.cover);
        commit(types.summits.mutations.IS_COVER_GIVEAWAYS_IMAGE_FETCHED, true);
    }).catch(() => false);
    return response
};

const deleteSummit = async ({ commit }, payload) => {
    const { summitId, locationInDataArray } = payload
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await removeSummit(summitId).then(() => {
        commit(types.summits.mutations.REMOVE_DELETED_SUMMIT, locationInDataArray);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const deleteSummitImage = async ({ commit }, payload) => {
    const { summitId, imageId } = payload
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await removeSummitImage(summitId, imageId).then(() => {
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const deleteSummitVideo = async ({ commit }, payload) => {
    const { summitId, videoId } = payload
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await removeSummitVideo(summitId, videoId).then(() => {
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const actions = {
    [types.summits.actions.FETCH_SUMMITS]: getSummitsData,
    [types.summits.actions.FETCH_SUMMITS_LIST]: getSummitsListSummary,
    [types.summits.actions.FETCH_SUMMITS_HISTORY]: getSummitsHistoryData,
    [types.summits.actions.FETCH_SUMMIT_DETAILS]: getSummitDetailsData,
    [types.summits.actions.DELETE_SUMMIT]: deleteSummit,
    [types.summits.actions.DELETE_SUMMIT_IMAGE]: deleteSummitImage,
    [types.summits.actions.DELETE_SUMMIT_VIDEO]: deleteSummitVideo,
    [types.summits.actions.FETCH_COVER_HOME_EVENTS_IMAGE]: fetchCoverHomeEventsImage,
    [types.summits.actions.FETCH_COVER_CONTACT_US_IMAGE]: fetchCoverContactUsImage,
    [types.summits.actions.FETCH_COVER_GIVEAWAYS_IMAGE]: fetchCoverGiveawaysImage,
};

export default {
    state,
    mutations,
    actions
};
