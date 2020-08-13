const user = {
    getters: {
        IS_USER_LOGGED_IN: 'user/getters/IS_USER_LOGGED_IN',
        IS_USER_ADMIN: 'user/getters/IS_USER_ADMIN',
    },
    mutations: {
        SET_USER_PERSONA: 'user/mutations/SET_USER_PERSONA',
        SET_USER_PROFILE: 'user/mutations/SET_USER_PROFILE',
        SET_IS_USER_PROFILE_FETCHED: 'user/mutations/SET_IS_USER_PROFILE_FETCHED',
        SET_IS_USER_PROFILE_UPDATED: 'user/mutations/SET_IS_USER_PROFILE_UPDATED',
        SET_IS_FORGOT_MAIL_SENT: 'user/mutations/SET_IS_FORGOT_MAIL_SENT',
        SET_IS_RESET_PASSWORD_SENT: 'user/mutations/SET_IS_RESET_PASSWORD_SENT',
        SET_IS_VERIFICATION_MAIL_SENT: 'user/mutations/SET_IS_VERIFICATION_MAIL_SENT',
        SET_VERIFIED_USER_STATUS: 'user/mutations/SET_VERIFIED_USER_STATUS',
    },
    actions: {
        FETCH_USER_PERSONA: 'user/actions/FETCH_USER_PERSONA',
        REGISTER_USER_PERSONA: 'user/actions/REGISTER_USER_PERSONA',
        FETCH_USER_PROFILE: 'user/actions/FETCH_USER_PROFILE',
        UPDATE_USER_PROFILE: 'user/actions/GET_USER_PROFILE',
        SEND_FORGOT_MAIL: 'user/actions/SEND_FORGOT_MAIL',
        RESET_PASSWORD: 'user/actions/RESET_PASSWORD',
        RESEND_VERIFICATION_EMAIL: 'user/actions/RESEND_VERIFICATION_EMAIL',
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
        SET_IS_STORY_FETCHED: 'story/mutations/SET_IS_STORY_FETCHED',
    },
    actions: {
        FETCH_STORY: 'story/actions/FETCH_STORY',
    }
};

const contact = {
    mutations: {
        SET_IS_MESSAGE_SENT: 'contact/mutations/SET_IS_MESSAGE_SENT',
    },
    actions: {
        SEND_MESSAGE: 'contact/actions/SEND_MESSAGE',
    }
};

const sponsors = {
    mutations: {
        SET_SPONSORS_DATA: 'sponsors/mutations/SET_SPONSORS_DATA',
        SET_IS_SPONSORS_DATA_FETCHED: 'sponsors/mutations/SET_IS_SPONSORS_DATA_FETCHED',
        SET_DASHBOARD_SPONSORS_DATA: 'sponsors/mutations/SET_DASHBOARD_SPONSORS_DATA',
        SET_IS_DASHBOARD_SPONSORS_DATA_FETCHED: 'sponsors/mutations/SET_IS_DASHBOARD_SPONSORS_DATA_FETCHED',
        SET_FOOTER_SPONSORS_DATA: 'sponsors/mutations/SET_FOOTER_SPONSORS_DATA',
        SET_IS_FOOTER_SPONSORS_DATA_FETCHED: 'sponsors/mutations/SET_IS_FOOTER_SPONSORS_DATA_FETCHED',
        REMOVE_DELETED_SPONSOR: 'sponsors/mutations/REMOVE_DELETED_SPONSOR',
    },
    actions: {
        FETCH_SPONSORS: 'sponsors/actions/FETCH_SPONSORS',
        FETCH_MAIN_SPONSORS: 'sponsors/actions/FETCH_MAIN_SPONSORS',
        FETCH_SUB_SPONSORS: 'sponsors/actions/FETCH_SUB_SPONSORS',
        FETCH_FOOTER_SPONSORS: 'sponsors/actions/FETCH_FOOTER_SPONSORS',
        FETCH_SPONSORS_FOR_DASHBOARD: 'sponsors/actions/FETCH_SPONSORS_FOR_DASHBOARD',
        DELETE_SPONSOR: 'sponsors/actions/DELETE_SPONSOR',
        EDIT_SPONSOR: 'sponsors/actions/EDIT_SPONSOR',
        DELETE_SPONSOR_IMAGE: 'sponsors/actions/DELETE_SPONSOR_IMAGE',
    }
};

const games = {
    mutations: {
        SET_GAMES_DATA: 'games/mutations/SET_GAMES_DATA',
        SET_GAMES_CARDS_VIEW: 'games/mutations/SET_GAMES_CARDS_VIEW',
        SET_IS_GAMES_DATA_FETCHED: 'games/mutations/SET_IS_GAMES_DATA_FETCHED',
        SET_IS_GAMES_CARDS_VIEW_FETCHED: 'games/mutations/SET_IS_GAMES_CARDS_VIEW_FETCHED',
        SET_DASHBOARD_GAMES_DATA: 'games/mutations/SET_DASHBOARD_GAMES_DATA',
        SET_IS_DASHBOARD_GAMES_DATA_FETCHED: 'games/mutations/SET_IS_DASHBOARD_GAMES_DATA_FETCHED',
        SET_GAME_DETAILS_DATA: 'games/mutations/SET_GAME_DETAILS_DATA',
        SET_IS_GAME_DETAILS_DATA_FETCHED: 'games/mutations/SET_IS_GAME_DETAILS_DATA_FETCHED',
        REMOVE_DELETED_GAME: 'games/mutations/REMOVE_DELETED_GAME',
    },
    actions: {
        FETCH_GAMES: 'games/actions/FETCH_GAMES',
        FETCH_GAMES_FOR_DASHBOARD: 'games/actions/FETCH_GAMES_FOR_DASHBOARD',
        FETCH_GAMES_CARD_VIEW: 'games/actions/FETCH_GAMES_CARD_VIEW',
        FETCH_GAME_DETAILS: 'games/actions/FETCH_GAME_DETAILS',
        DELETE_GAME: 'games/actions/DELETE_GAME',
        DELETE_GAME_IMAGE: 'games/actions/DELETE_GAME_IMAGE',
        EDIT_GAME: 'games/actions/EDIT_GAME',
    }
};

const platforms = {
    mutations: {
        SET_PLATFORMS_DATA: 'platforms/mutations/SET_PLATFORMS_DATA',
        SET_IS_PLATFORMS_DATA_FETCHED: 'platforms/mutations/SET_IS_PLATFORMS_DATA_FETCHED',
        SET_DASHBOARD_PLATFORMS_DATA: 'platforms/mutations/SET_DASHBOARD_PLATFORMS_DATA',
        SET_IS_DASHBOARD_PLATFORMS_DATA_FETCHED: 'platforms/mutations/SET_IS_DASHBOARD_PLATFORMS_DATA_FETCHED',
        REMOVE_DELETED_PLATFORM: 'platforms/mutations/REMOVE_DELETED_PLATFORM',
    },
    actions: {
        FETCH_PLATFORMS: 'platforms/actions/FETCH_PLATFORMS',
        FETCH_PLATFORMS_FOR_DASHBOARD: 'platforms/actions/FETCH_PLATFORMS_FOR_DASHBOARD',
        DELETE_PLATFORM: 'platforms/actions/DELETE_PLATFORM',
        EDIT_PLATFORM: 'platforms/actions/EDIT_PLATFORM',
    }
};

const regions = {
    mutations: {
        SET_REGIONS_DATA: 'regions/mutations/SET_REGIONS_DATA',
        SET_IS_REGIONS_DATA_FETCHED: 'regions/mutations/SET_IS_REGIONS_DATA_FETCHED',
        SET_DASHBOARD_REGIONS_DATA: 'regions/mutations/SET_DASHBOARD_REGIONS_DATA',
        SET_IS_DASHBOARD_REGIONS_DATA_FETCHED: 'regions/mutations/SET_IS_DASHBOARD_REGIONS_DATA_FETCHED',
        REMOVE_DELETED_REGION: 'region/mutations/REMOVE_DELETED_REGION',
    },
    actions: {
        FETCH_REGIONS: 'regions/actions/FETCH_REGIONS',
        FETCH_REGIONS_FOR_DASHBOARD: 'regions/actions/FETCH_REGIONS_FOR_DASHBOARD',
        DELETE_REGION: 'region/actions/DELETE_REGION',
        EDIT_REGION: 'region/actions/EDIT_REGION',
    }
};

const tournaments = {
    mutations: {
        SET_TOURNAMENTS_DATA: 'tournaments/mutations/SET_TOURNAMENTS_DATA',
        SET_IS_TOURNAMENTS_DATA_FETCHED: 'tournaments/mutations/SET_IS_TOURNAMENTS_DATA_FETCHED',
        SET_DASHBOARD_TOURNAMENTS_DATA: 'tournaments/mutations/SET_DASHBOARD_TOURNAMENTS_DATA',
        SET_FILTERED_TOURNAMENTS_DATA: 'tournaments/mutations/SET_FILTERED_TOURNAMENTS_DATA',
        SET_IS_DASHBOARD_TOURNAMENTS_DATA_FETCHED: 'tournaments/mutations/SET_IS_DASHBOARD_TOURNAMENTS_DATA_FETCHED',
        SET_TOURNAMENT_DETAILS_DATA: 'games/mutations/SET_TOURNAMENT_DETAILS_DATA',
        SET_IS_TOURNAMENT_DETAILS_DATA_FETCHED: 'games/mutations/SET_IS_TOURNAMENT_DETAILS_DATA_FETCHED',
        SET_IS_FILTERED_TOURNAMENT_DATA_FETCHED: 'games/mutations/SET_IS_FILTERED_TOURNAMENT_DATA_FETCHED',
        REMOVE_DELETED_TOURNAMENT: 'tournaments/mutations/REMOVE_DELETED_TOURNAMENT',
    },
    actions: {
        FETCH_TOURNAMENTS: 'tournaments/actions/FETCH_TOURNAMENTS',
        FETCH_TOURNAMENTS_FOR_DASHBOARD: 'tournaments/actions/FETCH_TOURNAMENTS_FOR_DASHBOARD',
        FETCH_TOURNAMENTS_DETAILS: 'games/actions/FETCH_TOURNAMENTS_DETAILS',
        FETCH_FILTERED_TOURNAMENTS: 'games/actions/FETCH_FILTERED_TOURNAMENTS',
        FETCH_REGISTER_LINK: 'games/actions/FETCH_REGISTER_LINK',
        DELETE_TOURNAMENT: 'tournaments/actions/DELETE_TOURNAMENT',
        DELETE_TOURNAMENT_IMAGE: 'tournaments/actions/DELETE_TOURNAMENT_IMAGE',
        DELETE_EVENT_VIDEO: 'tournaments/actions/DELETE_EVENT_VIDEO',
        EDIT_TOURNAMENT: 'tournaments/actions/EDIT_TOURNAMENT',
    }
};

const summits = {
    mutations: {
        SET_SUMMITS_DATA: 'summits/mutations/SET_SUMMITS_DATA',
        SET_SUMMITS_LIST_DATA: 'summits/mutations/SET_SUMMITS_LIST_DATA',
        SET_IS_SUMMITS_FETCHED: 'summits/mutations/SET_IS_SUMMITS_FETCHED',
        SET_IS_SUMMITS_LIST_FETCHED: 'summits/mutations/SET_IS_SUMMITS_LIST_FETCHED',
        REMOVE_DELETED_SUMMIT: 'summits/mutations/REMOVE_DELETED_SUMMIT',
        SET_COVER_HOME_EVENTS_IMAGE: 'summits/mutations/SET_COVER_HOME_EVENTS_IMAGE',
        IS_COVER_HOME_EVENTS_IMAGE_FETCHED: 'summits/mutations/IS_COVER_HOME_EVENTS_IMAGE_FETCHED',
        SET_COVER_CONTACT_US_IMAGE: 'summits/mutations/SET_COVER_CONTACT_US_IMAGE',
        IS_COVER_CONTACT_US_IMAGE_FETCHED: 'summits/mutations/IS_COVER_CONTACT_US_IMAGE_FETCHED',
    },
    actions: {
        FETCH_SUMMITS: 'summits/actions/FETCH_SUMMITS',
        FETCH_SUMMITS_LIST: 'summits/actions/FETCH_SUMMITS_LIST',
        DELETE_SUMMIT: 'summits/actions/DELETE_SUMMIT',
        DELETE_SUMMIT_IMAGE: 'summits/actions/DELETE_SUMMIT_IMAGE',
        DELETE_SUMMIT_VIDEO: 'summits/actions/DELETE_SUMMIT_VIDEO',
        EDIT_SUMMIT: 'summits/actions/EDIT_SUMMIT',
        FETCH_COVER_HOME_EVENTS_IMAGE: 'summits/actions/FETCH_COVER_HOME_EVENTS_IMAGE',
        FETCH_COVER_CONTACT_US_IMAGE: 'summits/actions/FETCH_COVER_CONTACT_US_IMAGE',
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
        SET_EVENTS_LIST: 'events/mutations/SET_EVENTS_LIST',
        REMOVE_DELETED_EVENT: 'events/mutations/REMOVE_DELETED_EVENT',
        SET_IS_EVENTS_FETCHED: 'events/mutations/SET_IS_EVENTS_FETCHED',
        SET_IS_EVENTS_LIST_FETCHED: 'events/mutations/SET_IS_EVENTS_LIST_FETCHED',
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
        FETCH_EVENT_LIST: 'events/actions/FETCH_EVENT_LIST',
        DELETE_EVENT: 'events/actions/DELETE_EVENT',
        DELETE_EVENT_IMAGE: 'events/actions/DELETE_EVENT_IMAGE',
        DELETE_EVENT_VIDEO: 'events/actions/DELETE_EVENT_VIDEO',
        EDIT_EVENT: 'events/actions/EDIT_EVENT',
    }
};

export default {
    user,
    home,
    story,
    summits,
    events,
    sponsors,
    games,
    platforms,
    regions,
    tournaments,
    contact
};
