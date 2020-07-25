import { getSummits, getSummitsList } from '../../website/helpers/APIsHelper';
import types from '../types';

const state = {
    summitsData: [],
    summitsListData: [],
    isSummitsFetched: false,
    isSummitsListFetched: false,
};

const mutations = {
    [types.summits.mutations.SET_SUMMITS_DATA]: (currentState, payload) => {
        currentState.summitsData = payload;
    },
    [types.summits.mutations.SET_SUMMITS_LIST_DATA]: (currentState, payload) => {
        currentState.summitsListData = payload;
    },
    [types.summits.mutations.SET_IS_SUMMITS_FETCHED]: (currentState, payload) => {
        currentState.isSummitsFetched = payload;
    },
    [types.summits.mutations.SET_IS_SUMMITS_LIST_FETCHED]: (currentState, payload) => {
        currentState.isSummitsListFetched = payload;
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

const actions = {
    [types.summits.actions.FETCH_SUMMITS]: getSummitsData,
    [types.summits.actions.FETCH_SUMMITS_LIST]: getSummitsListSummary,
};

export default {
    state,
    mutations,
    actions
};
