import {
    getGamesForDashboard,
    getGames
} from '../../website/helpers/APIsHelper';
import types from '../types';

const state = {
    gamesData: [],
    isGamesDataFetched: false,
    dashboardGamesData: [],
    isDashboardGamesDataFetched: false,
};

const mutations = {
    [types.games.mutations.SET_GAMES_DATA]: (currentState, payload) => {
        currentState.gamesData = payload;
    },
    [types.games.mutations.SET_IS_GAMES_DATA_FETCHED]: (currentState, payload) => {
        currentState.isGamesDataFetched = payload;
    },
    [types.games.mutations.SET_DASHBOARD_GAMES_DATA]: (currentState, payload) => {
        currentState.dashboardGamesData = payload;
    },
    [types.games.mutations.SET_IS_DASHBOARD_GAMES_DATA_FETCHED]: (currentState, payload) => {
        currentState.isDashboardGamesDataFetched = payload;
    }
};

const getGamesData = async ({ commit },) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getGames().then((response) => {
        commit(types.games.mutations.SET_GAMES_DATA, response.data.games);
        commit(types.games.mutations.SET_IS_GAMES_DATA_FETCHED, true);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const getGamesDataForDashboard = async ({ commit },) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getGamesForDashboard().then((response) => {
        commit(types.games.mutations.SET_DASHBOARD_GAMES_DATA, response.data.games);
        commit(types.games.mutations.SET_IS_DASHBOARD_GAMES_DATA_FETCHED, true);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const actions = {
    [types.games.actions.FETCH_GAMES]: getGamesData,
    [types.games.actions.FETCH_GAMES_FOR_DASHBOARD]: getGamesDataForDashboard,
};

export default {
    state,
    mutations,
    actions
};
