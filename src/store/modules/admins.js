import * as APIs from "../../helpers/APIsHelper";
import types from "../types";

const state = {
  admins: [],
  isAdminsDataFetched: false,
  roles: [],
  isRolesDataFetched: false
};

const mutations = {
  [types.admins.mutations.SET_ADMINS]: (currentState, admins) => {
    currentState.admins = admins;
  },
  [types.admins.mutations.SET_IS_ADMINS_FETCHED]: (currentState, flag) => {
    currentState.isAdminsDataFetched = flag;
  },
  [types.admins.mutations.SET_ROLES]: (currentState, roles) => {
    currentState.roles = roles;
  },
  [types.admins.mutations.SET_IS_ROLES_FETCHED]: (currentState, flag) => {
    currentState.isRolesDataFetched = flag;
  },
  [types.admins.mutations.REMOVE_DELETED_ADMIN]: (currentState, index) => {
    currentState.admins.splice(index, 1);
  }
};

const fetchAdminsData = async ({ commit }) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    const response = await APIs.fetchAdmins();
    commit(types.admins.mutations.SET_ADMINS, response.data);
    commit(types.admins.mutations.SET_IS_ADMINS_FETCHED, true);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.admins.mutations.SET_IS_ADMINS_FETCHED, false);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const fetchRolesData = async ({ commit }) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    const response = await APIs.fetchRoles();
    commit(types.admins.mutations.SET_ROLES, response);
    commit(types.admins.mutations.SET_IS_ROLES_FETCHED, true);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.admins.mutations.SET_IS_ROLES_FETCHED, false);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const resetAdminPassword = async ({ commit }, id) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    await APIs.resetPassword(id);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const createAdminData = async ({ commit }, data) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    await APIs.createAdmin(data);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const deleteAdminData = async ({ commit }, payload) => {
  const { id, locationInDataArray } = payload;
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    await APIs.deleteAdmin(id);
    commit(types.admins.mutations.REMOVE_DELETED_ADMIN, locationInDataArray);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const updateAdminData = async ({ commit }, data) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    await APIs.updateAdmin(data);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const actions = {
  [types.admins.actions.FETCH_ADMINS]: fetchAdminsData,
  [types.admins.actions.FETCH_ROLES]: fetchRolesData,
  [types.admins.actions.RESET_ADMIN_PASSWORD]: resetAdminPassword,
  [types.admins.actions.CREATE_ADMIN]: createAdminData,
  [types.admins.actions.DELETE_ADMIN]: deleteAdminData,
  [types.admins.actions.UPDATE_ADMIN]: updateAdminData
};

export default {
  state,
  mutations,
  actions
};
