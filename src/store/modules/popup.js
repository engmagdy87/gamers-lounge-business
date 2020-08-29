import {
    getPopupsForDashboard,
    getRandomPopup,
    removePopup,
    removePopupImage,
} from '../../website/helpers/APIsHelper';
import types from '../types';

const state = {
    dashboardPopupsData: [],
    isDashboardPopupsDataFetched: false,
    randomPopupData: {},
    isRandomPopupDataFetched: false,
};

const getters = {
    [types.popups.getters.GET_POPUP]: (currentState) => (placeName) => {
        if (currentState.randomPopupData.places === undefined) return null
        const isPlaceExists = currentState.randomPopupData.places.filter(place => place.name === placeName).length > 0
        return isPlaceExists ? currentState.randomPopupData : null;
    }
}

const mutations = {
    [types.popups.mutations.SET_DASHBOARD_POPUPS_DATA]: (currentState, payload) => {
        currentState.dashboardPopupsData = payload;
    },
    [types.popups.mutations.SET_IS_DASHBOARD_POPUPS_DATA_FETCHED]: (currentState, payload) => {
        currentState.isDashboardPopupsDataFetched = payload;
    },
    [types.popups.mutations.SET_RANDOM_POPUP_DATA]: (currentState, payload) => {
        currentState.randomPopupData = payload;
    },
    [types.popups.mutations.SET_IS_RANDOM_POPUP_DATA_FETCHED]: (currentState, payload) => {
        currentState.isRandomPopupDataFetched = payload;
    },
    [types.popups.mutations.REMOVE_DELETED_POPUP]: (currentState, index) => {
        currentState.dashboardPopupsData.splice(index, 1);
    },
};

const getRandomPopupData = async ({ commit },) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getRandomPopup().then((response) => {
        commit(types.popups.mutations.SET_RANDOM_POPUP_DATA, response.data.popup.length === 0 ? {} : response.data.popup[0]);
        commit(types.popups.mutations.SET_IS_RANDOM_POPUP_DATA_FETCHED, true);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const getPopupsDataForDashboard = async ({ commit },) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getPopupsForDashboard().then((response) => {
        commit(types.popups.mutations.SET_DASHBOARD_POPUPS_DATA, response.data.popups);
        commit(types.popups.mutations.SET_IS_DASHBOARD_POPUPS_DATA_FETCHED, true);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const deletePopup = async ({ commit }, payload) => {
    const { popupId, locationInDataArray } = payload
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await removePopup(popupId).then(() => {
        commit(types.popups.mutations.REMOVE_DELETED_POPUP, locationInDataArray);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const deletePopupImage = async ({ commit }, payload) => {
    const { popupId, imageId } = payload
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await removePopupImage(popupId, imageId).then(() => {
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const actions = {
    [types.popups.actions.FETCH_RANDOM_POPUPS]: getRandomPopupData,
    [types.popups.actions.FETCH_DASHBOARD_POPUPS]: getPopupsDataForDashboard,
    [types.popups.actions.DELETE_POPUP]: deletePopup,
    [types.popups.actions.DELETE_POPUP_IMAGE]: deletePopupImage,
};

export default {
    state,
    getters,
    mutations,
    actions
};
