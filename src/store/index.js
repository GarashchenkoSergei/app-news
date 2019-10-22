import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import news from "./modules/news";
import menu from "./modules/menu";

export default new Vuex.Store({
  modules: {
    news,
    menu
  }
});
