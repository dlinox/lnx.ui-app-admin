import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/app/routes";
import LnxIcon from "@/core/components/LnxIcon.vue";

import { createPinia } from "pinia";
const pinia = createPinia();
const app = createApp(App);
app.component("LnxIcon", LnxIcon);
app.use(pinia);
app.use(router);
app.mount("#app");
