import Vue from "vue";
import Vuex from "vuex";

import app from "./modules/app";
import user from "./modules/user";
import jobs from "./modules/jobs";
import departments from "./modules/departments";
import services from "./modules/services";
import works from "./modules/works";
import sponsors from "./modules/sponsors";
import about from "./modules/about";
import contact from "./modules/contact";
import team from "./modules/team";
import home from "./modules/home";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    user,
    jobs,
    departments,
    services,
    works,
    sponsors,
    about,
    contact,
    team,
    home
  }
});
