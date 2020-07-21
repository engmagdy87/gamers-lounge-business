import types from '../types';

const state = {
    showSpinnerFlag: false
};

const mutations = {
    [types.home.mutations.SET_SPINNER_FLAG]: (currentState, payload) => {
        currentState.showSpinnerFlag = payload;
    },
};

export default {
    state,
    mutations
};
