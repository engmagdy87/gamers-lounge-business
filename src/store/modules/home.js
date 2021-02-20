import * as APIs from "../../helpers/APIsHelper";
import types from "../types";

const state = {
  heroSlider: [],
  isHeroSliderFetched: false
};

const mutations = {
  [types.home.mutations.SET_HERO_SLIDES]: (currentState, payload) => {
    currentState.heroSlider = payload;
  },
  [types.home.mutations.SET_IS_HERO_SLIDES_FETCHED]: (currentState, flag) => {
    currentState.isHeroSliderFetched = flag;
  },
  [types.home.mutations.REMOVE_DELETED_HERO_SLIDER]: (currentState, index) => {
    currentState.heroSlider.splice(index, 1);
  }
};

const showHeaderAndFooter = (commit, flag) => {
  commit(types.app.mutations.SET_SHOW_HEADER_FLAG, flag);
  commit(types.app.mutations.SET_SHOW_FOOTER_FLAG, flag);
};

const fetchHomeHeroSlidesData = async ({ commit }, payload) => {
  const { requestSource, showSpinner, data } = payload;
  if (showSpinner) commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    const response = await APIs.fetchHomeHeroSlides(data);
    commit(types.home.mutations.SET_HERO_SLIDES, response.data);
    commit(types.home.mutations.SET_IS_HERO_SLIDES_FETCHED, true);
    if (requestSource === "website")
      commit(types.app.mutations.SET_SHOW_HEADER_FLAG, true);
    else showHeaderAndFooter(commit, false);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    commit(types.home.mutations.SET_IS_HERO_SLIDES_FETCHED, false);
    throw error;
  }
};

const createHomeHeroSliderData = async ({ commit }, data) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    const response = await APIs.createHomeHeroSlider(data);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    return response;
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const updateHomeHeroSliderData = async ({ commit }, data) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    const response = await APIs.updateHomeHeroSlider(data);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    return response;
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const deleteHomeHeroSliderData = async ({ commit }, payload) => {
  const { slideId, locationInDataArray } = payload;
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    await APIs.deleteHomeHeroSlider(slideId);
    commit(
      types.home.mutations.REMOVE_DELETED_HERO_SLIDER,
      locationInDataArray
    );
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const actions = {
  [types.home.actions.FETCH_HERO_SLIDES]: fetchHomeHeroSlidesData,
  [types.home.actions.CREATE_HERO_SLIDER]: createHomeHeroSliderData,
  [types.home.actions.UPDATE_HERO_SLIDER]: updateHomeHeroSliderData,
  [types.home.actions.DELETE_HERO_SLIDER]: deleteHomeHeroSliderData
};

export default {
  state,
  mutations,
  actions
};
