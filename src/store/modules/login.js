import { adminLogin } from '../../helpers/APIsHelper';
import { setTokenCookie } from '../../helpers/CookieHelper';
import types from '../types';

const loginToDashboard = async ({ commit }, credentials) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        const response = await adminLogin(credentials)
        setTokenCookie(response.access_token)
        window.open('/dashboard', '_self')
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const actions = {
    [types.login.actions.LOGIN_TO_DASHBOARD]: loginToDashboard,
};

export default {
    actions
};
