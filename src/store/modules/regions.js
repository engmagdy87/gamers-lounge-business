import {
    getRegionsForDashboard,
    getRegions
} from '../../website/helpers/APIsHelper';
import types from '../types';

const state = {
    regionsData: [],
    isRegionsDataFetched: false,
    dashboardRegionsData: [],
    isDashboardRegionsDataFetched: false,
};

const mutations = {
    [types.regions.mutations.SET_REGIONS_DATA]: (currentState, payload) => {
        currentState.regionsData = payload;
    },
    [types.regions.mutations.SET_IS_REGIONS_DATA_FETCHED]: (currentState, payload) => {
        currentState.isRegionsDataFetched = payload;
    },
    [types.regions.mutations.SET_DASHBOARD_REGIONS_DATA]: (currentState, payload) => {
        currentState.dashboardRegionsData = payload;
    },
    [types.regions.mutations.SET_IS_DASHBOARD_REGIONS_DATA_FETCHED]: (currentState, payload) => {
        currentState.isDashboardRegionsDataFetched = payload;
    }
};

const getRegionsData = async ({ commit },) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getRegions().then((response) => {
        commit(types.regions.mutations.SET_REGIONS_DATA, response.data.regions);
        commit(types.regions.mutations.SET_IS_REGIONS_DATA_FETCHED, true);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const getRegionsDataForDashboard = async ({ commit },) => {
    const response = await getRegionsForDashboard().then((response) => {
        commit(types.regions.mutations.SET_DASHBOARD_REGIONS_DATA, response.data.regions);
        commit(types.regions.mutations.SET_IS_DASHBOARD_REGIONS_DATA_FETCHED, true);
        return true
    }).catch(() => false);
    return response
};

const actions = {
    [types.regions.actions.FETCH_REGIONS]: getRegionsData,
    [types.regions.actions.FETCH_REGIONS_FOR_DASHBOARD]: getRegionsDataForDashboard,
};

export default {
    state,
    mutations,
    actions
};
