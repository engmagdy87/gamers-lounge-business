/*!

 =========================================================
 * Vue Light Bootstrap Dashboard - v2.0.0 (Bootstrap 4)
 =========================================================

 * Product Page: http://www.creative-tim.com/product/light-bootstrap-dashboard
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "./store/index";

// LightBootstrap plugin
import LightBootstrap from "./light-bootstrap-main";

// router setup
import routes from "./routes/routes";

import "./assets/sass/website/fonts.scss";
import "./registerServiceWorker";
import VuePellEditor from "vue-pell-editor";

Vue.use(VuePellEditor);
// plugin setup
Vue.use(VueRouter);
Vue.use(LightBootstrap);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  mode: "history",
  linkActiveClass: "nav-item active",
  scrollBehavior: to => {
    document.getElementById("app-wrapper").scroll(0, 0);
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
});
