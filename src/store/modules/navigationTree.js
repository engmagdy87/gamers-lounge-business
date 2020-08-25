import types from '../types';

const state = {
    gameTree: {},
    eventTree: {},
    tournamentTree: {},
    giveawayTree: {},
    summitTree: {},
};

const mutations = {
    [types.navigationTree.mutations.SET_GAME_TREE]: (currentState, payload) => {
        currentState.gameTree = payload;
    },
    [types.navigationTree.mutations.SET_EVENT_TREE]: (currentState, payload) => {
        currentState.eventTree = payload;
    },
    [types.navigationTree.mutations.SET_TOURNAMENT_TREE]: (currentState, payload) => {
        currentState.tournamentTree = payload;
    },
    [types.navigationTree.mutations.SET_GIVEAWAY_TREE]: (currentState, payload) => {
        currentState.giveawayTree = payload;
    },
    [types.navigationTree.mutations.SET_SUMMIT_TREE]: (currentState, payload) => {
        currentState.summitTree = payload;
    },
};


export default {
    state,
    mutations
};
