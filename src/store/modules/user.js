import * as APIs from "../../helpers/APIsHelper";
import {
  setTokenCookie,
  setUserDataCookie,
  getUserDataCookie
} from "../../helpers/CookieHelper";
import types from "../types";

const state = {
  userPersona: {},
  isUserPersonaFetched: false
};

const mutations = {
  [types.user.mutations.SET_USER_PERSONA]: (currentState, data) => {
    currentState.userPersona = data;
  },
  [types.user.mutations.SET_IS_USER_PERSONA_FETCHED]: (currentState, flag) => {
    currentState.isUserPersonaFetched = flag;
  }
};

const loginToDashboard = async ({ commit }, credentials) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    const response = await APIs.adminLogin(credentials);
    const { access_token, user } = response;
    commit(types.user.mutations.SET_USER_PERSONA, response);
    commit(types.user.mutations.SET_IS_USER_PERSONA_FETCHED, true);
    setTokenCookie(access_token);
    setUserDataCookie(user);
    window.open("/dashboard", "_self");
  } catch (error) {
    commit(types.user.mutations.SET_IS_USER_PERSONA_FETCHED, false);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const updateUserData = async ({ commit, state }, data) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    const response = await APIs.updateUserData(data);

    commit(types.user.mutations.SET_USER_PERSONA, response);
    const newUserPersona = { ...state.userPersona, ...response };
    state.userPersona = { ...newUserPersona };
    let userData = getUserDataCookie();
    userData = { ...userData, ...newUserPersona };
    setUserDataCookie(userData);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const updateUserPassword = async ({ commit }, userPassword) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    await APIs.updateUserPassword(userPassword);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const actions = {
  [types.user.actions.LOGIN_TO_DASHBOARD]: loginToDashboard,
  [types.user.actions.UPDATE_USER_DATA]: updateUserData,
  [types.user.actions.UPDATE_USER_PASSWORD]: updateUserPassword
};

export default {
  state,
  mutations,
  actions
};
