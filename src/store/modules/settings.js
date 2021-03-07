import * as APIs from "../../helpers/APIsHelper";
import types from "../types";

const state = {
  settings: {},
  isSettingsDataFetched: false,
  homeSettings: {},
  isHomeSettingsDataFetched: false,
  servicesSettings: {},
  isServicesSettingsDataFetched: false
};

const mutations = {
  [types.settings.mutations.SET_SETTINGS]: (currentState, settings) => {
    if (!settings) return;
    currentState.settings = settings;
  },
  [types.settings.mutations.SET_IS_SETTINGS_FETCHED]: (currentState, flag) => {
    currentState.isSettingsDataFetched = flag;
  },
  [types.settings.mutations.SET_HOME_SETTINGS]: (currentState, settings) => {
    if (!settings) return;
    currentState.homeSettings = settings;
  },
  [types.settings.mutations.SET_IS_HOME_SETTINGS_FETCHED]: (
    currentState,
    flag
  ) => {
    currentState.isHomeSettingsDataFetched = flag;
  },
  [types.settings.mutations.SET_SERVICES_SETTINGS]: (
    currentState,
    settings
  ) => {
    if (!settings) return;
    currentState.servicesSettings = settings;
  },
  [types.settings.mutations.SET_IS_SERVICES_SETTINGS_FETCHED]: (
    currentState,
    flag
  ) => {
    currentState.isServicesSettingsDataFetched = flag;
  }
};

const fetchSettingsData = async ({ commit }, data) => {
  const { isService, isWork, isHome, isProfile, isServiceTexts } = data;
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    const response = await APIs.fetchSettings(data);
    if (isService && isHome && isProfile && isServiceTexts) {
      commit(types.settings.mutations.SET_SETTINGS, response);
      commit(types.settings.mutations.SET_IS_SETTINGS_FETCHED, true);
    } else if (isService && isServiceTexts) {
      commit(types.settings.mutations.SET_SERVICES_SETTINGS, response);
      commit(types.settings.mutations.SET_IS_SERVICES_SETTINGS_FETCHED, true);
    } else if (isHome) {
      commit(types.settings.mutations.SET_HOME_SETTINGS, response);
      commit(types.settings.mutations.SET_IS_HOME_SETTINGS_FETCHED, true);
    }
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.settings.mutations.SET_IS_SERVICES_SETTINGS_FETCHED, false);
    commit(types.settings.mutations.SET_IS_HOME_SETTINGS_FETCHED, false);
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
