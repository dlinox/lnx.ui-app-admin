import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/app/routes";
import LnxIcon from "@/core/components/LnxIcon.vue";
import permission from "@/core/directives/permissions";
//directive permissions
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);
app.directive("permission", permission);
app.component("LnxIcon", LnxIcon);
app.use(pinia);
app.use(router);
app.use(Vue3Toastify, {
  position: "bottom-right",
  autoClose: 2500,
  theme: "colored",
} as ToastContainerOptions);
app.mount("#app");
