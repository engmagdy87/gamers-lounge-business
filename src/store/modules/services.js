import * as APIs from '../../helpers/APIsHelper';
import types from '../types';

const state = {
    services: [],
    isServicesFetched: false,
    serviceSections: {},
    isServiceSectionsFetched: false,
}

const mutations = {
    [types.services.mutations.SET_SERVICES]: (currentState, services) => {
        currentState.services = services;
    },
    [types.services.mutations.SET_IS_SERVICES_FETCHED]: (currentState, flag) => {
        currentState.isServicesFetched = flag;
    },
    [types.services.mutations.SET_SERVICE_SECTIONS]: (currentState, services) => {
        currentState.serviceSections = services;
    },
    [types.services.mutations.SET_IS_SERVICE_SECTIONS_FETCHED]: (currentState, flag) => {
        currentState.isServiceSectionsFetched = flag;
    },
    [types.services.mutations.REMOVE_DELETED_SERVICE]: (currentState, index) => {
        currentState.services.splice(index, 1);
    },
    [types.services.mutations.REMOVE_DELETED_SERVICE_SECTION]: (currentState, index) => {
        currentState.serviceSections.sections.data.splice(index, 1);
    },
}

const showHeaderAndFooter = (commit, flag) => {
    commit(types.app.mutations.SET_SHOW_HEADER_FLAG, flag)
    commit(types.app.mutations.SET_SHOW_FOOTER_FLAG, flag)
}

const fetchServicesData = async ({ commit }, requestSource) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        const response = await APIs.fetchServices()
        commit(types.services.mutations.SET_SERVICES, response.data)
        commit(types.services.mutations.SET_IS_SERVICES_FETCHED, true)
        if (requestSource === 'website')
            showHeaderAndFooter(commit, true);
        else showHeaderAndFooter(commit, false);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        commit(types.services.mutations.SET_IS_SERVICES_FETCHED, false)
        throw error.message
    }
};

const fetchServiceSectionData = async ({ commit }, payload) => {
    const { serviceId, requestSource } = payload;
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        const response = await APIs.fetchServiceSections(serviceId)
        commit(types.services.mutations.SET_SERVICE_SECTIONS, response)
        commit(types.services.mutations.SET_IS_SERVICE_SECTIONS_FETCHED, true)
        if (requestSource === 'website')
            showHeaderAndFooter(commit, true);
        else showHeaderAndFooter(commit, false);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        commit(types.services.mutations.SET_IS_SERVICE_SECTIONS_FETCHED, false)
        throw error.message
    }
};

const createServiceData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.createService(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const createServiceSectionData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.createServiceSection(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const deleteServiceData = async ({ commit }, payload) => {
    const { serviceId, locationInDataArray } = payload;
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.deleteService(serviceId)
        commit(types.services.mutations.REMOVE_DELETED_SERVICE, locationInDataArray);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const deleteServiceSectionData = async ({ commit }, payload) => {
    const { serviceSectionId, locationInDataArray } = payload;
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.deleteServiceSection(serviceSectionId)
        commit(types.services.mutations.REMOVE_DELETED_SERVICE_SECTION, locationInDataArray);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const updateServiceData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.updateService(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const updateServiceSectionData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.updateServiceSection(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const actions = {
    [types.services.actions.FETCH_SERVICES]: fetchServicesData,
    [types.services.actions.CREATE_SERVICE]: createServiceData,
    [types.services.actions.DELETE_SERVICE]: deleteServiceData,
    [types.services.actions.UPDATE_SERVICE]: updateServiceData,
    [types.services.actions.FETCH_SERVICE_SECTION]: fetchServiceSectionData,
    [types.services.actions.CREATE_SERVICE_SECTION]: createServiceSectionData,
    [types.services.actions.DELETE_SERVICE_SECTION]: deleteServiceSectionData,
    [types.services.actions.UPDATE_SERVICE_SECTION]: updateServiceSectionData,
};

export default {
    state,
    mutations,
    actions
};
