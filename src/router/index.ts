import { createRouter, createWebHistory } from "vue-router";
import About from "../components/About.vue";
import HelloWorld from "../components/HelloWorld.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HelloWorld,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
