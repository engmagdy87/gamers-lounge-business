import types from '../types';
import { loadUserPersona, setUserPersona } from '../../website/helpers/APIsHelper';
import { setUserCookie } from '../../website/helpers/CookieHelper';

const state = {
    userPersona: {}
};

const getters = {
    [types.user.getters.IS_USER_LOGGED_IN]: (currentState) => Object.keys(currentState.userPersona).length > 0,
    [types.user.getters.IS_USER_ADMIN]: (currentState) => currentState.userPersona.is_admin,
};

const mutations = {
    [types.user.mutations.SET_USER_PERSONA]: (currentState, payload) => {
        currentState.userPersona = payload;
    },
};

const getUserPersona = async ({ commit, dispatch }, payload) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true)
    const response = await loadUserPersona(payload).then((response) => {
        commit(types.user.mutations.SET_USER_PERSONA, response.data);
        setUserCookie(response.data)
        commit(types.home.mutations.SET_SPINNER_FLAG, false)
        return true
    }).catch((err) => {
        commit(types.home.mutations.SET_SPINNER_FLAG, false)
        return false
    });

    return response
};

const postUserPersona = async ({ commit }, payload) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true)
    const response = await setUserPersona(payload).then((response) => {
        commit(types.user.mutations.SET_USER_PERSONA, response.data);
        setUserCookie(response.data)
        commit(types.home.mutations.SET_SPINNER_FLAG, false)
        return true
    }).catch((err) => {
        commit(types.home.mutations.SET_SPINNER_FLAG, false)
        return false
    });
    return response
};

const actions = {
    [types.user.actions.FETCH_USER_PERSONA]: getUserPersona,
    [types.user.actions.REGISTER_USER_PERSONA]: postUserPersona,
};

export default {
    state,
    getters,
    actions,
    mutations
};
