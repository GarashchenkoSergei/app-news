import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/main",
    component: () => import("../components/main.vue")
  },
  {
    path: "/settings",
    component: () => import("../components/settings.vue")
  },
  {
    path: "/help",
    component: () => import("../components/help.vue")
  },
  {
    path: "/about",
    component: () => import("../components/about.vue")
  },
  {
    path: "/main/article",
    component: () => import("../components/mainArticle.vue"),
    props: true
  }
];

export default new Router({
  routes
});
