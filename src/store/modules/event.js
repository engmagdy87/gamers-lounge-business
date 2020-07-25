import { getEvents, getEventsTypes, getMainEvents, getSubEvents, getEventCoverTypes, getEvent } from '../../website/helpers/APIsHelper';
import types from '../types';

const state = {
    eventsData: [],
    eventsTypes: [],
    mainEventsData: [],
    subEventsData: [],
    eventCoverTypes: [],
    eventDetails: {},
    isEventsFetched: false,
    isEventTypeFetched: false,
    isMainEventsFetched: false,
    isSubEventsFetched: false,
    isEventCoverTypesFetched: false,
    isEventDetailsFetched: false,
};

const mutations = {
    [types.events.mutations.SET_EVENTS_DATA]: (currentState, payload) => {
        currentState.eventsData = payload;
    },
    [types.events.mutations.SET_EVENT_TYPE_DATA]: (currentState, payload) => {
        currentState.eventsTypes = payload;
    },
    [types.events.mutations.SET_MAIN_EVENTS_DATA]: (currentState, payload) => {
        currentState.mainEventsData = payload;
    },
    [types.events.mutations.SET_SUB_EVENTS_DATA]: (currentState, payload) => {
        currentState.subEventsData = payload;
    },
    [types.events.mutations.SET_EVENT_COVER_TYPES]: (currentState, payload) => {
        currentState.eventCoverTypes = payload;
    },
    [types.events.mutations.SET_EVENT_DETAILS]: (currentState, payload) => {
        currentState.eventDetails = payload;
    },
    [types.events.mutations.SET_IS_EVENTS_FETCHED]: (currentState, payload) => {
        currentState.isEventsFetched = payload;
    },
    [types.events.mutations.SET_IS_EVENT_TYPE_FETCHED]: (currentState, payload) => {
        currentState.isEventTypeFetched = payload;
    },
    [types.events.mutations.SET_IS_MAIN_EVENTS_FETCHED]: (currentState, payload) => {
        currentState.isMainEventsFetched = payload;
    },
    [types.events.mutations.SET_IS_SUB_EVENTS_FETCHED]: (currentState, payload) => {
        currentState.isSubEventsFetched = payload;
    },
    [types.events.mutations.SET_IS_EVENT_COVER_TYPES_FETCHED]: (currentState, payload) => {
        currentState.isEventCoverTypesFetched = payload;
    },
    [types.events.mutations.SET_IS_EVENT_DETAILS_FETCHED]: (currentState, payload) => {
        currentState.isEventDetailsFetched = payload;
    },
};

const getEventsData = async ({ commit }) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getEvents().then((response) => {
        commit(types.events.mutations.SET_EVENTS_DATA, response.data.events);
        commit(types.events.mutations.SET_IS_EVENTS_FETCHED, true);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const getEventTypes = async ({ commit }) => {
    const response = await getEventsTypes().then((response) => {
        commit(types.events.mutations.SET_EVENT_TYPE_DATA, response.data.types);
        commit(types.events.mutations.SET_IS_EVENT_TYPE_FETCHED, true);
        return true
    }).catch(() => false);
    return response
};

const getMainEventsData = async ({ commit }) => {
    const response = await getMainEvents().then((response) => {
        commit(types.events.mutations.SET_MAIN_EVENTS_DATA, response.data.events);
        commit(types.events.mutations.SET_IS_MAIN_EVENTS_FETCHED, true);
        return true
    }).catch(() => false);
    return response
};

const getSubEventsData = async ({ commit }) => {
    const response = await getSubEvents().then((response) => {
        commit(types.events.mutations.SET_SUB_EVENTS_DATA, response.data.events);
        commit(types.events.mutations.SET_IS_SUB_EVENTS_FETCHED, true);
        return true
    }).catch(() => false);
    return response
};

const getEventCoverTypesData = async ({ commit }) => {
    const response = await getEventCoverTypes().then((response) => {
        console.log('====================================');
        console.log(response);
        console.log('====================================');
        // commit(types.events.mutations.SET_EVENT_COVER_TYPES, response.data.events);
        // commit(types.events.mutations.SET_IS_EVENT_COVER_TYPES_FETCHED, true);
        return true
    }).catch(() => false);
    return response
};

const getEventDetails = async ({ commit }, eventId) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getEvent(eventId).then((response) => {
        commit(types.events.mutations.SET_EVENT_DETAILS, response.data.event);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        commit(types.events.mutations.SET_IS_EVENT_DETAILS_FETCHED, true);
        return true
    }).catch(() => false);
    return response
};

const actions = {
    [types.events.actions.FETCH_EVENTS]: getEventsData,
    [types.events.actions.FETCH_EVENT_TYPE]: getEventTypes,
    [types.events.actions.FETCH_MAIN_EVENTS]: getMainEventsData,
    [types.events.actions.FETCH_SUB_EVENTS]: getSubEventsData,
    [types.events.actions.FETCH_EVENT_COVER_TYPES]: getEventCoverTypesData,
    [types.events.actions.FETCH_EVENT_DETAILS]: getEventDetails,
};

export default {
    state,
    mutations,
    actions
};
