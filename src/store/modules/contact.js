import { sendMessage } from '../../website/helpers/APIsHelper';
import types from '../types';

const state = {
    isMessageSent: false
};

const mutations = {
    [types.contact.mutations.SET_IS_MESSAGE_SENT]: (currentState, payload) => {
        currentState.isMessageSent = payload;
    },
};

const sendUserMessage = async ({ commit }, payload) => {
    commit(types.home.mutations.SET_SPINNER_FLAG, true);
    const response = await sendMessage(payload).then(() => {
        commit(types.contact.mutations.SET_IS_MESSAGE_SENT, true);

        commit(types.home.mutations.SET_SPINNER_FLAG, false);
        return true
    }).catch(() => false);
    return response
};

const actions = {
    [types.contact.actions.SEND_MESSAGE]: sendUserMessage
};

export default {
    state,
    mutations,
    actions
};
