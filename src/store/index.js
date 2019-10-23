import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import news from "./modules/news";
import menu from "./modules/menu";
import settings from "./modules/settings";

export default new Vuex.Store({
  modules: {
    news,
    menu,
    settings
  }
});
