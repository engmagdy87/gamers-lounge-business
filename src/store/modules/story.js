import { getStory } from '../../website/helpers/APIsHelper';
import types from '../types';

const state = {
    storyData: {},
    isStoryFetched: false
};

const mutations = {
    [types.story.mutations.SET_STORY_DATA]: (currentState, payload) => {
        currentState.storyData = payload;
    },
    [types.story.mutations.SET_IS_STORY_FETCHED]: (currentState, payload) => {
        currentState.isStoryFetched = payload;
    },
};

const getSummitStory = async ({ commit },) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await getStory().then((response) => {
        commit(types.story.mutations.SET_STORY_DATA, response.data.summit);

        commit(types.story.mutations.SET_IS_STORY_FETCHED, true);

        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const actions = {
    [types.story.actions.FETCH_STORY]: getSummitStory
};

export default {
    state,
    mutations,
    actions
};
