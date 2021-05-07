import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Welcome from "../views/Welcome.vue"
import Pricing from "../views/Pricing.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/landingPage",
    name: "LandingPage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },

  {
    path: "/pricing",
    name: "Pricing",
    component: Pricing,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
