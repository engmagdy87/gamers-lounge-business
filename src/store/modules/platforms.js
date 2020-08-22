import {
    getPlatformsForDashboard,
    getPlatforms,
    removePlatform,
} from '../../website/helpers/APIsHelper';
import types from '../types';

const state = {
    platformsData: [],
    isPlatformsDataFetched: false,
    dashboardPlatformsData: [],
    isDashboardPlatformsDataFetched: false,
};

const mutations = {
    [types.platforms.mutations.SET_PLATFORMS_DATA]: (currentState, payload) => {
        currentState.platformsData = payload;
    },
    [types.platforms.mutations.SET_IS_PLATFORMS_DATA_FETCHED]: (currentState, payload) => {
        currentState.isPlatformsDataFetched = payload;
    },
    [types.platforms.mutations.SET_DASHBOARD_PLATFORMS_DATA]: (currentState, payload) => {
        currentState.dashboardPlatformsData = payload;
    },
    [types.platforms.mutations.SET_IS_DASHBOARD_PLATFORMS_DATA_FETCHED]: (currentState, payload) => {
        currentState.isDashboardPlatformsDataFetched = payload;
    },
    [types.platforms.mutations.REMOVE_DELETED_PLATFORM]: (currentState, index) => {
        currentState.platformsData.splice(index, 1);
    },
};

const getPlatformsData = async ({ commit },) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getPlatforms().then((response) => {
        commit(types.platforms.mutations.SET_PLATFORMS_DATA, response.data.platforms);
        commit(types.platforms.mutations.SET_IS_PLATFORMS_DATA_FETCHED, true);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const getPlatformsDataForDashboard = async ({ commit },) => {
    const response = await getPlatformsForDashboard().then((response) => {
        commit(types.platforms.mutations.SET_DASHBOARD_PLATFORMS_DATA, response.data.platforms);
        commit(types.platforms.mutations.SET_IS_DASHBOARD_PLATFORMS_DATA_FETCHED, true);
        return true
    }).catch(() => false);
    return response
};

const deletePlatform = async ({ commit }, payload) => {
    const { platformId, locationInDataArray } = payload
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await removePlatform(platformId).then(() => {
        commit(types.platforms.mutations.REMOVE_DELETED_PLATFORM, locationInDataArray);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const actions = {
    [types.platforms.actions.FETCH_PLATFORMS]: getPlatformsData,
    [types.platforms.actions.FETCH_PLATFORMS_FOR_DASHBOARD]: getPlatformsDataForDashboard,
    [types.platforms.actions.DELETE_PLATFORM]: deletePlatform,
};

export default {
    state,
    mutations,
    actions
};
