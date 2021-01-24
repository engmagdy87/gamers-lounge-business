import * as APIs from '../../helpers/APIsHelper';
import types from '../types';

const state = {
    sponsors: [],
    isSponsorsFetched: false,
}

const mutations = {
    [types.sponsors.mutations.SET_SPONSORS]: (currentState, sponsors) => {
        currentState.sponsors = sponsors;
    },
    [types.sponsors.mutations.SET_IS_SPONSORS_FETCHED]: (currentState, flag) => {
        currentState.isSponsorsFetched = flag;
    },
    [types.sponsors.mutations.REMOVE_DELETED_SPONSOR]: (currentState, index) => {
        currentState.sponsors.splice(index, 1);
    },
}

const showHeaderAndFooter = (commit, flag) => {
    commit(types.app.mutations.SET_SHOW_HEADER_FLAG, flag)
    commit(types.app.mutations.SET_SHOW_FOOTER_FLAG, flag)
}

const fetchSponsorsData = async ({ commit }, requestSource) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        const response = await APIs.fetchSponsors()
        commit(types.sponsors.mutations.SET_SPONSORS, response.data)
        commit(types.sponsors.mutations.SET_IS_SPONSORS_FETCHED, true)
        if (requestSource === 'website')
            showHeaderAndFooter(commit, true);
        else showHeaderAndFooter(commit, false);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        commit(types.sponsors.mutations.SET_IS_SPONSORS_FETCHED, false)
        throw error.message
    }
};

const fetchWebsiteSponsorsData = async ({ commit }, data) => {
    try {
        const response = await APIs.fetchWebsiteSponsors(data)
        commit(types.sponsors.mutations.SET_SPONSORS, response.data)
        commit(types.sponsors.mutations.SET_IS_SPONSORS_FETCHED, true)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        commit(types.sponsors.mutations.SET_IS_SPONSORS_FETCHED, false)
        throw error.message
    }
};

const createSponsorData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.createSponsor(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const deleteSponsorData = async ({ commit }, payload) => {
    const { sponsorId, locationInDataArray } = payload;
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.deleteSponsor(sponsorId)
        commit(types.sponsors.mutations.REMOVE_DELETED_SPONSOR, locationInDataArray);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const updateSponsorData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.updateSponsor(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};


const actions = {
    [types.sponsors.actions.FETCH_SPONSORS]: fetchSponsorsData,
    [types.sponsors.actions.FETCH_WEBSITE_SPONSORS]: fetchWebsiteSponsorsData,
    [types.sponsors.actions.CREATE_SPONSOR]: createSponsorData,
    [types.sponsors.actions.DELETE_SPONSOR]: deleteSponsorData,
    [types.sponsors.actions.UPDATE_SPONSOR]: updateSponsorData,
};

export default {
    state,
    mutations,
    actions
};
