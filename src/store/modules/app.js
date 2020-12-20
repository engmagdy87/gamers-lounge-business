import * as APIs from '../../helpers/APIsHelper';
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

const removeImage = async ({ commit }, imageId) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.deleteImage(imageId)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const removeVideo = async ({ commit }, videoId) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.deleteVideo(videoId)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const actions = {
    [types.app.actions.DELETE_IMAGE]: removeImage,
    [types.app.actions.DELETE_VIDEO]: removeVideo,
};

export default {
    state,
    mutations,
    actions
};
