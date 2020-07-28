import {
    getRegionsForDashboard,
    getRegions,
    removeRegion
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
    },
    [types.regions.mutations.REMOVE_DELETED_REGION]: (currentState, index) => {
        currentState.regionsData.splice(index, 1);
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

const deleteRegion = async ({ commit }, payload) => {
    const { regionId, locationInDataArray } = payload
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await removeRegion(regionId).then(() => {
        commit(types.regions.mutations.REMOVE_DELETED_REGION, locationInDataArray);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const actions = {
    [types.regions.actions.FETCH_REGIONS]: getRegionsData,
    [types.regions.actions.FETCH_REGIONS_FOR_DASHBOARD]: getRegionsDataForDashboard,
    [types.regions.actions.DELETE_REGION]: deleteRegion,
};

export default {
    state,
    mutations,
    actions
};
