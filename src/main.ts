import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/app/routes";
import LnxIcon from "@/core/components/LnxIcon.vue";
import NotAuthorization from "@/core/components/NotAuthorization.vue";
import permission from "@/core/directives/permissions";
import upperCase from "@/core/directives/upperCase";

import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);
app.directive("permission", permission);
app.directive("upper-case", upperCase);
app.component("LnxIcon", LnxIcon);
app.component("AppNotAuthorization", NotAuthorization);
app.use(pinia);
app.use(router);
app.use(Vue3Toastify, {
  position: "bottom-right",
  autoClose: 2500,
  theme: "colored",
} as ToastContainerOptions);
app.mount("#app");
