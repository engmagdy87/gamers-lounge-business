import * as APIs from "../../helpers/APIsHelper";
import types from "../types";

const state = {
  settings: {},
  isSettingsDataFetched: false
};

const mutations = {
  [types.settings.mutations.SET_SETTINGS]: (currentState, settings) => {
    if (!settings) return;
    currentState.settings = settings;
  },
  [types.settings.mutations.SET_IS_SETTINGS_FETCHED]: (currentState, flag) => {
    currentState.isSettingsDataFetched = flag;
  }
};

const fetchSettingsData = async ({ commit }, data) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    const response = await APIs.fetchSettings(data);
    commit(types.settings.mutations.SET_SETTINGS, response);
    commit(types.settings.mutations.SET_IS_SETTINGS_FETCHED, true);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.settings.mutations.SET_IS_SETTINGS_FETCHED, false);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const createSettingData = async ({ commit }, data) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    const response = await APIs.createSetting(data);
    commit(types.settings.mutations.SET_SETTINGS, response);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    return response;
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const deleteSettingData = async ({ commit }, payload) => {
  const { id } = payload;
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    await APIs.deleteSetting(id);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const updateSettingData = async ({ commit }, data) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    const response = await APIs.updateSetting(data);
    commit(types.settings.mutations.SET_SETTINGS, response);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    return response;
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const actions = {
  [types.settings.actions.FETCH_SETTINGS]: fetchSettingsData,
  [types.settings.actions.CREATE_SETTING]: createSettingData,
  [types.settings.actions.DELETE_SETTING]: deleteSettingData,
  [types.settings.actions.UPDATE_SETTING]: updateSettingData
};

export default {
  state,
  mutations,
  actions
};
