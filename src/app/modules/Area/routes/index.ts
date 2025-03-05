import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "area/:id?",
    name: "Area",
    component: () => import("@/app/modules/Area/views/index.vue"),
  },
];

export default routes;
