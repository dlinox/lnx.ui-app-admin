import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "price",
    name: "Price",
    component: () => import("@/app/modules/Price/views/index.vue"),
  },
];

export default routes;
