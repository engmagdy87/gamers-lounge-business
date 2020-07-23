const user = {
    getters: {
        IS_USER_LOGGED_IN: 'user/getters/IS_USER_LOGGED_IN',
        IS_USER_ADMIN: 'user/getters/IS_USER_ADMIN',
    },
    mutations: {
        SET_USER_PERSONA: 'user/mutations/SET_USER_PERSONA',
    },
    actions: {
        FETCH_USER_PERSONA: 'user/actions/FETCH_USER_PERSONA',
        REGISTER_USER_PERSONA: 'user/actions/REGISTER_USER_PERSONA',
    }
};

const home = {
    mutations: {
        SET_SPINNER_FLAG: 'home/mutations/SET_SPINNER_FLAG',
    }
};

const story = {
    mutations: {
        SET_STORY_DATA: 'story/mutations/SET_STORY_DATA',
    },
    actions: {
        FETCH_STORY: 'story/actions/FETCH_STORY',
    }
};

const summits = {
    mutations: {
        SET_SUMMITS_DATA: 'summits/mutations/SET_SUMMITS_DATA',
        SET_IS_SUMMITS_FETCHED: 'summits/mutations/SET_IS_SUMMITS_FETCHED',
    },
    actions: {
        FETCH_SUMMITS: 'summits/actions/FETCH_SUMMITS',
    }
};

export default {
    user,
    home,
    story,
    summits
};
