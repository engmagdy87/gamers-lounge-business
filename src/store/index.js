import Vue from 'vue';
import Vuex from 'vuex';

import userModule from './modules/user';
import homeModule from './modules/home';
import storyModule from './modules/story';
import summitModule from './modules/summit';
import eventModule from './modules/event';
import sponsorModule from './modules/sponsor';
import gamesModule from './modules/games';
import platformsModule from './modules/platforms';
import regionsModule from './modules/regions';
import tournamentsModule from './modules/tournaments';
import contactModule from './modules/contact';
import sponsorsCategoryModule from './modules/sponsorsCategory';
import giveawayModule from './modules/giveaway';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user: userModule,
        home: homeModule,
        story: storyModule,
        summits: summitModule,
        events: eventModule,
        sponsors: sponsorModule,
        games: gamesModule,
        platforms: platformsModule,
        regions: regionsModule,
        tournaments: tournamentsModule,
        contact: contactModule,
        sponsorsCategory: sponsorsCategoryModule,
        giveaways: giveawayModule,
    }
});
