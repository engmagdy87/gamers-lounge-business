import types from '../types';

const state = {
    showSpinnerFlag: false,
    showHeaderAndFooter: true
};

const mutations = {
    [types.app.mutations.SET_SPINNER_FLAG]: (currentState, payload) => {
        currentState.showSpinnerFlag = payload;
    },
    [types.app.mutations.SET_SHOW_HEADER_AND_FOOTER_FLAG]: (currentState, payload) => {
        currentState.showHeaderAndFooter = payload;
    },
};

export default {
    state,
    mutations
};
