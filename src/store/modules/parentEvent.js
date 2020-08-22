import {
    getEventParentForDashboard,
    getEventParent,
    removeEventParent,
} from '../../website/helpers/APIsHelper';
import types from '../types';

const state = {
    eventParentData: [],
    isEventParentsDataFetched: false,
    dashboardEventParentsData: [],
    isDashboardEventParentsDataFetched: false,
};

const mutations = {
    [types.eventParent.mutations.SET_EVENT_PARENTS_DATA]: (currentState, payload) => {
        currentState.eventParentData = payload;
    },
    [types.eventParent.mutations.SET_IS_EVENT_PARENTS_DATA_FETCHED]: (currentState, payload) => {
        currentState.isEventParentsDataFetched = payload;
    },
    [types.eventParent.mutations.SET_DASHBOARD_EVENT_PARENTS_DATA]: (currentState, payload) => {
        currentState.dashboardEventParentsData = payload;
    },
    [types.eventParent.mutations.SET_IS_DASHBOARD_EVENT_PARENTS_DATA_FETCHED]: (currentState, payload) => {
        currentState.isDashboardEventParentsDataFetched = payload;
    },
    [types.eventParent.mutations.REMOVE_DELETED_EVENT_PARENT]: (currentState, index) => {
        currentState.dashboardEventParentsData.splice(index, 1);
    },
};

const getEventParentsData = async ({ commit },) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getEventParent().then((response) => {
        commit(types.eventParent.mutations.SET_EVENT_PARENTS_DATA, response.data.parents);
        commit(types.eventParent.mutations.SET_IS_EVENT_PARENTS_DATA_FETCHED, true);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const getEventParentsDataForDashboard = async ({ commit },) => {
    const response = await getEventParentForDashboard().then((response) => {
        commit(types.eventParent.mutations.SET_DASHBOARD_EVENT_PARENTS_DATA, response.data.parents);
        commit(types.eventParent.mutations.SET_IS_DASHBOARD_EVENT_PARENTS_DATA_FETCHED, true);
        return true
    }).catch(() => false);
    return response
};

const deleteEventParent = async ({ commit }, payload) => {
    const { eventParentId, locationInDataArray } = payload
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await removeEventParent(eventParentId).then(() => {
        commit(types.eventParent.mutations.REMOVE_DELETED_EVENT_PARENT, locationInDataArray);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const actions = {
    [types.eventParent.actions.FETCH_EVENT_PARENTS]: getEventParentsData,
    [types.eventParent.actions.FETCH_EVENT_PARENTS_FOR_DASHBOARD]: getEventParentsDataForDashboard,
    [types.eventParent.actions.DELETE_EVENT_PARENT]: deleteEventParent,
};

export default {
    state,
    mutations,
    actions
};
