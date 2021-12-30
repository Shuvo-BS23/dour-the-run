import { createRouter, createWebHistory } from "vue-router";
import SignInForm from "../components/SignInForm.vue";
import SignUpForm from "../components/SignUpForm.vue";
import About from "../views/About.vue";
import Dashboard from "../views/Dashboard.vue";
import Events from "../views/Events.vue";
import Home from "../views/Home.vue";
import SingleEvent from "../views/SingleEvent.vue";
import Store from "../views/Store.vue";
import GetCode from "../components/GetCode.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        name: "SignInForm",
        component: SignInForm,
      },

      {
        path: "/",
        name: "SignUpForm",
        component: SignUpForm,
      },

      {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
      },
    ],
  },

  {
    path: "/get-strava-code",
    name: "GetCode",
    component: GetCode,
  },

  {
    path: "/events",
    name: "Events",
    component: Events,
  },

  {
    path: "/store",
    name: "Store",
    component: Store,
  },

  {
    path: "/about",
    name: "About",
    component: About,
  },

  {
    path: "/singleevent",
    name: "SingleEvent",
    component: SingleEvent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
