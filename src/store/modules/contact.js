import * as APIs from "../../helpers/APIsHelper";
import types from "../types";

const state = {
  contact: {},
  isContactFetched: false
};

const mutations = {
  [types.contact.mutations.SET_CONTACT]: (currentState, data) => {
    currentState.contact = data || {};
  },
  [types.contact.mutations.SET_IS_CONTACT_FETCHED]: (currentState, flag) => {
    currentState.isContactFetched = flag;
  }
};

const showHeaderAndFooter = (commit, flag) => {
  commit(types.app.mutations.SET_SHOW_HEADER_FLAG, flag);
  commit(types.app.mutations.SET_SHOW_FOOTER_FLAG, flag);
};

const fetchContactData = async ({ commit }, payload) => {
  const { requestSource, showSpinner } = payload;
  if (showSpinner) commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    const response = await APIs.fetchContact();
    commit(types.contact.mutations.SET_CONTACT, response);
    commit(types.contact.mutations.SET_IS_CONTACT_FETCHED, true);
    if (requestSource === "website")
      commit(types.app.mutations.SET_SHOW_HEADER_FLAG, true);
    else showHeaderAndFooter(commit, false);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    commit(types.contact.mutations.SET_IS_CONTACT_FETCHED, false);
    throw error;
  }
};

const createContactData = async ({ commit }, data) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    const response = await APIs.createContact(data);
    commit(types.contact.mutations.SET_CONTACT, response);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    return response;
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const updateContactData = async ({ commit }, data) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    const response = await APIs.updateContact(data);
    commit(types.contact.mutations.SET_CONTACT, response);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    return response;
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const deleteContactData = async ({ commit }, id) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    await APIs.deleteContact(id);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const sendEmailData = async ({ commit }, data) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    await APIs.sendEmail(data);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const actions = {
  [types.contact.actions.FETCH_CONTACT]: fetchContactData,
  [types.contact.actions.CREATE_CONTACT]: createContactData,
  [types.contact.actions.UPDATE_CONTACT]: updateContactData,
  [types.contact.actions.DELETE_CONTACT]: deleteContactData,
  [types.contact.actions.SEND_EMAIL]: sendEmailData
};

export default {
  state,
  mutations,
  actions
};
