import Vue from 'vue';
import Vuex from 'vuex';

import userModule from './modules/user';
import homeModule from './modules/home';
import storyModule from './modules/story';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user: userModule,
        home: homeModule,
        story: storyModule
    }
});
