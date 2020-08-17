import {
    getSponsorCategories,
    getSponsorCategoriesList,
    removeSponsorCategory
} from '../../website/helpers/APIsHelper';
import types from '../types';

const state = {
    sponsorsCategoriesData: [],
    isSponsorsCategoriesDataFetched: false,
    dashboardSponsorCategoriesData: [],
    isDashboardSponsorsCategoriesDataFetched: false,
};

const mutations = {
    [types.sponsorsCategories.mutations.SET_SPONSORS_CATEGORIES_DATA]: (currentState, payload) => {
        currentState.sponsorsCategoriesData = payload;
    },
    [types.sponsorsCategories.mutations.SET_IS_SPONSORS_CATEGORIES_DATA_FETCHED]: (currentState, payload) => {
        currentState.isSponsorsCategoriesDataFetched = payload;
    },
    [types.sponsorsCategories.mutations.SET_DASHBOARD_SPONSORS_CATEGORIES_DATA]: (currentState, payload) => {
        currentState.dashboardSponsorCategoriesData = payload;
    },
    [types.sponsorsCategories.mutations.SET_IS_DASHBOARD_SPONSORS_CATEGORIES_DATA_FETCHED]: (currentState, payload) => {
        currentState.isDashboardSponsorsCategoriesDataFetched = payload;
    },
    [types.sponsorsCategories.mutations.REMOVE_SPONSORS_CATEGORY]: (currentState, index) => {
        currentState.sponsorsCategoriesData.splice(index, 1);
    }
};

const getSponsorsCategoriesData = async ({ commit },) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getSponsorCategories().then((response) => {
        commit(types.sponsorsCategories.mutations.SET_SPONSORS_CATEGORIES_DATA, response.data.categories);
        commit(types.sponsorsCategories.mutations.SET_IS_SPONSORS_CATEGORIES_DATA_FETCHED, true);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const getSponsorsCategoriesDataForDashboard = async ({ commit },) => {
    const response = await getSponsorCategoriesList().then((response) => {
        commit(types.sponsorsCategories.mutations.SET_DASHBOARD_SPONSORS_CATEGORIES_DATA, response.data.categories);
        commit(types.sponsorsCategories.mutations.SET_IS_DASHBOARD_SPONSORS_CATEGORIES_DATA_FETCHED, true);
        return true
    }).catch(() => false);
    return response
};

const deleteSponsorsCategory = async ({ commit }, payload) => {
    const { sponsorsCategoryId, locationInDataArray } = payload
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await removeSponsorCategory(sponsorsCategoryId).then(() => {
        commit(types.sponsorsCategories.mutations.REMOVE_SPONSORS_CATEGORY, locationInDataArray);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const actions = {
    [types.sponsorsCategories.actions.FETCH_SPONSORS_CATEGORIES]: getSponsorsCategoriesData,
    [types.sponsorsCategories.actions.FETCH_SPONSORS_CATEGORIES_FOR_DASHBOARD]: getSponsorsCategoriesDataForDashboard,
    [types.sponsorsCategories.actions.DELETE_SPONSORS_CATEGORY]: deleteSponsorsCategory,
};

export default {
    state,
    mutations,
    actions
};
