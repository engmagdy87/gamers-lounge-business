import types from '../types';
import { loadUserPersona, setUserPersona, getProfile, updateProfile, sendMail, resetPassword, resendVerificationEmail } from '../../website/helpers/APIsHelper';
import { setUserCookie } from '../../website/helpers/CookieHelper';

const state = {
    userPersona: {},
    userProfile: {},
    isUserProfileFetched: false,
    isProfileUpdated: false,
    isForgotMailSent: false,
    isResetPasswordSent: false,
    isVerificationEmailSent: false,
    userVerification: { email: '', status: false },
};

const getters = {
    [types.user.getters.IS_USER_LOGGED_IN]: (currentState) => currentState.userVerification.status,
    [types.user.getters.IS_USER_ADMIN]: (currentState) => currentState.userPersona.is_admin,
};

const mutations = {
    [types.user.mutations.SET_USER_PERSONA]: (currentState, payload) => {
        currentState.userPersona = payload;
    },
    [types.user.mutations.SET_USER_PROFILE]: (currentState, payload) => {
        currentState.userProfile = payload;
    },
    [types.user.mutations.SET_IS_USER_PROFILE_FETCHED]: (currentState, payload) => {
        currentState.isUserProfileFetched = payload;
    },
    [types.user.mutations.SET_IS_FORGOT_MAIL_SENT]: (currentState, payload) => {
        currentState.isForgotMailSent = payload;
    },
    [types.user.mutations.SET_IS_RESET_PASSWORD_SENT]: (currentState, payload) => {
        currentState.isResetPasswordSent = payload;
    },
    [types.user.mutations.SET_IS_USER_PROFILE_UPDATED]: (currentState, payload) => {
        currentState.isProfileUpdated = payload;
    },
    [types.user.mutations.SET_IS_VERIFICATION_MAIL_SENT]: (currentState, payload) => {
        currentState.isVerificationEmailSent = payload;
    },
    [types.user.mutations.SET_VERIFIED_USER_STATUS]: (currentState, payload) => {
        currentState.userVerification = payload;
    },
};

const getUserPersona = async ({ commit }, payload) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true)
    const response = await loadUserPersona(payload).then((response) => {
        commit(types.user.mutations.SET_USER_PERSONA, response.data);
        commit(types.home.mutations.SET_SPINNER_FLAG, false)
        return response.data
    }).catch((err) => {
        commit(types.home.mutations.SET_SPINNER_FLAG, false)
        throw err
    });

    return response
};

const postUserPersona = async ({ commit }, payload) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true)
    const response = await setUserPersona(payload).then((response) => {
        commit(types.user.mutations.SET_USER_PERSONA, response.data);
        setUserCookie(response.data)
        commit(types.home.mutations.SET_SPINNER_FLAG, false)
    }).catch((err) => {
        commit(types.home.mutations.SET_SPINNER_FLAG, false)
        throw err
    });
    return response
};

const getUserProfile = async ({ commit }) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true)
    const response = await getProfile().then((response) => {
        commit(types.user.mutations.SET_USER_PROFILE, response.data.user);
        commit(types.user.mutations.SET_IS_USER_PROFILE_FETCHED, true);
        commit(types.home.mutations.SET_SPINNER_FLAG, false)
    }).catch(() => {
        commit(types.home.mutations.SET_SPINNER_FLAG, false)
    });

    return response
};

const updateUserProfile = async ({ commit }, payload) => {
    const response = await updateProfile(payload).then((response) => {
        commit(types.user.mutations.SET_IS_USER_PROFILE_UPDATED, true);
    }).catch((err) => {
        commit(types.home.mutations.SET_SPINNER_FLAG, false)
        throw err
    });
    return response
};

const sendForgotPasswordMail = async ({ commit }, payload) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true)
    const response = await sendMail(payload).then((response) => {
        commit(types.user.mutations.SET_IS_FORGOT_MAIL_SENT, true);
        commit(types.home.mutations.SET_SPINNER_FLAG, false)
    }).catch((err) => {
        commit(types.home.mutations.SET_SPINNER_FLAG, false)
        throw err
    });
    return response
};

const resendVerificationMail = async ({ commit }, payload) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true)
    const response = await resendVerificationEmail(payload).then((response) => {
        commit(types.user.mutations.SET_IS_VERIFICATION_MAIL_SENT, true);
        commit(types.home.mutations.SET_SPINNER_FLAG, false)
    }).catch((err) => {
        commit(types.home.mutations.SET_SPINNER_FLAG, false)
        throw err
    });
    return response
};

const resetUserPassword = async ({ commit }, payload) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true)
    const response = await resetPassword(payload).then(() => {
        commit(types.user.mutations.SET_IS_RESET_PASSWORD_SENT, true);
        commit(types.home.mutations.SET_SPINNER_FLAG, false)
    }).catch((err) => {
        commit(types.home.mutations.SET_SPINNER_FLAG, false)
        throw err
    });
    return response
};

const actions = {
    [types.user.actions.FETCH_USER_PERSONA]: getUserPersona,
    [types.user.actions.REGISTER_USER_PERSONA]: postUserPersona,
    [types.user.actions.FETCH_USER_PROFILE]: getUserProfile,
    [types.user.actions.UPDATE_USER_PROFILE]: updateUserProfile,
    [types.user.actions.SEND_FORGOT_MAIL]: sendForgotPasswordMail,
    [types.user.actions.RESET_PASSWORD]: resetUserPassword,
    [types.user.actions.RESEND_VERIFICATION_EMAIL]: resendVerificationMail,
};

export default {
    state,
    getters,
    actions,
    mutations
};
