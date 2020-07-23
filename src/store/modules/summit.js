import { getSummits } from '../../website/helpers/APIsHelper';
import types from '../types';

const state = {
    summitsData: [],
    isSummitsFetched: false
};

const mutations = {
    [types.summits.mutations.SET_SUMMITS_DATA]: (currentState, payload) => {
        currentState.summitsData = payload;
    },
    [types.summits.mutations.SET_IS_SUMMITS_FETCHED]: (currentState, payload) => {
        currentState.isSummitsFetched = payload;
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

const actions = {
    [types.summits.actions.FETCH_SUMMITS]: getSummitsData
};

export default {
    state,
    mutations,
    actions
};
