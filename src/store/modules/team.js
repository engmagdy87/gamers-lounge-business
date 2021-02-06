import * as APIs from "../../helpers/APIsHelper";
import types from "../types";

const state = {
  team: {},
  isTeamFetched: false
};

const mutations = {
  [types.team.mutations.SET_TEAM]: (currentState, data) => {
    currentState.team = data || {};
  },
  [types.team.mutations.SET_IS_TEAM_FETCHED]: (currentState, flag) => {
    currentState.isTeamFetched = flag;
  },
  [types.team.mutations.REMOVE_DELETED_TEAM_MEMBER]: (currentState, index) => {
    currentState.team.splice(index, 1);
  }
};

const showHeaderAndFooter = (commit, flag) => {
  commit(types.app.mutations.SET_SHOW_HEADER_FLAG, flag);
  commit(types.app.mutations.SET_SHOW_FOOTER_FLAG, flag);
};

const fetchTeamData = async ({ commit }, payload) => {
  const { requestSource, showSpinner, isEnabled } = payload;
  if (showSpinner) commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    const response = await APIs.fetchTeam(isEnabled);
    commit(types.team.mutations.SET_TEAM, response);
    commit(types.team.mutations.SET_IS_TEAM_FETCHED, true);
    if (requestSource === "website") {
      commit(types.app.mutations.SET_SHOW_HEADER_FLAG, true);
      commit(types.app.mutations.SET_SHOW_FOOTER_FLAG, true);
    } else showHeaderAndFooter(commit, false);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    commit(types.team.mutations.SET_IS_TEAM_FETCHED, false);
    throw error;
  }
};

const createTeamData = async ({ commit }, data) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    const response = await APIs.createTeamMember(data);
    commit(types.team.mutations.SET_TEAM, response);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    return response;
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const updateTeamData = async ({ commit }, data) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    const response = await APIs.updateTeamMember(data);
    commit(types.team.mutations.SET_TEAM, response);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    return response;
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const deleteTeamData = async ({ commit }, payload) => {
  const { teamMemberId, locationInDataArray } = payload;
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    await APIs.deleteTeamMember(teamMemberId);
    commit(
      types.team.mutations.REMOVE_DELETED_TEAM_MEMBER,
      locationInDataArray
    );
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const actions = {
  [types.team.actions.FETCH_TEAM]: fetchTeamData,
  [types.team.actions.CREATE_TEAM_MEMBER]: createTeamData,
  [types.team.actions.UPDATE_TEAM_MEMBER]: updateTeamData,
  [types.team.actions.DELETE_TEAM_MEMBER]: deleteTeamData
};

export default {
  state,
  mutations,
  actions
};
