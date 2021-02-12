import * as APIs from "../../helpers/APIsHelper";
import { setTokenCookie, setUserDataCookie } from "../../helpers/CookieHelper";
import types from "../types";

const state = {
  userPersona: {},
  isUserPersona: false
};

const mutations = {
  [types.user.mutations.SET_USER_PERSONA]: (currentState, data) => {
    currentState.userPersona = data;
  },
  [types.user.mutations.SET_IS_USER_PERSONA_FETCHED]: (currentState, flag) => {
    currentState.isUserPersona = flag;
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

const actions = {
  [types.user.actions.LOGIN_TO_DASHBOARD]: loginToDashboard
};

export default {
  state,
  mutations,
  actions
};
