import axios from "axios";
import "notyf/notyf.min.css";
import PrimeVue from "primevue/config";
import { createApp } from "vue";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
const components = import.meta.globEager("./components/*.vue");

const vueApp = createApp(App);

Object.entries(components).forEach(([path, definition]) => {
  console.log(path);
  const componentName = path
    ?.split("/")
    ?.pop()
    ?.replace(/\.\w+$/, "") as string;
  vueApp.component(componentName, definition.default);
});

vueApp.use(VueAxios, axios).use(router).use(PrimeVue).mount("#app");
