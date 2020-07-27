import {
    getGamesForDashboard,
    getGames,
    getGamesCardsView,
    getGameDetails
} from '../../website/helpers/APIsHelper';
import types from '../types';

const state = {
    gamesData: [],
    isGamesDataFetched: false,
    dashboardGamesData: [],
    isDashboardGamesDataFetched: false,
    gamesCardViewData: [],
    isGamesCardsViewDataFetched: false,
    gameDetailsData: [],
    isGameDetailsDataFetched: false,
};

const mutations = {
    [types.games.mutations.SET_GAMES_DATA]: (currentState, payload) => {
        currentState.gamesData = payload;
    },
    [types.games.mutations.SET_IS_GAMES_DATA_FETCHED]: (currentState, payload) => {
        currentState.isGamesDataFetched = payload;
    },
    [types.games.mutations.SET_GAMES_CARDS_VIEW]: (currentState, payload) => {
        currentState.gamesCardViewData = payload;
    },
    [types.games.mutations.SET_DASHBOARD_GAMES_DATA]: (currentState, payload) => {
        currentState.dashboardGamesData = payload;
    },
    [types.games.mutations.SET_IS_DASHBOARD_GAMES_DATA_FETCHED]: (currentState, payload) => {
        currentState.isDashboardGamesDataFetched = payload;
    },
    [types.games.mutations.SET_IS_GAMES_CARDS_VIEW_FETCHED]: (currentState, payload) => {
        currentState.isGamesCardsViewDataFetched = payload;
    },
    [types.games.mutations.SET_GAME_DETAILS_DATA]: (currentState, payload) => {
        currentState.gameDetailsData = payload;
    },
    [types.games.mutations.SET_IS_GAME_DETAILS_DATA_FETCHED]: (currentState, payload) => {
        currentState.isGameDetailsDataFetched = payload;
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
    const response = await getGamesForDashboard().then((response) => {
        commit(types.games.mutations.SET_DASHBOARD_GAMES_DATA, response.data.games);
        commit(types.games.mutations.SET_IS_DASHBOARD_GAMES_DATA_FETCHED, true);
        return true
    }).catch(() => false);
    return response
};

const getGamesCardsViewData = async ({ commit },) => {
    const response = await getGamesCardsView().then((response) => {
        commit(types.games.mutations.SET_GAMES_CARDS_VIEW, response.data.games);
        commit(types.games.mutations.SET_IS_GAMES_CARDS_VIEW_FETCHED, true);
        return true
    }).catch(() => false);
    return response
};

const getGameDetailsData = async ({ commit }, gameId) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getGameDetails(gameId).then((response) => {
        commit(types.games.mutations.SET_GAME_DETAILS_DATA, response.data.game);
        commit(types.games.mutations.SET_IS_GAME_DETAILS_DATA_FETCHED, true);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const actions = {
    [types.games.actions.FETCH_GAMES]: getGamesData,
    [types.games.actions.FETCH_GAMES_FOR_DASHBOARD]: getGamesDataForDashboard,
    [types.games.actions.FETCH_GAMES_CARD_VIEW]: getGamesCardsViewData,
    [types.games.actions.FETCH_GAME_DETAILS]: getGameDetailsData,
};

export default {
    state,
    mutations,
    actions
};
