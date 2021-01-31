import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import login from './modules/login';
import jobs from './modules/jobs';
import departments from './modules/departments';
import services from './modules/services';
import works from './modules/works';
import sponsors from './modules/sponsors';
import about from './modules/about';
import contact from './modules/contact';

Vue.use(Vuex);

export default new Vuex.Store({
        modules: {
                app,
                login,
                jobs,
                departments,
                services,
                works,
                sponsors,
                about,
                contact
        }
});
