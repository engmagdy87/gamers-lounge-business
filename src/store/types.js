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

const sponsors = {
    mutations: {
        SET_SPONSORS_DATA: 'sponsors/mutations/SET_SPONSORS_DATA',
        SET_IS_SPONSORS_DATA_FETCHED: 'sponsors/mutations/SET_IS_SPONSORS_DATA_FETCHED',
        SET_DASHBOARD_SPONSORS_DATA: 'sponsors/mutations/SET_DASHBOARD_SPONSORS_DATA',
        SET_IS_DASHBOARD_SPONSORS_DATA_FETCHED: 'sponsors/mutations/SET_IS_DASHBOARD_SPONSORS_DATA_FETCHED',
    },
    actions: {
        FETCH_SPONSORS: 'sponsors/actions/FETCH_SPONSORS',
        FETCH_MAIN_SPONSORS: 'sponsors/actions/FETCH_MAIN_SPONSORS',
        FETCH_SUB_SPONSORS: 'sponsors/actions/FETCH_SUB_SPONSORS',
        FETCH_SPONSORS_FOR_DASHBOARD: 'sponsors/actions/FETCH_SPONSORS_FOR_DASHBOARD',
    }
};

const summits = {
    mutations: {
        SET_SUMMITS_DATA: 'summits/mutations/SET_SUMMITS_DATA',
        SET_SUMMITS_LIST_DATA: 'summits/mutations/SET_SUMMITS_LIST_DATA',
        SET_IS_SUMMITS_FETCHED: 'summits/mutations/SET_IS_SUMMITS_FETCHED',
        SET_IS_SUMMITS_LIST_FETCHED: 'summits/mutations/SET_IS_SUMMITS_LIST_FETCHED',
    },
    actions: {
        FETCH_SUMMITS: 'summits/actions/FETCH_SUMMITS',
        FETCH_SUMMITS_LIST: 'summits/actions/FETCH_SUMMITS_LIST',
    }
};

const events = {
    mutations: {
        SET_EVENTS_DATA: 'events/mutations/SET_EVENTS_DATA',
        SET_EVENT_TYPE_DATA: 'events/mutations/SET_EVENT_TYPE_DATA',
        SET_MAIN_EVENTS_DATA: 'events/mutations/SET_MAIN_EVENTS_DATA',
        SET_SUB_EVENTS_DATA: 'events/mutations/SET_SUB_EVENTS_DATA',
        SET_EVENT_COVER_TYPES: 'events/mutations/SET_EVENT_COVER_TYPES',
        SET_EVENT_DETAILS: 'events/mutations/SET_EVENT_DETAILS',
        SET_IS_EVENTS_FETCHED: 'events/mutations/SET_IS_EVENTS_FETCHED',
        SET_IS_EVENT_TYPE_FETCHED: 'events/mutations/SET_IS_EVENT_TYPE_FETCHED',
        SET_IS_MAIN_EVENTS_FETCHED: 'events/mutations/SET_IS_MAIN_EVENTS_FETCHED',
        SET_IS_SUB_EVENTS_FETCHED: 'events/mutations/SET_IS_SUB_EVENTS_FETCHED',
        SET_IS_EVENT_COVER_TYPES_FETCHED: 'events/mutations/SET_IS_EVENT_COVER_TYPES_FETCHED',
        SET_IS_EVENT_DETAILS_FETCHED: 'events/mutations/SET_IS_EVENT_DETAILS_FETCHED',
    },
    actions: {
        FETCH_EVENTS: 'events/actions/FETCH_EVENTS',
        FETCH_EVENT_TYPE: 'events/actions/FETCH_EVENT_TYPE',
        FETCH_MAIN_EVENTS: 'events/actions/FETCH_MAIN_EVENTS',
        FETCH_SUB_EVENTS: 'events/actions/FETCH_SUB_EVENTS',
        FETCH_EVENT_COVER_TYPES: 'events/actions/FETCH_EVENT_COVER_TYPES',
        FETCH_EVENT_DETAILS: 'events/actions/FETCH_EVENT_DETAILS',
    }
};

export default {
    user,
    home,
    story,
    summits,
    events,
    sponsors
};
