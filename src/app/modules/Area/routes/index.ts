import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "area",
    name: "Area",
    component: () => import("@/app/modules/Area/views/index.vue"),
  },
];

export default routes;
