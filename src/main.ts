import axios from 'axios'
import "primeflex/primeflex.css"
import "primeicons/primeicons.css"
import Button from "primevue/button"
import Card from "primevue/card"
import PrimeVue from 'primevue/config'
// import Image from 'primevue/image'
import InputText from "primevue/inputtext"
import Menubar from 'primevue/menubar'
import "primevue/resources/primevue.min.css"
import "primevue/resources/themes/mdc-dark-indigo/theme.css"
import TabPanel from "primevue/tabpanel"
import TabView from "primevue/tabview"
// import "primevue/resources/themes/mdc-light-indigo/theme.css"
import { createApp } from 'vue'
import VueAxios from 'vue-axios'
import App from './App.vue'
import "./index.css"
import router from './router'

const app = createApp(App)

app.use(VueAxios, axios)
.use(router)
.use(PrimeVue)
.mount("#app");


app.component("Menubar", Menubar);
app.component("InputText", InputText);
app.component("Button", Button);
app.component("Card", Card);
app.component("TabView", TabView);
app.component("TabPanel", TabPanel);
// app.component("Image", Image)
