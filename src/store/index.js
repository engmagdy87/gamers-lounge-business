import Vue from 'vue';
import Vuex from 'vuex';

import userModule from './modules/user';
import homeModule from './modules/home';
import storyModule from './modules/story';
import summitModule from './modules/summit';
import eventModule from './modules/event';
import sponsorModule from './modules/sponsor';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user: userModule,
        home: homeModule,
        story: storyModule,
        summits: summitModule,
        events: eventModule,
        sponsors: sponsorModule
    }
});
