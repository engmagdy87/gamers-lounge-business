import {
    getTestimonialsForDashboard,
    getTestimonial,
    removeTestimonial,
    removeTestimonialImage,
} from '../../website/helpers/APIsHelper';
import types from '../types';

const state = {
    dashboardTestimonialsData: [],
    isDashboardTestimonialsDataFetched: false,
    TestimonialsData: {},
    isTestimonialsDataFetched: false,
};

const mutations = {
    [types.testimonials.mutations.SET_DASHBOARD_TESTIMONIALS_DATA]: (currentState, payload) => {
        currentState.dashboardTestimonialsData = payload;
    },
    [types.testimonials.mutations.SET_IS_DASHBOARD_TESTIMONIALS_DATA_FETCHED]: (currentState, payload) => {
        currentState.isDashboardTestimonialsDataFetched = payload;
    },
    [types.testimonials.mutations.SET_TESTIMONIALS_DATA]: (currentState, payload) => {
        currentState.TestimonialsData = payload;
    },
    [types.testimonials.mutations.SET_IS_TESTIMONIALS_DATA_FETCHED]: (currentState, payload) => {
        currentState.isTestimonialsDataFetched = payload;
    },
    [types.testimonials.mutations.REMOVE_DELETED_TESTIMONIAL]: (currentState, index) => {
        currentState.dashboardTestimonialsData.splice(index, 1);
    },
};

const getTestimonialsData = async ({ commit },) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getTestimonial().then((response) => {
        commit(types.testimonials.mutations.SET_TESTIMONIALS_DATA, response.data.testimonial[0]);
        commit(types.testimonials.mutations.SET_IS_TESTIMONIALS_DATA_FETCHED, true);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const getTestimonialsDataForDashboard = async ({ commit },) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getTestimonialsForDashboard().then((response) => {
        commit(types.testimonials.mutations.SET_DASHBOARD_TESTIMONIALS_DATA, response.data.sponsors);
        commit(types.testimonials.mutations.SET_IS_DASHBOARD_TESTIMONIALS_DATA_FETCHED, true);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const deleteTestimonial = async ({ commit }, payload) => {
    const { testimonialId, locationInDataArray } = payload
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await removeTestimonial(testimonialId).then(() => {
        commit(types.testimonials.mutations.REMOVE_DELETED_TESTIMONIAL, locationInDataArray);
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const deleteTestimonialImage = async ({ commit }, payload) => {
    const { testimonialId, imageId } = payload
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await removeTestimonialImage(testimonialId, imageId).then(() => {
        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const actions = {
    [types.testimonials.actions.FETCH_TESTIMONIALS]: getTestimonialsData,
    [types.testimonials.actions.FETCH_DASHBOARD_TESTIMONIALS]: getTestimonialsDataForDashboard,
    [types.testimonials.actions.DELETE_TESTIMONIAL]: deleteTestimonial,
    [types.testimonials.actions.DELETE_TESTIMONIAL_IMAGE]: deleteTestimonialImage,
};

export default {
    state,
    mutations,
    actions
};
