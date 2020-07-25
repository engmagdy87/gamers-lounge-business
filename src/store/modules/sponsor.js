import {
    getSponsorsForDashboard,
    getSponsors
} from '../../website/helpers/APIsHelper';
import types from '../types';

const state = {
    sponsorsData: [],
    isSponsorsDataFetched: false,
    dashboardSponsorsData: [],
    isDashboardSponsorsDataFetched: false,
};

const mutations = {
    [types.sponsors.mutations.SET_SPONSORS_DATA]: (currentState, payload) => {
        currentState.sponsorsData = payload;
    },
    [types.sponsors.mutations.SET_IS_SPONSORS_DATA_FETCHED]: (currentState, payload) => {
        currentState.isSponsorsDataFetched = payload;
    },
    [types.sponsors.mutations.SET_DASHBOARD_SPONSORS_DATA]: (currentState, payload) => {
        currentState.dashboardSponsorsData = payload;
    },
    [types.sponsors.mutations.SET_IS_DASHBOARD_SPONSORS_DATA_FETCHED]: (currentState, payload) => {
        currentState.isDashboardSponsorsDataFetched = payload;
    }
};

const getSponsorsData = async ({ commit },) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getSponsors().then((response) => {
        commit(types.sponsors.mutations.SET_SPONSORS_DATA, response.data.sponsors);
        commit(types.sponsors.mutations.SET_IS_SPONSORS_DATA_FETCHED, true);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const getSponsorsDataForDashboard = async ({ commit },) => {
    const response = await getSponsorsForDashboard().then((response) => {
        commit(types.sponsors.mutations.SET_DASHBOARD_SPONSORS_DATA, response.data.sponsors);
        commit(types.sponsors.mutations.SET_IS_DASHBOARD_SPONSORS_DATA_FETCHED, true);
        return true
    }).catch(() => false);
    return response
};

const actions = {
    [types.sponsors.actions.FETCH_SPONSORS]: getSponsorsData,
    [types.sponsors.actions.FETCH_SPONSORS_FOR_DASHBOARD]: getSponsorsDataForDashboard,
};

export default {
    state,
    mutations,
    actions
};
